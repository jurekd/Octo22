var beginCourse = function () {
    VM.logEvent(0, 0, 'course_started', 'self');
    window.location = "?page=moduleApp";
};

var beginSurvey = function () {
     VM.logEvent(0, 0, 'survey_started', 'self');
     window.location = "?page=survey";
};