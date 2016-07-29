define(['jquery', 'model/carouselNoArrow'], function($, carousel){
        var $ct, $imgWrap, $btnWrap, data;
    $ct = $('#carousel_top');
    $imgWrap = $ct.find('.img_wrap');
    $btnWrap = $ct.find('.btn_wrap');
    var data = {
        ct: $ct,
        imgWrap: $imgWrap,
        btnWrap: $btnWrap,
        autoPlay: 'right',
        delay: 1000
    }
    new carousel(data);
});