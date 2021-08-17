## 利用渐变及 CSS Property 实现 TV 噪音动画

利用渐变及 CSS Property 实现 TV 电视雪花屏的噪音动画。

### 关键点

CSS @property，它的出现，极大的增强的 CSS 的能力！

关于本效果的详细描述，你可以查看这篇文章：[CSS 还能这样玩？奇思妙想渐变的艺术](https://github.com/chokcoco/iCSS/issues/110)

HTML：

```
<div></div>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
}

@property --length {
  syntax: '<length>';
  inherits: false;
  initial-value: 0.00085px;
}

div {
    width: 240px;
    height: 240px;
    margin: auto;
}

div {
    background-image: repeating-radial-gradient(
        circle at 17% 32%,
        rgb(4, 4, 0),
        rgb(52, 72, 197),
        rgb(115, 252, 224),
        rgb(116, 71, 5),
        rgb(223, 46, 169),
        rgb(0, 160, 56),
        rgb(234, 255, 0) var(--length)
    );
    animation: change 1s infinite alternate;
}

@keyframes change {
    100% {
        --length: 0.0009px;
    }
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="PURE CSS TV NOISE EFFECT (Only Chrome 85+)" src="https://codepen.io/Chokcoco/embed/vYgrGEE?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/vYgrGEE">
  PURE CSS TV NOISE EFFECT (Only Chrome 85+)</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>