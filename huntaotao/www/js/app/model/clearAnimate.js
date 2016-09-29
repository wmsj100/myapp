define(function() {
    function clearAnimate($node, status) {
        var num = arguments.length;
        if(num !== 2){
            throw new Error('Arguments must be two');
        }
        if(typeof status !== 'boolean'){
            throw new Error('The arguments of two must be boolean');
        }
        if(!!status){
            this.double($node);
        } else {
            this.single($node);
        }
    };
    clearAnimate.prototype.single = function($node) {        
        // 清除动画积累
        if ($node.is(':animated')) {
            $node.stop(true);
        }
    }
    clearAnimate.prototype.double = function($node) {        
        // 清除动画积累
        if ($node.is(':animated')) {
            $node.stop(true, true);
        }
    }
    return clearAnimate;
})