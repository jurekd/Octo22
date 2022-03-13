function log(a, b) {
    document.write(a + ": " + b + "</br></br>")
}

function processText(text, level) {
    var textArray = text.split(" ");
    var wordsToExtract = Math.floor(textArray.length * level);
    var words = [];
    var indexes = [];
    if (customWordsSelection) {
        wordsToExtract = customWordsIndexes.length;
    }

    for (var i = 0; i < wordsToExtract; i++) {
        selection = Math.floor(Math.random() * textArray.length);
        if (customWordsSelection) {
            selection = customWordsIndexes[i];
        }
        if (indexes.indexOf(selection)) {
            words.push("<span class='word'>" + textArray[selection] + "</span>");
            textArray[selection] = "<span class='hiddenFillBlank'>" + textArray[selection] + "</span>"
        } else {
            i--;
        }
        indexes.push(selection);
    }
    
    for (var i = 0; i < customWordsIndexes.length; i++) {
        var index1 = Math.floor(Math.random() * customWordsIndexes.length);
        var index2 = Math.floor(Math.random() * customWordsIndexes.length);
        var word1 = words[index1];  
        var word2 = words[index2];  
        if(index1 != index2){
            words[index1] = word2;
            words[index2] = word1;  
        }
    }
    
    return {
        sentence: textArray,
        words: words
    }
}

function fillInTheBlankGameInit(text, wordSelection) {
    customWordsSelection = false;
    if (typeof wordSelection !== 'undefined') {
        customWordsSelection = true;
        customWordsIndexes = wordSelection;
    }

    difficultLevelNumeric = 1 / 5;


    var data = processText(text, difficultLevelNumeric);
    $("#sentence").html(data.sentence.join(" "));
    $("#words").html(data.words.join(" "));
    var clickedValue;


    $("span.word").on('click', function () {
        $("span.word").removeClass('clicked');
        clickedValue = $(this).text();
        $(this).addClass('clicked');
        $("span.hiddenFillBlank").addClass("target");
    });

    $("span.hiddenFillBlank").on('click', function () {
        matchValue = $(this).text();
        if (matchValue === clickedValue) {
            $(this).removeClass("hiddenFillBlank").removeClass("target").addClass("correct");
            $(".target").removeClass("target");
            $(".clicked").remove();
            if ($(".word").length === 0) {
                $("#task").fadeIn(3000);
                
            }
        }
    });
}