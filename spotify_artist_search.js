var IFRAME_SRC = "https://embed.spotify.com/?uri=spotify%3Aartist%3A";

$(document).ready(function() {
	$('form').on('submit', function(event){
		event.preventDefault();
  	var artistName = $('#artist-search').val();
  	$.ajax('https://api.spotify.com/v1/search', {
    	data: {q: artistName, type: 'artist'},
      success: function(data){
        var artistInfo = data.artists.items[0];
        if (!artistInfo){
        	$('iframe').hide();
					$('#error-message').show()
        } else {
        	$('#error-message').hide();
					var iframe = $('iframe');
          iframe.attr('src', IFRAME_SRC + artistInfo.id);
					iframe.show();
        }
      },
      error: function (){
      	$('iframe').hide()
        $('#error-message').show()
      }
    });
  });
});