# 面包机项目

> A Vue.js project

## Build Setup

``` bash
# install dependencies  安装依赖
npm install

# serve with hot reload at localhost:8080 开发环境运行
npm run dev

# build for production with minification build为生成环境
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## BEM命名约定

* 所有可以独立模块的地方根元素命名可以加"-"，比如"menu-list"

* block的子元素如何写？`block__title`，`block__content`

* 如果block有状态改变呢？ `block--modifier`，`block__title--change`

* .block 表示抽象或组件的较高级别

* .block__element代表一个后代，.block它有助于形成.block 一个整体。

* .block--modifier表示不同的状态或版本.block

* 双重下划线的原因是，块本身可以用连字符


## vue-resource
项目中如果遇到需要请求接口，我们采用了vue的一个插件：
[vue-resource](https://github.com/pagekit/vue-resource)

## 项目文件结构
开发目录从src开始

```js
-src
   |- assets //静态文件 图片，音频等
   |- components //组件，可以是公共组件
   |- css //所有css样式都在这里
     |- main.less //入口css 所有css命名要符合规定，import-*-xx *是类别（公共库 | model）
   |- library //其他公共库，比如echartjs
   |- page //页面 
   |- router //路由
   |- App.vue //入口文件
   |- main.js //入口js
```

