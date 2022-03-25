<?php

namespace App\Http\Controllers;


use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {
        try{
            $users = User::all();

            if(count($users) == 0) return ApiController::ApiError(404, 'User not found');

            return ApiController::JSON(202, 'All users', $users);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
        
    }

   
    public function store(Request $request)
    {
        try{
            try{
                $request->validate([
                    'name' => 'required',
                    'email' => 'required|unique:users,email',
                    'password' => 'required',
                ]);
            }catch(\Throwable $error){
                return ApiController::ApiError(400, 'Field Required', $error->getMessage());
            }
            $data = $request->all();
            
            $newUser = User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
            ]);

            return ApiController::JSON(201, 'New user', $newUser);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
    }

   
    public function show($id)
    {
        try{
            $user = User::select('id')
                ->where('id', $id)
                ->first();

            if(!$user) return ApiController::ApiError(404, 'User not found');

            return ApiController::JSON(202, 'User found', $user);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
        
        
    }

    
    
    public function update(Request $request, $id)
    {
        try{
            $data = $request->all();

            $user = User::select('id')
                ->where('id', $id)
                ->first();

            if(!$user) return ApiController::ApiError(404, 'User not found');
            
            $user->update($data);

            return ApiController::JSON(202, 'User updated', $user);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
    }

    public function destroy($id)
    {
        try{
            $user = User::select('id')
                ->where('id', $id)
                ->first();

            if(!$user) return ApiController::ApiError(404, 'User not found');

            $user->delete();

            return ApiController::JSON(202, 'User deleted', $user);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        }
    }
}
