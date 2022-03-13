$(document).ready(function () {
    $.when(VM.getHTTP('getModules', 1)).then(function (data) {
        $Locals.data = {};
        //console.log(JSON.parse(data).content[0]);
        //$Locals.data['module-name'] = JSON.parse(data).content[0];
        $Locals.data['module-name'] = data.content[0];
        VM.updateContent($Locals.data);
    });
});

var beginModule = function () {
    VM.logEvent(0, 0, 'module_started', 'self');
    window.location = "?page=moduleApp";
}