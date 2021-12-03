<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Produto;

class ProdutosController extends Controller
{
    public function create(){
        return view('produto\create');
    }
    public function lista(Request $request){
        Produto::create([
            'nome' => $request -> nome,
            'modelo'=> $request -> modelo,
            'marca'=> $request -> marca,
            'tipo'=> $request -> tipo,
            'status'=> $request -> status,
        ]);
        return "Carro adicionado com sucesso!";
    }
    public function home(){
        return view('produto\home');
    }
}
