/*$(window).ready(function () {
    $(document).on("click", "#menu-toggle", function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });
});*/
var loginUser = function () {
    var data = {
        login: $('#name').val(),
        password: $('#password').val()
    };
    $.when(VM.postHTTP('loginUser', data)).then(function (data2) {
        window.location = "?page=courses";
        //$('#loginDialog').html('Zostałeś zalogowany. Zdarzenie zostało zapisane w logach<br /><button type="button" onclick="logout();">Wyloguj</button>');
    }, function () {
        alert('Błędne dane');
    });
};
var logout = function () {
    $.when(VM.getHTTP('logout')).then(function (data2) {
        window.location = "?page=home";
    });

};
