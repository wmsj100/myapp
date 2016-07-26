define(['jquery'], function($){
    $('.mobile a').click(function(){
        return false;   // 禁用链接的点击功能
    }).hover(function(){
        $('.imgbox').show();
    }, function(){
        $('.imgbox').hide();
    });
});