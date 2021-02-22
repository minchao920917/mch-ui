#   mch-ui

mc-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库

[mc-ui](https://mc-ui.github.io/)

#   en

A simple vue2.0 UI  for using in your project.

#   Installation

    npm i mch-ui -S

#   Usage

main.js

    import Vue from 'vue'
    import App from './App.vue'

    import MCUI from "mch-ui";
    import 'mch-ui/lib/mch-ui.css'
    Vue.use(MCUI)

    new Vue({
    el: '#app',
    render: h => h(App)
    })
#   License
MIT.


#   zh-cn

一个基于vue2.0的ui组件库，方便你在项目中的使用

#   安装

    npm i mch-ui -S

#   使用

引入mch-ui组件库
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

    npm i mch-ui -S

全局引入 在 main.js 中写入以下内容：

    import Vue from 'vue'
    import App from './App.vue'

    import MCUI from "mch-ui";
    import 'mch-ui/lib/mch-ui.css'
    Vue.use(MCUI)

    new Vue({
    el: '#app',
    render: h => h(App)
    })

#   License
MIT.