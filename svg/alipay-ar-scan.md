## 支付宝AR扫福动画

支付宝AR扫福动画。

### 关键点

使用了 `stroke-dasharray` 和 `stroke-dashoffset` 控制线条动画。

具体的可以看看我的这篇文章：

[【Web动画】SVG 线条动画入门](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="300px">
    <polygon class="g-polygon-wrap" points="150 0, 300 75, 300 225, 150 300, 0 225,  0 75, 150 0" />
    <polygon class="g-polygon-move" points="150 0, 300 75, 300 225, 150 300, 0 225,  0 75, 150 0" />
</svg>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    background: #000;
}

svg {
    margin: auto;
    overflow: visible;
    transform: scalex(.9);
}

.g-polygon-wrap,
.g-polygon-move {
    fill: none; 
    stroke: #bf303c; 
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
}

.g-polygon-move {
    transform-origin: center center;
    transform: scale(1.05);
    stroke: linear-gradinet(180deg, red, transprent);
    stroke-width:1.5;
    stroke-dasharray: 280, 700;
    stroke-dashoffset: 8;
    animation: move 2.4s infinite linear;
}

@keyframes move {
    0% {
        stroke-dashoffset: 8;
    }
    100% {
        stroke-dashoffset: -972;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="450" style="width: 100%;" scrolling="no" title="Alipay RedPacket Scan Animation" src="https://codepen.io/Chokcoco/embed/YzPjaXp?height=450&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/YzPjaXp'>Alipay RedPacket Scan Animation</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>