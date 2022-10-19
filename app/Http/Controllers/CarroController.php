<?php

namespace App\Http\Controllers;

use App\Models\Carro;
use App\Exports\CarrosExport;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class CarroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $carros = Carro::when($request->term, function ($query, $term) {
            $query->Where("id", "ILIKE", "%" . $term . "%")
                ->orWhere("situacao", "ILIKE", "%" . $term . "%")
                ->orWhere("modelo", "ILIKE", "%" . $term . "%")
                ->orWhere("marca", "ILIKE", "%" . $term . "%");
        })->paginate(10)
            ->through(function ($carro) {
                return [
                    'id' => $carro->id,
                    "situacao" => $carro::getSituacaoByID($carro->situacao),
                    //"situacao" => $carro->situacao,
                    "modelo" => $carro->modelo,
                    "marca" => $carro->marca,

                ];
            });
        return Inertia::render('Carro/Index', [
            'carros' => $carros,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        $situacao = array(['id'=> 1,'descricao'=>'Disponível'],
                        ['id'=>2,'descricao'=>'Indisponível']);

        $situacao = array_unique($situacao, SORT_REGULAR);

        return Inertia::render('Carro/Create', [
            'situacao' => $situacao
        ]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'situacao' => 'required',
            'modelo' => 'required',
            'marca' => 'required',
        ]);

        Carro::create($request->all());
        return Redirect::route('carros.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function show(Carro $carro)
    {
        $situacao = $carro::getSituacaoByID($carro->situacao);
        return Inertia::render('Carro/Show', [
            'carro' => $carro,
            'situacao' => $situacao,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function edit(Carro $carro)
    {

        $situacao = array(['id'=> 1,'descricao'=>'Disponível'],
                        ['id'=>2,'descricao'=>'Indisponível']);

        $situacao = array_unique($situacao, SORT_REGULAR);

        return Inertia::render(
            'Carro/Update',
            [
                'carro' => $carro,
                'situacao' => $situacao
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Carro $carro)
    {

        $carro->update($request->all());
        return Redirect::route('carros.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Carro  $carro
     * @return \Illuminate\Http\Response
     */
    public function destroy(Carro $carro)
    {
        $carro->delete();
        return Redirect::route('carros.index');
    }

    public function export(Request $request)
    {
        return (new CarrosExport($request->term))->download('carros.xlsx');
    }
}
