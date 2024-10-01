$(document).ready(function () {

    setIframeWidths();

    initializeEventHandlers();
});


function initializeEventHandlers() {
    $(window).on('resize', (event) => {
        setIframeWidths();
    });
    setupScrollEvents();

    setProjectWidths();
    $(window).on('resize', (event) => {
        setProjectWidths();
    });
}

function setupScrollEvents() {
    $('.project_link').each((index, element) => {
        let element_id = $(element).attr('id');
        let scroll_id = element_id.replace('_link', '');
        $(element).on('click', (event) => {
            scrollToELement($('#' + scroll_id), 100);
        });
    })
}


function setIframeWidths() {
    let width = $('.iframe_container').width();
    $('.iframe_container').height(width * 3 / 4);
    $('.iframe_container iframe').height(width * 3 / 4).css('margin', '0px');
}


function scrollToELement(element, offset) {
    window.scrollTo({
        top: element.offset().top - offset,
        behavior: 'smooth'
    });
}


function setProjectWidths() {
    let width = 50;
    if (is_mobile) {
        width = 90;
    }

    $('.project_container').css('width', `${width}%`);
}



