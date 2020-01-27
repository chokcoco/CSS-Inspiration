## clip-path 实现边框线条动画

clip-path 实现边框线条动画。

### clip-path

一个非常有意思的 CSS 属性。

`clip-path` CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部 SVG 的路径。

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### 关键点

因为使用了 clip-path 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以通过动画 animation 将几个关键帧绘制出来即可。

HTML：

```HTML
<div>Hello</div>
<div class="bg">示意图</div>
```

SCSS：
```scss
div {
    position: relative;
    margin: auto;
    width: 160px;
    line-height: 160px;
    text-align: center;
    font-size: 24px;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid gold;
        transition: all .5s;
        animation: clippath 3s infinite linear;
    }
}

@keyframes clippath {
    0%,
    100% {
        clip-path: inset(0 0 95% 0);
    }
    
    25% {
        clip-path: inset(0 95% 0 0);
    }
    50% {
        clip-path: inset(95% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 95%);
    }
}

.bg::before {
    background: rgba(255, 215, 0, .5);
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="使用 clip-path 实现边框的线条移动动画" src="https://codepen.io/Chokcoco/embed/bGNJGWX?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/bGNJGWX'>使用 clip-path 实现边框的线条移动动画</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>