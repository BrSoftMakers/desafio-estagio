<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;

class GenViews extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'gen:views {table}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Views by table';
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

        return $this->createViews();
    }

    private function createViews(){
        try{

            if($this->genitalia->ViewsExists()){
                if ($this->confirm('Essas views já existem. Deseja sobrescrevê-las?')) {
                    $this->genitalia->createViews();
                    $this->info("Views created.");
                    return true;
                }
            }else{
                $this->genitalia->createViews();
                $this->info("Views created.");
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
