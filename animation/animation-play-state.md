## CSS 巧妙控制动画行进

CSS 巧妙控制动画行进。

其中具体的一些细节，的可以看看我的这篇文章：

[巧妙使用 CSS 控制动画行进](https://github.com/chokcoco/iCSS/issues/63)

HTML：

```pug
// pug模板语言
div.g-container
    div.g-btn
        -for(var i=0; i<60; i++)
            div.g-ball   
```

SCSS：
```scss
.g-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: contrast(10);
    background: #000;
}

.g-btn {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 130px auto;
    cursor: pointer;
    filter: blur(2px) contrast(10);
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #dc8165;
        border-radius: 48% 45% 48% 46%;
        animation: rotate 3s infinite linear;
        z-index: 0;
    }
}

.g-ball {
    position: absolute;
    top: 50px;
    transform: translate(0, 0);
    background: #fa8763;
    border-radius: 50%;
    z-index: -1;
}

@for $i from 0 to $count {
    .g-ball:nth-child(#{$i}) {
        $width: #{random(60)}px;
        
        width: $width;
        height: $width;
        left: calc(#{(random(100))}px + 30px);
        animation: movetop .6s linear #{random(2000)/1000}s infinite;
        animation-play-state: running;
    }
    
    .g-btn:hover .g-ball:nth-child(#{$i}) {
        animation-play-state: paused;
    }
}

@keyframes movetop {
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(0, -180px);
        opacity: .4;
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="480" style="width: 100%;" scrolling="no" title="css控制动画行进" src="https://codepen.io/Chokcoco/embed/ZPgxwy?height=480&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/ZPgxwy'>css控制动画行进</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>