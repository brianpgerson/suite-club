$(document).ready(function() {
  if(getParameterByName('reference')){
    $('#promo').append('<div id="vidOverlay"><img src="img/xout.png" alt"close" align="right" id = "closeVid" /><iframe id="viz" src="https://www.youtube.com/embed/hWILjYJ1h0s?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0?" frameborder="0" id="shortVid" allowfullscreen></iframe></div>');  
  }

  $('#closeVid').click(function(){
    $('#vidOverlay').remove();
  });

  $(".submit_message").hide();

  $('#closeVid').on('click', function() {
    ga('send', 'event', 'video', 'click');
    console.log("working!");
  });

  $('#mc-embedded-subscribe').on('click', function() {
    ga('send', 'event', 'sign-up', 'click');
    console.log("working!");
  });

//nav bar clicks

  $('.nbarAbout').on('click', function() {
    ga('send', 'event', 'navbarAbout', 'click');
    console.log("working!");
  });
  
  $('.nbarWho').on('click', function() {
    ga('send', 'event', 'navbarWho', 'click');
    console.log("working!");
  });

    $('.nbarContact').on('click', function() {
    ga('send', 'event', 'navbarContact', 'click');
    console.log("working!");
  });

});


$('#mycontactform').on('submit', function(e){
  e.preventDefault();

  $.ajax ({
    type: "POST",
    url: "emailPass.php",
    data: $('#mycontactform').serialize(),
    success: function(response) {
     $(".contact_forms").hide();
     $(".submit_message").show();
   },
   dataType: 'text'
 });
});  


//========================
// Vid Overlay?
//========================

function getParameterByName( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)", 
  regex = new RegExp( regexS ),
  results = regex.exec( window.location.href );
  if( results == null ){
    return "";
  } else{
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

//========================
// google analytics
//========================

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-65101011-1', 'auto');
ga('send', 'pageview');






//========================
// crazy egg
//========================

setTimeout(function(){var a=document.createElement("script");
  var b=document.getElementsByTagName("script")[0];
  a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0036/9146.js?"+Math.floor(new Date().getTime()/3600000);
  a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);



//========================
// youtube api
//========================

var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var lastAction = '';
function onYouTubePlayerAPIReady() {
 player = new YT.Player('player', {
   playerVars: {
     modestbranding: true,
     theme: 'light',
     rel: 0
   },
   height: '276',
   width: '430',
   videoId: 'Tx5dAAUXMNI',
   events: {
     'onStateChange': onPlayerStateChange
   }
 });
}

function onPlayerStateChange(event) {
 switch (event.data) {
   case YT.PlayerState.PLAYING:
   ga(['send', 'event', 'video', 'started']);
   console.log("working?")
   break;
   case YT.PlayerState.ENDED:
   ga(['_trackEvent', 'event', 'video', 'completed']);
   console.log("working?")
   break;
   case YT.PlayerState.PAUSED:
   if (lastAction != 'paused') {
     ga(['_trackEvent', 'event', 'video', 'paused']);
     console.log("working?")
   } else {
     lastAction = 'paused';
   }
   break;
 }
}

