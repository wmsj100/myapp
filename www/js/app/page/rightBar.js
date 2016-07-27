define(['jquery'], function($) {
    $(function() {
        var $icon = $('#right_bar li.qq_icon'),
            $tab = $('#right_bar div.qq_tab');
        $icon.hover(function() {
            if($tab.is(":animated")){
                $tab.stop(true, true);
            }
            $tab.fadeIn();
        }, function() {
            $tab.fadeOut();
        });
    });
});