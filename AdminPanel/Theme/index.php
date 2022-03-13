<!DOCTYPE html>
<html>
<?php
    $header = new headerHTML('Strona');
    $header->setKeys('framework, site');
    $header->setDescription('Testowa strona internetowa');
    $header->addStyle('Fonts');
    $header->addStyle('Framework');
    $header->addStyle('bootstrap');
    $header->addStyle('bootstrap-theme');
    $header->addStyle('Styles');
    $header->addStyle('anytime');
    $header->setGeneralScripts($ScriptArr);
    $header->setScripts($ScriptByPageArr);
    $header->displayHeader();
?>
    <body>
        <div id="load_screen"><div id="loading">loading document</div></div>
        <?php ini_set("display_errors", 1); echo '<div id="vm-App">';require_once(ROOT_PATH.'ViewModel/'.GetPageName().'.html'); ?><?php echo '</div>'; ?><script>
            //w3IncludeHTML();
            //w3DisplayData("vm-App", $Locals);
        </script>
    </body>
</html>