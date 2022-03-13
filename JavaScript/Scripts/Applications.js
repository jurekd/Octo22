dataZdrapka = [
  {'Inteligencja':'Kinestetyk','Element':'#content_Sprawdz_4','backImageUrl':'/Theme/Images/Aplications/Kinestetyk/M1_4/Kinestetyk1_4_back.png','frontImageUrl':'/Theme/Images/Aplications/Kinestetyk/M1_4/Kinestetyk1_4_front.png'},
  {'Inteligencja':'Kinestetyk','Element':'#2_2','backImageUrl':'/Theme/Images/Aplications/Kinestetyk/M2_2/M2_2b.jpg','frontImageUrl':'/Theme/Images/Aplications/Kinestetyk/M2_2/M2_2a.jpg'},
  {'Inteligencja':'Kinestetyk','Element':'#2_4','backImageUrl':'Theme/Images/Aplications/Kinestetyk/M2_4/M2_4back.png','frontImageUrl':'Theme/Images/Aplications/Kinestetyk/M2_4/M2_4front.jpg'},
  {'Inteligencja':'Kinestetyk','Element':'#3_1','backImageUrl':'Theme/Images/Aplications/Kinestetyk/M3_1/M3_1back.jpg','frontImageUrl':'Theme/Images/Aplications/Kinestetyk/M3_1/M3_1front.jpg'},
  {'Inteligencja':'Kinestetyk','Element':'#5_1','backImageUrl':'Theme/Images/Aplications/Kinestetyk/M5_1/M5_1back.png','frontImageUrl':'Theme/Images/Aplications/Kinestetyk/M5_1/M5_1front.jpg'},
  {'Inteligencja':'Kinestetyk','Element':'#6_1','backImageUrl':'Theme/Images/Aplications/Kinestetyk/M6_1/M6_1back.png','frontImageUrl':'Theme/Images/Aplications/Kinestetyk/M6_1/M6_1front.jpg'},
  {'Inteligencja':'Kinestetyk','Element':'#7_2','backImageUrl':'Theme/Images/Aplications/Kinestetyk/M7_2/M7_2back.png','frontImageUrl':'Theme/Images/Aplications/Kinestetyk/M7_2/M7_2front.jpg'}
]


dataPuzzle = [
  {'Inteligencja':'Kinestetyk','Element':'#2_3','ImageUrl':'/Theme/Images/Aplications/Kinestetyk/M2_3/M2_3.png'},
  {'Inteligencja':'Kinestetyk','Element':'#3_2','ImageUrl':'/Theme/Images/Aplications/Kinestetyk/M3_2/M3_2.png'},
  {'Inteligencja':'Kinestetyk','Element':'#4_3','ImageUrl':'/Theme/Images/Aplications/Kinestetyk/M4_3/M4_3.png'},
  {'Inteligencja':'Kinestetyk','Element':'#5_2','ImageUrl':'/Theme/Images/Aplications/Kinestetyk/M5_2/M5_2.png'},
]

dataWordUnscramble = [
    {'Inteligencja':'Lingwistyk','Element':'1_3','Words':['dwa','razy','dziesięć','do','potęgi','minus','trzy','kilograma']},
    {'Inteligencja':'Lingwistyk','Element':'3_1','Words':['Python=','simple+','easy']},
    {'Inteligencja':'Lingwistyk','Element':'5_3','Words':['kalkulator']},
    {'Inteligencja':'Lingwistyk','Element':'6_2','Words':['zastosuj','operator','and']},
]

function loadApplications()
{
  loadKinstetyk();
  loadLingwista();
}
function loadKinstetyk()
{
  if(localStorage.intelect == 'ruch')
  {
    loadZdrapka();
    loadPuzzle();

  }
}

function loadLingwista()
{
  if(localStorage.intelect == 'jez')
  {
    loadFillInBlank();
    loadWordUnscramble();
  }
}

function loadWordUnscramble() 
{
    for (var i = 0; i < dataWordUnscramble.length; i++) {
        if(dataWordUnscramble[i]['Inteligencja'] == 'Lingwistyk'){
            wordUnscrambleInit(dataWordUnscramble[i]['Element'],dataWordUnscramble[i]['Words']);
        }
    }   
}

function loadFillInBlank()
{
	$('#8_1').html('<h3>Uzupełnij luki</h3><div id="sentence"></div><h3>Brakujące słowa</h3><div id="words"></div><div id="task" style="display:none;"><h3>Treść Zadania</h3>Utwórz listę, która zapamięta pory roku, poczynając od zimy. Sprawdź na jaką porę roku przypada miesiąc maj, dzieląc numer miesiąc przez 4 i odczytując wartość z tablicy.</div>');
	var text = '1. Elementy listy umieszczane są w nawiasie kwadratowym <br>2. W innych językach programowania lista najczęściej mianem tablica <br>3. Pamiętaj, że element końcowy podajemy zawsze o jeden większy niż pozycja ostatniego elementu do pobrania. <br>4. Listy mogą składać się z liczb, tekstów, czy obiektów'
    fillInTheBlankGameInit(text,[6,16,25,40]);
}

function loadZdrapka()
{
  for(var i = 0 ; i < dataZdrapka.length ;i++ )
  {
    if(dataZdrapka[i]['Inteligencja'] == 'Kinestetyk')
    {
        canvasId = 'canvas'+i;
        $(dataZdrapka[i]['Element']).html('<canvas id="'+canvasId+'"></canvas>');
        backImageUrl = dataZdrapka[i]['backImageUrl'];
        frontImageUrl  = dataZdrapka[i]['frontImageUrl'];
        Zdrapka(backImageUrl,frontImageUrl,canvasId);

    }
  }
}

function loadPuzzle()
{
  for(var i = 0 ; i < dataPuzzle.length ;i++ )
  {
    if(dataPuzzle[i]['Inteligencja'] == 'Kinestetyk' && $(dataPuzzle[i]['Element']).length)
    {

        canvasId = 'canvasPuzzle'+i;
        $(dataPuzzle[i]['Element']).css("position: relative;");
        $(dataPuzzle[i]['Element']).html('<canvas id="'+canvasId+'"></canvas>');
        ImageUrl = dataPuzzle[i]['ImageUrl'];
        init(canvasId,ImageUrl);
        $(dataPuzzle[i]['Element']).css({
            position: 'relative'
        });
    }
  }
}

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

const PUZZLE_DIFFICULTY = 4;
        const PUZZLE_HOVER_TINT = '#009900';

        var _stage;
        var _canvas;

        var _img;
        var _pieces;
        var _puzzleWidth;
        var _puzzleHeight;
        var _pieceWidth;
        var _pieceHeight;
        var _currentPiece;
        var _currentDropPiece;

        var _mouse;

        function init(canvasId,imgUrl){
            _img = new Image();
            _img.addEventListener('load',onImage,false);
            _img.src = imgUrl;
            PuzzleCanvasId = canvasId;
        }
        function onImage(e){
            _pieceWidth = Math.floor(_img.width / PUZZLE_DIFFICULTY)
            _pieceHeight = Math.floor(_img.height / PUZZLE_DIFFICULTY)
            _puzzleWidth = _pieceWidth * PUZZLE_DIFFICULTY;
            _puzzleHeight = _pieceHeight * PUZZLE_DIFFICULTY;
            setCanvas();
            initPuzzle();
        }
        function setCanvas(){
            _canvas = document.getElementById(PuzzleCanvasId);
            _stage = _canvas.getContext('2d');
            _canvas.width = _puzzleWidth;
            _canvas.height = _puzzleHeight;
            _canvas.style.border = "1px solid black";
        }
        function initPuzzle(){
            _pieces = [];
            _mouse = {x:0,y:0};
            _currentPiece = null;
            _currentDropPiece = null;
            _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
            createTitle("Click to Start Puzzle");
            buildPieces();
        }
        function createTitle(msg){
            _stage.fillStyle = "#000000";
            _stage.globalAlpha = .4;
            _stage.fillRect(100,_puzzleHeight - 40,_puzzleWidth - 200,40);
            _stage.fillStyle = "#FFFFFF";
            _stage.globalAlpha = 1;
            _stage.textAlign = "center";
            _stage.textBaseline = "middle";
            _stage.font = "20px Arial";
            _stage.fillText(msg,_puzzleWidth / 2,_puzzleHeight - 20);
        }
        function buildPieces(){
            var i;
            var piece;
            var xPos = 0;
            var yPos = 0;
            for(i = 0;i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY;i++){
                piece = {};
                piece.sx = xPos;
                piece.sy = yPos;
                _pieces.push(piece);
                xPos += _pieceWidth;
                if(xPos >= _puzzleWidth){
                    xPos = 0;
                    yPos += _pieceHeight;
                }
            }
            document.onmousedown = shufflePuzzle;
        }
        function shufflePuzzle(){
            _pieces = shuffleArray(_pieces);
            _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
            var i;
            var piece;
            var xPos = 0;
            var yPos = 0;
            for(i = 0;i < _pieces.length;i++){
                piece = _pieces[i];
                piece.xPos = xPos;
                piece.yPos = yPos;
                _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
                _stage.strokeRect(xPos, yPos, _pieceWidth,_pieceHeight);
                xPos += _pieceWidth;
                if(xPos >= _puzzleWidth){
                    xPos = 0;
                    yPos += _pieceHeight;
                }
            }
            document.onmousedown = onPuzzleClick;
        }
        function onPuzzleClick(e){
            if(e.layerX || e.layerX == 0){
                _mouse.x = e.layerX - _canvas.offsetLeft;
                _mouse.y = e.layerY - _canvas.offsetTop;
            }
            else if(e.offsetX || e.offsetX == 0){
                _mouse.x = e.offsetX - _canvas.offsetLeft;
                _mouse.y = e.offsetY - _canvas.offsetTop;
            }
            _currentPiece = checkPieceClicked();
            if(_currentPiece != null){
                _stage.clearRect(_currentPiece.xPos,_currentPiece.yPos,_pieceWidth,_pieceHeight);
                _stage.save();
                _stage.globalAlpha = .9;
                _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
                _stage.restore();
                document.onmousemove = updatePuzzle;
                document.onmouseup = pieceDropped;
            }
        }
        function checkPieceClicked(){
            var i;
            var piece;
            for(i = 0;i < _pieces.length;i++){
                piece = _pieces[i];
                if(_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)){
                    //PIECE NOT HIT
                }
                else{
                    return piece;
                }
            }
            return null;
        }
        function updatePuzzle(e){
            _currentDropPiece = null;
            if(e.layerX || e.layerX == 0){
                _mouse.x = e.layerX - _canvas.offsetLeft;
                _mouse.y = e.layerY - _canvas.offsetTop;
            }
            else if(e.offsetX || e.offsetX == 0){
                _mouse.x = e.offsetX - _canvas.offsetLeft;
                _mouse.y = e.offsetY - _canvas.offsetTop;
            }
            _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
            var i;
            var piece;
            for(i = 0;i < _pieces.length;i++){
                piece = _pieces[i];
                if(piece == _currentPiece){
                    continue;
                }
                _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
                _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth,_pieceHeight);
                if(_currentDropPiece == null){
                    if(_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)){
                        //NOT OVER
                    }
                    else{
                        _currentDropPiece = piece;
                        _stage.save();
                        _stage.globalAlpha = .4;
                        _stage.fillStyle = PUZZLE_HOVER_TINT;
                        _stage.fillRect(_currentDropPiece.xPos,_currentDropPiece.yPos,_pieceWidth, _pieceHeight);
                        _stage.restore();
                    }
                }
            }
            _stage.save();
            _stage.globalAlpha = .6;
            _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
            _stage.restore();
            _stage.strokeRect( _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth,_pieceHeight);
        }
        function pieceDropped(e){
            document.onmousemove = null;
            document.onmouseup = null;
            if(_currentDropPiece != null){
                var tmp = {xPos:_currentPiece.xPos,yPos:_currentPiece.yPos};
                _currentPiece.xPos = _currentDropPiece.xPos;
                _currentPiece.yPos = _currentDropPiece.yPos;
                _currentDropPiece.xPos = tmp.xPos;
                _currentDropPiece.yPos = tmp.yPos;
            }
            resetPuzzleAndCheckWin();
        }
        function resetPuzzleAndCheckWin(){
            _stage.clearRect(0,0,_puzzleWidth,_puzzleHeight);
            var gameWin = true;
            var i;
            var piece;
            for(i = 0;i < _pieces.length;i++){
                piece = _pieces[i];
                _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
                _stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth,_pieceHeight);
                if(piece.xPos != piece.sx || piece.yPos != piece.sy){
                    gameWin = false;
                }
            }
            if(gameWin){
                setTimeout(gameOver,500);
            }
        }
        function gameOver(){
            document.onmousedown = null;
            document.onmousemove = null;
            document.onmouseup = null;
            initPuzzle();
        }
        function shuffleArray(o){
            for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

function workingTimer(){

        $(".btn_start").hide();
        $(".pol-star").hide();
        $(".clock").show();

        var Timer = function(config){

        var self = this;
        var $container = $(config.container);
        var sec = 0;
        var limit = parseInt($container.data("timeup"));
        var actualKey = 0;
        var clearTime=function(){
            sec=0;

        }

        var injectTemplate = function(){
            //$container.html("<span id=\"minutes\">00</span>:<span id=\"seconds\">00</span>")
            $container.html("<span class=\"minutes\">00</span>:<span class=\"seconds\">00</span>")
        }

        var padLeft = function(val) {
            return val > 9 ? val : "0" + val;
        }

        var checkRanges = function(minutes, seconds){
            minutes = parseInt(minutes);
            var target = getNextRange(); // 40
            //

            var breakpoint = target / 100;
            var step = Math.round(parseFloat(breakpoint * limit));
            if(step <= minutes){ // zmiana stanu

                if(actualKey == 1){
                    $('#myModal').modal('show');
                }
                $container.css({color: config.ranges[target]});
                ++actualKey;
            }
        }

        var getNextRange = function(minutes, timeUp){
           var keys = Object.keys(config.ranges);  // []
           return parseInt(keys[actualKey]);
        }

        var runIt = function(){

            setInterval(function () {
                var seconds = padLeft(++sec % 60);
                var minutes = padLeft(parseInt(sec / 60, 10));
                var Elements = document.getElementsByClassName("seconds");

                for(var i = 0 ; i<Elements.length ; i++  )
                {
                    document.getElementsByClassName("seconds")[i].innerHTML= seconds;
                    document.getElementsByClassName("minutes")[i].innerHTML= minutes;
                }

                checkRanges(sec, seconds);
            }, 1000);
        }

        var init = function(){
            $container.show();
            injectTemplate();
            runIt();
            console.log(config)
        }

        init();

        return {
            actualState: function(){
                return actualKey;
            },
            clearTime:clearTime
        }

    }

       $Locals.timerOne = new Timer({
            "container" : ".clock",
            "ranges" : {
                70: "#ffa500", // po 20% bedzie kolor cecece
                100: "#CC3300"  // po 50 cacaca
            }
        });

        $("#scoreboardBtn").show()
}

function Zdrapka (backImgUrl,frontImgUrl,canvasId){


var image = { // back and front images
  'back': { 'url':backImgUrl, 'img':null },
	'front': { 'url':frontImgUrl, 'img':null }
};

var canvas = {'temp':null, 'draw':null}; // temp and draw canvases

var mouseDown = false;

/**
 * Helper function to get the local coords of an event in an element,
 * since offsetX/offsetY are apparently not entirely supported, but
 * offsetLeft/offsetTop/pageX/pageY are!
 *
 * @param elem element in question
 * @param ev the event
 */
function getLocalCoords(elem, ev) {
	var ox = 0, oy = 0;
	var first;
	var pageX, pageY;

	// Walk back up the tree to calculate the total page offset of the
	// currentTarget element.  I can't tell you how happy this makes me.
	// Really.
	while (elem != null) {
		ox += elem.offsetLeft;
		oy += elem.offsetTop;
		elem = elem.offsetParent;
	}

	if (ev.hasOwnProperty('changedTouches')) {
		first = ev.changedTouches[0];
		pageX = first.pageX;
		pageY = first.pageY;
	} else {
		pageX = ev.pageX;
		pageY = ev.pageY;
	}

	return { 'x': pageX - ox, 'y': pageY - oy };
}

/**
 * Recomposites the canvases onto the screen
 *
 * Note that my preferred method (putting the background down, then the
 * masked foreground) doesn't seem to work in FF with "source-out"
 * compositing mode (it just leaves the destination canvas blank.)  I
 * like this method because mentally it makes sense to have the
 * foreground drawn on top of the background.
 *
 * Instead, to get the same effect, we draw the whole foreground image,
 * and then mask the background (with "source-atop", which FF seems
 * happy with) and stamp that on top.  The final result is the same, but
 * it's a little bit weird since we're stamping the background on the
 * foreground.
 *
 * OPTIMIZATION: This naively redraws the entire canvas, which involves
 * four full-size image blits.  An optimization would be to track the
 * dirty rectangle in scratchLine(), and only redraw that portion (i.e.
 * in each drawImage() call, pass the dirty rectangle as well--check out
 * the drawImage() documentation for details.)  This would scale to
 * arbitrary-sized images, whereas in its current form, it will dog out
 * if the images are large.
 */
function recompositeCanvases() {
	var main = document.getElementById(canvasId);
	var tempctx = canvas.temp.getContext('2d');
	var mainctx = main.getContext('2d');

	// Step 1: clear the temp
	canvas.temp.width = canvas.temp.width; // resizing clears

	// Step 2: stamp the draw on the temp (source-over)
	tempctx.drawImage(canvas.draw, 0, 0);

	/* !!!! this way doesn't work on FF:
		// Step 3: stamp the foreground on the temp (!! source-out mode !!)
		tempctx.globalCompositeOperation = 'source-out';
		tempctx.drawImage(image.front.img, 0, 0);

		// Step 4: stamp the background on the display canvas (source-over)
		//mainctx.drawImage(image.back.img, 0, 0);

		// Step 5: stamp the temp on the display canvas (source-over)
		mainctx.drawImage(canvas.temp, 0, 0);
	*/

	// Step 3: stamp the background on the temp (!! source-atop mode !!)
	tempctx.globalCompositeOperation = 'source-atop';
	tempctx.drawImage(image.back.img, 0, 0);

	// Step 4: stamp the foreground on the display canvas (source-over)
	mainctx.drawImage(image.front.img, 0, 0);

	// Step 5: stamp the temp on the display canvas (source-over)
	mainctx.drawImage(canvas.temp, 0, 0);
}

/**
 * Draw a scratch line
 *
 * @param can the canvas
 * @param x,y the coordinates
 * @param fresh start a new line if true
 */
function scratchLine(can, x, y, fresh) {
	var ctx = can.getContext('2d');
	ctx.lineWidth = 50;
	ctx.lineCap = ctx.lineJoin = 'round';
	ctx.strokeStyle = 'white'; // can be any opaque color
	if (fresh) {
		ctx.beginPath();
		// this +0.01 hackishly causes Linux Chrome to draw a
		// "zero"-length line (a single point), otherwise it doesn't
		// draw when the mouse is clicked but not moved:
		ctx.moveTo(x+0.01, y);
	}
	ctx.lineTo(x, y);
	ctx.stroke();
}

/**
 * Set up the main canvas and listeners
 */
function setupCanvases() {
	var c = document.getElementById(canvasId);
	// set the width and height of the main canvas from the first image
	// (assuming both images are the same dimensions)
	c.width = image.back.img.width;
	c.height = image.back.img.height;


	// create the temp and draw canvases, and set their dimensions
	// to the same as the main canvas:
	canvas.temp = document.createElement('canvas');
	canvas.draw = document.createElement('canvas');
	canvas.temp.width = canvas.draw.width = c.width;
	canvas.temp.height = canvas.draw.height = c.height;

  console.log('set up canvas');

	// draw the stuff to start
	recompositeCanvases();

	/**
	 * On mouse down, draw a line starting fresh
	 */
	function mousedown_handler(e) {
		var local = getLocalCoords(c, e);
		mouseDown = true;

		scratchLine(canvas.draw, local.x, local.y, true);
		recompositeCanvases();

		if (e.cancelable) { e.preventDefault(); }
		return false;
	};

	/**
	 * On mouse move, if mouse down, draw a line
	 *
	 * We do this on the window to smoothly handle mousing outside
	 * the canvas
	 */
	function mousemove_handler(e) {
		if (!mouseDown) { return true; }

		var local = getLocalCoords(c, e);

		scratchLine(canvas.draw, local.x, local.y, false);
		recompositeCanvases();

		if (e.cancelable) { e.preventDefault(); }
		return false;
	};

	/**
	 * On mouseup.  (Listens on window to catch out-of-canvas events.)
	 */
	function mouseup_handler(e) {
		if (mouseDown) {
			mouseDown = false;
			if (e.cancelable) { e.preventDefault(); }
			return false;
		}

		return true;
	};

	c.addEventListener('mousedown', mousedown_handler, false);
	c.addEventListener('touchstart', mousedown_handler, false);

	window.addEventListener('mousemove', mousemove_handler, false);
	window.addEventListener('touchmove', mousemove_handler, false);

	window.addEventListener('mouseup', mouseup_handler, false);
	window.addEventListener('touchend', mouseup_handler, false);
}

/**
 * Set up the DOM when loading is complete
 */
function loadingComplete() {
	var loading = document.getElementById('loading');
	var main = document.getElementById('main');

	loading.className = 'hidden';
	main.className = '';
}

/**
 * Handle loading of needed image resources
 */
function loadImages() {
	var loadCount = 0;
	var loadTotal = 0;
	var loadingIndicator;

	function imageLoaded(e) {
		loadCount++;

		if (loadCount >= loadTotal) {
			setupCanvases();
			loadingComplete();
		}
	}

	for (k in image) if (image.hasOwnProperty(k))
		loadTotal++;

	for (k in image) if (image.hasOwnProperty(k)) {
		image[k].img = document.createElement('img'); // image is global
		image[k].img.addEventListener('load', imageLoaded, false);
		image[k].img.src = image[k].url;
	}
}

/**
 * Handle page load
 */
 loadImages();


}



function wordUnscramble() {
   parentElementPositionTop = $('#col-3').position().top;
   parentElementPositionLeft = $('#col-3').position().left;
    
  $(".scramble").each(function() {
    var $letters, $spacers, $this, insertSpacers, isCorrect, parseWord, randomize, scrambledWord, spacerHTML, unscrambledWord;
    $this = $(this);
    $letters = $this.find(".scrambled-letter").not(".drag-clone");
    $spacers = $this.find(".spacer");
    unscrambledWord = $this.data("unscrambled");
    scrambledWord = $this.data("scrambled");
    spacerHTML = "<span class=\"spacer\"></span>";
    if ($letters.length === 0 && scrambledWord === undefined && unscrambledWord !== undefined) {
      randomize = function() {
        return 0.5 - Math.random();
      };
      while (true) {
        scrambledWord = unscrambledWord.split("").sort(randomize).join("");
        if (scrambledWord !== unscrambledWord) {
          break;
        }
      }
    }
    if (scrambledWord !== undefined && $letters.length === 0) {
      $.map(scrambledWord.split(""), function(letter) {
        return $this.append("<span class=\"scrambled-letter\">" + letter + "</span>");
      });
      $letters = $this.find(".scrambled-letter").not(".drag-clone");
    }
    insertSpacers = function() {
      $this.find(".spacer").remove();
      $letters.before(spacerHTML).last().after(spacerHTML);
      $spacers = $this.find(".spacer");
    };
    insertSpacers();
    parseWord = function() {
      var word;
      word = "";
      $letters.each(function() {
        return word += $(this).text().replace(/[^a-zA-Z()+\-*/.\=\u0104\u0106\u0118\u0141\u0143\u00D3\u015A\u0179\u017B\u0105\u0107\u0119\u0142\u0144\u00F3\u015B\u017A\u017C]/g, "");
      });
      return word.toLowerCase();
    };
    isCorrect = function() {
      return parseWord() === unscrambledWord.toLowerCase();
    };
    return $letters.on("mousedown", function(e) {
      var $letterClone, $thisLetter, dropIntoSpacer, moveLetterWithMouse, snapLetterToPlace, thisLetterHeight, thisLetterWidth;
      e.stopPropagation();
      $thisLetter = $(this);
      thisLetterWidth = $thisLetter.outerWidth();
      thisLetterHeight = $thisLetter.outerHeight();
      $this.addClass("dragging");
      $letterClone = $thisLetter.clone(false);
      $letterClone.insertBefore($thisLetter);
      if ($thisLetter.prevAll(".scrambled-letter").length > 0 && $thisLetter.nextAll(".scrambled-letter").length > 0) {
        $thisLetter.nextAll(".spacer").first().addClass("extra");
      }
      $thisLetter.addClass("invisible");
      $letterClone.addClass("drag-clone");
      moveLetterWithMouse = function(e) {
        return $letterClone.css({
          top: e.clientY -  $('#col-3').position().top+ $(document).scrollTop() -  (thisLetterHeight * 0.5),
          left: e.clientX - $('#col-3').position().left + $(document).scrollLeft() - (thisLetterWidth * 0.5)
        });
      };
    
      moveLetterWithMouse(e);
      snapLetterToPlace = function() {
        var realLetterOffset;
        $thisLetter.show();
        realLetterOffset = $thisLetter.offset();
        $letterClone.addClass("snap-to-place").css({
          top: realLetterOffset.top -  $('#col-3').position().top ,
          left: realLetterOffset.left - $('#col-3').position().left 
        });
        return setTimeout((function() {
          $letterClone.remove();
          return $thisLetter.removeClass("invisible");
        }), 500);
      };
      dropIntoSpacer = (function(_this) {
        return function($thisSpacer) {
          $thisLetter.show().addClass("invisible").insertBefore($thisSpacer);
          $letters = $this.find(".scrambled-letter").not(".drag-clone");
          insertSpacers();
          snapLetterToPlace();
          if (isCorrect()) {
            return $this.trigger("unscrambled");
          }
        };
      })(this);
      $letters.not('.drag-clone').not('.invisible').mousemove(function(e) {
        var $thisMouseMoveLetter, halfPoint, leftOffset, letterOffset, letterWidth, nextLetters, prevLetters;
        $thisMouseMoveLetter = $(this);
        letterOffset = $thisMouseMoveLetter.offset();
        leftOffset = e.offsetX || e.clientX - letterOffset.left;
        letterWidth = $thisMouseMoveLetter.outerWidth();
        halfPoint = letterWidth / 2;
        prevLetters = $thisLetter.prevAll('.scrambled-letter').not('.drag-clone').not('.invisible').length;
        nextLetters = $thisLetter.nextAll('.scrambled-letter').not('.drag-clone').not('.invisible').length;
        $spacers.filter('.hover').removeClass("hover");
        if (prevLetters > 0 && leftOffset > 0 && leftOffset < halfPoint) {
          return $thisMouseMoveLetter.prevAll('.spacer').not('.extra').first().addClass("hover");
        } else if (nextLetters > 0 && leftOffset < letterWidth && leftOffset > halfPoint) {
          return $thisMouseMoveLetter.nextAll('.spacer').not('.extra').first().addClass("hover");
        }
      }).mouseup(function() {
        var $thisSpacer;
        $thisSpacer = $spacers.filter('.hover').first();
        if ($thisSpacer.length > 0) {
          return dropIntoSpacer($thisSpacer);
        }
      }).mouseleave(function() {
        return $spacers.filter('.hover').removeClass("hover");
      });
      $spacers.not('.extra').hover(function() {
        $(this).addClass("hover");
        return $thisLetter.hide();
      }, function() {
        return $(this).removeClass("hover");
      }).mouseup(function() {
        var $thisSpacer;
        $thisSpacer = $(this);
        dropIntoSpacer($thisSpacer);
      });
      $("body").mousemove(moveLetterWithMouse).on("mouseup", function() {
        if ($this.hasClass("dragging") || $(".drag-clone").length > 0) {
          $("body").unbind("mousemove", moveLetterWithMouse);
          $spacers.unbind("mousemove mouseover mouseout mouseenter mouseleave mouseup");
          $letters.unbind("mousemove mouseleave");
          snapLetterToPlace();
          return $this.removeClass("dragging");
        }
      });
      return $this.on("unscrambled", function() {
        return $this.addClass("solved");
      });
    });
  });
}

//wordUnscramble();
function wordUnscrambleInit(ParentElemnetId,Words)
   {
      var HtmlContent = '';
      var id = '#'+ParentElemnetId;
    //   $('#col-3').css({
    //         position: 'inherit'
    //     });
      for (var i = 0; i < Words.length; i++) {
        HtmlContent +='<div class="scramble" data-unscrambled="'+Words[i]+'"></div>' ;
      }
      $(id).html(HtmlContent);

    
        wordUnscramble();
   } 