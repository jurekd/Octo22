$(document).ready(function () {
    $.when(VM.getHTTP('getCourses')).then(function (data) {
        //$Locals.data = {};
        //$Locals.course_name = JSON.parse(data).content[0];
        $Locals.course_name = data.content[0];
		$Locals.course_name2 = data.content[1];
        VM.updateContent();
    });
    var data = {
        'course': 1
    };
    $.when(VM.getHTTP('getProgress', data)).then(function (data) {
        //$Locals.progress = parseInt(JSON.parse(data).content.progress) * 100;
        $Locals.progress = parseInt(data.content.progress) * 100;
        VM.updateContent();
    });
});

var beginCourse = function () {
    VM.logEvent(0, 0, 'course_started', 'self');
    window.location = "?page=moduleApp";
};

var beginSurveyAsk = function () {
	if($Locals.basic==0 && $Locals.survey==0){
     //VM.logEvent(0, 0, 'survey_started', 'self');
     window.location = "?page=surveyAsk";
	}
	else{
		beginCourse();
	}
	
};