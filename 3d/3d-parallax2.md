## 借助 translate3d\perspective 实现 3D 视差效果

借助 translate3d\perspective 实现 3D 视差效果。

视差滚动（Parallax Scrolling）是指让多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。 作为网页设计的热点趋势，越来越多的网站应用了这项技术。

### 关键点

+ 我们给容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，

+ 再给子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样

+ 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果。

详细分析请看：[滚动视差？CSS 不在话下](https://www.cnblogs.com/coco1s/p/9453938.html)

HTML：

```pug
// pug模板
div.g-container
    - for(var i=0; i<10; i++)
        div.g-section CSS Parallax
```

SCSS：
```scss
$length: 10;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

body {
    background: #000;
    font-family: "lato", lucida grande,lucida sans unicode,lucida,helvetica,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
}

.g-container {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow: scroll;
    transform-style: preserve-3d;
    // perspective: 1px;
    // mix-blend-mode: lighten;
    filter: blur(5px) contrast(5px);
    animation: perspectiveChange 10s infinite ease-in alternate;
}

.g-section {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    text-align: center;
    line-height: 100vh;
    padding: 30vh 0;
    font-size: 15vh;
}

@for $i from 1 through $length {
    .g-section:nth-child(#{$i}) {
        transform: translate3d(-200px, 0, -#{$i}px) scale(#{$i * 0.1 + 1 });
        $hue : $i * 35deg;
        color : hsla($hue, 100%, 60%, .8);
        // text-shadow: 0px 0px 1px hsla($hue, 100%, 60%, .9);
        z-index: #{$i};
    }
}

@keyframes perspectiveChange {
    0% {
        perspective: 12;
    }
    100% {
        perspective: 120;
    }
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS 视差' src='//codepen.io/Chokcoco/embed/PBXwdX/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/PBXwdX/'>CSS 视差</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>