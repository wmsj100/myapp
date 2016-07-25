require.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    }
});

require(['app/test'], function(test){
    var a = test;
    console.log(a);
});