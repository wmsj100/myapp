module.exports = function(app) {

    // app.get('/test', function(req, res) {
    //     res.render('tests/index');
    // })

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
            'menu': [
            {
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
               
            },{
                'name': '婚庆服务',
                'info': [
                    {
                        'name': '婚礼策划',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '化妆服务',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '其他服务',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            },{
                'name': '婚纱摄影',
                'info': [
                    {
                        'name': '婚纱摄影',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '旅拍区域',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '蜜月旅游',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            },{
                'name': '婚纱礼服',
                'info': [
                    {
                        'name': '新娘婚纱',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '女士礼服',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '旗袍',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '男士礼服',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '婚纱配饰',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '童装',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            },{
                'name': '婚礼必备/现场布置',
                'info': [
                    {
                        'name': '婚礼必备',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '现场布置',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            },{
                'name': '珠宝首饰/品牌商家',
                'info': [
                    {
                        'name': '品牌商家',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '戒指',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '项链/吊坠',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '手链/手镯',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '耳环/耳钉',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            },{
                'name': '家纺布艺',
                'info': [
                    {
                        'name': '结婚套件',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '被子系列',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '枕芯系列',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '床垫系列',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '靠垫饰品系列',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '洗舆品系列',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            },{
                'name': '礼品糖酒',
                'info': [
                    {
                        'name': '生活用品',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '定制用品',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '饰品类',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    },{
                        'name': '工艺摆件',
                        'data|3-8': [{
                            'name': '@cword(4)',
                            'url': '@url("http", "huntaotao")'
                        }]
                    }
                ]
               
            }
            ]
        });
        
        data.nav = [{
            'name': '首页',
            'url': '#'
        },{
            'name': '婚宴',
            'url': '#'
        },{
            'name': '婚庆',
            'url': '#'
        },{
            'name': '影楼',
            'url': '#'
        },{
            'name': '婚纱',
            'url': '#'
        },{
            'name': '礼服',
            'url': '#'
        },{
            'name': '婚品',
            'url': '#'
        },{
            'name': '珠宝',
            'url': '#'
        },{
            'name': '家纺',
            'url': '#'
        },{
            'name': '糖酒',
            'url': '#'
        }];

        data.nav.imgBox = [{
            'img': 'img/common/nav/gg_xk.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_cz.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_jd.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_hs.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_xj.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_ts.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_zhubao.jpg',
            'url': '#'
        },{
            'img': 'img/common/nav/gg_dj.jpg',
            'url': '#'
        }];

        data.carousel_top = [{
            'img': 'img/common/carousel_top/131124252958483466.jpg',
            'url': '#'
        },{
            'img': 'img/common/carousel_top/131126910221693527.jpg',
            'url': '#'
        },{
            'img': 'img/common/carousel_top/131124320363521718.jpg',
            'url': '#'
        },{
            'img': 'img/common/carousel_top/131124432136186806.jpg',
            'url': '#'
        },{
            'img': 'img/common/carousel_top/1311242564767849401.jpg',
            'url': '#'
        },{
            'img': 'img/common/carousel_top/131124317206482078.jpg',
            'url': '#'
        },{
            'img': 'img/common/carousel_top/131031763274984078.jpg',
            'url': '#'
        }];

        data.process = {
            'one': '#',
            'two': '#',
            'three': '#',
            'four': '#',
            'five': '#',
            'six': '#',
            'seven': '#',
            'eight': '#'
        }

        data.floor = Mock.mock({
            'title': {
                'head': '1F',
                'strong': '婚宴',
                'span': 'WEDDING BANQUET'
            },
            'nav': {
                'count|1-3': [{
                    'name': '@cword(4)',
                    'info|3-8': [{
                        'name': '@cword(4)',
                        'url': '@url("https", "huntaotao")'
                    }]
                }]
            }
        });
        
        res.render('index', data);
        // res.send(data);
    });

    // app.get('/test', function(req, res){
    //     var data = {};
    //     data.process = {
    //         one: '#',
    //         two: '#',
    //         three: '#',
    //         four: '#',
    //         five: '#',
    //         six: '#',
    //         seven: '#',
    //         eight: '#'
    //     };
    //     res.render('./common/process', data);
    // });
}