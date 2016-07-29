define(['jquery','app/model/clearAnimate'], function($, clearAnimate){
    function carousel(data){
        this.init(data);
    }

    carousel.prototype.init = function(data){
        var $link;
        $.extend(this, data);
        this.tag = 0;
        this.timer = 0; // 创建定时器变量
        this.animateTime = 1000;
        this.width = this.ct.width();
        this.imgWrapRender();   // 添加首尾的俩个list的clone，
        this.btnOverEvent();    // 按钮事件绑定
        this.auto();    // 自动播放
    }

    carousel.prototype.imgWrapRender = function(){
        var imgWrap, $first, $last, len;
        imgWrap = this.imgWrap;
        $first = imgWrap.find('li:first').clone(true);
        $last = imgWrap.find('li:last').clone(true);
        imgWrap.append($first);
        imgWrap.prepend($last);
        len = imgWrap.children().length;
        imgWrap.css({'left': -this.width, 'width': len * this.width});
        this.btnWrap.find('a:first').addClass('active');
        this.len = len; // 把len转换为全局变量
    }

    // 事件和触发容器分离
    carousel.prototype.btnOverEvent = function(){
        var me = this;

        this.btnWrap.on('mouseover', 'a', function(){
            me.tag = me.btnWrap.find('a').index($(this));
            me.btnAnimate();
        });
    }

    carousel.prototype.btnAnimate = function(){
        var $list;
        console.log(this.tag);
        $list = this.btnWrap.children().eq(this.tag);
        $list.find('a').addClass('active')
            .parent().siblings()
            .find('a').removeClass('active');
    }

    // 自动轮播函数判断
    carousel.prototype.auto = function(){
        var me = this,
            direction = this.autoPlay;

        if(direction === 'left'){
            this.leftPlay();
        } else if(direction === 'right') {
            this.rightPlay();
        } else {
            throw new Error('The value of autoPlay must be "left" or "right"');
        } 
    }

    // 向左划动
    carousel.prototype.leftPlay = function(){
        var me;
        me = this;
        
        this.timer = setTimeout(function(){
            me.tag++;
            me.tagJudge('left');
        }, me.delay + me.animateTime);
    }

    // 向右划动
    carousel.prototype.rightPlay = function(){
        var me = this;
        
        this.timer = setTimeout(function(){
            me.tag--;
            me.tagJudge('right');
        }, me.delay + me.animateTime);
    }

    carousel.prototype.tagJudge = function(status){
        // this.stop();  

        if(status === 'left'){
            this.autoLeft();
        } else if(status === 'right') {
            this.autoRight();
        } else {
            throw new Error('tagJudge(): the value of status must be "left" of "right"');
        }
    }

    carousel.prototype.autoLeft = function(){
        var me = this;
        // console.log('left')
        // console.log(this.tag, this.len)
        this.stop();
        if(this.tag === this.len){
            this.tag = 0;
            this.btnAnimate();
            this.imgWrap.animate({'left': '-='  + this.width}, this.animateTime, function(){
                me.imgWrap.css({'left': -me.width});
            });
        } else {
            this.btnAnimate();
            this.imgWrap.animate({'left': '-=' + this.width}, this.animateTime);
        }
        this.auto();
    }

    carousel.prototype.autoRight = function(){
        var me = this;
        // console.log('right')
        // console.log(this.tag, this.len, this.width)
        this.stop();
         if(this.tag === -1){
            this.tag = this.len - 3;
            // console.log(this.tag);
            this.btnAnimate();
            this.imgWrap.animate({'left': '+=' + this.width}, this.animateTime, function(){
                me.imgWrap.css({'left': -me.width * (me.len - 2)});
            });
        } else {
            this.btnAnimate();
            this.imgWrap.animate({'left': '+=' + this.width}, this.animateTime);
        }
        this.auto();
    }

    // 停止自动轮播
    carousel.prototype.stop = function(){
        this.timer && clearTimeout(this.timer);
    }


    return carousel;
});