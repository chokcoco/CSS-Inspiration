## SVG 文字 hover 线条动画 2

SVG 文字 hover 线条动画

### 关键点

使用了 `stroke-dasharray` 和 `stroke-dashoffset` 控制线条动画。

具体的可以看看我的这篇文章：

[【Web动画】SVG 线条动画入门](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<svg viewBox="0 0 800 600">
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="35%" class="text--line" >Swing</text>
    <text text-anchor="middle" x="50%" y="68%" class="text--line2">Text</text>
  </symbol>
  <g class="g-ants">
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
  </g>
</svg>
```

SCSS：
```scss
.text--line {
  font-size: .5em;
}

svg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.text-copy {
  fill: none;
  stroke: white;
  stroke-dasharray: 7% 28%;
  stroke-width: 3px;
  -webkit-animation: stroke-offset 9s infinite linear;
          animation: stroke-offset 9s infinite linear;
}
.text-copy:nth-child(1) {
  stroke: #360745;
  stroke-dashoffset: 7%;
}
.text-copy:nth-child(2) {
  stroke: #D61C59;
  stroke-dashoffset: 14%;
}
.text-copy:nth-child(3) {
  stroke: #E7D84B;
  stroke-dashoffset: 21%;
}
.text-copy:nth-child(4) {
  stroke: #EFEAC5;
  stroke-dashoffset: 28%;
}
.text-copy:nth-child(5) {
  stroke: #1B8798;
  stroke-dashoffset: 35%;
}

@-webkit-keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }
}

@keyframes stroke-offset {
  50% {
    stroke-dashoffset: 35%;
    stroke-dasharray: 0 87.5%;
  }
}
```

效果如下（hover下面的按钮查看效果）：

<iframe height="400" style="width: 100%;" scrolling="no" title="Swing Text" src="https://codepen.io/Chokcoco/embed/yLVzqBN?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/yLVzqBN'>Swing Text</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>