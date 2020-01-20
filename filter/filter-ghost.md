## 单标签纯CSS实现幽灵动画

单标签纯CSS实现幽灵动画。

### 关键点 


+ filter: blur() | filter: contrast() 的配合使用
+ 单标签的限制，所以多重渐变也发挥了很重要的作用

HTML：

```HTML
<div></div>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    background: #000;
    filter: blur(3px) contrast(10);
}

div {
    position: relative;
    width: 80px;
    height: 120px;
    background: 
        radial-gradient(circle at 60px 40px, #000, #000 7px, transparent 7px),
        radial-gradient(circle at 40px 40px, #000, #000 7px, transparent 7px),
        radial-gradient(circle at 50px 50px, #fff, #fff);
    background-size: 100% 100%; 
    background-repeat: no-repeat;
    margin: auto;
    border-radius: 40px 40px 60px 20px;
    transform: skewX(-10deg);
    animation: moveMain 2s infinite ease-out;
}

div::before,
div::after {
    content: "";
    position: absolute;
    background: #fff;
    border-radius: 50%;
}

div::before {
    width: 20px;
    height: 20px;
    top: 50px;
    left: -10px;
    box-shadow: 0 0 0 1px #fff;
    animation: move 2s infinite ease-in;
}

div::after {
    width: 30px;
    height: 25px;
    top: 95px;
    left: -10px;
    box-shadow: 0 0 0 1px #fff;
    animation: move2 2s infinite ease-in;
}

@keyframes move {
    80%,
    100% {
        box-shadow: -60px 0 0 .5px rgba(255, 255, 255, .5);
    }
}

@keyframes move2 {
    80%,
    100% {
        box-shadow: -100px 0 0 .5px rgba(255, 255, 255, .2);
    }
}

@keyframes moveMain {
    42% {
        transform: skewX(-10deg) translate(40px, 0);
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="Single Div Pure CSS Ghost" src="https://codepen.io/Chokcoco/embed/vYYrNOO?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/vYYrNOO'>Single Div Pure CSS Ghost</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>