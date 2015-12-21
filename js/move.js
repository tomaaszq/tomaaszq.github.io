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

$(function() {
   // Masquer par défaut les éléments (s'ils ne le sont pas déjà en CSS)
   $('.spoiler').hide();

   // Gestion de l'événement clic
   $('.spoiler-link').on('click', function(e) {
      // Valeur de l'attribut href à afficher
      var idSpoiler = $(this).attr('href'),
         classSelect = 'spoiler-link--active';

      // Donner une classe au lien pour le styliser
      // S'il y a déjà la classe, la retirer, sinon l'appliquer
      $(this).toggleClass(classSelect);

      // Afficher/Masquer le spoiler
      $(idSpoiler).slideToggle(200);

      // Empêche le déclenchement du lien
      e.preventDefault();
   });
});