define(['jquery', 'model/carouselNoArrow'], function($, carousel){
    $(function(){
        var $ct, $imgWrap, $btnWrap, data;
    $ct = $('#carousel_top');
    $imgWrap = $ct.find('div.img_wrap');
    $btnWrap = $ct.find('div.btn_wrap');
    var data = {
        ct: $ct,
        imgWrap: $imgWrap,
        btnWrap: $btnWrap,
        autoPlay: 'left',
        delay: 1000
    }
    new carousel(data);
    })
});