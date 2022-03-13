<!DOCTYPE html>
<html>
<?php
    $header = new headerHTML('Akademia kodowania');
    $header->setKeys('framework, site');
    $header->setDescription('Akademia kodowania - Kurs Python');
    $header->addStyle('Fonts');
    $header->addStyle('Framework');
    $header->addStyle('bootstrap');
    $header->addStyle('bootstrap-theme');
    $header->addStyle('Styles');
    $header->addStyle('Preloader');
    $header->setGeneralScripts($ScriptArr);
    $header->setScripts($ScriptByPageArr);
    $header->displayHeader();
?>

    <body>
    <script src="/AplikacjeJavaScriptOffline/Puzzle/Puzzle.js"></script>
    <script type="text/javascript" src="/AplikacjeJavaScriptOffline/Crossword/js/index.js"></script>
        <!-- <div id="loaderBody">
            <div id="loader"> </div>
        </div> -->
        <?php ini_set("display_errors", 1); echo '<div id="vm-App">';require_once(ROOT_PATH.'ViewModel/'.GetPageName().'.html'); ?><?php echo '</div>'; ?>
    <script src="/JavaScript/Scripts/bundle.js"></script>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js'></script>
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
    <script src="JavaScript/Libraries/skulpt.min.js" type="text/javascript"></script>
    <script src="JavaScript/Libraries/skulpt-stdlib.js" type="text/javascript"></script>
    
    <!-- Aplikacje -->
    <script src="/AplikacjeJavaScriptOffline/Zdrapka/Zdrapka.js"></script>
    <script src="/AplikacjeJavaScriptOffline/FillInBlank/js/index.js"></script>
    <script src="/AplikacjeJavaScriptOffline/word-search-game-master/js/utility.min.js"></script>
    <script src="/AplikacjeJavaScriptOffline/word-search-game-master/js/wordsearch.js"></script>
    <script src="/AplikacjeJavaScriptOffline/WordUnscramble/js/index.js"></script>
    </body>
</html>