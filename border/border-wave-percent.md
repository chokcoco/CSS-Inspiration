## 活用 border-radius, 实现波浪百分比图

活用 border-radius, 实现波浪百分比图。

### 关键点 

+ 利用 border-radius 生成椭圆
+ 并不是利用旋转的椭圆本身生成波浪效果，而是利用它去切割背景，产生波浪的效果。

详见：[纯 CSS 实现波浪效果！](https://www.cnblogs.com/coco1s/p/7197662.html)

----

HTML：

```html
<div class="container">
    <div class="wave"></div>
</div>
```

SCSS：
```scss
.container {
    position: absolute;
    width: 200px;
    height: 200px;
    padding: 5px;
    border: 5px solid rgb(118, 218, 255);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    overflow: hidden;
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: rgb(118, 218, 255);
    border-radius: 50%;
 
    &::before,
    &::after{
        content: "";
        position: absolute;
        width: 400px;
        height: 400px;
        top: 0;
        left: 50%;
        background-color: rgba(255, 255, 255, .4);
        border-radius: 45%;
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 6s linear infinite;
        z-index: 10;
    }
    
    &::after {
        border-radius: 47%;
        background-color: rgba(255, 255, 255, .9);
        transform: translate(-50%, -70%) rotate(0);
        animation: rotate 10s linear -5s infinite;
        z-index: 20;
    }
}

@keyframes rotate {
    50% {
        transform: translate(-50%, -73%) rotate(180deg);
    } 100% {
        transform: translate(-50%, -70%) rotate(360deg);
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='Pure Css Wave Loading' src='//codepen.io/Chokcoco/embed/EXJrdB/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/EXJrdB/'>Pure Css Wave Loading</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>