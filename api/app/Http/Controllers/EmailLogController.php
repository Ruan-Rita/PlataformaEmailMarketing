<?php

namespace App\Http\Controllers;

use App\Mail\EmailMarketing;
use App\Models\Client;
use App\Models\EmailLog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class EmailLogController extends Controller
{
 
    public function index()
    {
        try{
            $users = EmailLog::select(['description','c.email','email_log.created_at', 'email_log.template' ])
            ->leftJoin('client as c', 'c.id', 'email_log.client_id' )
            ->where('email_log.user_id', auth('sanctum')->user()->id)
            ->get();

            if(count($users) == 0) return ApiController::ApiError(404, 'Email log not found');

            return ApiController::JSON(202, 'Email log', $users);

        }catch(\Throwable $error){
            Log::error($error->getMessage());


            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
    }
   
    public function store(Request $request)
    {
        try{
            try{
                $request->validate([
                    'description' => 'required',
                    'emails' => 'required',
                    'template' => 'required',
                ]);
            }catch(\Throwable $error){
                return ApiController::ApiError(400, 'Field Required', $error->getMessage());
            }
            $data = $request->all();

            // array de emails
            foreach($data['emails'] as $email) {
                try{
                    DB::beginTransaction();
                    $newClient = Client::updateOrCreate(
                        [
                        'user_id' => auth('sanctum')->user()->id,
                        'email' => $email,
                        ],[]
                    );
                    Mail::to($email)->send(new EmailMarketing());
                    
                    EmailLog::create([
                        'template' => $data['template'],
                        'user_id' => auth('sanctum')->user()->id,
                        'client_id' => $newClient->id,
                        'description' => $data['description']
                    ]);
                    DB::commit();
                }catch(\Throwable $error){
                    Log::error($error->getMessage());
                    // return witch user has error
                    DB::rollBack();
                }
            }
            
            

            return ApiController::JSON(201, 'Emails enviados');

        }catch(\Throwable $error){
            Log::error($error->getMessage());
            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
    }

    
   
}
