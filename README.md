This web project has the following setup:

* www/ - the web assets for the project
    * index.html - the entry point into the app.
    * app.js - the top-level config script used by index.html
    * app/ - the directory to store project-specific scripts.
    * lib/ - the directory to hold third party scripts.
* tools/ - the build tools to optimize the project.

To optimize, run:

    node tools/r.js -o tools/build.js

That build command creates an optimized version of the project in a
**www-built** directory. The app.js file will be optimized to include
all of its dependencies.

For more information on the optimizer:
http://requirejs.org/docs/optimization.html

For more information on using requirejs:
http://requirejs.org/docs/api.html

建议：
<!-- - 顶部条去除用户注册，功能合并到登陆功能中。 -->
- 添加注册图标
- 关于地址的图标位置可以重新考虑一下，
- 地址的详情城市很少，所以没必要全部罗列出来，只罗列有内容的城市。
- 切换地址之后，页面的内容并没有改变，建议添加关联数据，而且地址不要放置那么显眼
- 鼠标hover侧边栏图标，顶部手机版文字在前端，调整z-index;

---

### 项目记录

- div.change_city 切换城市 z-index: 20;
- div#right_bar 右侧边栏 z-index: 30;
- div.drop_tab 下拉菜单列表 z-index: 10;
- div.img_box  下拉菜单的背景图片 z-index: 9;
- div.carousel_top  轮播图片框 z-index: 1;   

---

### 项目bug

- 左侧下来菜单和右侧的弹出面板之间有10px的间隙，会出现闪动情况，后期修复。

---

### 项目总结

- 因为封装的模块函数都是通过原型链来实现继承，所以调用模块时候必须通过`new`的方式来实现。
- this.autoPlay();    // 自动播放函数 提示不是一个函数，为什么呢，因为我定义了参数 `this.autoPlay: 'left'` 所以，虽然我定义了俩次，但是后面的没有覆盖之前的。