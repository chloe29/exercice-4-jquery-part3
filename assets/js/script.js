$(function(){
  $('#oneClick').click(function(){
    // on crée la div ajoutHauteur, à laquelle on applique la méthode .height pour ajouter 10px à la div
    var ajoutHauteur = $('div').height() +10;
    $('div').css('height', ajoutHauteur);
    // si la largeur de la div est supérieur à 100px
    if($('div').height()>100){
      $('div').css('height', '10px');
    }
    var hauteur = 10;
    $('#oneClick').click(function(){
      // si la hauteur est inférieur ou égale à 100px, on ajoute 10px à la div
      if(hauteur <= 100){
        hauteur += 10;
      // sinon la hauteur se remet à 10px
      }else{
        hauteur = 10;
      }
      $('div').css('height', hauteur+'px');
    });
  });
  // lorsque l'on clique sur le bouton, le fond du rectangle devient vert
  $('#twoClick').click(function(){
    $('div').css('background', 'green');
  });
  // le rectangle reprend sa couleur d'origine
  $('#threeClick').click(function(){
    $('div').css('background', 'red');
  });
  // le rectangle disparait
  $('#fourClick').click(function(){
    $('div').hide();
  });
  // le rectangle apparait
  $('#fiveClick').click(function(){
    $('div').show();
  });
});
