# rabbit

![](./rabbit.png)  

## 功能

把云间玉兔添加到你自己的网页内！支持自定义颜色、以及位置。

## 使用

首先需要引入模块，可以使用 CDN 直接引入或者通过 NPM 包的形式安装

```

<!-- https://cdn.jsdelivr.net/gh/zcxey2911/rabbit@v1.0.0/lib/rabbit.css -->
<!-- https://cdn.jsdelivr.net/gh/zcxey2911/rabbit@v1.0.0/lib/rabbit.js -->

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/zcxey2911/rabbit@v1.0.0/lib/rabbit.css"
/>

<div id="rabbit_box">
</div>

<script>

function init_rabbit(){

 rabbit_init("pink","20%");  // 粉色 高度20%

 //rabbit_init(); //默认颜色 默认位置

}

</script>


<script
  async
  onload="init_rabbit()"
  src="https://cdn.jsdelivr.net/gh/zcxey2911/rabbit@v1.0.0/lib/rabbit.js"
></script>

```

OR

```
// npm install --save rabbit-widget
import 'rabbit-widget/lib/index.css';

var rabbit_init = require('rabbit-widget');

rabbit_init();

```




