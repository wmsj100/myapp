module.exports = function(app) {

    app.get('/test', function(req, res) {
        res.render('tests/index');
    })

    app.get('/', function(req, res) {
        var Mock = require('mockjs'),
            data = null;
        data = {
            title: '婚淘淘',
            topbar: [{
                value: "首页",
                url: "/"
            }, {
                value: "登录",
                url: "/login"
            }, {
                value: "注册",
                url: "/regist"
            }, {
                value: "官网",
                url: "/gw"
            }],
            mobile: {
                value: '手机版',
                url: "#"
            }
        };
        // mock city数据
        data.city = Mock.mock({
            'default': '太原',
            'default_url': '@url("https")',
            'info|14': [{
                'city': '@city',
                'url': '@url("https","huntaotao")'
            }],
            'all': '@url("https")'
        });

        // mock 搜索栏的热点词汇
        data.search = Mock.mock({
            'hot|4-8': [{
                'name': '@cname',
                'url': '@url("https","huntaotao")',
                'boolean': '@boolean(1,3)'
            }]
        });

        // mock 商品分类的具体内容
        data.drop = Mock.mock({
            'menu': [{
                'name': '婚宴酒店',
                'info': [
                    {
                        'name': '星级酒店',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },
                    {
                        'name': '主题酒店',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            }]
        });
            // {
            //     'name': '婚庆服务', 
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // },{
            //     'name': '婚纱摄影', 
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // },{
            //     'name': '婚纱礼服',
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // },{
            //     'name': '婚礼必备/现场布置',
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // },{
            //     'name': '珠宝首饰/品牌商家',
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // },{
            //     'name': '家纺布艺',
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // },{
            //     'name': '礼品糖酒',
            //     'fOne|3-8': '@cword(4)',
            //     'fTwo|7-20': '@cword(4)',
            //     'fThree|3-10': '@cword(4)'
            // }]
               
        // })
        res.render('index', data);
        // res.send(data);
    });
}