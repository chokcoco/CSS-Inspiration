## 活用 border-radius, 单标签线条动画

活用 border-radius, 单标签线条动画。

### 关键点 

这个效果，其实更多的还是因为 filter 的 blur 和 contrast 滤镜。

然后通过旋转 `border-radius` 四个角值不同的 div 得到。

----

HTML：

```html
<div></div>
```

SCSS：
```scss
html,
body{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
body {
    background: #000;
    filter: blur(5px) contrast(20);
    
    &::before {
        position: absolute;
        content: "";
        background: #000;
        top: 0;
        left: 0;
        right: 0;
        height: 20vh;
        z-index: 10;
    }
}

div {
    position: relative;
    width: 30vmin;
    height: 30vmin;
    margin: 30vh auto;
    // border: 1vmin solid #fff; 
    border-radius: 46% 42% 47% 44%;
    background: linear-gradient(#fff, #9c27b0);
    transform: scale(15) translate(0, -13vh) rotate(0deg);
    animation: rotate 10s infinite linear alternate;

    &::before {
        content: "";
        position: absolute;
        width: 99%;
        height: 99%;
        background: #000;
        border-radius: 46% 42% 47% 44%;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
    }
}

@keyframes rotate {
    100% {
        transform: scale(10) translate(0, -15vh) rotate(360deg);
    }
}

@keyframes move {
    50% {
        left: 50%;
        right: 49.95%;
    }
    100% {
        left: 90%;
        right: 9.7%;
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="Anonymous" src="https://codepen.io/Chokcoco/embed/xBxvdZ?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/xBxvdZ'>Anonymous</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>