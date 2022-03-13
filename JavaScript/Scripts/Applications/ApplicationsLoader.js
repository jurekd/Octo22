function loadApplications()
{
  loadKinstetyk();
}
function loadKinstetyk()
{
  if(localStorage.intelect == 'ruch')
  {
    loadZdrapka();
    loadPuzzle();

  }
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
