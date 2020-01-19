## 使用 hue-rotate 实现渐变背景动画

使用 hue-rotate 实现渐变背景动画。

这种方法应该是实现渐变背景动画的比较好的方法。

HTML：

```HTML
<div></div>
```

SCSS：
```scss
div {
    width: 300px;
    height: 180px;
    margin: auto;
    background: linear-gradient(45deg, #ffc107, deeppink, #9c27b0);
    animation: hueRotate 10s infinite alternate;
}

@keyframes hueRotate {
    100% {
        filter: hue-rotate(360deg);
    }
}
```

效果如下：

<iframe height="320" style="width: 100%;" scrolling="no" title="hue-rotate实现渐变背景动画" src="https://codepen.io/Chokcoco/embed/MRegJW?height=320&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/MRegJW'>hue-rotate实现渐变背景动画</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>