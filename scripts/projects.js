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

	$('.project_img').on('dblclick', (event) => {
		let element = $(event.target);

		// open image in new tab
		window.open(element.attr('src'));
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
    let width = 60;
	let window_width = $(window).width();
	let title_font = 3.5;
	let project_header = 100;

    if (is_mobile) {
        width = 95;
		title_font = 2.3;
		project_header = 75;
    } else if (window_width < 800) {
		width = 80;
	} else if (window_width < 1000) {
		width = 70;
	}
    $('.project_container').css('width', `${width}%`);

	$('.project_title').css('font-size', `${title_font}rem`);

	$('.project_header').css('height', `${project_header}px`);
}



