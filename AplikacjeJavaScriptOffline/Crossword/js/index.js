var words = ['kropka','ZeroDivisionError','Angielski'];
var password = 2;
var disabled = [2,0,2];

function crosswordInit(words,disabled,password)
{

    var NumOfWords = words.length;
    console.log(NumOfWords);
    var rows = '<table>';

    for(var i = 0 ; i < NumOfWords ; i++){
        var wordLenght = words[i].length;
        var letters = words[i].split("");
        rows += '<tr></tr>';

        for (var j = 0; j < disabled[i]; j++) {
            rows += '<td class="disabledInput" > <input maxlength="0" disabled  /></td>'
        }

        for (var j = 0; j < letters.length; j++) {
            if(password-disabled[i] == j){
                 rows += '<td  class ="passwordTd" > <input onfocus="this.value = this.value;" type="text" class ="inputs password" id="letter'+j+'word'+i+'" maxlength="1" data-letter="'+letters[j]+'"  onKeyUp="checkCrossword() " onkeydown="checkCrossword() "/></td>';
            }else{
                 rows += '<td  class ="activeInput" > <input onfocus="this.value = this.value;" type="text" class = "inputs" id="letter'+j+'word'+i+'" maxlength="1" data-letter="'+letters[j]+'"  /></td>';
            }

        }
    }
     rows +='</table>';
     document.getElementById('crossword').innerHTML = rows;
}

function checkCrossword()
{
    var list = document.getElementsByClassName("password");
    var correctLetter = 0;
    for(var i = 0 ; i < list.length ; i++){
        if(list[i].getAttribute('data-letter').toUpperCase() == list[i].value.toUpperCase()){
            correctLetter ++;
        }
    if(correctLetter == list.length){
        var list = document.getElementsByClassName("passwordTd");
        for(var i = 0 ; i < list.length ; i++){
            list[i].style.backgroundColor = "yellow";
        }

           $('#crosswordTask').fadeIn();
    }

    }
}


container = document.getElementById('crossword');
container.onkeyup = function(e){
     $('.inputs').keydown(function (e) {
           if (this.maxLength == this.value.length && e.which != 8 ) {
               var index = $('.inputs').index(this) + 1;
              $('.inputs').eq(index).focus();
           }
           if (this.value.length == 0 && e.which === 8 && ($('.inputs').index(this) ) != 0) {
               var index = $('.inputs').index(this) - 1;
               $('.inputs').eq(index).value ="";
               $('.inputs').eq(index).focus();
           }
       });
}
