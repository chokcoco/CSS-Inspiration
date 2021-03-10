## background-clip 实现流光文字效果

使用 `background-clip: text` 实现流光文字效果。

### 关键点

背景中有个属性为 background-clip， 其作用就是设置元素的背景（背景图片或颜色）的填充规则。

与 box-sizing 的取值非常类似，通常而言，它有 3 个取值，border-box，padding-box，content-box，后面规范新增了一个 background-clip。时至今日，部分浏览器仍需要添加前缀 webkit 进行使用 -webkit-background-clip。

使用了这个属性的意思是，以区块内的文字作为裁剪区域向外裁剪，文字的背景即为区块的背景，文字之外的区域都将被裁剪掉。

详细的可以看看这篇文章：[奇思妙想 CSS 文字动画](https://github.com/chokcoco/iCSS/issues/101)


HTML：

```html
<p data-text="Lorem ipsum dolor"> Lorem ipsum dolor </p>
```

SCSS：
```scss
html, body {
    width: 100%;
    height: 100%;
    background-image: radial-gradient(ellipse farthest-side at 40% 0%, #455A64 0%, #263238 60%, #1a2327 100%);
    display: flex;
}

p {
    position: relative;
    margin: auto;
    font-size: 5rem;
    word-spacing: 0.2em;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    color: transparent;
    background-color: #E8A95B;
    background-clip: text;
}

p::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-image: linear-gradient(120deg, transparent 0%, transparent 6rem, white 11rem, transparent 11.15rem, transparent 15rem, rgba(255, 255, 255, 0.3) 20rem, transparent 25rem, transparent 27rem, rgba(255, 255, 255, 0.6) 32rem, white 33rem, rgba(255, 255, 255, 0.3) 33.15rem, transparent 38rem, transparent 40rem, rgba(255, 255, 255, 0.3) 45rem, transparent 50rem, transparent 100%);
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 5s infinite linear;
}

@keyframes shine {
	0% {
		background-position: 50% 0;
	}
	100% {
		background-position: -190% 0;
	}
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="Shine Text" src="https://codepen.io/Chokcoco/embed/OJbEOmb?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/OJbEOmb'>Shine Text</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>