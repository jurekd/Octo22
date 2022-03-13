var React = require('react');

  var AudioView = React.createClass({

    pickSource: function(media){
      var vid = document.createElement('audio');

      var maybes = media.filter(function(media){
        var ext = media.split('.').slice(-1)[0].toUpperCase();
        return (vid.canPlayType('audio/'+ext) === 'maybe');
      });

      var probablies = media.filter(function(media){
        var ext = media.split('.').slice(-1)[0].toUpperCase();
        return (vid.canPlayType('audio/'+ext) === 'probably');
      });

      var source = '';

      if (maybes.length > 0) { source = maybes[0]; }
      if (probablies.length > 0) { source = probablies[0]; }
      source = (source === '')? '' : 'content/'+source;
      return source;
    },

    render: function(){
      var audio = this.props.audio;
      var title = audio.title === ''? audio.id : audio.title;

      var src = this.pickSource(audio.media);

      var downloadNodes = audio.media.map(function(media){
        var ext = media.split('.').slice(-1)[0].toUpperCase();
        media = 'content/'+media;
        return (
          <li><a className="greybutton" href={media}>{ext}</a></li>
        )
      });

      return (

        <div className="audio-container">   
          <audio title={title} src={src} controls width="100%"></audio>
          <h3 className="audio-title">{title}</h3>
          <p>{audio.description}</p>
            <div className="linkbox">
              <span>Downloads:</span>
              <ul className="downloadlinks">
                {downloadNodes}
              </ul>
            </div>

        </div>

      )
    }
  });

  module.exports = AudioView;