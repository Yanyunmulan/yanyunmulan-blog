export default [
    {
        "status": 200,
        "message": "查询成功",
        "data": {
            "total": 14,
            "blogList": [
                {
                    "id": "65f596ab909dd1fe50afe984",
                    "title": "我的开放式中后台管理系统",
                    "abstract": "有兴趣的可以注册账号进去看看。可以用我的系统写自己的内容，用户有写文章和文章管理功能，Github有前台源码。",
                    "cover": "static/IMG_4754.JPG",
                    "content": "中后台的功能具体如下：\n\n* 用户\n  * 注册登录（以后会接入第三方登录，微信、手机号、Github等）\n* 动态菜单\n  * 根据角色的不同动态渲染菜单和路由\n* 角色管理（RBAC模式）\n* 博客管理\n  * 博客的增删改查\n* 博客分类管理\n  * 分类的增删改查\n* 访客数据展示\n  * 记录访客的地址、设备、浏览器、访问时间、访问次数等信息\n  * 访客位置信息可视化（包括图表，地图）\n  * 访客的设备比例可视化（待完善...）\n* 博客数据展示\n  * 博客访问数量可视化（待完善...）\n\n中后台地址：[点击这里](https://leslieblog.site:8081)\n\n我的 [Github](https://github.com/Leslie622) 主页\n",
                    "draft": "",
                    "category": "关于网站",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 28,
                    "isOriginal": true,
                    "isSticky": true,
                    "createdAt": "2024-03-16",
                    "updatedAt": "2024-03-19"
                },
                {
                    "id": "65f5a234909dd1fe50afeb60",
                    "title": "关于网站",
                    "abstract": "接触前端也挺久了，一直都想做一个属于自己的网站。\n\n其实之前也做过两版，记得第一版是在三年前，当时技术栈不够，后端没有自己写，前端也马马虎虎，不久之后就废弃了。\n\n第二版也距今也有很长时间了，后端是自己写的，前台也加了一些功能，但是过于花哨，看久了就看厌了，加上自己写文章的频率不算高，慢慢的也就废弃了。\n\n说起来挺惭愧的，时间也过得真快。",
                    "cover": "static/IMG_4754.JPG",
                    "content": "接触前端也挺久了，一直都想做一个属于自己的网站。\n\n其实之前也做过两版，记得第一版是在三年前，当时技术栈不够，后端没有自己写，前端也马马虎虎，不久之后就废弃了。\n\n第二版也距今也有很长时间了，后端是自己写的，前台也加了一些功能，但是过于花哨，看久了就看厌了，加上自己写文章的频率不算高，慢慢的也就废弃了。\n\n说起来挺惭愧的，时间也过得真快。\n\n如今到了毕业的时候，借着写毕设，想着把网站重构一下，顺便也熟悉一下 Vue3 + TS 的生态，花了一段时间，现在终于完成了。\n\n也算是在互联网上有自己的一个小窝了。\n\n在这里，不仅会发布技术文章，也会分享自己的心情，生活状态，分享音乐、书籍、电影等等。\n\n在这里，记录成长，期待下一个三年。\n\n最后谈谈对该站未来的展望吧：\n\n* 技术方面：目前后端是用 Express 写的，后面打算用 Nest 重构。前端目前用的 Vue，后面会尝试一下 Nuxt 和 Astro。\n* 功能方面：\n  * 评论和留言功能有时间就会加\n  * 想做一个炫酷的网站首页（使用 THERR 或者 GSAP 等 3D、动画库）\n",
                    "draft": "",
                    "category": "关于网站",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 33,
                    "isOriginal": true,
                    "isSticky": true,
                    "createdAt": "2024-03-16",
                    "updatedAt": "2024-03-19"
                },
                {
                    "id": "65ddbfc48559c325f7d597c3",
                    "title": "Web Worker",
                    "abstract": "HTML5提供并规范了Web Worker这样一套API，它允许一段JavaScript程序运行在主线程之外的另外一个线程（Worker线程）中，同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。DOM限制：无法读取主线程的DOM对象，无法使用 document window 等对象",
                    "cover": "static/IMG_4754.JPG",
                    "content": "## 定义\n\nHTML5 提供并规范了 Web Worker 这样一套 API，它允许一段 JavaScript 程序运行在主线程之外的另外一个线程（Worker 线程）中\n\n## 限制\n\n* 同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源\n* DOM限制：无法读取主线程的DOM对象，无法使用 document window 等对象\n\n## 基本API\n\n* worker.postMessage\n* worker.terminate\n* worker.onmessage\n* worker.onerror\n\n## 使用例子\n\n```javascript {25,26,27,28}\n <!DOCTYPE html>\n <html lang=\"en\">\n   <head>\n     <meta charset=\"UTF-8\" />\n     <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n     <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n     <title>worker计算</title>\n   </head>\n   <body>\n     <div>计算从 1 到给定数值的总和</div>\n     <input type=\"text\" placeholder=\"请输入数字\" id=\"num\" />\n     <button onclick=\"calc()\">开始计算</button>\n     <span>计算结果为：<span id=\"result\">-</span></span>\n \n     <div>在计算期间你可以填XX表单</div>\n     <input type=\"text\" placeholder=\"请输入姓名\" />\n     <input type=\"text\" placeholder=\"请输入年龄\" />\n \n     <script>\n       function calc() {\n         const num = parseInt(document.getElementById('num').value)\n         let result = 0\n         console.log(performance);\n         let startTime = performance.now()\n         // 计算求和（模拟复杂计算）\n         for (let i = 0; i <= num; i++) {\n           result += i\n         }\n         // 由于是同步计算，在没计算完成之前下面的代码都无法执行\n         const time = performance.now() - startTime\n         console.log('总计算花费时间:', time)\n         document.getElementById('result').innerHTML = result\n       }\n     </script>\n   </body>\n </html>\n```\n\n```javascript {2,9,10,11}\n <script>\n const worker = new Worker('./worker.js')\n \n function calc() {\n     const num = parseInt(document.getElementById('num').value)\n     worker.postMessage(num)\n }\n \n worker.onmessage = function (e) {\n     document.getElementById('result').innerHTML = e.data\n }\n </script>\n```\n\n```javascript {14,15,16}\nfunction calc(num) {\n  let result = 0\n  let startTime = performance.now()\n  // 计算求和（模拟复杂计算）\n  for (let i = 0; i <= num; i++) {\n    result += i\n  }\n  // 由于是同步计算，在没计算完成之前下面的代码都无法执行\n  const time = performance.now() - startTime\n  console.log('总计算花费时间:', time)\n  self.postMessage(result)\n}\n\nself.onmessage = function (e) {\n  calc(e.data)\n}\n```\n",
                    "draft": "",
                    "category": "HTML",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 156,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2023-02-27",
                    "updatedAt": "2024-03-18"
                },
                {
                    "id": "65f2cbc38559c325f7d5b4b4",
                    "title": "Vue中使用自定义指令监听元素是否在可视区域内",
                    "abstract": "最近做一个滚动加载给元素添加动画的效果，使用到了IntersectionObserver和Element.animate这两个API，记录一下",
                    "cover": "static/IMG_4754.JPG",
                    "content": "# Intersection Observer API\n\n这个 API 说旧不旧，说新也不新，在监听元素是否在可视区域的一些方案中，对比监听 scrollTop 等，算是很好用的 API 了。兼容性方面除了 IE 基本都还行，具体看[这里](https://caniuse.com/mdn-api_intersectionobserver)。\n\n该 API 有一些家族成员，除了 IntersectionObserver() 构造函数，IntersectionObserver 对象，还有 IntersectionObserverEntry 对象，以及他们的属性、参数、方法。\n\n下面通过图表详细介绍一下：\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710421992198.png\">\n</p>\n\n# 关键属性\n\n只描述一些关键的属性，详细信息可以自行查看[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)\n\n## 1.root\n\nroot 指定你要监听的视口区域，如果没有传值或者值为 null，则默认为顶级文档的视口：Html。\n\n## 2.rootMargin\n\nrootMargin 可以缩小或者扩大判定范围，跟CSS的 margin 属性相似，单位为 PX 或 %，默认值为 \"0px 0px 0px 0px\"。\n\n## 3.thresholds\n\nthresholds 是一个包含阈值的数组或单值，表示监听对象进入监听的视口区域的比例，值在 0.0 到 1.0 之间，默认值为 0.0。例如，此时值为 [0.3，0.7，1]，那么每当监听对象进入监听的视口区域的比例占到监听对象自身的 30%、70%、100% 时，都会触发一次回调函数。\n\n# 在Vue中的示例\n\n使用 Vue 的自定义指令来获取到元素，随后进行相应操作\n\n```javascript\nimport type { Directive } from 'vue'\n\nexport const visible: Directive = {\n  mounted(el, binding) {\n    const observer = new IntersectionObserver((entries, observer) => {\n      entries.forEach((entry) => {\n        //元素在可视范围内，执行操作\n        if (entry.isIntersecting) {\n          // ...\n          // 一般情况下执行完后解除监听\n          observer.unobserve(entry.target) //解除监听\n        }\n      })\n    }) \n    //开始监听\n    observer.observe(el)\n  }\n}\n```\n\n在想要监听的元素上使用该自定义指令即可\n\n```html\n<div v-visible><div>\n```\n\n这种使用自定义指令的方式非常好用，visible 指令只需要判断元素有没有进入指定视口，剩下的逻辑我们可以按需求写，比如让进入指定视口的元素应用渐入动画\n\n```javascript {7}\nexport const visible: Directive = {\n  mounted(el, binding) {\n    const observer = new IntersectionObserver((entries, self) => {\n      entries.forEach((entry) => {\n        //元素在可视范围内，执行操作\n        if (entry.isIntersecting) {\n          blogItemFadeIn(el)\n          self.unobserve(entry.target) //解除监听\n        }\n      })\n    })\n    observer.observe(el)\n  }\n}\n\nfunction blogItemFadeIn(el: HTMLDivElement) {\n  el.animate(\n    [\n      { opacity: 0.3, transform: 'translateX(4rem)' },\n      { opacity: 1, transform: 'translateX(0px)' }\n    ],\n    { duration: 500 }\n  )\n}\n```\n\nELement.animate 是最近学到的 API，非常好用，不用写一大堆 style 了，文档[在这](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate)。\n\n除了给进入指定视口的元素添加渐入动画，还可以实现图片的懒加载等等，按着模板套就行了。\n",
                    "draft": "",
                    "category": "Vue",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 47,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2024-03-14",
                    "updatedAt": "2024-03-17"
                },
                {
                    "id": "65f1bcf28559c325f7d5a9d5",
                    "title": "原生JS实现回到顶部",
                    "abstract": "最简单粗暴的方法是使用锚标记，另一种方法是使用JS监听scriollTop：1.当滚动条滚动的距离超过设定值时，显现回到顶部按钮。2.点击按钮后，触发定时器，使scrollTop值缓速减小，从而实现回到顶部。第三种方法是使用浏览器的新API：Element.scrollIntoView()",
                    "cover": "",
                    "content": "# 方法一：使用锚标记\n\n这是最简单粗暴的一种方法，具体如下：\n页面顶部放置代码：\n\n```html\n<a id=\"backtop\"></a>\n```\n\n页面底部放置代码：\n\n```html\n<a href=\"#backtop\">返回顶部</a>\n```\n\n# 方法二、使用JS 监控scrollTop\n\n**关键点：**\n\n1.当滚动条滚动的距离超过设定值时，显现回到顶部按钮。\n2.点击按钮后，触发定时器，使scrollTop值缓速减小，从而实现回到顶部。\n\n当然，可以让scrollTop值直接为0，这个看自己的需求。\n\n下面是一个例子：\n\n**HTML**\n\n```javascript\n<body style=\"height: 3000px;\">//增加body宽度，使其出现滚动条\n  <div id=\"backTop\" class=\"backTop\"></div>//创建回到顶部的按钮\n</body>\n```\n\n**CSS**\n\n```css\n<style>\n.backTop{\n    width: 50px;\n    height: 50px;\n    background-color: hotpink;\n    position: fixed;\n    bottom: 10%;\n    right: 20px;\n    display: none;\n}\n</style>\n```\n\n**JS**\n\n```js\nwindow.onload = function () {\n  //获取div\n  var oBackTop = document.getElementById(\"backTop\");\n  //保存可视窗口的高度\n  var iWindowLength = document.documentElement.clientHeight;\n  //保存定时器\n  var timer = null;\n  //元素滚动事件\n  document.onscroll = function () {\n    //滚动时，获取滚轮滚动的距离\n    var iRollingLength = document.documentElement.scrollTop;\n    //判断滚动距离是否大于窗口高度，是则显现div\n    if (iRollingLength > iWindowLength) {\n      oBackTop.style.display = \"block\";\n    } else {\n      oBackTop.style.display = \"none\";\n    }\n    //滚动距离到0时，即已经回到顶部，则关闭定时器\n    if (iRollingLength == 0) {\n      clearInterval(timer);\n    }\n  };\n  //没有回到顶部之前，若用户触发了滚轮事件，关闭定时器\n  document.onwheel = function () {\n    clearInterval(timer);\n  };\n  //点击div时，触发定时器，使滚动距离缓速减小\n  oBackTop.onclick = function () {\n    timer = setInterval(function () {\n      document.documentElement.scrollTop = document.documentElement.scrollTop / 1.07;\n    }, 10);\n  };\n};\n```\n\n至此，回到顶部的效果就算完成了，奇怪的是，除了比锚的方法多了一个缓冲运动，代码却是多了一大堆（怪我写的太麻烦^^）！\n\n不久，在查阅文档后，发现了更简单的方法（有兼容问题）：\n\n# 方法三、API ：Element.scrollIntoView()\n\n该方法的文档介绍：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView\n\n**Element.scrollIntoView()**\n该方法可以让当前的元素滚动到浏览器窗口的可视区域内。\n\n**参数**\n1.alignToTop\n一个Boolean值：\n如果为true，元素的顶端将和其所在滚动区的可视区域的顶端对齐。\n如果为false，元素的底端将和其所在滚动区的可视区域的底端对齐。\n\n2.behavior\n定义动画过渡效果， \"auto\"或 \"smooth\" 之一。默认为 \"auto\"。\n\n3.block\n定义垂直方向的对齐， \"start\", \"center\", \"end\", 或 \"nearest\"之一。默认为 \"start\"。\n\n4、inline\n定义水平方向的对齐， \"start\", \"center\", \"end\", 或 \"nearest\"之一。默认为 \"nearest\"。\n\n有了这个方法，优化一下方法二的代码，这次只用改变JS代码就好了，如下：\n\n**JS**\n\n```html\n<script>\n  window.onload = function () {\n    var oBackTop = document.getElementById(\"backTop\");\n    var iWindowLength = document.documentElement.clientHeight;\n    document.onscroll = function () {\n      var iRollingLength = document.documentElement.scrollTop;\n      if (iRollingLength > iWindowLength) {\n        oBackTop.style.display = \"block\";\n      } else {\n        oBackTop.style.display = \"none\";\n      }\n    };\n    oBackTop.onclick = function () {\n      //关键就在这一段，定义缓冲的过渡效果就好了\n      document.body.scrollIntoView({ behavior: \"smooth\" });\n    };\n  };\n</script>\n```\n\n与方法二对比，省了不少代码\n\n",
                    "draft": "",
                    "category": "JS",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 9,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2020-05-11",
                    "updatedAt": "2024-03-17"
                }
            ]
        }
    },
    {
        "status": 200,
        "message": "查询成功",
        "data": {
            "total": 14,
            "blogList": [
                {
                    "id": "65f1c37a8559c325f7d5aabe",
                    "title": "Vite相较于webpack的优势",
                    "abstract": "webpack\n\n打包\n\n采用了bundle机制。通过这种bundle机制，Webpack可以将项目中各种类型的源文件转化供浏览器识别的JS、CSS、IMG等文件，建立源文件之间的依赖关系，并将数量庞大的源文件合并为少量的几个输出文件。",
                    "cover": "",
                    "content": "# webpack\n\n## 打包原理\n\n采用了`bundle`机制。通过这种bundle机制，Webpack可以将项目中各种类型的源文件转化供浏览器识别的JS、CSS、IMG等文件，建立源文件之间的依赖关系，并将数量庞大的源文件合并为少量的几个输出文件\n\nbundle工作机制的核心部分分为两块：\n\n* 构建模块依赖图 `module graph`\n* 分解`module graph` 并输出到浏览器\n\n## 热更新\n\ndev-server启动以后，会监听源文件的变化\n\n当源文件发生变化后，Webpack会重新编译打包\n\n这个时候，由于我们只修改了一个文件，因此只需要对这个源文件做resolve、 load、transfrom、parse操作，依赖的文件直接使用缓存，因此dev server 的响应速度比冷启动要好很多\n\ndev-server重新编译打包以后，会通过ws连接通知浏览器去获取新的打包文件，然后对页面做局部更新\n\n# vite\n\nVite将应用中的模块分为依赖和源码两类，分别进行服务器启动时间的优化。\n\n* 依赖模块，Vite对依赖采用了esbuild预构建的方式,esbuild使用Golang编写，代码直接编译成机器码(不用像js那样先解析为字节码，再编译为机器码)，比以JS编写的打包器预构建依赖快10-100倍\n* 源码模块，是用户自己开发的代码，会经常变动\n\n## 打包原理\n\n当声明一个script标签类型为module时，浏览器就会向服务器发一个GET请求\n\n```javascript\n请求main.js文件\n http://localhost:3000/src/main.js\n```\n\n```javascript\n📂 main.js\n ​\n import { createApp } from 'vue'\n import App from './App.vue'\n createApp(App).mount('#app')\n```\n\n浏览器请求到了main.js，检测到内部含有import引入的包，又会对其内部的import引用发起http请求以获取到模块内容文件\n\nvite的主要功能就是通过劫持浏览器的这些请求，在node端进行简单的文件分解与整合，然后返回给浏览器。vite整个过程中没有对文件进行打包编译，所以运行速度要比webpack快出很多\n\n![de3be18c021baf55b9c54b9d4936c1d4](https://leslie-typora-1314141789.cos.ap-nanjing.myqcloud.com/img/de3be18c021baf55b9c54b9d4936c1d4.png)\n\n## 热更新\n\n> * 强缓存：服务端给响应头追加一些字段，客户端会记住这些字段，在这些字段没有失效前，无论怎么刷新页面，客户端都不会发http请求，而是从缓存里面取\n> * 协商缓存：是否使用缓存要跟后端商量，当服务端给我们打上协商缓存的标记之后，客户端在下次刷新页面需要重新请求资源时会发送一个协商请求给到服务端，由服务器判断是否需要变化，从而响应不同内容\n\nVite基于ESM按需提供源码文件，当一个文件被编辑后，Vite只会重新编译并提供该文件，因此，无论项目规模多大，Vite 的热更新都可以保持快速更新\n\n此外，Vite 合理利用浏览器缓存来加速页面加载，源码模块请求根据`304 Not Modified`进行协商缓存；依赖模块请求通过 `Cache-Control: max-age=31536000,immutable`进行强缓存，因此一旦缓存，不会再次请求\n\n## 生产模式\n\n在生产环境使用ESM会存在大量额外网络请求问题，因此生产环境不太试用 ESM，最好的方式还是代码进行tree-shaking、懒加载、和chunk分隔等\n\nVite生产环境的构建使用的是rollup，因为esbuild在代码分隔，css处理等方面的功能仍在开发中\n\n# vite、webpack对比\n\n**Webpack**\n\n* 支持的模块规范：ES Modules，CommonJS 和 AMD Modules；\n* Dev Server：通过 webpack-dev-server 托管打包好的模块；\n* 生产环境构建：webpack\n\n**Vite**\n\n* 支持的模块规范：ES Modules；\n* Dev Server：原生 ES Modules；\n* 生产环境构建：Rollup\n\n",
                    "draft": "",
                    "category": "Vite",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 9,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-03-13",
                    "updatedAt": "2024-03-17"
                },
                {
                    "id": "65f1c2168559c325f7d5aa8e",
                    "title": "Vite环境变量处理",
                    "abstract": "vite内置了docenv第三方库，docenv会自动读取.env文件，并解析这个文件中的对应的环境变量，将其注入到process对象上，但是vite考虑到和其他配置的一些冲突问题，它不会直接注入到process对象上（这里涉及到vite.config.js中的一些配置），补救方式如下",
                    "cover": "",
                    "content": "# 概念\n\n**环境变量**：会根据当前的代码环境产生值的变化的变量叫做环境变量\n\n# 应用\n\n## 1.生产/开发/测试等环境切换\n\n### 服务端\n\nvite内置了`docenv`第三方库\n\ndocenv会自动读取`.env`文件，并解析这个文件中的对应的环境变量，将其注入到`process`对象上\n\n但是vite考虑到和其他配置的一些冲突问题，它不会直接注入到`process`对象上（这里涉及到`vite.config.js`中的一些配置），补救方式如下：\n\n> env文件命名规范:\n> \n> * `.env`:所有环境都需要用到的环境变量\n> * `.env.development`:开发环境需要用到的环境变量(默认情况下vite将我们的开发环境取名为development,prodction同理)\n> * `.env.production`:生产环境要用到的环境变量\n\n```javascript\n//📂 .env\n ​\n APP_KEY = 100;\n```\n\n```javascript\n//📂 vite.config.js\n ​\n export default defineConfig(({ command,mode }) => {\n   const env = loadEnv(mode,process.cwd(),\"\")\n   //此时可以看到.evn文件中的 APP_KEY = 100被挂载到了process对象上\n   console.log(\"process\",env) \n   return envResolver[command]()\n })\n```\n\n当我们调用`loadenv`时,它会做如下几件事:\n\n* 直接找到`.env`文件，解析其中的环境变量，放到一个对象里\n* 会将传进来的`node`这个变量的值进行拼接：`.env.development`，然后根据我们提供的目录去取对应的配置文件并进行解析，之后放到一个对象里\n\n### 客户端\n\nvite会将对应的环境变量注入到`import.meta.env`中\n\n但为了防止将隐私性的变量直接注册到`import.meta.env`中，但vite做了一个拦截，如果环境变量不是以`VITE`开头的，就不会注册到客户端中去，如果想要更改前缀，可以去更改`evnPrefix`\n\n```javascript\n//📂 vite.config.js\n ​\n export default defineConfig({\n   envPrefix:\"Leslie\"\n })\n```\n\n### 例子\n\n我们设置一个环境变量`VITE_MYKEY`，它在开发环境中的值为888\n\n```javascript\n//📂 .evn.development\n ​\n VITE_MYKEY = 888\n```\n\n并且，我们在requst文件中打印这个变量\n\n```javascript\n//📂 request.js\n ​\n console.log(\"env\",import.meta.env)\n```\n\n随后以开发环境启动项目\n\n```javascript\nnpm run dev\n```\n\n结果如下：\n\n![image-20230221172008360](https://leslie-typora-1314141789.cos.ap-nanjing.myqcloud.com/img/image-20230221172008360.png)\n\n现在，我们要在测试环境中启动项目，此时的VITE\\_MYKEY就要跟随环境所变化，暂定测试环境中的`VITE_MYKEY`的值为666\n\n具体步骤如下：\n\n1. 向`package.json`的`\"script\"`中添加键值对，以便启动测试环境\n   ```json\n   //📂 package.json\n    ​\n    \"scripts\": {\n      \"dev\": \"vite\",\n      \"build\":\"vite build\",\n      \"test\":\"vite --mode test\"\n    },\n   ```\n2. 创建`.env.test`文件，在里面键入我们要用到的环境变量\n   ```javascript\n   //📂 .env.test\n    ​\n    VITE_MYKEY = 666\n   ```\n3. 命令行启动项目\n   ```javascript\n   npm run test\n   ```\n\n结果如下：\n\n![image-20230221172548121](https://leslie-typora-1314141789.cos.ap-nanjing.myqcloud.com/img/image-20230221172548121.png)\n\n",
                    "draft": "",
                    "category": "Vite",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 9,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-03-13",
                    "updatedAt": "2024-03-15"
                },
                {
                    "id": "65f1b5fc8559c325f7d5a964",
                    "title": "DOM事件处理函数，DOM0、DOM2的优缺点",
                    "abstract": "DOM事件就是用户或者浏览器自身执行的某种行为，例如 click，mouseover，都是事件的名字。而响应某个事件的函数就叫做事件处理函数（或者事件监听器），本篇介绍了DOM0级和DOM2级事件处理函数的优缺点",
                    "cover": "",
                    "content": "# （一）定义\n\n> 事件就是用户或者浏览器自身执行的某种行为，例如click，mouseover，都是事件的名字。而`响应某个事件的函数就叫做事件处理函数`（或者事件监听器）。\n\n# （二）HTML事件处理函数\n\n**HTML**\n\n```javascript\n<body>\n    <form action=\" \">\n       <input type=\"button\" value=\"clickMe\" onclick=\"alert(this.value)\">\n    </form>\n</body>\n```\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710338537627.gif\">\n</p>\n\n此时单击按钮就会弹出此input的value，这个操作是通过指定onclick特性并将一些JavaScript代码作为它的值来定义的。由于这个值是JavaScript，因此不能使用未转义的HTML语法字符。\n\n## ① 特点\n\n首先，这样会创建一个封装着元素属性值的函数。这个函数中有一个全局变量event，也就是事件对象，通过event变量，可以直接访问事件对象，不用自己定义它，也不用从函数的参数列表中读取。在这个函数内部，this值等于事件的目标元素\n\n例如：\n\n```html\n<body>\n  <form action=\" \">\n      <input type=\"button\" value=\"clickMe\" onclick=\"alert(event.type)\">\n  </form>\n</body>\n```\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710338657775.gif\">\n</p>\n\n```html\n<body>\n  <form action=\" \">\n    <input type=\"button\" value=\"clickMe\" onclick=\"show()\">\n  </form>\n  <script>\n    function show() {\n      alert(this);\n    }\n  </script>\n</body>\n```\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710338695340.gif\">\n</p>\n\n注意，此时this指向window\n\n## ② 缺点\n\n- 如果用户在页面`解析`show函数之前就单击了按钮，就会引发错误，为此很多HTML事件处理程序都会 被封装在一个try-catch块中，以便错误不会浮出水面。\n\n```html\n<input type=\"button\" value=\"clickMe\" onclick=\"try{show();}catch(ex){}\">\n```\n\n- 这样扩展事件处理程序的`作用域`在不同浏览器中会导致不同的结果，不同的JavaScript引擎遵循的标识符解析规则略有差异，很可能会在访问非限定成员时出错。\n- HTML与JavaScript代码紧密耦合，想要改动就得改动两个地方，`不易于维护`。\n\n# （三）DOM0级事件处理函数\n\n## ① 使用\n\n使用DOM0级方法指定的事件处理函数被认为是元素的方法。因此这时候的事件处理程序是在元素的作用域中运行：\n\n```javascript\n<body>\n  <form action=\" \">\n  <input type=\"button\" value=\"clickMe\">\n  </form>\n  <script>\n      var oInput = document.querySelector(\"input\");\n      oInput.onclick = function(){\n          alert(this.value)\n      }\n  </script>\n</body>\n```\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710338724333.gif\">\n</p>\n\n单击按钮显示的是元素的value，这个value是通过this.value进行获取的，不仅仅是value，在事件处理函数中能通过this访问元素的任何属性和方法，以这种方式添加的事件处理函数程序会在事件流的冒泡阶段被处理。\n\n## ② 删除\n\n```html\n<script>\n   var oInput = document.querySelector(\"input\");\n   oInput.onclick = function(){\n     alert(this.value)；\n       oInput.onclick  = null; //放在函数内部，点击一次后才删除\n     }\n   oInput.onclick  = null; //放在函数外部，直接删除\n</script>\n```\n\n## ③ 缺点\n\n- `同一个事件只能绑定一次`，后面的会覆盖前面的\n- `只能在冒泡阶段触发`事件处理程序\n\n# （四）DOM2级事件处理函数\n\n> <font size=\"3\">DOM2级事件定义了两个方法，用于处理指定和删除事件处理程序的操作：addEventListener( ）和 removeEventListener（ ）。所有DOM节点都包含着两种方法，并且它们都接收三个参数：要处理的事件名，作为事件处理程序的函数和一个布尔值（默认为false），最后这个布尔值是true，表示在捕获阶段调用事件处理程序；如果是false，表示在冒泡阶段调用事件处理程序。</font>\n\n## ① 使用\n\n```javascript\n<script>\n  var oInput = document.querySelector(\"input\");\n  oInput.addEventListener(\"click\",show);\n  function show(){\n    alert(this.value);\n  } \n</script>\n```\n\n## ② 删除\n\n```javascript\noInput.removeEventListener(\"click\",show)\n```\n\n## ③ 注意\n\n通过addEventListener(）添加的事件处理程序只能用removeEventListener（）来移出；移出时传入的参数与添加处理程序时所使用的的参数相同。这也就意味着通过addEventListener（）添加的匿名函数无法移出\n例如：\n\n```javascript\noInput.addEventListener(\"click\",function(){\n  alert(this.value)\n});//这样添加的事件处理函数无法被移出\n```\n\n",
                    "draft": "",
                    "category": "JS",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 21,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2020-05-09",
                    "updatedAt": "2024-03-14"
                },
                {
                    "id": "65f1ba218559c325f7d5a992",
                    "title": "DOM事件流：冒泡、捕获、委托",
                    "abstract": "当浏览器发展到第四代时（IE4及Netscape Communicator4），浏览器开发团队遇到了一个很有意思的问题：页面的哪一部分会拥有某个特定的事件？要明白这个问题问的是什么，可以想象画在一张纸上的一组同心圆。如果你把手指放在圆心上，那么你的手指指向的不是一个圆，而是纸上所有的圆，两家公司的浏览器开发团队在看待浏览器事件方面还是一致的。如果你单击了某个按钮，他们都认为单击事件不仅仅发生在按钮上。换句话说，在单机按钮的同时，你也单击了按钮的容器元素，甚至也单击了整个页面。",
                    "cover": "",
                    "content": "# （一）DOM事件流\n\n### ① 定义\n\n> DOM事件流包括`三个阶段`：\n> \n> 1. 捕获阶段\n> 2. 目标阶段\n> 3. 冒泡阶段\n> \n> 首先发生的是事件捕获，为截获事件提供了机会。然后是实际的目标接收到事件。最后一个是冒泡阶段，在这个阶段对事件做出响应\n\n事件发生时会在元素节点之间按照特定的顺序传播，这个传播的过程就是DOM事件流\n简单的说：`事件的传播过程即DOM事件流`\n\n### ② 图解\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710339982527.png\">\n</p>\n\n### ③ 历史\n\n> <font size=\"3\">当浏览器发展到第四代时（IE4及Netscape Communicator4），浏览器开发团队遇到了一个很有意思的问题：页面的哪一部分会拥有某个特定的事件？要明白这个问题问的是什么，可以想象画在一张纸上的一组同心圆。如果你把手指放在圆心上，那么你的手指指向的不是一个圆，而是纸上所有的圆，两家公司的浏览器开发团队在看待浏览器事件方面还是一致的。如果你单击了某个按钮，他们都认为单击事件不仅仅发生在按钮上。换句话说，在单机按钮的同时，你也单击了按钮的容器元素，甚至也单击了整个页面。\n> 事件流描述的是从页面中接受事件的顺序。但有意思的是，IE 和 Netscape 开发团队居然提出了差不多完全相反的概念，IE的事件流是冒泡流，而Netscape Communicator的事件流是事件捕获流。</font>\n> (<font size=\"1\">摘自《JavaScript高级程序设计》</font>)\n\n下面我用实例展现一下冒泡和捕获的不同之处。\n\n# （二）冒泡\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710340033610.gif\">\n</p>\n\n我给分别给div、section、body、html、window设置了点击事件，然后只点击了div，现在我们来分析一下此时的事件传播过程\n\n首先，进入捕获阶段，实际的目标元素（div）在捕获阶段不会接收到事件。这意味着在捕获阶段，事件从`window → html → body → section`就停止了。下一个阶段是目标阶段，于是事件在div上发生，并在事件处理中被看成冒泡的一部分。然后事件冒泡发生，事件又传播回window。所以我们看到了下述的事件执行顺序。\n\n事件的执行顺序是：\n`小 → 大`\n`div → section → body → html → window`\n\n下面贴上代码（css部分就不贴了，问题不大）\n\n> **html部分**\n\n```html\n<p>body</p>\n<section>\n  <p>父盒子</p>\n  <div>子盒子</div>\n</section>\n```\n\n```html\n<script>\n  const oSection = document.querySelector(\"section\");\n  const oDiv = document.querySelector(\"div\");\n  const oHtml = document.documentElement;\n  const oBody = document.body;\n  oDiv.addEventListener(\"click\", function () {\n    alert(\"我是子盒子\");\n  });\n  oSection.addEventListener(\"click\", function () {\n    alert(\"我是父盒子\");\n  });\n  oHtml.addEventListener(\"click\", function () {\n    alert(\"我是html\");\n  });\n  oBody.addEventListener(\"click\", function () {\n    alert(\"我是body\");\n  });\n  window.addEventListener(\"click\", function () {\n    alert(\"我是window\");\n  });\n</script>\n```\n\n# （三）捕获\n\n事件捕获如何触发呢？\n这时需要用到 addEventListener( )方法的第三个参数（默认为false，即冒泡阶段），将第三个参数改为true，表示将此事件改为捕获阶段。<font size=\"1\">（ 如果不了解addEventListener( )方法的可以 [查看文档](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)）</font>\n\n接下来我们看一下事件在捕获阶段的触发顺序：\n\n根据上面的代码，我们先把父盒子section的点击事件变为捕获阶段\n\n```javascript\noSection.addEventListener(\"click\",function(){\n  alert(\"我是父盒子\")\n},true)\n```\n\n看看效果：\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710340293902.gif\">\n</p>\n\n首先，进入捕获阶段，实际的目标元素（div）在捕获阶段不会接收到事件。但我们把section的点击事件变为了捕获阶段发生，section的点击事件<font color=\"red\">被捕获</font>了，所以最先触发。 下一个阶段是目标阶段，于是事件在div上发生，并在事件处理中被看成冒泡的一部分。然后事件冒泡发生，事件又传播回window。所以我们才看到了下述的事件执行顺序。\n\n此时的执行顺序是：\n\n` section  → div → body → html → window`\n\n现在，我们将所有的事件都变成捕获阶段，看看效果：\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710340386261.gif\">\n</p>\n\n此时的执行顺序是：\n\n` window  → html → body → section → div`\n\n与冒泡阶段的执行顺序完全相反。\n\n# （四）在不同的阶段执行事件\n\n> 多数支持DOM事件流的浏览器都实现了一种特定的行为：即使 \"`DOM2级事件`\" 规范明确要求捕获阶段不会涉及事件目标，但IE9，Safari，Chrome，Firefox 和 Opera9.5 以及更高版本都会在事件捕获阶段触发事件对象上的事件。结果就是有两个机会在目标对象上操作事件。\n> (<font size=\"1\">摘自《JavaScript高级程序设计》</font>)\n\n下面通过实例实践一下：\n\n首先，让所有的事件在冒泡阶段才触发，然后给section绑定两个点击事件，一个在捕获阶段，一个在冒泡阶段\n\n```javascript\noSection.addEventListener(\"click\",function(){\n   alert(\"我是父盒子，我在捕获阶段被触发了\") //捕获阶段\n},true)\n\noSection.addEventListener(\"click\",function(){\n   alert(\"我是父盒子，我在冒泡阶段被触发了\")\n})\n```\n\n看看效果：\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710340417607.gif\">\n</p>\n\n可以看到，section的两个点击事件都触发了，一个在捕获阶段，一个在冒泡阶段。\n\n# （五）提高内存和性能 -- 事件委托\n\n> 对 \"事件处理程序过多\" 问题的解决方案就是事件委托。事件委托`利用了事件冒泡`，只指定一个事件处理程序，就可以管理某一项类型的所有事件。例如，click事件会一直冒泡到window层次。也就是说，我们可以为整个页面指定一个onclick事件，而不必给每个可单击的元素分别添加事件\n> (<font size=\"1\">事件处理程序指响应某个事件的函数</font>)\n\n下面看看效果和代码：\n\n## ① 实例\n\n<p align=\"center\">\n  <img src=\"https://leslie-blog-1314141789.cos.ap-nanjing.myqcloud.com/image/1710340460985.gif\">\n</p>\n\n> JS代码\n\n```javascript\nwindow.addEventListener(\"click\", function (e) {\n  switch (\n    e.target.className //我事先给每个元素设定了一个专属class\n  ) {\n    case \"html\":\n      alert(\"我是html\");\n      break;\n    case \"body\":\n      alert(\"我是body\");\n      break;\n    case \"section\":\n      alert(\"我是父盒子\");\n      break;\n    case \"div\":\n      alert(\"我是子盒子\");\n      break;\n  }\n});\n```\n\n上述代码中，我们使用事件委托只为window添加了一个onclick事件处理函数，由于所有的元素都是window的子节点，而且它们的事件会冒泡，所以单击事件最终会被这个函数处理，然后通过检测属性的className来检测是哪个元素被点击，从而做出不同的动作。\n\n上述代码中还用到了[event事件对象](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)，target返回触发此事件的元素。也就是说，谁触发了window的点击事件，target就是谁。\n\n## ② 优点\n\n上述代码与前面未使用事件委托的代码比一比，会发现这段代码的事前消耗更低，因为不需要取得DOM元素（或者只需要取得一个DOM元素），只添加了一个事件处理程序。虽然对于用户来说最终的结果相同，但是这种技术需要占用的内存更少。所有用到按钮的事件（多鼠标事件和键盘事件）都适合采用事件委托技术。\n\n这样做与采取传统的做法相比具有如下优点：\n\n- window对象`很快就可以访问`，只要可单击的元素呈现在页面上，就可以立即具备适当的功能\n- 在页面中设置事件处理程序所需的事件更少。只添加一个事件处理程序`所需的DOM引用更少，所花的时间也更少`\n- 整个页面`占据的内存空间更少`，能够提升整体性能。\n\n",
                    "draft": "",
                    "category": "JS",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 8,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2020-05-10",
                    "updatedAt": "2024-03-14"
                },
                {
                    "id": "65f1be288559c325f7d5aa28",
                    "title": "Git学习指南",
                    "abstract": "记录一些Git的学习方式方法",
                    "cover": "image/1710341878576.png",
                    "content": "**学习站：**\n\n[猴子都能懂的GIT入门 | 贝格乐（Backlog）](https://backlog.com/git-tutorial/cn/)\n\n**游戏练习：**\n\n[Learn Git Branching](https://learngitbranching.js.org/?locale=zh_CN)\n\n**官方文档：**\n\n[Git - Book (git-scm.com)](https://git-scm.com/book/zh/v2)\n\n**HEAD理解**\n\n[Git之旅(8)：HEAD是啥？-朱双印博客](https://www.zsythink.net/archives/3412)\n",
                    "draft": "",
                    "category": "Git",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 12,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-05-11",
                    "updatedAt": "2024-03-14"
                }
            ]
        }
    },
    {
        "status": 200,
        "message": "查询成功",
        "data": {
            "total": 14,
            "blogList": [
                {
                    "id": "65f1c0d98559c325f7d5aa67",
                    "title": "Vite对CSS的处理",
                    "abstract": "vite天生支持对css文件的直接处理，步骤大致如下：1.读取到main.js中引用到的index.css。2.使用fs模块读取 index.css文件内容。\n\n3.创建一个style标签，将index.css中的文件直接复制到style标签中。\n\n4.将style标签插入到index.html的<head>中。\n\n5.将该css文件中的内容直接替换为js脚本（方便热更新或css模块化），同时设置Content-type为text/JavaScript。",
                    "cover": "",
                    "content": "**vite天生支持对css文件的直接处理**\n\n**步骤大致如下：**\n\n* **读取到**`main.js`中引用到的`index.css`\n* **使用**`fs`模块读取`index.css`文件内容\n* **创建一个**`style`标签，将`index.css`中的文件直接复制到`style`标签中\n* **将**`style`标签插入到`index.html`的`<head>`中\n* **将该css文件中的内容直接替换为js脚本（方便热更新或css模块化），同时设置**`Content-type`为`text/JavaScript`\n\n# modules解决样式覆盖\n\n**原理（全部基于**`node`）：\n\n1. **创建**`.module.css`文件表示需要开启css模块化（这是一种约定）\n2. **将所有的类名进行一定规则的替换**\n3. **同时创建一个映射对象**`{footer：\"footer_i22st_1\"}`\n4. **将替换后的内容塞进**`style`标签中，然后放到head标签中\n5. **将**`.module.css`文件内容替换成`js`脚本\n6. **将创建的映射对象在脚本中进行默认导出**\n7. ==使用.module.css==\n   \n   ```\n   /* 📂index.module.css */\n    .my-div {\n      width: 100px;\n      height: 100px;\n      background-color:var(--mycolor);\n    }\n   ```\n   \n   ```\n   /* 📂main.js */\n    import indexModuleCss from \"./index.module.css\"\n    //创建一个div并插入到body中\n    const div = document.createElement(\"div\")\n    div.className = indexModuleCss[\"my-div\"] //类名做出改变\n    document.body.appendChild(div)\n   ```\n\n# less模块化\n\n**安装less依赖**\n\n**less会将**`.less`文件中所编写的less代码转换成普通css代码\n\n```css\n.father{                        .father .son {\n   .son{\n                     --->         \n   }\n  }                                }\n```\n\n**模块化解决样式覆盖与普通css同理**\n\n",
                    "draft": "",
                    "category": "Vite",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 18,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-03-13",
                    "updatedAt": "2024-03-14"
                },
                {
                    "id": "65f1c0268559c325f7d5aa41",
                    "title": "Vite加载静态资源",
                    "abstract": "Q.为什么打包后的静态资源要有hash？因为浏览器有一个缓存机制，静态资源只要名字不变，那么他就会直接用缓存的，刷新页面时，请求的名字是同一个的话，就会去读取缓存，如果文件内容没变，hash也不会变，如果文件内容有变，新hash将是独一无二的。",
                    "cover": "",
                    "content": "# 别名配置\n\n```\n📂 /* vite.config.js */\n ​\n export default defineConfig({\n   //别名配置\n   resolve:{\n     alias:{\n       \"@\":path.resolve(__dirname,\"./src\"),\n       \"@assets\":path.resolve(__dirname,\"./src/assets\")\n     }\n   },\n  })\n```\n\n# alias原理\n\n**字符串替换**\n\n# 生产环境中静态资源配置\n\n**Q.为什么打包后的静态资源要有hash**\n\n**因为浏览器有一个缓存机制，静态资源只要名字不变，那么他就会直接用缓存的，刷新页面时，请求的名字是同一个的话，就会去读取缓存**\n\n**如果文件内容没变，hash也不会变，如果文件内容有变，新hash将是独一无二的**\n\n**具体配置如下：**\n\n```\n📂 /* vite.config.js */\n ​\n export default defineConfig({\n   //别名配置\n   resolve:{...},\n   // 对css的行为进行配置\n   css:{...},\n   build:{\n     //配置rollup的一些构建策略\n     rollupOptions:{\n       output:{\n         //在rollup里面，hash代表将你的文件鹤文件内容进行组合计算的结果\n         assetFileNames:\"[hash].[name].[ext]\"\n       }\n     },\n     //将小于指定大小的图片转换成base64格式\n     assetsInlineLimit:4096,//4kb\n     //指定打包到哪个文件夹\n     outDir:\"dist\",\n     //静态资源打包到哪个文件夹\n     assetsDir:\"static\"\n   }\n })\n```\n\n",
                    "draft": "",
                    "category": "Vite",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 17,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-03-13",
                    "updatedAt": "2024-03-13"
                },
                {
                    "id": "65f1c1c58559c325f7d5aa89",
                    "title": "Vite性能优化",
                    "abstract": "根据浏览器的缓存策略，静态资源只要名字没有变化，就不会重新请求，只要内容有变化，那么hash就会变，名字也会变，如果说我们引入了某些工具函数，这些函数是固定的，其他内容变化的话也是会重新请求这些固定函数内容的，这时候就要使用到分包策略，分包就是把一些不会常规更的文件进行单独打包处理。",
                    "cover": "",
                    "content": "# 性能优化\n\n* **开发时的构建速度优化**\n  * **webpack在这方面下的功夫很多：**`cache-loader`（代码没发生变化则直接用缓存），`thread-loader`（开启多线程）\n  * **vite是按需加载，不关注这方面**\n* **页面性能指标**\n  * **首屏渲染时间**\n    * **懒加载：写代码实现**\n    * **http优化：协商缓存和强缓存**\n      * **强缓存：服务端给响应头追加一些字段，客户端会记住这些字段，在这些字段没有失效前，无论怎么刷新页面，客户端都不会发http请求，而是从缓存里面取**\n      * **协商缓存：是否使用缓存要跟后端商量，当服务端给我们打上协商缓存的标记之后，客户端在下次刷新页面需要重新请求资源时会发送一个协商请求给到服务端，由服务器判断是否需要变化，从而响应不同内容**\n  * **页面中最大元素的一个时长**\n* **js逻辑**\n  * **注意副作用清除，比如定时器**\n  * **写法上注意一个事项：**`requestAnimationFrame`，`requestIdleCallback`卡浏览器帧率\n  * **防抖节流等工具函数使用lodash**\n* **css**\n  * **关注继承属性，能继承的就不要重复写**\n  * **避免太深的css嵌套**\n* **构建优化**\n  * **体积优化：压缩，tree-shakling，图片资源压缩，cdn加载，分包...**\n\n# 分包策略\n\n**根据浏览器的缓存策略，静态资源只要名字没有变化，就不会重新请求，只要内容有变化，那么hash就会变，名字也会变**\n\n**如果说我们引入了某些工具函数，这些函数是固定的，其他内容变化的话也是会重新请求这些固定函数内容的**\n\n**这时候就要使用到分包策略，分包就是把一些不会常规更的文件进行单独打包处理**\n\n```\nbuild:{\n     minify:false,\n     //配置rollup的一些构建策略\n     rollupOptions:{\n       output:{\n         //在rollup里面，hash代表将你的文件和文件内容进行组合计算的结果\n         assetFileNames:\"[hash].[name].[ext]\",\n         //分包策略\n         manualChunks:(id)=>{\n           //一般在node_modules里面的文件不会经常更新\n           if(id.includes(\"node_modules\")){\n             return \"vendor\"\n           }\n         }\n       }\n     },\n     //将小于指定大小的图片转换成base64格式\n     assetsInlineLimit:4096,//4kb\n     //指定打包到哪个文件夹\n     outDir:\"dist\",\n     //静态资源打包到哪个文件夹\n     assetsDir:\"static\"\n   },\n```\n\n# gzip压缩\n\n**有时候我们的文件资源太大了**\n\n**通过gzip将所有的静态资源进行压缩，以达到减少体积的目的**\n\n**服务器-->压缩文件-->客户端收到压缩包-->解压缩**\n\n**使用插件：**`vite-plugin-compression2`\n\n# 动态导入\n\n**与webpack不同，vite是按需加载的**\n\n**动态导入是es6的一个新特性，和按需加载是异曲同工的**\n\n# cdn加速\n\n**cdn(content delivery network 内容分发网络)  **\n\n**我们的所有依赖以及文件在我们进行打包后，会放到服务器上面去**\n\n**假设，服务器在深圳，而我在纽约访问网站，会很慢**\n\n**cdn加速就是将我们的第三方模块全部写成cdn的形式，然后保证自己的代码的一个小体积**\n\n**使用**`vite-plugin-cdn-import`插件\n\n",
                    "draft": "",
                    "category": "Vite",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 13,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-03-13",
                    "updatedAt": "2024-03-13"
                },
                {
                    "id": "65f1c17b8559c325f7d5aa7f",
                    "title": "Vite中CSS的配置",
                    "abstract": "export default defineConfig({\n   // 对css的行为进行配置\n   css:{\n     //对css模块化的默认行为进行配置，module配置最后会丢给postcss modules\n     modules:{\n       //对css属性的输出规范\n       //四个值：\"camelCase\" | \"camelCaseOnly\" | \"dashes\" | \"dashesOnly\"\n       localsConvention:\"camelCase\",\n       //配置当前的模块化行为是模块化还是全局化(设置为global等于关闭模块化，不常用)\n       //三个值：\"global\" | \"local\" | undefined\n       scopeBehaviour:\"local\",\n       //控制类名格式\n       //属性值可以是一个函数，该函数接收三个参数：\n       //1.name(类名) 2：filename(css文件所在的绝对路径) 3.css(样式)\n       //该函数需要返回一个自定义格式的类名\n       generateScopedName:\"[name]_[local]_[hash]\",\n       //给hash补充前缀\n       hashPrefix:\"lyffawfawfaf\",\n       //不参与css模块化的路径\n       globalModulePaths:[]\n     }\n   }\n })",
                    "cover": "",
                    "content": "# modules\n\n```javascript\n/* 📂vite.config.js */\n ​\n export default defineConfig({\n   // 对css的行为进行配置\n   css:{\n     //对css模块化的默认行为进行配置，module配置最后会丢给postcss modules\n     modules:{\n       //对css属性的输出规范\n       //四个值：\"camelCase\" | \"camelCaseOnly\" | \"dashes\" | \"dashesOnly\"\n       localsConvention:\"camelCase\",\n       //配置当前的模块化行为是模块化还是全局化(设置为global等于关闭模块化，不常用)\n       //三个值：\"global\" | \"local\" | undefined\n       scopeBehaviour:\"local\",\n       //控制类名格式\n       //属性值可以是一个函数，该函数接收三个参数：\n       //1.name(类名) 2：filename(css文件所在的绝对路径) 3.css(样式)\n       //该函数需要返回一个自定义格式的类名\n       generateScopedName:\"[name]_[local]_[hash]\",\n       //给hash补充前缀\n       hashPrefix:\"lyffawfawfaf\",\n       //不参与css模块化的路径\n       globalModulePaths:[]\n     }\n   }\n })\n```\n\n# preprocessorOptions\n\n**主要是用来配置css预处理的一些全局参数**\n\n```javascript\nexport default defineConfig({\n   // 对css的行为进行配置\n   css:{\n     modules:{ },\n     preprocessorOptions:{\n       //整个配置最终会丢到less的执行参数（全局参数）中去\n       less:{\n          //识别不带括号的数学表达式\n         math:\"always\",\n         //设置全局变量\n         globalVars:{\n           mybgColor:\"red\"\n         }\n       }\n     }\n   }\n })\n```\n\n**上面提到的执行参数（全局参数），理解如下：**\n\n```text\nnpx lessc --math=\"always\" index.less\n //这个命令行中的--math=\"always\"键值对即是执行参数（全局参数）\n```\n\n**注意**：使用上面的less全局变量的时候记得带上前缀@\n\n# devSourcemap\n\n**创建对应编译过的代码和原始文件位置的映射，方便快速找到代码位置，与**`preprocessorOptions`配置同级\n\n# Postcss\n\n**直接在**`css.postcss`中进行配置，该属性直接配置的就是postcss的配置\n\n**下面引入的**`postcss-preset-env`插件集合了一些常用的postcss插件，方便开发\n\n```javascript\nconst postcssPresetEvn = require(\"postcss-preset-env\")\n ​\n export default defineConfig({\n   // 对css的行为进行配置\n   css:{\n     modules:{ },\n     preprocessorOptions:{\n       less:{}\n     }\n     devSourcemap:true,\n     postcss:{\n       //插件需要下载并引入\n       plugins:[postcssPresetEvn()]\n     }\n   }\n })\n```\n\n## postcss自定义属性\n\n**postcss解析自定义属性，每个文件是单独处理的**\n\n**因此，除非再每个文件中导入自定义属性定义，否则不会解析他们**\n\n**为了解决这个问题，需要使用**`postcss-global-data`插件，它允许你传递全局可用的文件列表，该插件不会注入任何额外的代码，但将提供解析自定义属性所需的上下文\n\n**注意**：为了运行它，它需要放在[postcssCustomProperties](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-properties)插件之前\n\n**配置如下：**\n\n```javascript\npostcss:{\n   plugins: [\n     postcssGlobalData({\n       files:[\n         \"./variable.css\"\n       ]\n     }),\n     postcssPresetEnv(),\n   ]\n }\n```\n\n",
                    "draft": "",
                    "category": "Vite",
                    "author": "65cf460e367471c8d3b97eb5",
                    "views": 10,
                    "isOriginal": true,
                    "isSticky": false,
                    "createdAt": "2022-03-13",
                    "updatedAt": "2024-03-13"
                }
            ]
        }
    }
]