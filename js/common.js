$(document).ready(function() {

    $('.team__cards--slider').bxSlider({
        controls: false,
        keyboardEnabled: true
    });

    $('.testimonials__cards--slider').bxSlider({
        controls: false,
        keyboardEnabled: true,
        auto: true
    });

    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 500,
        easing: 'ease',
        offset: 0
    });

    let grid = $('.portfolio-works').isotope({
        itemSelector: '.portfolio-works__item',
        layoutMode: 'masonry',
        masonry: {
            horizontalOrder: true
        }
    });

    $('.portfolio__filter').click(function() {
        let filterValue = $( this ).attr('data-filter');
        grid.isotope({ filter: filterValue });

        $(".portfolio__filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });

    $('.top-menu__item').click(function() {
        $(".top-menu__item").removeClass("active-menu-link");
        $(this).addClass("active-menu-link");
    });
});

(function () {
    window.onload = function () {
        let map,
            point = { lat: 49.5687001, lng: 34.5835126 },
            iv1Content = document.querySelector('.info-window-1');

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: point,
                zoom: 16
            });
            let marker = new google.maps.Marker({
                position: point,
                map: map
            });
            // let infowindow = new google.maps.InfoWindow({
            //     content: iv1Content
            // });
            // marker.addListener('click', function () {
            //     infowindow.open(map, marker);
            //     iv1Content.style.opacity = 1;
            // });
        }

        initMap();
    }
})();
