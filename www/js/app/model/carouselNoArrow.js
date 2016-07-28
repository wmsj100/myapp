define(['jquery','model/clearAnimate'], function($, clearAnimate){
    function carousel(data){
        this.init(data);
    }

    carousel.prototype.init = function(data){
        var $link;
        $.extend(this, data);
        this.tag = 0;
        this.width = this.imgWrap.width();
        // this.height = this.ct.height();
        // $link = this.btnWrap.find('a');
        // this.btnSize = $link.width();
        // this.btnMargR = parseInt($link.css('margin-right'));
        // this.btnBorderSize = parseInt($link.css('border-right-width'));
        // this.imgRender();   // 图片的重新渲染
        // this.btnRender();    // 按钮的渲染
        this.btnEvent();
    }

    // carousel.prototype.imgRender = function(){
    //     var $imgWrap, width, len;
    //     $imgWrap = this.imgWrap;
    //     width = this.width;
    //     len = $imgWrap.find('li').children().length;
    //     $imgWrap.css({'width': len * width, 'left': 0});
    // }

    // carousel.prototype.btnRender = function(){
    //     var len, btnWrapWidth;
    //     len = this.btnWrap.find('li').length;
    //     btnWrapWidth = this.btnMargR * (len -1) + (this.btnSize + this.btnBorderSize * 2) * len;
    //     this.btnWrap.css({'right': (this.width - btnWrapWidth)/2});
    // }

    carousel.prototype.btnEvent = function(){
        var me = this,
            index;
        this.btnWrap.on('mouseover', 'a', function(){
            index = me.btnWrap.find('a').index($(this));
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
            clearAnimate(me.imgWrap);
            me.imgWrap.animate({'left': -this.width * index}, 1000);
            // me.imgWrapEvent(index);
        });
    }

    // carousel.prototype.imgWrapEvent = function(index){
    //     this.imgWrap.animate({'left': -this.width * index}, 1000);
    // }

    return carousel;
});