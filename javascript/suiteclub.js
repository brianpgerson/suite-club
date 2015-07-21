$(document).ready(function() {
  if(getParameterByName('reference')){
    $('#promo').append('<div id="vidOverlay">
      <img src="img/xout.png" alt"close" align="right" id = "closeVid" />
      <iframe id="viz" width="853" height="480" src="https://www.youtube.com/embed/hWILjYJ1h0s?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0?" frameborder="0" id="shortVid" allowfullscreen></iframe></div>');  
  }

  $('#closeVid').click(function(){
    $('#vidOverlay').remove();
  });

  $(".submit_message").hide();

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

var CLOSEVID = document.getElementById('closeVid');
addListener(CLOSEVID, 'click', function() {
  ga('send', 'event', 'closeVid', 'click');
});

var JOIN = document.getElementById('mc-embedded-subscribe');
addListener(JOIN, 'click', function() {
  ga('send', 'event', 'mc-embedded-subscribe', 'click');
});

var PLAYVID = document.getElementById("shortVid");
addListener(PLAYVID, 'play', function() {
  ga('send', 'event', 'shortVid', 'play');
});
