## 伪元素遮罩实现线条 loading 效果

伪元素遮罩实现线条 loading 效果

### 关键点

这个动画非常有意思，核心点在于如何使用 CSS 实现弧形线条的长短变化。

核心在于遮罩。

一看就懂：

HTML：
```html
<div></div>
```

SCSS：
```scss
body,
html {
    height: 100%;
    overflow: hidden;
}

div {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 100px auto;
    transform: rotate(360deg);
    animation: rotate 45s infinite linear;
}

div::before {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 3px solid #000;
    border-left: 3px solid #000;
    border-bottom: 3px solid transparent;
    border-right: 3px solid transparent;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-out;
}

div::after {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    box-sizing: border-box;
    border-radius: 50%;
    border-bottom: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #fff;
    border-left: 7px solid #fff;
    transform: rotate(720deg);
    animation: rotate 3s infinite ease-in-out;
}

@keyframes rotate {
    100% {
        transform: rotate(0deg);
    }
}

```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="320" style="width: 100%;" scrolling="no" title="Linear Loading" src="https://codepen.io/Chokcoco/embed/PvqYNJ?height=320&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/PvqYNJ'>Linear Loading</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

上图第一个为实际效果，第二个方便大家理解，将本身的白色线条改为了红色，其实原理就是黑色线条被白色线条（上图2展示为红色）遮住，造成了线条变短的错觉。

> 容器也添加了一个旋转动画，让动画看起来更合理些。