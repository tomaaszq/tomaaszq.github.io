$(document).ready(function(){
  $('html').mousemove(function(e){
        var y = e.pageX / 150;
        var x = e.pageY / 150;
        $('div.move').css({'top': x,'left': y}); 
  });
});
$(document).ready(function(){
  $('html').mousemove(function(r){
        var y = r.pageX / 100;
        var x = r.pageY / 100;
        $('div.move2').css({'top': x,'left': y}); 
  });
});