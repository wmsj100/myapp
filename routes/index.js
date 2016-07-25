module.exports = function(app){

    app.get('/test', function(req, res){
        res.render('tests/index');
    })

    app.get('/', function(req, res){
        var Mock = require("mockjs"),
                data = null;

        data = Mock.mock({
            title: '婚淘淘',
            topbar: [{
                value: "返回首页",
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
                apple: "@image('100x100')",
                android: "@image('100x100')"
            }
        });

        res.render('index', data);
    });
}