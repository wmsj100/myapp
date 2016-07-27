define(['jquery'], function($) {
    $(function() {
        var $icon = $(".mobile .top_tag"),
            $tab = $('.mobile .imgbox');
        $icon.hover(function() {
            if ($tab.is(":animated")) {
                $tab.stop(true, true);
            }
            $tab.fadeIn();
        }, function() {
            $tab.fadeOut();
        }).find("a").click(function() {
            return false;
        });
    })
});