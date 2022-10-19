<?php

namespace App\Exports;

use App\Models\Carro;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CarrosExport implements FromCollection, WithHeadings
{

    use Exportable;

    private $term;

    public function __construct($term)
    {
        $this->term = $term;
    }

    public function headings(): array
    {
        return ['updated_by','updated_at','id','situacao','created_at','created_by','modelo','marca'];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Carro::when($this->term, function($query, $term){
            $query->where("updated_by","ILIKE","%".$term."%")
	->orWhere("updated_by","ILIKE","%".$term."%")
	->orWhere("situacao","ILIKE","%".$term."%")
	->orWhere("created_by","ILIKE","%".$term."%")
	->orWhere("modelo","ILIKE","%".$term."%")
	->orWhere("marca","ILIKE","%".$term."%")
	;
        })->get();
    }
}
