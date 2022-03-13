// $(document).ready(function () {
    // var data = {};
    // $.when(VM.getHTTP('getSession', data)).then(function (data) {
        // //$Locals.students = JSON.parse(data).content;
        // $Locals.students = data.content;
        // VM.updateContent();
    // });
// });
$('#ankieta').scroll(function() {
  alert("OK");
  var y = $(this).scrollTop();
  if (y > 700) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
 });
var beginCourse = function () {
    VM.logEvent(0, 0, 'course_started', 'self');
    window.location = "?page=moduleApp";
};