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
- div.imgbox 手机图标二维码框 z-index: 40;
- div.drop_tab 下拉菜单列表 z-index: 10;
- div.img_box  下拉菜单的背景图片 z-index: 9;
- div.carousel_top  轮播图片框 z-index: 1;   

---

### 项目bug

- 左侧下来菜单和右侧的弹出面板之间有10px的间隙，会出现闪动情况，后期修复。
- 轮播的选择按钮个别按钮第一次无法选择

---

### 脑残错误

`num = num | 1;  // 如果没有传递num，则默认为1 -- `
上面这个是在轮播的`leftPlay`函数中的一个`num`参数，当num为偶数时候就会加1，奇数时候是正常值，这个怪异的bug找了很长时间，最后我决定不用这样的判断方式了，直接通过输入值来进行事件触发，这样就正常了。忽然我发觉这个不是- 或操作符--`||`， 而是--位操作符 -'|',因为少了一竖，或操作符就变成位操作符了，而对于位操作符接触甚少。

---

### 项目总结

- 因为封装的模块函数都是通过原型链来实现继承，所以调用模块时候必须通过`new`的方式来实现。
- this.autoPlay();    // 自动播放函数 提示不是一个函数，为什么呢，因为我定义了参数 `this.autoPlay: 'left'` 所以，虽然我定义了俩次，但是后面的没有覆盖之前的。
- 对于轮播图片，必须设置ul的宽度，即便css中设置ul宽度为 `width * 7`, 然后在`js`中设置宽度为`width * 9`.这样也不会出现画面闪动情况。
- 既然知道ul的宽度是固定的，那么为什么不直接在`css`中一次性就设置好，不用在`js`中添加代码，虽然这样是写死的代码，但是代码少，
- 可以分别在`css`和`js`中都进行初始样式的控制，这样可以避免因为`js`加载的延迟而导致页面无样式的情况。但这只限于初始样式。
- 如果是要单独测试或者创建一个模块，可以通过路由创建一个新接口来只查看这个模块的内容。当内容修改或创建完成再切回主页面`index`.这样就省去了隐藏其他模块。

```javascript
 app.get('/test', function(req, res){
    var data = {};
    data.process = {
        one: '#',
        two: '#'
    };
    res.render('./common/process', data);
})
```



