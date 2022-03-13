<?php
    ini_set("display_errors", 1);
    define('Main', 'Main');
    define('DefaultL', 'PL');
    define('PL', 'PL');
    define('EN', 'EN');
    define('FR', 'FR');
    define('DE', 'DE');
    define('IT', 'IT');
    session_cache_limiter('none');
    session_start();
    if(isset($_COOKIE['Language']) === FALSE){
        setcookie('Language', DefaultL, time() + 315360000);
    }
    // class WebSiteMessage{
    //     static private $Content;
    //     static private $Waiting;

    //     function __construct(){
    //         $this->Content = '';
    //         $this->Waiting = FALSE;
    //     }

    //     public function Set($content, $type='info'){
    //         if($type == 'info'){
    //             $this->Content = '<div id="WebSiteInfoMessage">'.$content.'</div>';
    //             $this->Waiting = TRUE;
    //             return TRUE;
    //         } else if($type == 'question'){
    //             $this->Content = '<div id="WebSiteQuestionMessage">'.$content.'</div>';
    //             $this->Waiting = TRUE;
    //             return TRUE;
    //         } else if($type == 'error'){
    //             $this->Content = '<div id="WebSiteErrorMessage">'.$content.'</div>';
    //             $this->Waiting = TRUE;
    //             return TRUE;
    //         } else {
    //             return FALSE;
    //         }
    //     }

    //     public function Put(){
    //         if($this->Waiting !== FALSE){
    //             echo $this->Content;
    //             $this->Waiting = FALSE;
    //             return TRUE;
    //         } else {
    //             return FALSE;
    //         }
    //     }
    // }
    // $GLOBALS['WSM'] = new WebSiteMessage();
?>