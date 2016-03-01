$(document).ready(function() {
 
  // $('#owl-noticias').owlCarousel();

  $("#owl-noticias").owlCarousel({
          itemsCustom: [
              [0, 1]
              
          ],
          navigation: false,
          autoPlay: false,
          slideSpeed: 1000,
          pagination: true
      });
 
});