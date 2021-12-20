<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Cars;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CarsController extends Controller {
    public function index(Request $request){

        $cars = Cars::get()->toJson(JSON_PRETTY_PRINT);
        return response($cars, 200);
      
    }

    public function create(Request $request){
        
        $cars = new Cars();
        $cars->modelo = $request->modelo;
        $cars->marca = $request->marca;
        $cars->tipo = $request->tipo;
        $cars->status = $request->status;
        $cars->save();

        return response()->json([
            "message" => "car record created"
        ], 201);
    }

    public function update(Request $request, $id){
        if(Cars::where('id', $id)->exists()){
            $cars = Cars::find($id);

            $cars->modelo = is_null($request->modelo)?  $cars->modelo: $request->modelo;
            $cars->marca = is_null($request->marca)?  $cars->marca: $request->marca;
            $cars->tipo = is_null($request->tipo)?  $cars->tipo: $request->tipo;
            $cars->status = is_null($request->status)?  $cars->status: $request->status;
            $cars->save();
            
            return response()->json([
                'message' => 'ok',
            ], 200);
        }else{
            return response()->json([
                'message' => 'not update',
            ], 404);
        }
    }
    public function delete(Request $request, $id){
        if(Cars::where('id', $id)){
            $cars = Cars::find($id);
            $cars->delete();

            return response()->json([
                'message' => 'ok'
            ], 200);
        }else{
            return response()->json([
                'message' => 'not delele'
            ], 404);
        }
    }
}