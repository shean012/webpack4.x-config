# webpack4.x-config

## webpack4.x 基础配置篇

#### webpack 中最常用的几个配置项

1. entry (入口)
2. output (出口)
3. module -> rules (loader)
4. plugin (插件)
5. resolve (模块配置)
6. devServer (热替换)

---

#### webpack 中使用es6 以上的高等级语法

1. 使用babel 对语法进行编译

2. 安装bebel 的loader 和 plugins

```
  npm install -D babel/core babel-loader babel-preset-env babel-polyfill babel/runtime babel-plugin-transform-runtime 
```
3. 修改webpack.config文件 和 创建 .babelrc 文件

---

#### webpack 使用 vue

1. 安装 vue 

```
  npm install vue -S
```
2. 安装vue 单文件loader 和模版解析器

```
  npm install -D vue-loader vue-template-compiler
```
3. 在webpack 配置文件中添加 vue-loader 的配置 和 引入插件


#### webpack 使用 react

1. 安装 react 和 react-dom

```
 npm install react react-dom -S
```
2. 安装使用 react 需要的语法环境

```
  npm install -D babel-preset-react babel-preset-stage-0 
  npm install =S react-dom react
```

#### webpack 使用typescript

1. 安装typesctipt 和 typescript 的loader

2. webpack.config 添加loader 配置

```
npm install -D 
```