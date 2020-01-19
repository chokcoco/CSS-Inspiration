## 使用 translateZ 实现滚动视差

使用 `translateZ` 实现滚动视差。

视差滚动（Parallax Scrolling）是指让多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。 作为网页设计的热点趋势，越来越多的网站应用了这项技术。

### 关键点

+ 我们给容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，

+ 再给子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样

+ 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果。

详细分析请看：[滚动视差？CSS 不在话下](https://www.cnblogs.com/coco1s/p/9453938.html)

HTML：

```html
<div class="g-container">
    <div class="section-one">translateZ(-1)</div>
    <div class="section-two">translateZ(-2)</div>
    <div class="section-three">translateZ(-3)</div>
</div>
```

SCSS：
```scss
html {
    height: 100%;
    overflow: hidden;
}

body {
    margin: 0;
    padding: 0;
    perspective: 2px;
    transform-style: preserve-3d;
    transform-origin: center center;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.g-container {
    position: relative;
    height: 150%;
    
    & > div {
        font-size: 5vw;  
        position: absolute;
        top: 20%;
    }
    
    .section-one {
        left: 0%;
        background: rgba(10, 10, 10, .2);
        transform: translateZ(-1px);
    }
    
    .section-two {
        left: 40%;
        background: rgba(30, 130, 30, .2);
        transform: translateZ(-2px);
    }
    
    .section-three {
        left: 90%;
        background: rgba(200, 100, 130, .2);
        transform: translateZ(-3px);
    }
}
```

效果如下，滚动页面（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS 3D parallax' src='//codepen.io/Chokcoco/embed/EpOeRm/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/EpOeRm/'>CSS 3D parallax</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>