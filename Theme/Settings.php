<?php
//////// Type page's scripts
global $ScriptArr;
$ScriptArr = array();
$ScriptArr = array('Libraries/jquery.min.js', 'Libraries/ViewModel.js', 'Libraries/W3Data.js');
global $ScriptByPageArr;
$ScriptByPageArr = array(
    'home' => array('Scripts/home.js'),
    'login' => array('Scripts/home.js'),
    'courses' => array('Scripts/courses.js'),
    'modules' => array('Scripts/modules.js'),
    // 'moduleApp' => array('Scripts/Applications.js', 'Scripts/moduleApp.js'),
    'teacher' => array('Scripts/teacher.js'),
	'survey' => array('Scripts/survey.js'),
	'surveyAsk' => array('Scripts/surveyAsk.js'),
);

//////// Type mod's pages
function VerifyPageContent($page){
    $array = array(
        'WebSite' => array('home', 'login', '404', 'quality', 'courses', 'modules', 'moduleApp', 'teacher','survey','surveyAsk')
    );
    if(isset($page)){
        foreach ($array as $key => $value){
            if(array_search($page, $value) !== FALSE){
                return true;
                break;
            } else {
                return false;
                break;
            }
        }
    } else {
        return false;
    }
}

function GetPageName(){
    $prefix = '';
    if(isset($_GET['page'])){
        $page = $_GET['page'];
        rim($page);
        if(VerifyPageContent($page)){
            return $prefix.$page;
        } else {
            return $prefix.'404';
        }
    } else {
        return $prefix.'home';
    }
}

function GetPageShortName(){
    if(isset($_GET['page'])){
        $page = $_GET['page'];
        rim($page);
        if(VerifyPageContent($page)){
            return $page;
        } else {
            return '404';
        }
    } else {
        return 'home';
    }
}

//////////////////////////////////////////////////////////////////////////

function AddScripts($array){
    for($i=0; $i<count($array); $i++){
        echo '<script type="text/javascript" src="JavaScript/'.$array[$i].'"></script>';
    }
}



function LoadScriptsByPage($array){
    if(is_array($array)){
        $currentPage = GetPageShortName();
        foreach ($array as $key => $value){
            if($key == $currentPage){
                for($i=0; $i<count($value); $i++){
                    echo '<script type="text/javascript" src="JavaScript/'.$value[$i].'"></script>';
                }
            }
        }
    }
}

function AddStyleURL($url){
    echo '<link rel="stylesheet" href="'.$url.'">';
}

function rim(&$string) {
    // ----- remove HTML TAGs -----
    $string = preg_replace ('/<[^>]*>/', ' ', $string);

    // ----- remove control characters -----
    $string = str_replace("\r", '', $string);
    $string = str_replace("\n", ' ', $string);
    $string = str_replace("\t", ' ', $string);
    $string = str_replace("/", '', $string);
    $string = str_replace("\\", '', $string);

    // ----- remove multiple spaces -----
    $string = trim(preg_replace('/ {2,}/', ' ', $string));
}

class headerHTML {
    private $Title;
    private $Keys;
    private $Description;
    private $Styles;
    private $Scripts;
    private $GeneralScripts;
    function __construct($title){
        $this->Title = $title;
        $this->Styles = array();
        $this->Scripts = array();
    }
    public function setKeys($keys){
        $this->Keys = $keys;
    }
    public function setDescription($description){
        $this->Description = $description;
    }
    public function addStyle($style){
        array_push($this->Styles, $style);
    }
    public function setScripts($array){
        if(is_array($array)){
            $this->Scripts = $array;
        }
    }
    public function setGeneralScripts($array){
        if(is_array($array)){
            $this->GeneralScripts = $array;
        }
    }
    public function displayHeader(){
        $string =
        "<head>
        <meta charset='utf-8' />
        <meta name='Author' content='lwardzala.com' />
        <meta name='description' content='$this->Description' />
        <meta name='Keywords' content='$this->Keys' />
        <link rel='Shortcut icon' href='favicon.ico' />
        <link rel='stylesheet' href='/AplikacjeJavaScriptOffline/Zdrapka/css/zdrapka.css' />
        <link href='/AplikacjeJavaScriptOffline/Crossword/css/style.css' rel='stylesheet' />
        <link rel='stylesheet' href='/AplikacjeJavaScriptOffline/FillInBlank/css/style.css' />
        <link rel='stylesheet' href='/AplikacjeJavaScriptOffline/word-search-game-master/css/wordsearch.css' />
        <link rel='stylesheet' href='/AplikacjeJavaScriptOffline/word-search-game-master/css/style.css' />
        <link rel='stylesheet' type='text/css' href='/AplikacjeJavaScriptOffline/WordMatching/style.css' />
        <link rel='stylesheet' href='/AplikacjeJavaScriptOffline/WordUnscramble/css/style.css' />
        
        <title>$this->Title</title>";
        for($i=0; $i<count($this->Styles); $i++){
            $val = $this->Styles[$i];
            $string = $string."<link rel='stylesheet' href='Theme/Styles/$val.css'>";
        }
        for($i=0; $i<count($this->GeneralScripts); $i++){
            $val = $this->GeneralScripts[$i];
            $string = $string."<script type='text/javascript' src='JavaScript/$val'></script>";
        }
        $currentPage = GetPageShortName();
        foreach ($this->Scripts as $key => $value){
            if($key == $currentPage){
                for($i=0; $i<count($value); $i++){
                    $val = $value[$i];
                    $string = $string."<script type='text/javascript' src='JavaScript/$val'></script>";
                }
            }
        }
        $string = $string."</head>";
        echo $string;
    }
}
?>