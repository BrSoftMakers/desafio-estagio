<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;

class GenCrud extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'gen:crud {table}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create CRUD by table';
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

        return $this->createCrud();
    }

    private function createCrud(){
        try{

            if($this->genitalia->ViewsExists() || $this->genitalia->ControllerExists() || $this->genitalia->ModelExists()){
                if ($this->confirm('Algum elemento desse CRUD já existe e essa ação irá sobrescrever todos. Deseja fazer isso?')) {
                    $this->genitalia->createCrud();
                    $this->info("CRUD created.");
                    return true;
                }
            }else{
                $this->genitalia->createCrud();
                $this->info("CRUD created.");
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
