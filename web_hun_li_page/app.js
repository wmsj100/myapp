$(function() {
	var $layer8, $layer9, $bigImgWrap, $bigImgBg, $carousel, $imgWrap, $arrow, $arrowLeft, $arrowRight, $h3, $p, json, showNum, $img, len, i, lab, animateTime, $layer10, $layer10ListWrap, $layer11, $layer11ListWrap;
	$layer8 = $("#cont li.layer8");
	$layer9 = $("#cont li.layer9");
	$bigImgWrap = $layer9.find(".imgWrap");
	$bigImgBg = $layer9.find(".bg");
	$carousel = $layer8.find(".carousel");
	$imgWrap = $carousel.find(".imgWrap"); // 获取轮播
	$arrow = $layer8.find(".arrow");
	$h3 = $layer8.find("h3");
	$p = $layer8.find("p");
	$arrowLeft = $layer8.find(".arrowLeft");
	$arrowRight = $layer8.find(".arrowRight");
	animateTime = 500;
	lab = 1;

	$layer10 = $("#cont li.layer10");
	$layer10ListWrap = $layer10.find(".listWrap");

	$layer11 = $("#cont li.layer11");
	$layer11ListWrap = $layer11.find(".listWrap");

	// ajax获取 json 数据
	$.get("./data.json", "status=0", function(data) {
		json = data;
		if (json.status == 0) {
			showNum = data.count; // 显示的图片个数
			len = data.data.length; // 获取图片的总数
			loopImg(len, data.data, $imgWrap); // 遍历图片
			$img = $imgWrap.children();
			domStyle(); // 样式添加
			layer10Init(data.comments); // layer10 初始化
			layer11Init(data.recommend, data.price); // layer11 初始化
			layer11Style();
		}
	}, "json");

	// 遍历并添加图片节点
	function loopImg(len, arr, node) {
		var $fragment = $(document.createDocumentFragment());
		for (i = 0; i < len; i++) {
			$img = $("<img>").attr({
				"src": arr[i][0],
				"data-big": arr[i][1]
			});
			$img.css({
				"border": "solid 1px #6E99B2",
				"padding": "20",
				"marginRight": "20px",
				"width": "130",
				"height": "171",
				"borderRadius": "5"
			});
			$img.appendTo($fragment);
		}
		node.append($fragment);
	}

	// 通过js设置css的样式
	function domStyle() {
		var $carouselH, $imgW, imgWrapMarginTop, $carouselW, top, layer8H, layer8W, carouselTop, carouselLeft, h3H, pH, bigImgW, bigImgH, bodyW, bodyH;
		layer8W = $layer8.width(); // 获取总宽度
		layer8H = $layer8.outerHeight(); // 获取总高度
		h3H = $h3.outerHeight(true); // 获取h3的高度
		pH = $p.outerHeight(true); // 获取段落p的高度
		imgWrapMarginTop = parseInt($imgWrap.css("margin-top"));
		$carouselH = $img.outerHeight(true) + imgWrapMarginTop * 2;

		$imgW = $img.outerWidth(true);
		$carouselW = $imgW * 4;
		$carousel.height($carouselH);
		$carousel.width($carouselW);
		carouselLeft = (layer8W - $carouselW) / 2;
		carouselTop = h3H + pH;
		$layer8.outerHeight(layer8H + $carouselH);
		$carousel.css({
			"left": carouselLeft,
			"top": carouselTop
		});
		$imgWrap.width($imgW * len);
		top = ($carousel.height() + h3H + pH) / 2;
		$arrow.css("top", top);
		ImgEvent($imgWrap, $carouselW);
		ArrowEvent($carouselW);
	}

	// 事件代理--鼠标进入图片的事件
	function ImgEvent(node, carouselW) {
		node.on("mouseover", "img", function(e) {
			$(this).css({
				"padding": "19",
				"border": "solid 2px #ff1256"
			});
		});
		node.on("mouseout", "img", function() {
			$(this).css({
				"padding": "20",
				"border": "solid 1px #6E99B2"
			});
		});

		// 表格图片点击事件
		node.on("click", "img", function() {
			// 获取存储在img图片的big图片的地址信息
			var srcBig = $(this).attr("data-big");
			// 创建图片并且把图片添加到 $layer9 内部
			$bigImgWrap.html($("<img>").attr("src", srcBig).css({
				"width": "1200",
				"margin": "0 auto"
			}));

			// 表格大图样式
			bigImgW = $bigImgWrap.find("img").width();
			bigImgH = $bigImgWrap.find("img").height();
			$layer9.css({});

			$bigImgBg.css({
				"width": $(document).width(),
				"height": $(document).height()
			});
			$bigImgWrap.css({
				"left": ($(document).width() - bigImgW) / 2,
				"top": $(window).scrollTop() + 100
			});
			// 添加渐变显示
			$layer9.fadeIn(500);
		});
		// table大图点击隐藏自己
		$layer9.click(function() {
			// 添加渐变隐藏
			$(this).fadeOut(500);
		});
	}
	// 箭头事件
	function ArrowEvent(carouselW) {
		$arrowRight.click(function() {
			if (lab == 3) {
				$imgWrap.animate({
					"left": 0
				}, animateTime);
				lab = 1;
			} else {
				lab += 1;
				$imgWrap.animate({
					"left": "-=" + carouselW
				}, animateTime);
			}
		});

		$arrowLeft.click(function() {
			if (lab == 1) {
				$imgWrap.animate({
					"left": -carouselW * 2
				}, animateTime);
				lab = 3;
			} else {
				$imgWrap.animate({
					"left": "+=" + carouselW
				}, animateTime);
				lab -= 1;
			}
		});
	}
	// layer 10 初始化
	function layer10Init(arr) {
		var $img, $name, $date, $info, $wrap, len, i, $list, $fragment;
		$wrap = $layer10ListWrap;
		len = arr.length;
		$fragment = $(document.createDocumentFragment());
		for (i = 0; i < len; i++) {
			$list = $("<li>").addClass("list");
			$img = $("<img>").attr("src", arr[i]["img"]);
			$name = $("<span>").addClass("userName").text(arr[i]["name"]);
			$date = $("<span>").addClass("date").text(arr[i]["date"]);
			$info = $("<p>").addClass("info").text(arr[i]["info"]);
			$list.append($img);
			$list.append($name);
			$list.append($date);
			$list.append($info);
			$fragment.append($list);
		}
		$wrap.append($fragment);
	}
	// layer 11 初始化
	function layer11Init(imgArr, priceArr) {
		var $img, $p, $mark, $list, $fragment, $wrap, len, i, $price;
		$wrap = $layer11ListWrap;
		len = imgArr.length;
		$fragment = $(document.createDocumentFragment());
		// 遍历图片
		for (i = 0; i < len; i++) {
			$list = $("<li>").addClass("list");
			$img = $("<img>").attr("src", imgArr[i]["img"]).css({
				"width": "126",
				"height": "126"
			});
			$p = $("<span>").addClass("title").text(imgArr[i]["name"]);
			$mark = $("<span>").addClass("mark").text("+");
			$list.append($img);
			$list.append($p);
			$list.append($mark);
			$fragment.append($list);
		}

		$price = $("<li>").addClass("list lastList");
		// 遍历价格
		for (i = 0; i < priceArr.length; i++) {
			$p = $("<p>").addClass("wrap");
			$("<span>").addClass("priceName").text(priceArr[i]["name"]).appendTo($p);
			$("<span>").addClass("priceVal").text(priceArr[i]["price"]).appendTo($p);
			$p.appendTo($price);
		}
		$("<div>").addClass("btn").text("立即购买").appendTo($price);
		$("<div>").addClass("btn").text("加入购物车").appendTo($price);
		$fragment.append($price);
		$wrap.append($fragment);
	}
	// layer 11 样式调整
	function layer11Style() {
		var listWrap, list, wrapWidth;
		$layer11ListWrap.children().eq(5).find("span.mark").text("=");
		$listWrap = $("#footer ul.listWrap");
		$list = $listWrap.find("li.list");
		wrapWidth = $listWrap.width();
		$list.width(wrapWidth / 3);
	}
});