require.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        common: '../app/common',
        model: '../app/model',
        page: '../app/page',
        jquery: 'jquery'
    }
});

require(['common/topBar']);   // 加载顶部条模块
require(['common/rightBar']); // 加载右侧边栏模块
require(['common/header']);   // 加载header区模块
require(['common/navBar']);   // 加载导航栏模块
require(['common/carousel']); // 加载轮播模块
require(['common/process']);    // 加载婚礼流程模块