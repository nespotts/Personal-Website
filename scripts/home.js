/// <reference path="../"
$(document).ready(function () {

  // $('.pop-img').on("mouseenter", {pop: true, amt: 1.05}, popImg).on("mouseleave", {pop: false, amt: 1.05}, popImg);
  $('#js_skill').on('dblclick', function () {
    $('#js_hints').toggle();
  });

  setSkillRowWidth();
  $(window).on('resize', (event) => {
    setSkillRowWidth();
  });

});


function setSkillRowWidth() {
  let default_width = 700;
  let window_width = $(window).width();
  let width = window_width > default_width * 0.9 ? default_width : window_width * 0.9;
  width = `${width}px`;
  $('.skill-row').css('width', width);

  if (window_width < default_width * 0.8) {
    $('.skill-img').parent().hide();
  } else {
    $('.skill-img').parent().show();
  }
}




// function popImg(event) {
//   let width = parseInt($(this).css("width"));
//   let ms = 100;
//   if(event.data.pop)
//     $(this).animate({'width': width*event.data.amt + 'px'}, ms);
//   else
//     $(this).animate({'width': width/event.data.amt + 'px'}, ms);
// }
