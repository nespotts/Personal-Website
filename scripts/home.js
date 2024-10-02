/// <reference path="../"
$(document).ready(function () {

    // $('.pop-img').on("mouseenter", {pop: true, amt: 1.05}, popImg).on("mouseleave", {pop: false, amt: 1.05}, popImg);
    $('#js_skill').on('dblclick', function () {
        $('#js_hints').toggle();
    });

    setSkillRowWidth();
    setTitleSectionWidth();
    $(window).on('resize', (event) => {
        setSkillRowWidth();
        setTitleSectionWidth();
    });

});


function setTitleSectionWidth() {
    let width = 50;
    let height = 550;
    if (is_mobile) {
        width = 95;
        height = 400;
    }
    $('.top_container').css({
        'width': `${width}%`, 
        'height': `${height}px`
    });

    $('.profile').css('width', `${width}%`);

    $('.get-in-touch').css('width', `${width}%`);
}


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
