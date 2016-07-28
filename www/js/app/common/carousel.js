define(['jquery', 'model/carouselNoArrow'], function($, carousel){
    
    var data = {
        width: 960,
        height: 480,
        ct: $('div#carousel_top'),
        autoPlay: 'left',
        delay: 1000
    }
    new carousel(data);
});