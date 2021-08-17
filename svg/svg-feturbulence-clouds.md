## SVG feTurbulence 滤镜实现云彩效果 

使用 SVG feTurbulence 滤镜实现云彩效果 。

### 关键点

SVG `<feTurbulence>` 滤镜能够实现半透明的烟熏或波状图像。 通常用于实现一些特殊的纹理。本效果通过 `<feTurbulence>`  融合颜色背景，模拟云彩效果。

关于本效果的详细描述，你可以查看这篇文章：[有意思！强大的 SVG 滤镜](https://github.com/chokcoco/cnblogsArticle/issues/27)

HTML：

```
<div id="cloud"></div>

<svg width="0">
  <filter id="filter">
    <feTurbulence type="fractalNoise" baseFrequency=".01" numOctaves="10" />
    <feDisplacementMap in="SourceGraphic" scale="240" />
  </filter>
</svg>
```

SCSS：
```scss
html, body { 
  margin: 0; 
}
body:after {
  content: 'click to update';
  font-size: .8em;
  color: rgba(0, 0, 0, .3);
  position: fixed;
  width: 100%;
  bottom: 1em;
  text-align: center;
}

#cloud {
  overflow: hidden;
  width: 1px; height: 1px;
  transform: translate(-100%, -100%);
  border-radius: 50%;
  filter: url(#filter);
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="SVG Filter Clouds" src="https://codepen.io/Chokcoco/embed/BaQvVQZ?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/BaQvVQZ">
  SVG Filter Clouds</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>