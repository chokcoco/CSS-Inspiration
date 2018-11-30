## 活用 border-radius, 实现波浪动画

活用 border-radius, 实现波浪动画。

### 关键点 

+ 利用 border-radius 生成椭圆
+ 并不是利用旋转的椭圆本身生成波浪效果，而是利用它去切割背景，产生波浪的效果。

详见：[纯 CSS 实现波浪效果！](https://www.cnblogs.com/coco1s/p/7197662.html)

----

HTML：

```html
<h2>Pure Css Wave</h2>
```

SCSS：
```scss
body {
    position: relative;
    align-items: center;
    min-height: 100vh;
    background-color: rgb(118, 218, 255);
    overflow: hidden;

    &:before, &:after {
        content: "";
        position: absolute;
        left: 50%;
        min-width: 300vw;
        min-height: 300vw;
        background-color: #fff;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    &:before {
        bottom: 15vh;
        border-radius: 45%;
        animation-duration: 10s;
    }

    &:after {
        bottom: 12vh;
        opacity: .5;
        border-radius: 47%;
        animation-duration: 10s;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, 0) rotateZ(0deg);
    }
    50% {
        transform: translate(-50%, -2%) rotateZ(180deg);
    }
    100% {
        transform: translate(-50%, 0%) rotateZ(360deg);
    }
}

h2 {
    position: relative;
    color: #333;
    z-index: 10;
    text-align: center;
    height: 100vh;
    line-height: 140vh;
    font-size: 8vw;
    text-shadow: 3px 3px 2px #999;
}


```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='Pure Css Wave' src='//codepen.io/Chokcoco/embed/awxYWZ/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/awxYWZ/'>Pure Css Wave</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>