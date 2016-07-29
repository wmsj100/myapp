define(['jquery','app/model/clearAnimate'], function($, clearAnimate){
    function carousel(data){
        this.init(data);
    }

    carousel.prototype.init = function(data){
        var $link;
        $.extend(this, data);
        this.tag = 0;
        this.timer = 0; // 创建定时器变量
        this.len = this.imgWrap.children().length;
        this.animateTime = 1000;
        this.width = this.ct.width();
        this.imgWrapRender();   // 添加首尾的俩个list的clone，
        this.btnOverEvent();    // 按钮事件绑定
        this.auto();    // 自动播放
    }

    carousel.prototype.imgWrapRender = function(){
        var imgWrap, $first, $last;
        imgWrap = this.imgWrap;
        $first = imgWrap.find('li:first').clone(true);
        $last = imgWrap.find('li:last').clone(true);
        imgWrap.append($first);
        imgWrap.prepend($last);
        imgWrap.css({'left': -this.width, 'width': (this.len +2) * this.width});
        this.btnWrap.find('a:first').addClass('active');
    }

    // 事件和触发容器分离
    carousel.prototype.btnOverEvent = function(){
        var index, me;
        me = this,

        this.btnWrap.on('mouseover', 'a', function(){
            index = me.btnWrap.find('a').index($(this));
            // me.btnAnimate(index);
            me.btnJudge(index);
            // console.log(index, me.tag)
            
        });
    }

    carousel.prototype.btnJudge = function(index){
        var num;
        num = index - this.tag;
        // console.log(num)
        if(num > 0){
            this.leftPlay(num);
        } else if(num < 0) {
            this.rightPlay(-num);
        } else {
            return null;
        }
    }

    carousel.prototype.btnAnimate = function(index){
        var $list, num;
        num = index | this.tag;
        $list = this.btnWrap.children().eq(num);
        $list.find('a').addClass('active')
            .parent().siblings()
            .find('a').removeClass('active');
    }

    // 自动轮播函数判断
    carousel.prototype.auto = function() {
        var me = this,
            direction = this.autoPlay;

        if (direction !== 'left' && direction !== 'right') {
            throw new Error('The value of autoPlay must be "left" or "right"');
        }

        this.timer = setTimeout(function() {
            if (direction === 'left') {
                me.leftPlay();
            } else {
                me.rightPlay();
            }
        }, me.delay + me.animateTime);
    }

    // 向左划动
    carousel.prototype.leftPlay = function(num){
        var me, num;
        me = this;
        num = num | 1;
        this.tag += num;

        this.stop();
         if(this.tag === this.len){
            this.tag = 0;
            this.btnAnimate();
            this.imgWrap.animate({'left': '-='  + this.width}, this.animateTime, function(){
                me.imgWrap.css({'left': -me.width});
            });
        } else {
            this.btnAnimate();
            new clearAnimate(this.imgWrap, true);
            this.imgWrap.animate({'left': '-=' + this.width * num}, this.animateTime);
        }
        this.auto();
    }

    // 向右划动
    carousel.prototype.rightPlay = function(num){
        var me, num;
        me = this;
        num = num |1;
        me.tag -= num;

        this.stop();
        if(this.tag === -1){
            this.tag = this.len - 1;
            // console.log(this.tag);
            this.btnAnimate();
            this.imgWrap.animate({'left': '+=' + this.width}, this.animateTime, function(){
                me.imgWrap.css({'left': -me.width * (me.len)});
            });
        } else {
            this.btnAnimate();
            new clearAnimate(this.imgWrap, true);
            this.imgWrap.animate({'left': '+=' + this.width * num}, this.animateTime);
        }
        this.auto();
    }

    // 停止自动轮播
    carousel.prototype.stop = function(){
        this.timer && clearTimeout(this.timer);
    }


    return carousel;
});