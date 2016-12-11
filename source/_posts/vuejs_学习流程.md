---
title: vue.js 学习流程
date: 2016-12-11 10:54:00
categories:
- Coding
keywords:
- js
- vuejs
tags: 
- js
- vuejs
---

![vuejs logo](http://res.cloudinary.com/dvlfojetn/image/upload/c_scale,w_300/v1481474792/xiaojieli.com/posts/vuejs_logo.png)

以下我学习 vue.js 的计划流程，一切正在进行中...

**计划开始时间: 2016/12/01**

## I. 新手向：Vue 2.0 的建议学习顺序

_*[@youyuxi](https://twitter.com/youyuxi) 大神出品的“官方”新手学习顺序，必读！*_

知乎地址: [https://zhuanlan.zhihu.com/p/23134551](https://zhuanlan.zhihu.com/p/23134551)

<!-- more -->

### 起步

1. <input type="checkbox" checked disabled="disabled"> ~~扎实的 JavaScript / HTML / CSS 基本功。~~ 
2. <input type="checkbox" disabled="disabled"> 通读官方教程 (guide) 的基础篇。不要用任何构建工具，就只用最简单的 `<script>`，把教程里的例子模仿一遍，理解用法。**不推荐上来就直接用 vue-cli 构建项目，尤其是如果没有 Node/Webpack 基础。**   
3. <input type="checkbox" disabled="disabled"> 照着官网上的示例，自己想一些类似的例子，模仿着实现来练手，加深理解。  
    _以下是我练习用的 Codepen:_
    - [Vuejs - Introduction - part 1](http://codepen.io/leo_li/pen/MbOxYL)
    - [Vuejs - Introduction - part 2](http://codepen.io/leo_li/pen/ObzLqg)
    - [Vuejs - Template Syntax](http://codepen.io/leo_li/pen/PbBaoO)
    - [Vuejs - Conditional Rendering](http://codepen.io/leo_li/pen/GNBGEQ)
    - [Vuejs - List Rendering](http://codepen.io/leo_li/pen/vyaQaP)
    - [Vuejs - Event Handling](http://codepen.io/leo_li/pen/QGBYWB)
    - [Vuejs - Form Input Bindings](http://codepen.io/leo_li/pen/rWZVwB)
4. <input type="checkbox" disabled="disabled"> 阅读官方教程进阶篇的前半部分，到『自定义指令 (Custom Directive) 』为止。着重理解 Vue 的响应式机制和组件生命周期。『渲染函数（Render Function)』如果理解吃力可以先跳过。
5. <input type="checkbox" disabled="disabled"> 阅读教程里关于路由和状态管理的章节，然后根据需要学习 vue-router 和 vuex。同样的，先不要管构建工具，以跟着文档里的例子理解用法为主。
6. <input type="checkbox" disabled="disabled"> 走完基础文档后，如果你对于基于 Node 的前端工程化不熟悉，就需要补课了。

### 前端生态/工程化

1. <input type="checkbox" disabled="disabled"> 了解 JavaScript 背后的规范，ECMAScript 的历史和目前的规范制定方式。学习 ES2015/16 的新特性，理解 ES2015 modules，适当关注[还未成为标准的提案](https://github.com/tc39/proposals)。
2. <input type="checkbox" checked disabled="disabled"> ~~学习命令行的使用。~~
3. <input type="checkbox" disabled="disabled"> 学习 Node.js 基础。至少要了解 npm 的常用命令，npm scripts 如何使用，语义化版本号规则，CommonJS 模块规范（了解它和 ES2015 Modules 的异同），Node 包的解析规则，以及 Node 的常用 API。应当做到可以自己写一些基本的命令行程序。注意最新版本的 Node (6+) 已经支持绝大部分 ES2015 的特性，可以借此巩固 ES2015。
4. <input type="checkbox" disabled="disabled"> 了解如何使用 / 配置 Babel 来将 ES2015 编译到 ES5 用于浏览器环境。
5. <input type="checkbox" disabled="disabled"> 学习 Webpack。Webpack 是一个极其强大同时也复杂的工具，作为起步，理解它的『一切皆模块』的思想，并基本了解其常用配置选项和 loader 的概念/使用方法即可，比如如何搭配 Webpack 使用 Babel。学习 Webpack 的一个挑战在于其本身文档的混乱，建议多搜索搜索，应该还是有质量不错的第三方教程的。英文好的建议阅读 [Webpack 2.0 的文档](https://webpack.js.org/get-started/)，比起 1.0 有极大的改善，但需要注意和 1.0 的不兼容之处。

### Vue 进阶

1. <input type="checkbox" disabled="disabled"> 有了 Node 和 Webpack 的基础，可以通过 vue-cli 来搭建基于 Webpack ，并且支持单文件组件的项目了。建议用 webpack-simple 这个模板开始，并阅读官方教程进阶篇剩余的内容以及 [vue-loader 的文档](http://vue-loader.vuejs.org/en/)，了解一些进阶配置。有兴趣的可以自己亲手从零开始搭一个项目加深理解。
2. <input type="checkbox" disabled="disabled"> 根据 [例子](https://github.com/vuejs/vue-hackernews-2.0) 尝试在 Webpack 模板基础上整合 vue-router 和 vuex
3. <input type="checkbox" disabled="disabled"> 深入理解 Virtual DOM 和『渲染函数 (Render Functions)』这一章节（可选择性使用 JSX)，理解模板和渲染函数之间的对应关系，了解其使用方法和适用场景。
4. <input type="checkbox" disabled="disabled"> （可选）根据需求，了解服务端渲染的使用（需要配合 Node 服务器开发的知识）。其实更重要的是理解它所解决的问题并搞清楚你是否需要它。
5. <input type="checkbox" disabled="disabled"> 阅读开源的 Vue 应用、组件、插件源码，自己尝试编写开源的 Vue 组件、插件。
6. <input type="checkbox" disabled="disabled"> 参考 [贡献指南](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#development-setup) 阅读 Vue 的源码，理解内部实现细节。（需要了解 [Flow](https://flowtype.org/)）
7. <input type="checkbox" disabled="disabled"> 参与 Vue GitHub issue 的定位 -> 贡献 PR -> 加入核心团队

## II. 技术文章

- <input type="checkbox" disabled="disabled"> [**SegmentFault 技术周刊 Vol.14 - 进阶 Vue 2.0**](https://segmentfault.com/a/1190000007638646)
- <input type="checkbox" disabled="disabled"> [Vue.js源码（1）：Hello World的背后](https://segmentfault.com/a/1190000006866881)
- <input type="checkbox" disabled="disabled"> [Vue.js源码（2）：初探List Rendering](https://segmentfault.com/a/1190000006938217)
- <input type="checkbox" disabled="disabled"> [Vue 2.0 源码学习](https://segmentfault.com/a/1190000007484936)
- <input type="checkbox" disabled="disabled"> [Vue 中你不知道但却很实用的黑科技](https://segmentfault.com/a/1190000007694540?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly)
- <input type="checkbox" disabled="disabled"> [Vuex 下 Store 的模块化拆分实践](https://segmentfault.com/a/1190000007667542?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly)

### III. 视频教程

1. <input type="checkbox" disabled="disabled"> LARACAST - [Learn Vue 2: Step By Step](https://laracasts.com/series/learn-vue-2-step-by-step) 🇬🇧
2. <input type="checkbox" disabled="disabled"> Egghead - [Develop Web Apps with Vue.js](https://egghead.io/courses/develop-web-apps-with-vue-js) 🇬🇧
3. <input type="checkbox" disabled="disabled"> Grafikart - [Formation VueJS 2](https://www.grafikart.fr/formations/vuejs) 🇫🇷

### IV. Github 项目

- [swoole-vue-webim](https://github.com/wh469012917/swoole-vue-webim): 一个Web聊天应用，基于Vue和Swoole构建
- [iView](https://github.com/iview/iview): A high quality UI Components Library with Vue.js


