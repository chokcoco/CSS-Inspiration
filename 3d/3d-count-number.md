## 3D 数字计数动画

3D 数字计数动画。

### 关键点

看着复杂，其实不难，主要是耗时间。

其中具体的一些细节，的可以看看我的这篇文章：

[你所不知道的 CSS 动画技巧与细节](https://www.cnblogs.com/coco1s/p/7443263.html)

HTML：

```pug
// pug模板
div.g-number-container.vision.preserve
    div.g-number-rotate.preserve
        div.g-number.preserve(data-digit=1)
            - for(var i=0; i<7; i++)  
                div.g-line.preserve.translate
        div.g-number.preserve(data-digit=2)
            - for(var i=0; i<7; i++)  
                div.g-line.preserve.translate
        div.g-number.preserve(data-digit=3)
            - for(var i=0; i<7; i++)  
                div.g-line.preserve.translate
        div.g-comma.preserve
        div.g-number.preserve(data-digit=4)
            - for(var i=0; i<7; i++)  
                div.g-line.preserve.translate
        div.g-number.preserve(data-digit=5)
            - for(var i=0; i<7; i++)  
                div.g-line.preserve.translate
        div.g-number.preserve(data-digit=6)
            - for(var i=0; i<7; i++)  
                div.g-line.preserve.translate
        
```

SCSS：
```scss
$width: 3vw;
$commaWidth: .5vw;
$gap: 0.2vw;
$dis: -0.2vw;
$secTop: $width + $gap;
$thirdTop: $width * 2 + $gap * 2;
$secLineTop: $width + $gap * 2;
$screenTop: $width * 4;
$numberMargin: 3vw;
$transformDistance: 50px;
$bgColor: rgba(255, 255, 255, 1);
$scale: .9;
$normalColor: #181919;
$lightColor: #34eabc;
$drakColor: #3c4444;
$lightShadow: 0 0 1vw #0BFDFD, inset 0 0 0.125vmin #0BFDFD;
$drakShadow: 0 0 1vw #425454;
$animTime: 10s;

html,
body {
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
}

.g-number-container {
    position: relative;
    margin-top: 10vh;
    text-align: center;
    animation: rotateReverse $animTime infinite linear;
    z-index: 999;
}

.g-number-rotate {
    transform: rotateX(10deg) rotateZ(0);
    animation: rotate $animTime infinite linear;
}

.vision {
    // transform: translate(-50%, -50%);
    // transform-origin: 50% 50%;
}

.preserve {
    transform-style: preserve-3d;
    perspective: 1000px;
}

.g-number {
    position: relative;
    width: $width;
    height: $screenTop;
    display: inline-block;
    margin: $numberMargin $numberMargin 0 0;
    
    .g-line {
        position: absolute;
        top: 0;
        left: 0;
        width: $width;
        height: 2px;
        background: $normalColor;
        
        &:nth-child(1) {
            transform: translateY($dis);
        }
        
        &:nth-child(2) {
            top: $secTop;    
        }
        
        &:nth-child(3) {
            transform: rotate(180deg) translateY($dis);
            top: $thirdTop;
        }
        
        &:nth-child(4) {
            transform: rotate(90deg) translateY(-$dis);
            transform-origin: 0 center;
        }
        
        &:nth-child(5) {
            transform: rotate(-90deg) translateY(-$dis);
            transform-origin: 100% center;
        }
        
        &:nth-child(6) {
            top: $secLineTop;   
            transform: rotate(90deg) translateY(-$dis);
            transform-origin: 0 center;
        }
        
        &:nth-child(7) {
            top: $secLineTop;   
            transform: rotate(-90deg) translateY(-$dis);
            transform-origin: 100% center;
        }
    }
    
    .g-line::before,
    .g-line::after{
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        background-color: $lightColor;
        box-shadow: $lightShadow;
    }
    
    .g-line::before {
        left: 0;
        right: 50%;
        transition: all .5s ease-in;
    }
    
    .g-line::after {
        left: 50%;
        right: 0;
        transition: all .5s ease-out;
    }
    
    .translate {
        &::before,
        &::after{
            transform: translateZ($transformDistance);
        }
    }
}

.g-comma {
    position: relative;
    top: -$thirdTop + 1vw;
    display: inline-block;
    width: 1vw;
    height: 1vw;
    background: $normalColor;
    margin: $numberMargin $numberMargin 0 -.8vw;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $lightColor;
        transform: translateZ($transformDistance);
    }
    
    &::after {
        content: "";
        position: absolute;
        bottom: -.8vw;
        right: .3vw;
        border: .2vw solid transparent;
        border-top: .9vw solid $lightColor;
        transform: translateZ($transformDistance) rotate(40deg);
    }
}

.g-number[data-digit="1"] .g-line:nth-child(1),
.g-number[data-digit="1"] .g-line:nth-child(2),
.g-number[data-digit="1"] .g-line:nth-child(3),
.g-number[data-digit="1"] .g-line:nth-child(4),
.g-number[data-digit="1"] .g-line:nth-child(6),
.g-number[data-digit="2"] .g-line:nth-child(4),
.g-number[data-digit="2"] .g-line:nth-child(7),
.g-number[data-digit="3"] .g-line:nth-child(4),
.g-number[data-digit="3"] .g-line:nth-child(6),
.g-number[data-digit="4"] .g-line:nth-child(1),
.g-number[data-digit="4"] .g-line:nth-child(3),
.g-number[data-digit="4"] .g-line:nth-child(6),
.g-number[data-digit="5"] .g-line:nth-child(5),
.g-number[data-digit="5"] .g-line:nth-child(6),
.g-number[data-digit="6"] .g-line:nth-child(5),
.g-number[data-digit="7"] .g-line:nth-child(2),
.g-number[data-digit="7"] .g-line:nth-child(3),
.g-number[data-digit="7"] .g-line:nth-child(4),
.g-number[data-digit="7"] .g-line:nth-child(6),
.g-number[data-digit="9"] .g-line:nth-child(6),
.g-number[data-digit="0"] .g-line:nth-child(2){
    &::before,
    &::after {
        transform: translateZ(25px);
        background: $drakColor;
        box-shadow: $drakShadow;
    }
}

@keyframes rotate {
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    50% {
        transform: rotateX(20deg) rotateY(40deg) rotateZ(180deg);
    }
    100% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
    }
}

@keyframes rotateReverse {
    0% {
        transform: rotateZ(0deg);
    }100% {
        transform: rotateZ(-360deg);
    }
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height="400" style="width: 100%;" scrolling="no" title="3d Number Count" src="https://codepen.io/Chokcoco/embed/qXVxyw?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/qXVxyw'>3d Number Count</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>