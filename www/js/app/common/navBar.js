define(['jquery', 'app/model/clearAnimate'], function($, clearAnimate){
    $(function(){
        var $tab = $('#nav_bar').find('div.drop_tab'),
            $list = $('ul.drop_wrap>li'),
            $menu = $('#nav_bar').find('div.nav_menu'),
            $link = $menu.find('a'),
            $imgBox = $('#nav_bar').find('div.img_box'),
            $imgList = $imgBox.find('li'),
            $img = $imgBox.find('img'),
            index;

        $list.hover(function(){
            // 获取当前list的下标
            index = $list.index($(this));
             
            new clearAnimate($(this), true);  // 清除左侧面板按钮的动画积累
            new clearAnimate($imgList, true); // 清除图片框的动画积累

            // 给列表按钮添加左偏移动画效果
            $(this).animate({'paddingLeft': '10', },300);
            $(this).find('ul.tab_right_box').show()
                    .end()  // 返回上一级
                    .siblings() // 兄弟元素
                    .find('ul.tab_right_box').hide();
            $imgBox.show(); // 进入list按钮时候显示图片容器
            $imgList.eq(index).fadeIn()
                    .siblings().fadeOut();
        }, function(){
            $(this).animate({'paddingLeft': '0'},300);
            $(this).find('ul.tab_right_box').hide();
            // $imgList.hide();
        });

        $imgList.mouseout(function(){
            // 鼠标离开图片容器时候隐藏图片容器
            $(this).hide().parents('div.img_box').hide();
        });

        $link.hover(function(){

            if($(this).is(':animated')){
                $(this).stop(true, true);
            }
            $(this).animate({'marginTop': '-3'}, 200);
        }, function(){
            $(this).animate({'marginTop': 0}, 200);
        })
    });
});