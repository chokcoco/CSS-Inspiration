## 单标签实现抖音LOGO

单标签实现抖音LOGO。

### 关键点

+ 主要借助了两个伪元素实现了整体结构，借助了 drop-shadow 生成一层整体阴影 
+ drop-shadow 只能是单层阴影，所以另一层阴影需要多尝试
+ contrast(150%) brightness(110%) 则可以增强图像的对比度和亮度，更贴近抖音LOGO的效果

HTML：

```html
<div></div>
```

SCSS：
```scss
body {
    background: #000;
    overflow: hidden;
}

div {
    position: relative;
    width: 37px;
    height: 218px;
    margin: 100px auto;
    z-index: 1;
    background: #fff;
    filter:drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(110%);
    box-shadow: 11.6px 10px 0 0 #fe2d52;
    z-index: 10;
    // transform: skewX(-5deg);
    animation: move 5s infinite ease-in;
    
    &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border: 37px solid #fff;
        border-top: 37px solid transparent;
        border-radius: 50%;
        top: 123px;
        left: -137px;
        transform: rotate(45deg);
        filter: drop-shadow(16px 0px 0 #fe2d52);
        // mix-blend-mode: overlay;
    }
    
        &::after {
        content: "";
        position: absolute;
        width: 140px;
        height: 140px;
        border: 30px solid #fff;
        border-right: 30px solid transparent;
        border-top: 30px solid transparent;
        border-left: 30px solid transparent;
        top: -100px;
        right: -172px;
        border-radius: 100%;
        transform: rotate(45deg);
        z-index: -10;
        filter:drop-shadow(14px 0 0 #fe2d52);
    }
}

@keyframes move {
    4% {
        transform: skewX(7deg) translate(-30px);
    }
    7% {
        transform: skewX(-6deg) translate(18px);
    }
    9% {
        transform: skewX(5deg) translate(-8px);
    }
    10% {
        transform: skewX(-4deg)translate(6px);
    }
    11% {
        transform: skewX(3deg)translate(-4px);
    }
    12% {
        transform: skewX(-2deg) translate(2px);
    }
    13% {
        transform: skewX(1deg) translate(0px);
        filter:drop-shadow(-10px -10px 0 #24f6f0) contrast(120%) brightness(110%) blur(3px);
    }
    30% {
        filter:drop-shadow(-10px -10px 0 #24f6f0) contrast(150%) brightness(120%) blur(0px);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='400' scrolling='no' title='单标签实现抖音LOGO' src='//codepen.io/Chokcoco/embed/qJQmyY/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/qJQmyY/'>单标签实现抖音LOGO</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>