<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function users(){
        return response()->json([
            'status'    => true,
            'message'   => "Users Data Success",
            'data'      => User::all(),
        ],200);
    }
    public function registration(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'user_name'     => 'required|min:3',
            'email'         => 'required|email|unique:users',
            'password'      => 'required|min:6|max:16',
            'c_password'    => 'required|same:password'
        ]);

        if ($validate->fails()){
            return response()->json([
                'status'    => false,
                'message'   => "Validation Failed",
                'data'      => $validate->errors(),
            ],401);
        }

        try {
            $user = User::create([
                'user_name'     => $request->input('user_name'),
                'email'         => $request->input('email'),
                'password'      => Hash::make($request->input('password')),
            ]);
            $_token = $user->createToken('SantramToken')->plainTextToken;

            return response()->json([
                'status'    => true,
                'message'   => "Registration Success",
                '_token'    => $_token,
                'data'      => $user,
            ],201);

        }catch (\Exception $exception){
            return response()->json([
                'status'    => false,
                'message'   => "Registration Failed",
                'data'      => $exception->getMessage(),
            ],401);
        }
    }

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'email'     => 'required|email',
            'password'  => 'required|min:6|max:16',
        ]);

        if ($validate->fails()){
            return response()->json([
                'status'    => false,
                'message'   => "Validation Failed",
                'data'      => $validate->errors(),
            ],401);
        }

        $auth = Auth::attempt([
            'email'     => $request->input('email') ,
            'password'  => $request->input('password'),
        ]);

        if ($auth){
            $user = Auth::user();
            $_token = $user->createToken('SantramToken')->plainTextToken;

            return response()->json([
                'status'    => true,
                'message'   => "Login Success",
                '_token'    => $_token,
                'data'      => $user,
            ],201);
        }else{
            return response()->json([
                'status'    => false,
                'message'   => "Invalid Credentials",
            ],401);
        }
    }
}
