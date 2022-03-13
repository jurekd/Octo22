function navigate(option) {
    var result = '';
    switch (option) {
        case 'editTasks':
            result = 'tasks';
            break;
        case 'addTasks':
            result = 'tasks&id=0';
            break;
        case 'addEvent':
            result = 'event&id=0';
            break;
        //case 'editMenu':
        //    result = 'media&id=1';
        //    break;
        case 'editMultimedia':
            result = 'multimedia';
            break;
        case 'addMultimedia':
            result = 'multimedia&id=0';
            break;
    }
    window.location = "?page=forms&item="+result;
}