## 使用 outline 巧妙实现加号符号

使用 outline 巧妙实现加号符号。

### 关键点 

很有意思的一个小动画，精髓在于使用 border-radius 的变化模拟绳子下坠的感觉。

----

HTML：

```html
<div class="g-container">
    <div class="g-line"></div>
    <div class="g-ground"></div>
    <div class="g-man">
        <div class="g-hand"></div>
    </div>
</div>
```

SCSS：
```scss
.g-container {
    position: relative;
    width: 400px;
    height: 100vh;
    margin: auto;
    // display: flex;
}

.g-line {
    position: absolute;
    left: 200px;
    width: 100px;
    height: 100px;
    border-radius: 0 0 0 120px;
    border: 1px solid #000;
    border-top: none;
    // border-bottom: none;
    border-right: none;
    transform-origin: 0 0;
    animation: lineMove 6s ease-in-out infinite;
    transform: rotate(-90deg);
    // transform: rotate(15deg);
    // height: 290px;
    // width: 50px;
    // border-radius: 0 0 0 90%;
}

.g-man {
    position: absolute;
    top: 240px;
    left: 170px;
    width: 1px;
    height: 40px;
    background: #000;

    opacity: 0;
    animation: manShow 6s infinite ease-in-out;
    
    &:before {
        position: absolute;
        content: "";
        top: -100%;
        left: -12px;
        width: 25px;
        height: 40px;
        border-radius: 100%;
        border: 1px solid #333;
        animation: headrotate 6s infinite ease-in-out;
    }
    
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 110%;
        transform: translate(-50%, 0) rotate(45deg);
        transform-origin: center center;
        width: 30px;
        height: 30px;
        border: 1px solid #333;
        border-right: none;
        border-bottom: none;
        animation: footerShrink 6s infinite ease-in-out;
    }
}

.g-hand {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, 0);
    width: 50px;
    height: 1px;
    background: #000;
    animation: manhandmove 6s infinite ease-in-out;
}

.g-ground {
    position: absolute;
    width: 120px;
    height: 1px;
    margin-top: 300px;
    margin-left: 100px;
    // background: #000;
    animation: groundShow 6s infinite;
}

@keyframes lineMove {
    15% {
        width: 80px;
        height: 270px;
    }
    27% {
        border-radius: 0 0 0 90%;
    }
    35% {
        width: 0px;
        height: 290px;
        border-radius: 0 0 0 90%;
        transform: rotate(20deg);
    }
    45% {
        width: 0px;
        height: 300px;
        border-radius: 0 0 0 0px;
        transform: rotate(-8deg);
    }
    53% {
        width: 0px;
        height: 300px;
        border-radius: 0 0 0 0px;
        transform: rotate(3deg);
    }
    60% {
        width: 0px;
        height: 300px;
        border-radius: 0 0 0 0px;
        transform: rotate(0deg);
    }
    85% {
        width: 0px;
        height: 25px;
        border-radius: 0 0 0 0px;
        transform: rotate(0deg);
    }
    100% {
        width: 0px;
        height: 0px;
        border-radius: 0 0 0 0px;
        transform: rotate(0deg);
    }
        
} 

@keyframes groundShow {
    29% {
        background: opacity;
    }
    30% {
        background: #000;
    }
    31.9% {
        backgroun: #000;
    }
    32% {
        background: opacity;
    }
    33.9% {
        background: opacity;
    }
    34% {
        background: #000;
    }
    60% {
        background: #000;
    }
    61% {
        background: opacity;
    }
}

@keyframes manShow {
    30% {
        top: 240px;
        opacity: 1;
    }
    60% {
        top: 240px;
    }
    85% {
        top: 0;
        opacity: 1;
    }
    100% {
        top: -10px;
        opacity: 0;
    }
}

@keyframes manhandmove{
    55% {
        transform: translate(-20%, 0) rotate(0deg);
    }
    60% {
        transform: translate(-24%, 0) rotate(-30deg);
    }
    100% {
        ransform: translate(-24%, 0) rotate(-30deg);
    }
}

@keyframes headrotate {
    55% {
        transform: rotate(0);
    }
    60% {
        transform: rotate(-25deg);
    }
    100% {
        transform: rotate(-20deg);
    }
}
```

效果如下：

<iframe height="450" style="width: 100%;" scrolling="no" title="animation of a falling line " src="https://codepen.io/Chokcoco/embed/yWjjjq?height=450&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/yWjjjq'>animation of a falling line </a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>