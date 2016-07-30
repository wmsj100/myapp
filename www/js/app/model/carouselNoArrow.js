define(['jquery','app/model/clearAnimate'], function($, clearAnimate){
    function carousel(data){
        
        var config = {
            animateTime: 1000,    // 设置动画持续时间
            tag: 0,   // 当前轮播图片的标号，保持为全局变量
            timer: 0, // 创建定时器变量
            len: data.imgWrap.children().length,  // 获取按钮的length
            width: data.ct.width()  // 获取轮播的宽度
        }
        this.init(config,data);
    }

    carousel.prototype.init = function(config,data){
        $.extend(this, config, data);   // 把所有的参数都合并到this
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
        imgWrap.css({'left': -this.width, 'width': (this.len +2) * this.width});    // 轮播定位
        this.btnWrap.find('a:first').addClass('active');    // 按钮激活状态
    }

    // 事件和触发容器分离
    carousel.prototype.btnOverEvent = function(){
        var index, me;
        me = this,
        // 通过事件代理的模式绑定事件
        this.btnWrap.on('mouseover', 'a', function(){
            index = me.btnWrap.find('a').index($(this));    // 获取目标按钮的索引值
            me.btnJudge(index); // 通过比较当前和目标的索引值，判断要采取的行动
            // console.log(index)
        });
    }

    carousel.prototype.btnJudge = function(index){
        var num;
        num = index - this.tag;
        
        if(num > 0){    // 如果目标索引值大，则轮播会向左划动，划动的值是num*width
            this.leftPlay(num);
        } else if(num < 0) {    // 如果目标索引值小，则轮播会向右滑动
            this.rightPlay(-num);
        } else {
            return null;    // 否则不做处理
        }
    }

    // 向左划动
    carousel.prototype.leftPlay = function(num){
        var me, num;
        me = this;
        num = num || 1;  // 如果没有传递num，则默认为1 -- 
        this.tag += num;    // 更新当前轮播图片索引值
        this.stop();    // 停止自动轮播
        // 我当前的选择是先改变按钮的状态，再进行轮播动画。
         if(this.tag === this.len){ // 如果当前索引值等于7，即处于最后一张图片
            this.tag = 0;   // 更新索引值为0，即回到第一张图片
            this.btnAnimate();  // 更新按钮的激活状态
            new clearAnimate(this.imgWrap, true);   // 清除动画积累
            this.imgWrap.animate({'left': '-='  + this.width}, this.animateTime, function(){
                // 动画会继续向左移动一个图片宽度，但是动画结束之后，迅速改变图片位置
                me.imgWrap.css({'left': -me.width});
            });
        } else {
            this.btnAnimate();
            new clearAnimate(this.imgWrap, true);   // 清除动画积累
            this.imgWrap.animate({'left': '-=' + this.width * num}, this.animateTime);
        }
        this.auto();    // 开始自动轮播
    }

    // 向右划动 过程和向左类似
    carousel.prototype.rightPlay = function(num){
        var me, num;
        me = this;
        num = num || 1;
        me.tag -= num;

        this.stop();
        // console.log(this.tag, this.len, num)
        if(this.tag === -1){
            this.tag = this.len - 1;
            this.btnAnimate();
            new clearAnimate(this.imgWrap, true);
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
    // 更新按钮的激活状态
    carousel.prototype.btnAnimate = function(index){
        var $list, num;
        num = index | this.tag; // 如果没有输入，则取值当前索引值
        $list = this.btnWrap.children().eq(num);
        $list.find('a').addClass('active')  // 按钮的索引值更新过程
            .parent().siblings()
            .find('a').removeClass('active');
    }

    // 自动轮播函数判断
    carousel.prototype.auto = function() {
        var me = this,
            direction = this.autoPlay;  // 获取轮播的方向
        // 方向只能是向左或者是向右，否则报错
        if (direction !== 'left' && direction !== 'right') {
            throw new Error('The value of autoPlay must be "left" or "right"');
        }

        this.timer = setTimeout(function() {    // 设置延时
            if (direction === 'left') {
                me.leftPlay();  // 如果是向左，则触发左的事件
            } else {
                me.rightPlay(); // 否则触发右的事件
            }
        }, me.delay + me.animateTime);  // 这里延时需要加动画的时间，具体原因暂时不知道
    }

    // 停止自动轮播
    carousel.prototype.stop = function(){
        this.timer && clearTimeout(this.timer); 
    }

    return carousel;
});