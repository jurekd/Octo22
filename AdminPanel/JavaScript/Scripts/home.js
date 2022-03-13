var loginUser = function () {
    var data = {
        login: $('#name').val(),
        password: $('#password').val()
    };
    $.when(VM.postHTTP('loginAdmin', data)).then(function (data2) {
        window.location = "?page=panel";
    }, function () {
        alert('Błędne dane');
    });
};