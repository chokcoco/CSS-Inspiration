## border-radius变换实现loading效果

border-radius变换实现loading效果。

------ 

HTML：

```html
<div></div>
```

SCSS：
```scss
body {
    background: #000;
}

div {
    position: relative;
    width: 35vmin;
    height: 35vmin;
    background: linear-gradient(120deg, #34e0f0 0%, #b400ff 100%);
    opacity: .8;
    margin: 25vh auto;
    border-radius: 35%;
    animation: rotateMain 8s linear infinite;
}

div::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, #35a0f0 0%, #b233f0 100%);
    opacity: .8;
    box-shadow: 5px 5px 90px rgba(10, 102, 255, 0.5);
    border-radius: 35%;
    animation: rotateMain 8s linear 2s infinite;
}

div::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(60deg, #33580f 0%, #b7ee6d 100%);
    opacity: .8;
    box-shadow: 5px 5px 60px rgba(20, 102, 255, 0.3);
    border-radius: 35%;
    animation: rotateMain 8s linear 4s infinite;
    z-index: -1;
}

@keyframes rotateMain {
    50% {
        transform: rotateZ(180deg);
        border-radius: 50%;
    }
    100% {
        transform: rotateZ(360deg);
        border-radius: 35%;
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='border-radius变换实现loading效果' src='//codepen.io/Chokcoco/embed/MPXeNy/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/MPXeNy/'>border-radius变换实现loading效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>