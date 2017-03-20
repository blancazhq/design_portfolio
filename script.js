$(window).load(function()
{
  $('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: 5
  });
});

$(document).ready(function(){
  $('.grid').masonry({
  itemSelector: '.grid-item',
  gutter: 5
});
  $('#nav_list').onePageNav();
})
