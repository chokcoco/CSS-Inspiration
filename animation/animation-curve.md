## CSS实现曲线运动

CSS实现曲线运动。

HTML：

```html
<div class="g-container">
    <div class="g-ball"></div>
</div>
```

SCSS：
```scss
.g-container {
    position: relative;
    width: 10vmin;
    height: 70vmin;
    margin: 20vmin auto;
    // background: rgba(0, 0, 0, .1);
    transform-origin: center 0;
    animation: rotate 1.5s cubic-bezier(.5, 0, .5, 1) infinite alternate, opacity 3s linear infinite alternate;
}

.g-ball {
    position: absolute;
    width: 10vmin;
    height: 10vmin;
    border-radius: 50%;
    background: radial-gradient(circle, #fff, #000);
    top: 60vmin;
    left: 0;
    animation: move 1.5s cubic-bezier(.5, 0, .5, 1) infinite alternate;
}

@keyframes opacity {
    from, 50% {
      border: 1px dashed rgba(255, 255, 255, 0);
    }
    to {
      border: 1px dashed rgba(0, 0, 0, .2);
    }
}

@keyframes rotate {
    100% {
        transform: rotate(90deg) translate(-3vmin, 0);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS实现曲线运动' src='//codepen.io/Chokcoco/embed/yRqrOL/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/yRqrOL/'>CSS实现曲线运动</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>