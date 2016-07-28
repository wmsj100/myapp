define(['jquery'], function($){
    $(function(){
        var $tab = $('#nav_bar').find('div.drop_tab'),
            $list = $('ul.drop_wrap>li');

        $list.hover(function(){
            $(this).animate({'paddingLeft': '10', },300);
        }, function(){
            $(this).animate({'paddingLeft': '0'},300);
        })
        console.log($list[0])
    });
});