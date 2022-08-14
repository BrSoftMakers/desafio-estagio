<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;

class GenController extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'gen:controller {table}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a Controller by table';
    private $genitalia;




    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $table = $this->argument('table');
        
        if ($this->tableDontExist($table)) {
            return $this->warn('Sorry, table not found.');
        }

        $this->genitalia = new Genitalia($table);

        return $this->createContoller();
    }

    private function createContoller(){
        try{

            if($this->genitalia->controllerExists()){
                if ($this->confirm('Esse controlador já existe. Deseja sobrescrevê-lo?')) {
                    $this->genitalia->createController();
                    $this->info("Controller created.");
                    return true;
                }
            }else{
                $this->genitalia->createController();
                $this->info("Controller created.");
                return true;
            }
            

        }catch(Exception $e){
            $this->error('Something went wrong!' . ' ' . $e);
        }
    }

    protected function tableDontExist($table)
    {
        return !\Illuminate\Support\Facades\Schema::hasTable($table);
    }


}
