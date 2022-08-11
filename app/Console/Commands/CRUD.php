<?php

namespace App\Console\Commands;

use Exception;
use Illuminate\Console\Command;

class CRUD extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:crud {table}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a CRUD by table';





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
        return $this->createCrud($table);
    }

    protected function tableDontExist($table)
    {
        return !\Illuminate\Support\Facades\Schema::hasTable($table);
    }

    private function getColumns($table)
    {
        $columns = \Illuminate\Support\Facades\DB::select("SELECT COLUMN_NAME
        FROM information_schema.COLUMNS  
        WHERE TABLE_NAME = '$table';");

        $columns = array_map(function ($value) {
            return ((array)$value)["column_name"];
        }, $columns);

        $columns = array_diff($columns, ['id', 'created_at', 'updated_at']);

        return $columns;
    }

    protected function createDirectory($pathName)
    {
        if (!file_exists($pathName)) {
            mkdir($pathName, 0777, false);
        }
    }



    protected function createMenuItem($table)
    {


        $routeName = StringHelper::routeName($table);
        $modelName = StringHelper::pascalCase(rtrim($table, "s"));
        $layoutsPath = resource_path('js/Layouts/');
        $appLayoutPath = $layoutsPath . 'AppLayout.vue';

        $menu = "<jet-nav-link id='" . $routeName . "-item-menu'" . ' :href="route(' . "'" . $routeName . ".index'" . ')"' .
            ' :active="route().current(' . "'" . $routeName . ".index'" . ')">' . $modelName . 's' . '
        </jet-nav-link>';

        $appLayout = file_get_contents($appLayoutPath);
        if(!strpos($appLayout,$routeName . "-item-menu")){
            $result = preg_replace("/(<!--endMenu-->)/", "\n" . $menu . "\n\t" . "$1", $appLayout);

            file_put_contents($appLayoutPath, $result);
        }
    }

    protected function createRoute($table)
    {

        $routeName = StringHelper::routeName($table);
        $modelName = StringHelper::pascalCase(rtrim($table, "s"));

        $routesPath = base_path('routes');
        $webPath = $routesPath . '/web.php';

        $use = 'use App\Http\Controllers\\' . $modelName . "Controller;";
        $route = "Route::resource('" . $routeName . "', " . $modelName . "Controller::class)
        ->middleware(['auth:sanctum', 'verified']); \n";

        $web = file_get_contents($webPath);

        //$result = preg_replace("/(\/\/endUses)/", $use . "\n" . "$1", $web);
        if(!strpos($web,$use)){
            $pos = strpos($web,"<?php");
            $web = substr_replace($web, "\n".$use , $pos+strlen("<?php"), 0);    
        }
       
        if(!strpos($web,$route)){
            $web .= "\n" . $route;
        }

        file_put_contents($webPath, $web);
    }

    protected function createRelations($columns)
    {

        $belongsToTemplate = <<<END
            \n
            public function %modelLowName%()
            {
                return \$this->belongsTo(%modelName%::class, '%fk%');
            }
        \n
        END;

        $pattern = '/_id$/';
        $relations = '';

        foreach ($columns as $column) {
            if (preg_match($pattern, $column)) {

                
                $modelName = StringHelper::pascalCase(rtrim(str_replace("_id", "", $column), "s"));
                $modelLowName = lcfirst($modelName);

                $relations .= str_replace(
                    ["%modelLowName%", "%modelName%",'%fk%'],
                    [$modelLowName, $modelName,$column],
                    $belongsToTemplate
                );
            }
        }

        return $relations;
    }
    protected function createModel($table)
    {
        $columns = $this->getColumns($table);

        $modelName = StringHelper::pascalCase(rtrim($table, "s"));
        $templatesPath = app_path('Console/Commands/templates/');
        $modelTemplate = file_get_contents($templatesPath . 'modelTemplate.txt');

        $columnsArrrayString = "'" . implode("','", $columns) . "'";

        $modelPathFile = app_path('Models/' . $modelName . '.php');

        $model = str_replace(
            ["%modelName%", "%columns%"],
            [$modelName, $columnsArrrayString],
            $modelTemplate
        );

        $relations = $this->createRelations($columns);

        $model = str_replace("%relations%", $relations, $model);


        try {
            file_put_contents($modelPathFile, $model);
        } catch (Exception $e) {
            $this->error('Something went wrong!' . ' ' . $e);
        }
    }

    protected function createCrud($table)
    {

        $columns = $this->getColumns($table);
        $templatesPath = app_path('Console/Commands/templates/');
        $controllerTemplate = file_get_contents($templatesPath . 'controllerTemplate.txt');
        $_inputTemplate = file_get_contents($templatesPath . '_inputTemplate.txt');
        $_selectTemplate = file_get_contents($templatesPath . '_selectTemplate.txt');
        $createViewTemplate = file_get_contents($templatesPath . 'createViewTemplate.txt');
        $updateViewTemplate = file_get_contents($templatesPath . 'updateViewTemplate.txt');
        $_tHeadIndexTemplate = file_get_contents($templatesPath . '_tHeadIndexTemplate.txt');
        $_tBodyIndexTemplate = file_get_contents($templatesPath . '_tBodyIndexTemplate.txt');
        $indexViewTemplate = file_get_contents($templatesPath . 'indexViewTemplate.txt');
        $_showFieldsTemplate = file_get_contents($templatesPath . '_showFieldsTemplate.txt');
        $showViewTemplate = file_get_contents($templatesPath . 'showViewTemplate.txt');

        $modelVarName = StringHelper::camelCase(rtrim($table, "s"));
        $modelName = StringHelper::pascalCase(rtrim($table, "s"));
        $routeName = StringHelper::routeName($table);

        $controllerName = $modelName . 'Controller';

        $controllerPathFile = app_path('Http/Controllers/' . $controllerName . '.php');
        $pagesPath = resource_path('js/Pages/');
        $pageModelPath = $pagesPath . $modelName . "/";


        $this->createDirectory($pageModelPath);



        $createViewPathFile = $pageModelPath . 'Create.vue';
        $updateViewPathFile = $pageModelPath . 'Update.vue';
        $indexViewPathFile = $pageModelPath . 'Index.vue';
        $showViewPathFile = $pageModelPath . 'Show.vue';



        //generate create


        //generate _formView and formFields
        $relationsFlag = false;
        $_formView = '';
        $_tHeadIndex = '';
        $_tBodyIndex = '';
        $_showFields = '';
        $paginatorFields = "'id' => $" . $modelVarName . "->id," . "\n";
        $formFieldsCreate = '';
        $formFieldsUpdate = '';
        $propsCreate = "";
        $propsUpdate = "'" . $modelVarName . "',";
        $pattern = '/_id$/';
        $relationsList = '';
        $relationsVars = '';
        $usesModelController = '';
        $optionalShowLoad='';
        $loads='';
        $validates = '';
        $searches='';
        $firstIteration = true;
        foreach ($columns as $key => $c) {

            $label = StringHelper::prettyName($c);

            if (preg_match($pattern, $c)) {
                //_formView
                $relationsFlag = true;
                
                $modelRelationName = StringHelper::pascalCase(rtrim(str_replace("_id", "", $c), "s"));
                $relationLowName = lcfirst($modelRelationName);

                $propsCreate .= "'" . $relationLowName . "s',";
                $propsUpdate .= $propsCreate;

                $relationsList .= '$' . $relationLowName . 's = ' . $modelRelationName . "::all();\n";

                $relationsVars .= "'" . $relationLowName . "s'" . ' => ' . '$' . $relationLowName . "s,\n";

                $usesModelController .= 'use App\\Models\\' . $modelRelationName . ";\n";

                $_formView .= str_replace(
                    [
                        "%label%", "%id%",
                        '%fieldName%', "%relationLowName%"
                    ],
                    [$label, $c, $c, $relationLowName],
                    $_selectTemplate
                ) . "\n";

                $paginatorFields .= '"' . $relationLowName . '"' . ' => $' . $modelVarName . '->' . $relationLowName . ',' . "\n\t";
                $loads .= "'".$relationLowName."',";
                //tBody
                $_tBodyIndex .= str_replace(
                    ['%modelVarName%', '%fieldName%', '%label%'],
                    [$modelVarName, $relationLowName.".nome", $label],
                    $_tBodyIndexTemplate
                ) . "\n";    
                
                //_showFields
                $_showFields .= str_replace(
                    ["%label%", "%modelVarName%", '%fieldName%'],
                    [$label, $modelVarName, $relationLowName.".nome"],
                    $_showFieldsTemplate
                ) . "\n";
            } else {
                //_formView
                $_formView .= str_replace(
                    ["%label%", "%id%", '%fieldName%'],
                    [$label, $c, $c],
                    $_inputTemplate
                ) . "\n";

                $paginatorFields .= '"' . $c . '"' . ' => $' . $modelVarName . '->' . $c . ',' . "\n\t";

                //tBody
                $_tBodyIndex .= str_replace(
                    ['%modelVarName%', '%fieldName%', '%label%'],
                    [$modelVarName, $c, $label],
                    $_tBodyIndexTemplate
                ) . "\n";

                //_showFields
                $_showFields .= str_replace(
                    ["%label%", "%modelVarName%", '%fieldName%'],
                    [$label, $modelVarName, $c],
                    $_showFieldsTemplate
                ) . "\n";

            }


            if($relationsFlag){
                $optionalShowLoad = '->load(['.$loads.'])';
            }

            //tHead
            $_tHeadIndex .= str_replace(
                ['%label%'],
                [$label],
                $_tHeadIndexTemplate
            ) . "\n";

            

            
            if($firstIteration){
                $searches .= '$query->where("'.$c.'","ILIKE","%".$term."%")'. "\n\t";
                $firstIteration = false;
            }
            
            $searches .= '->orWhere("'.$c.'","ILIKE","%".$term."%")'. "\n\t";
            $formFieldsCreate .= $c . ':null,' . "\n";
            $formFieldsUpdate .= $c . ':this.$props.' . $modelVarName . '.' . $c . ',' . "\n";
            $validates .= "'".$c."' => 'required',\n"; 
        }

        $propsCreate .= "'errors'";
        $propsUpdate .= "'errors'";

        try {

            $this->createModel($table);

            $controller = str_replace(
                [
                    "%modelName%",
                    "%modelVarName%",
                    "%paginatorFields%",
                    '%relationsList%',
                    '%relationsVars%',
                    '%uses%',
                    '%optionalShowLoad%',
                    '%validates%',
                    '%routeName%',
                    '%searches%'
                ],
                [
                    $modelName,
                    $modelVarName,
                    $paginatorFields,
                    $relationsList,
                    $relationsVars,
                    $usesModelController,
                    $optionalShowLoad,
                    $validates,
                    $routeName,
                    $searches
                ],
                $controllerTemplate
            );

            $createView = str_replace(
                [
                    "%modelName%",
                    "%_formView%",
                    '%formFields%',
                    '%routeName%',
                    '%props%',
                ],
                [
                    $modelName,
                    $_formView,
                    $formFieldsCreate,
                    $routeName,
                    $propsCreate,
                ],
                $createViewTemplate
            );

            $updateView = str_replace(
                [
                    "%modelName%",
                    "%_formView%",
                    '%formFields%',
                    '%routeName%',
                    "%modelVarName%",
                    "%props%"
                ],
                [
                    $modelName, $_formView,
                    $formFieldsUpdate,
                    $routeName,
                    $modelVarName,
                    $propsUpdate
                ],
                $updateViewTemplate
            );

            $indexView = str_replace(
                ["%modelName%", "%modelVarName%", "%tHead%", '%tBody%', '%routeName%'],
                [$modelName, $modelVarName, $_tHeadIndex, $_tBodyIndex, $routeName],
                $indexViewTemplate
            );

            $showView = str_replace(
                ["%modelName%", "%_showFields%", "%modelVarName%","%routeName%"],
                [$modelName, $_showFields, $modelVarName,$routeName],
                $showViewTemplate
            );

            file_put_contents($controllerPathFile, $controller);
            file_put_contents($createViewPathFile, $createView);
            file_put_contents($updateViewPathFile, $updateView);
            file_put_contents($indexViewPathFile, $indexView);
            file_put_contents($showViewPathFile, $showView);

            $this->createMenuItem($table);
            $this->createRoute($table);

            $this->info("Model, Controller and Pages created.");
        } catch (Exception $e) {
            $this->error('Something went wrong!' . ' ' . $e);
        }
    }
}
