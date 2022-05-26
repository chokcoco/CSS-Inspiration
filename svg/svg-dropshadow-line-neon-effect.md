## SVG 配合 drop-shadow 实现线条光影效果

SVG 配合 drop-shadow 实现线条光影效果。

详见：[CSS 奇技淫巧 | 妙用 drop-shadow 实现线条光影效果](https://github.com/chokcoco/iCSS/issues/142)

HTML：
```HTML
<div class="container">
    <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" class="line" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg">
        <path d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" class="line line2" />
    </svg>
</div>
```

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
    display: flex;
    background: linear-gradient(#1a0f19, #16121c);
}

svg {
    position: absolute;
    width: 600px;
    height: 600px;
}

.container {
    position: relative;
    width: 400px;
    height: 400px;
    margin: auto;
}


.line {
    --colorA: #f24983;
    fill: none;
    stroke-width: 10;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke: #fff;
    stroke-dasharray: 328 600;
    animation: rotate 2s infinite linear;   
    filter:
        drop-shadow(0 0 2px var(--colorA))
        drop-shadow(0 0 5px var(--colorA))
        drop-shadow(0 0 10px var(--colorA))
        drop-shadow(0 0 15px var(--colorA))
        drop-shadow(0 0 25px var(--colorA));
}

.line2 {
    animation: rotate 2s infinite -1s linear;   
    --colorA: #37c1ff;
}


@keyframes rotate {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 928;
  }
}
```

效果如下：

<iframe height="450" style="width: 100%;" scrolling="no" title="SVG Heart Line Neon Animation" src="https://codepen.io/Chokcoco/embed/VwWgKWK?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/VwWgKWK">
  SVG Heart Line Neon Animation</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>