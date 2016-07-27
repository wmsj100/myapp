require.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        jquery: 'jquery'
    }
});

require(['app/page/topBar', 'app/page/rightBar', 'app/page/header'], function(){

});