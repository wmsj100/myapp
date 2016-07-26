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
