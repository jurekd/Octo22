$(document).ready(function () {
    var data = {
        'course': 1
    };
    $.when(VM.getHTTP('getTeacher', data)).then(function (data) {
        //$Locals.students = JSON.parse(data).content;
        $Locals.students = data.content;
        VM.updateContent();
    });
});