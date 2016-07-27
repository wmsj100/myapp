define(['jquery'], function($) {
    $(function() {
        var $wrap = $('#header div.change_city'),
            $box = $wrap.find('.city_info');
        $wrap.hover(function() {
            if ($box.is(':animated')) {
                $box.stop(true, true);
            }
            $box.fadeIn('fast');
        }, function() {
            $box.fadeOut('fast');
        })
    })

});