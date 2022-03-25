<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public static function JSON($status = 404, $message = '', $resource = []){
        
        $customResponse = [
            'message' => $message,
            'error' => false,
            'data' => $resource,
            'status' => $status
        ];

        $headers = [
            'Content-Type' => 'aplication/json'
        ];

        return response()->json($customResponse, $status, $headers);
    }

    public static function ApiError($status = 404, $message = '', $description = []){
        
        $customResponse = [
            'message' => $message,
            'error' => true,
            'data' => $description,
            'status' => $status
        ];

        $headers = [
            'Content-Type' => 'aplication/json'
        ];

        return response()->json($customResponse, $status, $headers);
    }
}
