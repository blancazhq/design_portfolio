$(document).ready(function(){
  // $(window).load(function(){
  //   $(".grid").masonry({
  //        itemSelector : '.grid-item',
  //        gutter: 5
  //   });
  // })
  $(".grid").masonry({
       itemSelector : '.grid-item',
       gutter: 5
  });
  $('#nav_list').onePageNav();
})
