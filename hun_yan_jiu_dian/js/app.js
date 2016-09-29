// $(function(){
  var $layer1, $smallImg, $bigImg, $shouC, $ewmWrap, $ewmNormal, $ewmActive, $tab, $listImg, $aBtn, $bBtn, $aCont, $bCont, $tabComment, $zan, $hycdTab;

  $layer1 = $(".layer1");
  $smallImg = $layer1.find(".small img");
  $bigImg = $layer1.find(".big img");
  $shouC = $layer1.find("p.shouc span.collect");
  $ewmWrap = $layer1.find(".pay p.ewm");
  $ewmNormal = $ewmWrap.find("img.normal");
  $ewmActive = $ewmWrap.find("img.active");
  $tab = $(".layer3 .info").find(".tab");
  $listImg = $(".layer3 .list").find("img");  // 获取列表的图片
  $aBtn = $tab.find(".one");
  $bBtn = $tab.find(".two");
  $aCont = $(".layer3 .info").find(".cont-wrap .one-cont");
  $bCont = $(".layer3 .info").find(".cont-wrap .two-cont");
  $tabComment = $(".layer5 ul.tab");  // 获取评论列表的按钮
  $hycdTab = $(".layerHycd .tabCont");  // 获取婚宴tab按钮

  $smallImg.mouseover(function(){
    var num = $(this).data("num");
    $(this).addClass("img-active").siblings().removeClass("img-active");
    $bigImg.hide().eq(num).show();
  });

  $shouC.click(function(){
    var val = $(this).data("val");
    if(val == "empty"){
      $(this).text("★").data("val", "full");
    } else {
      $(this).text("☆").data("val", "empty");
    }
  });

  $ewmWrap.hover(function(){
    $ewmNormal.hide().siblings().show();
  }, function(){
    $ewmNormal.show().siblings().hide();
  });

  // tab切换效果
  $tab.on("mouseover", "span", function(){
    var bool, $cont, $img, src;
    bool = $(this).hasClass("one"); // 判断触发的是不是第一个按钮
    $cont = $(this).parent().siblings().children().eq(0); // 获取第一个内容
    $img = $(this).parents(".list").find("img");
    src = $(this).data("img");

    $(this).addClass("active").siblings().removeClass("active");
    if(bool){
      $cont.show().siblings().hide();
    } else {
      $cont.hide().siblings().show();
    }

    $img.attr("src", src);
    // console.log(src);
  });

  //  获取评论列表
  $tabComment.on("mouseenter", "li", function(){
    var num;
    num = $(this).data("num");

    $(this).addClass("active").siblings().removeClass("active");
    $(this).parents(".tabWrap").children(".tabCont").hide().eq(num-1).show();
  });
  // 婚宴菜单tab按钮事件
    $hycdTab.on("mouseenter", "span", function(e){
      var bool = $(this).hasClass("one");
      if(bool){
        $(this).addClass("active").siblings().removeClass("active").parent().next().children().eq(0).show().siblings().hide();
      } else {
        $(this).addClass("active").siblings().removeClass("active").parent().next().children().eq(1).show().siblings().hide();
      }
      console.log(this);
    });
// });