# server-chan-turbo

>   Server酱·Turbo版 的 node.js 端模块。为了使用方便专门抽离出一个模块。使用教程见 [https://sct.ftqq.com/](https://sct.ftqq.com/)
>
>   旧版本见 [https://github.com/CaoMeiYouRen/server-chan](https://github.com/CaoMeiYouRen/server-chan)

## 安装

```
npm i server-chan-turbo -S
```

## 使用

```ts
import { ServerChanTurbo } from 'server-chan-turbo'
// SCTKEY 请前往 https://sct.ftqq.com/sendkey 领取
const SCTKEY = 'SCTxxxxxxxxxxxxxxxxxxxxx'
const serverChanTurbo = new ServerChanTurbo(SCTKEY) // 和 node-server-chan 不同的是这里需要创建实例
//标题必填，内容选填
serverChanTurbo.send('你好')
serverChanTurbo.send('你好', '你好，我很可爱')
```

## 在非模块化构建项目中使用

本模块优先考虑的是使用模块化构建的项目，例如 webpack、rollup、vite等，但也提供了 umd 格式的支持浏览器版本。

dist 文件下有两个文件可以直接在浏览器中使用，`index.umd.js` 版本并没有内置依赖，需先引入 `axios` 和 `qs` 才能使用；`index.browser.js` 已内置依赖，可直接使用，但缺点是文件体积会比较大。请自行选择合适的依赖，使用方法同上。

```js
// SCTKEY 请前往 https://sct.ftqq.com/sendkey 领取
const SCTKEY = 'SCTxxxxxxxxxxxxxxxxxxxxx'
const serverChanTurbo = new ServerChanTurbo(SCTKEY) // 此时 ServerChanTurbo 是全局变量，可以直接使用
//标题必填，内容选填
serverChanTurbo.send('你好')
serverChanTurbo.send('你好', '你好，我很可爱')
```



