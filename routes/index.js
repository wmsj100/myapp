module.exports = function(app){

    app.get('/test', function(req, res){
        res.render('tests/index');
    })

    app.get('/', function(req, res){
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

        data.city = Mock.mock({
            'default': '太原',
            'default_url': '@url("https")',
            'info|14': [{
                'city': '@city',
                'url': '@url("https")'
            }]
        });
        res.render('index', data);
    });
}