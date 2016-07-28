define(function() {
    function clearAnimate($node) {
        this.init($node);
    };
    clearAnimate.prototype.init = function($node) {
        // 清除动画积累
        if ($node.is(':animated')) {
            $node.stop(true, true);
        }
    }
    return clearAnimate;
})