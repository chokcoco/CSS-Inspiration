## SVG feTurbulence 滤镜实现故障按钮点击效果

使用 SVG feTurbulence 滤镜实现故障按钮点击效果 。

### 关键点

SVG `<feTurbulence>` 滤镜能够实现半透明的烟熏或波状图像。 通常用于实现一些特殊的纹理。本效果通过 `<feTurbulence>` 作用于背景色并且配合动画效果实现 故障按钮点击效果。

关于本效果的详细描述，你可以查看这篇文章：[有意思！强大的 SVG 滤镜](https://github.com/chokcoco/cnblogsArticle/issues/27)

HTML：

```
<div class="fe1">Button</div>
<div class="fe1 hover">Button</div>
<div class="fe2">Button</div>
<div class="fe2 hover">Button</div>
<svg>
    <defs>
        <filter id="fe1">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="0.00001 9.9999999" numOctaves="1" result="warp">
                <animate attributeName="baseFrequency" from="0.00001 9.9999" to="0.00001 0.001" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
        </filter>
        <filter id="fe2">
            <feTurbulence id="animation" type="fractalNoise" baseFrequency="9.9999999 0.00001" numOctaves="1" result="warp">
                <animate attributeName="baseFrequency" from="9.9999999 0.00001" to="0.009 0.00001" dur="2s" repeatCount="indefinite"/>
            </feTurbulence>
            <feOffset dx="-90" dy="-90" result="warpOffset"></feOffset>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset"></feDisplacementMap>
        </filter>
    </defs>
</svg>
```

SCSS：
```scss
body, html {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

div {
    width: 200px;
    height: 64px;
    margin: 10px;
    line-height: 64px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    background: #673ab7;
    cursor: pointer;
    transform: translateZ(0);
    outline: 200px solid transparent;
    // filter: url(#filter-turbulence);
}

.fe1:hover {
    filter: url(#fe1);
}

.fe2 {
    border-radius: 64px;
}

.fe2:hover {
    filter: url(#fe2);
}

.fe1.hover {
    filter: url(#fe1);
}
.fe2.hover {
    filter: url(#fe2);
}

svg {
    position: absolute;
}
```

效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title="SVG Filter Button Effects" src="https://codepen.io/Chokcoco/embed/BapypJb?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/BapypJb">
  SVG Filter Button Effects</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>