$(document).ready(function(){
  $(window).on("load", function(){
    $(".grid").masonry({
         itemSelector : '.grid-item',
         gutter: 5
    });
  })
  $(".grid").masonry({
       itemSelector : '.grid-item',
       gutter: 5
  });
  $('#nav_list').onePageNav();
})
