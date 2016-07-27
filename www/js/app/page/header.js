define(['jquery'], function($) {
    $(function() {
        var $wrap = $('#header div.change_city'),
            $box = $wrap.find('.city_info'), // 获取城市详情框
            $search = $('#header div.search'), // 获取搜索框
            $hot = $search.find('.hot_word li'), // 获取热点词集合
            $btn = $search.find('.input_box a'), // 获取搜索按钮
            $input = $search.find('.input_box input'), // 获取输入框
            len,
            status, // 获取热点词的状态码
            $link;

        $wrap.hover(function() {
            if ($box.is(':animated')) {
                $box.stop(true, true);
            }
            $box.fadeIn('fast');
        }, function() {
            $box.fadeOut('fast');
        });

        // 给搜索框下面的关键字添加颜色,事件通过自执行函数来实现
        (function addAcrive() {
            len = $hot.length;
            while (len--) {
                $link = $($hot[len]).find('a');
                status = $link.data('status');
                if (status === true) {
                    $link.addClass('active');
                }
            }
        }());


        $btn.click(function() {
            if (!$input.val()) {    // 如果输入框内容为空，则不会触发ajax。
                return false;
            }
            $.get('http://www.huntaotao.com', {     // 否则发送ajax请求
                name: $input.val()
            })
            return false; // 阻止默认事件
        });


    });

});