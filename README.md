# portal

共享平台的门户项目

## 使用说明

- 本项目使用包管理工具NPM，因此需要先把本项目所依赖的包下载下来：
```
$ npm install
```

- 启动服务器，这里使用的是webpack-dev-server
```
$ npm run start 或者 npm start
```

## CLI命令(npm scripts)

命令|作用&效果
----|--------
npm run start|根据`webpack.dev.config.js`，使用`webpack-dev-server`开启服务器，启动文件监听
npm run dev|根据`webpack.dev.config.js`，build出一份开发环境的代码
npm run build|根据`webpack.config.js`，build出一份生产环境的代码


## 目录结构说明

```
项目目录
│  .editorconfig               // 编辑器设置，包含缩进等信息
│  .eslintignore               // ESLint校验忽略
│  .eslintrc.js                // ESLint校验配置
│  .gitignore                  // git文件忽略
│  package.json                // npm包管理
│  postcss.config.js           // postcss配置
│  README.md                   // 项目说明文档
│  webpack.config.js           // webpack生产环境配置文件
│  webpack.dev.config.js       // webpack开发环境配置文件
│  
├─build                        // webpack相关配置文件
│  │  entry.config.js
│  │  module.dev.config.js
│  │  module.product.config.js
│  │  output.config.js
│  │  plugins.dev.config.js
│  │  plugins.product.config.js
│  │  resolve.config.js
│  │  
│  ├─base
│  │      dir.js
│  │      pageArr.js
│  │      
│  ├─inherit
│  │      module.config.js
│  │      plugins.config.js
│  │      
│  └─vendor
├─dist                         // 生成网页的目录，这里的网页才是提供给后端工程师的网页
│              
├─src                          // 未编译前的网页源文件
│  ├─asset                     // 存放各种静态资源，包括图片，字体文件
│  │          
│  ├─common                    // 存放公共内容，包括公共js模块，公共样式等
│  │  ├─module
│  │  │      common.js
│  │  │      
│  │  └─style
│  │          common.less
│  │          
│  ├─component                 // 存放组件，可以是纯HTML，也可以包含js/css/image等，看自己需要
│  │          
│  ├─layout                   // 页面布局模板
│  │      layout.art
│  │      
│  ├─page                     // 存放各个页面独有的部分，如入口文件、只有该页面使用到的css、模板文件等
│  │  └─index
│  │         index.art
│  │         index.css
│  │         index.js
│  │         index.less
│  │         other.js
│  │              
│  └─vendor                   // 存放所有不能用npm管理的第三方库
│      
└─static                      // 存放不参与打包的静态资源

```
