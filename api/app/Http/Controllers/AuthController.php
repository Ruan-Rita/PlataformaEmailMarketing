<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function Register(Request $request){
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
            
            $token = $newUser->createToken($newUser->name . $newUser->email)->plainTextToken;
            
            return ApiController::JSON(201, 'Registred', [
                'token' => $token,
                'username' => $newUser->name,
                'email' => $newUser->email
            ]);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        } 
    }

    public function Login(Request $request){
        try{
            try{
                $request->validate([
                    'email' => 'required',
                    'password' => 'required',
                ]);
            }catch(\Throwable $error){
                return ApiController::ApiError(400, 'Field Required', $error->getMessage());
            }
            $data = $request->all();
            
            $user = User::where([
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                ])
                ->first();

            if(!$user) ApiController::ApiError(400, 'Invalid credencials');
            
            $token = $user->createToken($user->name . $user->email)->plainTextToken;
            
            return ApiController::JSON(201, 'Registred', [
                'token' => $token,
                'username' => $user->name,
                'email' => $user->email
            ]);

        }catch(\Throwable $error){

            return ApiController::ApiError(500, 'Api Server Error', $error->getMessage());
        } 
    }
}
