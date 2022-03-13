$(window).ready(function () {
    if($GET_vars['item'] && $GET_vars['id']){
        var data = {
            'item': $GET_vars['item'],
            'id': $GET_vars['id']
        };
        $.when(VM.getHTTP('generateForm', data)).then(function (data2) {
            $Locals.data = JSON.parse(data2).content;
            $Locals.list = false;
            $Locals.edit = true;
            $Locals.formMessage = '';
            VM.checkIf($Locals);
            generateForm(JSON.parse(data2).content);
        }, function () {
            //
        });
    } else if($GET_vars['item']) {
        var data = {
            'item': $GET_vars['item']
        };
        $.when(VM.getHTTP('getInstances', data)).then(function (data2) {
            $Locals.instances = JSON.parse(data2).content;
            $Locals.list = true;
            $Locals.edit = false;
            VM.updateContent();
        }, function () {
            //
        });
    }
});

function sendForm() {
    if($('#richtext').length > 0){
        document.getElementById('richtext').innerHTML = CKEDITOR.instances.richtext.getData();
    }
    $.ajax({
        url: _API_URL + '?action=addedit&page=' + $GET_vars["page"] + '&item=' + $GET_vars["item"] + '&id=' + $GET_vars["id"],
        type: 'post',
        //data: $('#adminForm').serialize() + '&img=' + encodeURIComponent($('#image').val()),
        data: new FormData($('#adminForm')[0]),
        processData: false,
        contentType: false,
        //data: $('#adminForm').serialize(),
        enctype: 'multipart/form-data',
        success: function () {
            if($GET_vars['id'] == 0){
                $('#adminForm')[0].reset();
                CKEDITOR.instances.richtext.setData('');
            }
            $Locals.formMessage = '<span style="color:green;">Wykonano polecenie</span>';
            VM.updateContent().then(function(){
                generateForm($Locals.data);
            });
        }
    });
}

function deleteItem(id){
    data = {
        "item": $GET_vars['item'],
        'id': $GET_vars['id']
    };
    $.when(VM.getHTTP('getInstances', data)).then(function (data2) {
        window.location = "?page=forms&item="+$GET_vars['item'];
    });
}

var editInstance = function(id){
    window.location = "?page=forms&item=" + $GET_vars['item'] + "&id=" + id;
};

var generateForm =  function(data){
    var result = '<form id="adminForm" method="POST" style="width:80%;" enctype="multipart/form-data">';
    console.log(data);
    data.forEach(function (instance) {
        if (instance.type == 'varchar') {
            result = result + instance.translation + ': <input style="width:100%;" type="text" name="' + instance.name + '" value="' + instance.value + '" />';
        } else if (instance.type == 'text') {
            result = result + instance.translation + '<textarea style="height:100px;width:100%;" name="'+instance.name+'">' + instance.value + '</textarea>';
        } else if(instance.type == 'boolean'){
            result = result + instance.translation + '<select name="'+instance.name+'">';
            if(instance.value == 1){
                result = result + '<option value="1" selected="selected">Tak</option>';
                result = result + '<option value="0">Nie</option>';
            } else {
                result = result + '<option value="0" selected="selected">Nie</option>';
                result = result + '<option value="1">Tak</option>';
            }
            result = result + '</select>';
        } else if(instance.type == 'richtext'){
            result = result + instance.translation + '<textarea id="richtext" style="width:100%;" name="'+instance.name+'">' + instance.value + '</textarea>';
        } else if(instance.type == 'datetime'){
            result = result + instance.translation + '<input style="width:100%;" name="'+instance.name+'" type="text" id="datetime1" value="'+instance.value+'" />';
        } else if(instance.type == 'file'){
            result = result + instance.translation + '<input id="image" type="file" name="'+instance.name+'" style="width:400px;" />';
        } else if(instance.type == 'int'){
            result = result + instance.translation + '<input type="text" name="'+instance.name+'" style="width:400px;" />';
        }
    });
    result = result + '<button style="margin-top:20px;" type="button" onclick="sendForm();" />Wykonaj</button>';
    document.getElementById('formWrapper').innerHTML = result;
    //$('formWrapper').html(result).then(function(){
        CKEDITOR.replace('richtext');
        AnyTime.picker("datetime1", {format: "%z-%m-%d %H:%i:%s", firstDOW: 1});
    //});
};