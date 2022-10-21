<?php


namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    use HasFactory;

    const DISPONIVEL = 1;
    const INDISPONIVEL = 2;

    private static $_situacao = [
        self::DISPONIVEL=> 'Disponível',
        self::INDISPONIVEL=> 'Indisponível',
    ];
    public static function getSituacoes()
    {
        return self::$_situacao;
    }
    public static function getSituacaoByID($id)
    {
        try {
            if (!empty($id)) {
                return self::$_situacao[$id];
            }
        } catch (Exception $e) {
            return self::DISPONIVEL;
        }
    }

    protected $fillable = ['id','situacao','modelo','marca'];


    

}
