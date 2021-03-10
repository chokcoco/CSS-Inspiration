## clip-path 实现边框线条动画 2

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
```

SCSS：
```scss
div {
    position: relative;
    margin: auto;
    width: 120px;
    line-height: 64px;
    text-align: center;
    color: #fff;
    font-size: 20px;
    border: 2px solid gold;
    border-radius: 10px;
    background: gold;
    transition: all .3s;
    cursor: pointer;
    
    &:hover {
        filter: contrast(1.1);
    }
    
    &:active {
        filter: contrast(0.9);
    }
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border: 2px solid gold;
        transition: all .5s;
        animation: clippath 3s infinite linear;
        border-radius: 10px;
    }
    
    &::after {
        animation: clippath 3s infinite -1.5s linear;
    }
}

@keyframes clippath {
    0%,
    100% {
        clip-path: inset(0 0 98% 0);
    }
    
    25% {
        clip-path: inset(0 98% 0 0);
    }
    50% {
        clip-path: inset(98% 0 0 0);
    }
    75% {
        clip-path: inset(0 0 0 98%);
    }
}

.bg::before {
    background: rgba(255, 215, 0, .5);
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="使用 clip-path 实现边框的线条移动动画 2" src="https://codepen.io/Chokcoco/embed/dypayrM?height=350&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/dypayrM'>使用 clip-path 实现边框的线条移动动画 2</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>