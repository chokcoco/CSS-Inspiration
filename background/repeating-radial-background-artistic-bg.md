## 多重径向渐变实现美妙的艺术背景

利用多重径向渐变实现美妙的艺术背景。

### 关键点

多重径向渐变的单位数量级要非常的小！

关于本效果的详细描述，你可以查看这篇文章：[CSS 还能这样玩？奇思妙想渐变的艺术](https://github.com/chokcoco/iCSS/issues/110)

HTML：

```
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
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
  initial-value: 0.0003px;
}

div {
    width: 240px;
    height: 240px;
    margin: auto;
}

div:nth-child(1) {
    background-image: repeating-radial-gradient(
        circle at center center,
        rgb(241, 43, 239),
        rgb(239, 246, 244) 3px
    );
}

div:nth-child(2) {
    background-image: repeating-radial-gradient(
        circle at 15% 30%,
        rgb(4, 4, 0),
        rgb(52, 72, 197),
        rgb(115, 252, 224),
        rgb(116, 71, 5),
        rgb(223, 46, 169),
        rgb(0, 160, 56),
        rgb(234, 255, 0) 2px
    );
}

div:nth-child(3) {
    background-image: repeating-radial-gradient(
        circle at center center,
        rgb(81, 9, 72),
        rgb(72, 90, 223),
        rgb(80, 0, 34),
        rgb(34, 134, 255),
        rgb(65, 217, 176),
        rgb(241, 15, 15),
        rgb(148, 213, 118) 0.1px
    );
}

div:nth-child(4) {
    background-image: repeating-radial-gradient(
        circle at center center,
        rgb(38, 21, 217) 0px,
        rgb(38, 21, 217) 2px,
        rgba(8, 254, 5, 0.83) 2px,
        rgba(8, 254, 5, 0.83) 3px
    );
    background-size: 69px 69px;
}

div:nth-child(5) {
    background-image: repeating-radial-gradient(
        ellipse at center center,
        rgb(75, 154, 242),
        rgb(64, 135, 228),
        rgb(54, 117, 214),
        rgb(43, 98, 200),
        rgb(33, 79, 185),
        rgb(22, 60, 171),
        rgb(12, 42, 157),
        rgb(1, 23, 143) 0.01px
    );
}

div:nth-child(6) {
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
    transition: 4s --length;
    cursor: pointer;
    
    &:hover {
        --length: 4px;
    }
}
```

效果如下：

<iframe height="600" style="width: 100%;" scrolling="no" title="Magic Gradient Art" src="https://codepen.io/Chokcoco/embed/MWJXKXE?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/MWJXKXE">
  Magic Gradient Art</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>