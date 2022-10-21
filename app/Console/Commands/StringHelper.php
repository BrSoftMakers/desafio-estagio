<?php

namespace App\Console\Commands;

class StringHelper{

    public static function pascalCase($value){
        return str_replace('_', '', ucwords($value, '_'));
    }

    public static function camelCase($value){
        return lcfirst(str_replace('_', '', ucwords($value, '_')));
    }

    public static function routeName($value){
        return lcfirst(str_replace('_', '-', $value));
    }

    public static function prettyName($value){
        return str_replace('_', ' ', ucwords($value, '_'));
    }
}