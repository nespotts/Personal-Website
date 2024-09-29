let is_mobile = false;
let platform_change = false;

$(document).ready(function () {
    updateCopyright();
    
    isMobile();
    setInterval(isMobile, 50);


});

function updateCopyright() {
    let year = new Date().getFullYear();
    $('.copyright').text(`© ${year} Nathan Spotts.`);
}

function isMobile() {
    let platform = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log(platform);
    
    if (platform != is_mobile) {
        platform_change = true;
        is_mobile = platform;
    } else {
        platform_change = false;
    }

    if (!is_mobile) {
        $('.menu').show();
        $('.mobile-menu').hide();
    }
    
    if (!platform_change) {
        return;
    }

    

    if (is_mobile) {
        $('.menu').hide();
        $('.mobile-menu').show();

        $('.mobile-menu').on('click', (event) => {
            event.stopPropagation();
            console.log('hover');
            $('.menu').slideDown(400);
        });
    
        $('body').on('click', (event) => {
            console.log('leave');
            $('.menu').slideUp(400);
        });
    } else {
        $('.menu').show();
        $('.mobile-menu').hide();

        $('.mobile-menu').off('mouseover');
        $('.menu').off('mouseleave');
    }
}

