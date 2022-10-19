<?php
namespace App\Console\Commands;

use Exception;

class Genitalia{

    private $table;
    private $modelName;
    private $modelVarName;
    private $columns;
    private $routeName;
    private $routesPath;
    private $controllerName;
    private $pagesPath;
    private $pageModelPath;
    private $webPath;

    private $templatesPath;
    private $controllerPathFile;
    private $modelPathFile;
    private $exportPathFile;

    public function __construct($table){

        if ($this->tableDontExist($table)) {
            throw new Exception('Sorry, table not found.');
        }

        $this->table = $table;
        $this->columns = $this->getColumns();
        $this->routeName = StringHelper::routeName($this->table);
        $this->modelName = StringHelper::pascalCase(rtrim($this->table, "s"));
        $this->modelVarName = lcfirst($this->modelName);
        $this->controllerName = $this->modelName . 'Controller';
        $this->routesPath = base_path('routes');
        $this->webPath = $this->routesPath . '/web.php';

        $this->templatesPath = app_path('Console/Commands/templates/');
        $this->pagesPath = resource_path('js/Pages/');
        $this->pageModelPath = $this->pagesPath . $this->modelName . "/";

        $this->controllerPathFile = app_path('Http/Controllers/' . $this->controllerName . '.php');
        $this->modelPathFile = app_path('Models/' . $this->modelName . '.php');

        $this->createDirectory(app_path("Exports"));
        $this->exportPathFile = app_path('Exports/' . $this->modelName . 'sExport.php');


        


    }

    public function controllerExists(){
        return file_exists($this->controllerPathFile);
    }

    public function modelExists(){
        return file_exists($this->modelPathFile);
    }

    public function viewsExists(){
        return file_exists($this->pageModelPath);
    }

    public function createModel()
    {
        
        $modelTemplate = $this->getTemplate('modelTemplate.txt');

        $columnsArrrayString = "'" . implode("','", $this->columns) . "'";

        $relations = $this->createRelations($this->columns);

        $model = str_replace(
            ["%modelName%", "%columns%","%relations%"],
            [$this->modelName, $columnsArrrayString,$relations],
            $modelTemplate
        );


        try {
            file_put_contents($this->modelPathFile, $model);
        } catch (Exception $e) {
            throw new Exception($e);
        }
    }

    public function createController(){

        $controllerTemplate = $this->getTemplate('controllerTemplate.txt');

        $relationsFlag = false;
        
        $paginatorFields = "'id' => $" . $this->modelVarName . "->id," . "\n";
        $relationsList = '';
        $relationsVars = '';
        $usesModelController = '';
        $optionalShowLoad='';
        $loads='';
        $validates = '';
        $searches='';
        $firstIteration = true;

        foreach ($this->columns as $c) {

            $label = $this->getLabel($c);

            if ($this->isForeignKey($c)) {

                $modelRelationName = $this->getModelRelationName($c);
                $relationVarName = lcfirst($modelRelationName);

                $relationsList .= '$' . $relationVarName . 's = ' . $modelRelationName . "::all();\n";

                $relationsVars .= "'" . $relationVarName . "s'" . ' => ' . '$' . $relationVarName . "s,\n";

                $usesModelController .= 'use App\\Models\\' . $modelRelationName . ";\n";

                $paginatorFields .= '"' . $relationVarName . '"' . ' => $' . $this->modelVarName . '->' . $relationVarName . ',' . "\n\t";
                $loads .= "'".$relationVarName."',";

            }else{
                $paginatorFields .= '"' . $c . '"' . ' => $' . $this->modelVarName . '->' . $c . ',' . "\n\t";

            }
            
            if($relationsFlag){
                $optionalShowLoad = '->load(['.$loads.'])';
            }

            if($firstIteration){
                $searches .= '$query->where("'.$c.'","ILIKE","%".$term."%")'. "\n\t";
                $firstIteration = false;
            }
            
            $searches .= '->orWhere("'.$c.'","ILIKE","%".$term."%")'. "\n\t";
            $validates .= "'".$c."' => 'required',\n";
        }

        try {

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
                    $this->modelName,
                    $this->modelVarName,
                    $paginatorFields,
                    $relationsList,
                    $relationsVars,
                    $usesModelController,
                    $optionalShowLoad,
                    $validates,
                    $this->routeName,
                    $searches
                ],
                $controllerTemplate
            );

            file_put_contents($this->controllerPathFile, $controller);

            $this->createExport();
        }catch (Exception $e) {
            throw new Exception($e);
        }

    }
    
    private function getTemplate($name){
        return file_get_contents($this->templatesPath . $name);
    }

    private function getVuePathFile($name){
        return $this->pageModelPath . $name.'.vue';
    }

    public function createViews(){

        $_inputTemplate = $this->getTemplate('_inputTemplate.txt');
        $_selectTemplate = $this->getTemplate('_selectTemplate.txt');
        $createViewTemplate = $this->getTemplate('createViewTemplate.txt');
        $updateViewTemplate = $this->getTemplate('updateViewTemplate.txt');
        $_tHeadIndexTemplate = $this->getTemplate('_tHeadIndexTemplate.txt');
        $_tBodyIndexTemplate = $this->getTemplate('_tBodyIndexTemplate.txt');
        $indexViewTemplate = $this->getTemplate('indexViewTemplate.txt');
        $_showFieldsTemplate = $this->getTemplate('_showFieldsTemplate.txt');
        $showViewTemplate = $this->getTemplate('showViewTemplate.txt');

        $this->createDirectory($this->pageModelPath);

        $createViewPathFile = $this->getVuePathFile('Create');
        $updateViewPathFile = $this->getVuePathFile('Update');
        $indexViewPathFile = $this->getVuePathFile('Index');
        $showViewPathFile = $this->getVuePathFile('Show');

        //generate _formView and formFields
        $_formView = '';
        $_tHeadIndex = '';
        $_tBodyIndex = '';
        $_showFields = '';
        $formFieldsCreate = '';
        $formFieldsUpdate = '';
        $propsCreate = "";
        $propsUpdate = "'" . $this->modelVarName . "',";

        foreach ($this->columns as $key => $c) {

            $label = StringHelper::prettyName($c);

            if ($this->isForeignKey($c)) {

                $modelRelationName = $this->getModelRelationName($c);
                $relationVarName = lcfirst($modelRelationName);

                $propsCreate .= "'" . $relationVarName . "s',";
                $propsUpdate .= $propsCreate;

                
                $_formView .= str_replace(
                    [
                        "%label%", "%id%",
                        '%fieldName%', "%relationLowName%"
                    ],
                    [$label, $c, $c, $relationVarName],
                    $_selectTemplate
                ) . "\n";

                
                //tBody
                $_tBodyIndex .= str_replace(
                    ['%modelVarName%', '%fieldName%', '%label%'],
                    [$this->modelVarName, $relationVarName.".nome", $label],
                    $_tBodyIndexTemplate
                ) . "\n";    
                
                //_showFields
                $_showFields .= str_replace(
                    ["%label%", "%modelVarName%", '%fieldName%'],
                    [$label, $this->modelVarName, $relationVarName.".nome"],
                    $_showFieldsTemplate
                ) . "\n";
            } else {
                //_formView
                $_formView .= str_replace(
                    ["%label%", "%id%", '%fieldName%'],
                    [$label, $c, $c],
                    $_inputTemplate
                ) . "\n";

                //tBody
                $_tBodyIndex .= str_replace(
                    ['%modelVarName%', '%fieldName%', '%label%'],
                    [$this->modelVarName, $c, $label],
                    $_tBodyIndexTemplate
                ) . "\n";

                //_showFields
                $_showFields .= str_replace(
                    ["%label%", "%modelVarName%", '%fieldName%'],
                    [$label, $this->modelVarName, $c],
                    $_showFieldsTemplate
                ) . "\n";

            }

            //tHead
            $_tHeadIndex .= str_replace(
                ['%label%'],
                [$label],
                $_tHeadIndexTemplate
            ) . "\n";

            
            $formFieldsCreate .= $c . ':null,' . "\n";
            $formFieldsUpdate .= $c . ':this.$props.' . $this->modelVarName . '.' . $c . ',' . "\n";
        }

        $propsCreate .= "'errors'";
        $propsUpdate .= "'errors'";

        try {

            
            $createView = str_replace(
                [
                    "%modelName%",
                    "%_formView%",
                    '%formFields%',
                    '%routeName%',
                    '%props%',
                ],
                [
                    $this->modelName,
                    $_formView,
                    $formFieldsCreate,
                    $this->routeName,
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
                    $this->modelName, 
                    $_formView,
                    $formFieldsUpdate,
                    $this->routeName,
                    $this->modelVarName,
                    $propsUpdate
                ],
                $updateViewTemplate
            );

            $indexView = str_replace(
                ["%modelName%", "%modelVarName%", "%tHead%", '%tBody%', '%routeName%'],
                [$this->modelName, $this->modelVarName, $_tHeadIndex, $_tBodyIndex, $this->routeName],
                $indexViewTemplate
            );

            $showView = str_replace(
                ["%modelName%", "%_showFields%", "%modelVarName%","%routeName%"],
                [$this->modelName, $_showFields, $this->modelVarName,$this->routeName],
                $showViewTemplate
            );

            file_put_contents($createViewPathFile, $createView);
            file_put_contents($updateViewPathFile, $updateView);
            file_put_contents($indexViewPathFile, $indexView);
            file_put_contents($showViewPathFile, $showView);

        } catch (Exception $e) {
            throw new Exception($e);
        }
    }

    

    public function createCrud(){

        try{
            $this->createModel();
            $this->createController();
            $this->createViews();

            $this->createMenuItem();
            $this->createRoute();
        } catch (Exception $e) {
            throw new Exception($e);
        }

    }

    private function isForeignKey($field){
        $pattern = '/_id$/';
        return preg_match($pattern, $field);
    }

    private function getLabel($field){
        return StringHelper::prettyName($field);
    }

    private function getModelRelationName($field){

        return StringHelper::pascalCase(rtrim(str_replace("_id", "", $field), "s"));
    }


    protected function createRoute()
    {


        $use = 'use App\Http\Controllers\\' . $this->modelName . "Controller;";

        $routeExport = "Route::get('" . $this->routeName ."/export/". "' , 'App\Http\Controllers\\" . $this->modelName . "Controller@export')
        ->middleware(['auth:sanctum', 'verified'])->name("."'".$this->routeName.".export'"."); \n";

        $route = "Route::resource('" . $this->routeName . "', " . $this->modelName . "Controller::class)
        ->middleware(['auth:sanctum', 'verified']); \n";



        $web = file_get_contents($this->webPath);

        //$result = preg_replace("/(\/\/endUses)/", $use . "\n" . "$1", $web);
        if(!strpos($web,$use)){
            $pos = strpos($web,"<?php");
            $web = substr_replace($web, "\n".$use , $pos+strlen("<?php"), 0);    
        }
       
        if(!strpos($web,$routeExport)){
            $web .= "\n" . $routeExport;
        }

        if(!strpos($web,$route)){
            $web .= "\n" . $route;
        }

        file_put_contents($this->webPath, $web);
    }

    protected function createExport(){

       $exportTemplate = $this->getTemplate('exportTemplate.txt');

       $columns = $this->getColumns(true);

       $columnsArrrayString = "'" . implode("','", $columns) . "'";

       $searches='';
       $firstIteration = true;

       foreach ($this->columns as $c) {

        if($firstIteration){
            $searches .= '$query->where("'.$c.'","ILIKE","%".$term."%")'. "\n\t";
            $firstIteration = false;
        }
        
        $searches .= '->orWhere("'.$c.'","ILIKE","%".$term."%")'. "\n\t";

       }

       $export = str_replace(
        ["%modelName%", "%columns%","%searches%"],
        [$this->modelName, $columnsArrrayString,$searches],
        $exportTemplate
    );


    try {
        file_put_contents($this->exportPathFile, $export);
    } catch (Exception $e) {
        throw new Exception($e);
    }


    }
    protected function createMenuItem()
    {


        $layoutsPath = resource_path('js/Layouts/');
        $appLayoutPath = $layoutsPath . 'AppLayout.vue';

        $menu = "<jet-nav-link id='" . $this->routeName . "-item-menu'" . ' :href="route(' . "'" . $this->routeName . ".index'" . ')"' .
            ' :active="route().current(' . "'" . $this->routeName . ".index'" . ')">' . $this->modelName . 's' . '
        </jet-nav-link>';

        $appLayout = file_get_contents($appLayoutPath);
        if(!strpos($appLayout,$this->routeName . "-item-menu")){
            $result = preg_replace("/(<!--endMenu-->)/", "\n" . $menu . "\n\t" . "$1", $appLayout);

            file_put_contents($appLayoutPath, $result);
        }
    }



    protected function createRelations()
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

        foreach ($this->columns as $column) {
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

    protected function tableDontExist($table)
    {
        return !\Illuminate\Support\Facades\Schema::hasTable($table);
    }

    private function getColumns($all=false)
    {
        $columns = \Illuminate\Support\Facades\DB::select("SELECT COLUMN_NAME
        FROM information_schema.COLUMNS  
        WHERE TABLE_NAME = '$this->table';");

        $columns = array_map(function ($value) {
            return ((array)$value)["column_name"];
        }, $columns);

        if(!$all){
            $columns = array_diff($columns, ['id', 'created_at', 'updated_at']);
        }

        return $columns;
    }

    private function createDirectory($pathName)
    {
        if (!file_exists($pathName)) {
            mkdir($pathName, 0777, false);
        }
    }

}