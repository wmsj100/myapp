define(["jquery"], function($) {
    function carousel(opts) {
        this.init(opts);
        this.default = {
        url: "http://localhost:3001/mockjs/demo3?callback=?",   // jsonp地址
        index: 1,   // 设置默认的显示页
        count: 8,   // 轮播图片数量
        tag: 10,    // 轮播起始图片标签
        width: 500, // 轮播窗口宽度
        height: 300,    // 轮播窗口高度
        arrowSize: 40,  // 箭头尺寸
        btnHeight: 8,   // 按钮的高度
        btnWidth: 40,       // 按钮的宽度
        btnMargin: 5,       // 按钮的间距
        btnBottom: 20,  // 按钮离底部的距离
        animateTime: 1000,  // 动画持续时间
        autoPlayDirection: "left",  // 自动播放的发现
        autoPlayDelay: 1000,        // 自动轮播的延迟时间
        ct: $(".ct1")   // 轮播容器
        }
    }

    carousel.prototype = {
        constructor: carousel,

        init: function(opts) {
            $.extend(this, opts);
            this.container = document.createDocumentFragment(); // 创建一个临时DOM容器
            // 设置carousel的高度和宽度，并且添加-carousel 属性值。
            this.ct.addClass("carousel").css({
                "height": this.height,
                "width": this.width
            });
            // 设置图片容器高度为图片高度，防止ul设置 absolute 之后高度塌陷
            this.imgBox = $("<div>").addClass("img_box").css("height", this.height)
                .appendTo(this.container);
            this.arrowLeft = $("<div>").addClass("arrow arrow_left").appendTo(this.container);
            this.arrowRight = $("<div>").addClass("arrow arrow_right").appendTo(this.container);
            this.btnWrap = $("<div>").addClass("btn_wrap").appendTo(this.container);
            this.timer = null;  // 自动循环时候的定时器标签

            this.callServer();  // 发起ajax请求，获取数据
            this.ct.append(this.container); // 把最后渲染的DOM添加到DOM树中
            // this.autoPlay();         // 自动播放事件
        },

        callServer: function() {
            var url = this.url,
                data = null,
                me = this;

            data = {
                tag: this.tag,  // 获取当前图片的标签
                count: this.count   // 获取轮播图片数量
            };

            $.getJSON(url, data, function(res) {
                me.eventUtil(res);  // 执行事件包函数
            });
        },

        eventUtil: function(res){
            this.imgRender(res);    // 图片框渲染
            this.arrowRender();     // 方向箭头渲染
            this.btnRender(res);    // 轮播按钮渲染
            this.arrowBind();           // 箭头事件绑定
            this.btnBind();             // 轮播按钮事件绑定
            this.autoPlay();            // 自动播放事件
        },

        imgRender: function(res) {
            var $wrap, $list, $link, $img, dataArr, len, i;

            dataArr = res; // 把res保存为局部变量，加快搜索速度
            $wrap = $("<ul>").addClass("listWrap");
            len = dataArr.length;

            for (i = 0; i < len; i++) {

                $img = $("<img>").attr("src", dataArr[i]["img"])
                    .css({
                        "width": this.width,
                        "height": this.height
                    }).data("title", dataArr[i]["name"]);
                // title值如果设置到图片上会影响体验，但是或许有用，所以保存到自定义属性-data-title中
                $link = $("<a>").attr("href", dataArr[i]["url"]).append($img);
                $list = $("<li>").addClass("img_list").attr("tag", dataArr[i]["tag"]).append($link);
                $wrap.append($list);
            }

            this.listClone($wrap); // 进行首尾节点的复制
            $wrap.appendTo(this.imgBox); // 渲染完成之后一次性加载到DOM
        },

        listClone: function($node) {
            var $first, $last, imgWidth, count;

            $first = $node.find("li:first").clone(true); // 设置为true，可以复制自定义属性
            $last = $node.find("li:last").clone(true); // 如果没有true，则自定义属性无法复制
            $node.prepend($last); // 加载到首部
            $node.append($first); // 加载到尾部
            imgWidth = parseInt(this.width);
            count = $node.children().length;
            // ul的宽度为图片数量 + 2 * 图片尺寸，向左偏移距离为默认显示图片位置
            $node.css({
                "width": imgWidth * count,
                "left": -(this.index * imgWidth)
            });
        },

        arrowRender: function() {
            var arrowLeft = this.arrowLeft,
                arrowRight = this.arrowRight,
                top;

            $("<span>").addClass("icon-circle-left").data("title", "上一个").appendTo(arrowLeft);
            $("<span>").addClass("icon-circle-right").data("title", "下一个").appendTo(arrowRight);
            top = (this.height - this.arrowSize) / 2;
            this.ct.find(".arrow").css("top", top).find("span").css({
                "font-size": this.arrowSize
            });
        },

        btnRender: function(res) {
            var $btnWrap = this.btnWrap,
                btnWidth = this.btnWidth,
                btnHeight = this.btnHeight,
                btnMargin = this.btnMargin,
                bottom = this.btnBottom,
                dataArr = res, 
                len = dataArr.length, 
                left, btnWrapWidth, $link, i;

            for (i = 0; i < len; i++) {
                $link = $("<a>").attr({
                    "href": dataArr[i]["url"],
                    "title": dataArr[i]["name"]
                }).css({
                    "width": btnWidth,
                    "height": btnHeight,
                    "marginRight": btnMargin,
                }).data("index", i + 1);

                $btnWrap.append($link);
            }

            btnWrapWidth = (btnWidth + btnMargin) * len;
            left = (this.width - btnWrapWidth - btnMargin)/2;
            $btnWrap.css({"left": left, "bottom": bottom})
                            .children().eq(this.index-1).addClass("active");
        },

        arrowBind: function(){
            var me = this;
            this.ct.on("mousedown.arrow", ".arrow", arrowEvent);

            function arrowEvent(){
                if($(this).hasClass("arrow_left")){
                    // 如果点击的是左按钮，触发左按钮事件
                    me.arrowLeftEvent();
                }
                if($(this).hasClass("arrow_right")){
                    // 如果点击的是右按钮，触发右按钮事件
                    me.arrowRightEvent();
                }
            }
        },

        arrowLeftEvent: function(num) {
            var $imgWrap = this.imgBox.find("ul"),
                num = num || 1,
                me = this;

            if ($imgWrap.is(":animated")) {
                $imgWrap.stop(true, true);
            }
            this.stopAutoPlay();    // 停止自动轮播
            if (this.index === 1) {
                this.index = this.count;
                $imgWrap.animate({
                    "left": "+=" + this.width * num
                }, this.animateTime, function() {
                    $(this).css({
                        "left": -me.count * me.width
                    });
                });
            } else {
                this.index -= num; // 索引递减
                $imgWrap.animate({
                    "left": "+=" + this.width * num
                }, this.animateTime);
            }
            // 按钮样式变化
            this.btnWrap.children().removeClass("active")
                .eq(this.index - 1).addClass("active");
            this.autoPlay();
        },

        arrowRightEvent: function(num) {
            var $imgWrap = this.imgBox.find("ul"),
                num = num || 1,
                me = this;
            
            this.stopAutoPlay();    // 停止自动轮播
            if ($imgWrap.is(":animated")) {
                $imgWrap.stop(true, true);  // stop(clearQueue, gotoEnd)
            }

            if (this.index === this.count) {
                this.index = 1;
                $imgWrap.animate({
                    "left": "-=" + this.width * num
                }, this.animateTime, function() {
                    $(this).css({
                        "left": -me.width
                    });
                });
            } else {
                this.index += num; // 索引递减
                $imgWrap.animate({
                    "left": "-=" + this.width * num
                }, this.animateTime);
            }
            // 按钮样式变化
            this.btnWrap.children().removeClass("active")
                .eq(this.index - 1).addClass("active");
            this.autoPlay();
        },
        btnBind: function(){
            var btnWrap = this.btnWrap,
                    toIndex, num, me = this;

            btnWrap.on("mouseover.btn", "a", btnEvent);

            function btnEvent(){
                toIndex = $(this).data("index");    // 目标元素的索引值
                num = toIndex - me.index;   // 获取目标索引值和当前索引值的差

                if (num > 0) {
                    me.arrowRightEvent(num);
                } else if (num < 0) {
                    me.arrowLeftEvent(-num);
                } else {
                    return null;
                }
            }
        },

        autoPlay: function(){
            var route = this.autoPlayDirection; // 获取自动播放的方向
                    delay = this.autoPlayDelay + this.animateTime,  // 获取自动播放的延时
                    routeError = "autoPlay(): The param autoPlayDirection's value must be left or right",
                    me = this;

                if(route === "left"){
                        this.timer = setTimeout(this.arrowLeftEvent.bind(me), delay);
                } else if (route === "right") {
                        this.timer = setTimeout(this.arrowRightEvent.bind(me), delay);
                } else {
                    throw new Error(routeError);
                }
        },

        stopAutoPlay: function(){
            this.timer && clearTimeout(this.timer);
        }
    }

    return carousel;
});