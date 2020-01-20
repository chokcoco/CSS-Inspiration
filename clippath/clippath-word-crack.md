## clip-path 实现文字断裂效果

clip-path 实现文字断裂效果。

### clip-path

一个非常有意思的 CSS 属性。

`clip-path` CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部 SVG 的路径。

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### 关键点

核心思想是：使用元素的伪元素复制两份文本，再使用 clip-path 将元素本身、元素的两个伪元素分为3部分，分别对这3部分进行控制。

因为使用了 clip-path 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以分别控制 3 个部分进行动画。

HTML：

```HTML
<h1 data-text="Text Crack">
    <span>Text Crack</span>
</h1>
```

SCSS：
```scss
body, html
{
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #000;
    overflow: hidden;
    font-family: sans-serif;
}

h1 {
    position: relative;
    margin: auto;
    font-size: calc(20px + 5vw);
    font-weight: bold;
    color: #fff;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    text-shadow: 0 0 10px blue;
    user-select: none;
    white-space: nowrap;
    filter: blur(0.007em);
    animation: shake 2.5s linear forwards;
}

h1 span {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    clip-path: polygon(10% 0%, 44% 0%, 70% 100%, 55% 100%);
}

h1::before,
h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
}

h1::before {
    animation: crack1 2.5s linear forwards;
    clip-path: polygon(0% 0%, 10% 0%, 55% 100%, 0% 100%);
}

h1::after {
    animation: crack2 2.5s linear forwards;
    clip-path: polygon(44% 0%, 100% 0%, 100% 100%, 70% 100%);
}

@keyframes shake {
    5%,
    15%,
    25%,
    35%,
    55%,
    65%,
    75%,
    95% {
        filter: blur(0.018em);
        transform: translateY(0.018em) rotate(0deg);
    }

    10%,
    30%,
    40%,
    50%,
    70%,
    80%,
    90% {
        filter: blur(0.01em);
        transform: translateY(-0.018em) rotate(0deg);
    }

    20%,
    60% {
        filter: blur(0.03em);
        transform: translate(-0.018em, 0.018em) rotate(0deg);
    }

    45%,
    85% {
        filter: blur(0.03em);
        transform: translate(0.018em, -0.018em) rotate(0deg);
    }

    100% {
        filter: blur(0.007em);
        transform: translate(0) rotate(-0.5deg);
    }
}

@keyframes crack1 {
    0%,
    95% {
        transform: translate(-50%, -50%);
    }

    100% {
        transform: translate(-51%, -48%);
    }
}

@keyframes crack2 {
    0%,
    95% {
        transform: translate(-50%, -50%);
    }

    100% {
        transform: translate(-49%, -53%);
    }
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height="350" style="width: 100%;" scrolling="no" title="Pure Css Text Crack" src="https://codepen.io/Chokcoco/embed/NWWxryd?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/NWWxryd'>Pure Css Text Crack</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>