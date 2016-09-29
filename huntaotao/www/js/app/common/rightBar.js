define(['jquery'], function($) {
    $(function() {
        var $qq_icon = $('#right_bar li.qq_icon'),
            $tab = $('#right_bar div.qq_tab'),
            $qr_code = $('#right_bar li.qr_code_icon'),
            $qr_img = $qr_code.find('div.qr_code_img'),
            $gotop = $('#right_bar li.gotop');
        $qq_icon.hover(function() {
            if($tab.is(":animated")){
                $tab.stop(true, true);
            }
            $tab.fadeIn('fast');
        }, function() {
            $tab.fadeOut('fast');
        });

        $qr_code.hover(function(){
            if($qr_img.is(":animated")){
                $qr_img.stop(true, true);
            }
            $qr_img.fadeIn('fast');
        }, function(){
            $qr_img.fadeOut('fast');
        });

        $gotop.click(function(){
            $(window).scrollTop(0); // 如何成为动画效果
        });
    });
});