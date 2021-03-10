## SVG 文字 hover 线条动画

SVG 文字 hover 线条动画。

### 关键点

使用了 `stroke-dasharray` 和 `stroke-dashoffset` 控制线条动画。

具体的可以看看我的这篇文章：

[【Web动画】SVG 线条动画入门](https://www.cnblogs.com/coco1s/p/6225973.html)

HTML：

```html
<svg viewBox="0 0 400 200">
	<text x="0" y="70%"> Lorem </text>
</svg>	
```

SCSS：
```scss

svg {
	width: 600px;
	height: 300px;
	margin: auto;
}

svg text {
	text-transform: uppercase;
	animation: stroke 5s infinite alternate;
	letter-spacing: 10px;
	font-size: 150px;
}
@keyframes stroke {
	0% {
		fill: rgba(72, 138, 20, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-dashoffset: 25%;
		stroke-dasharray: 0 50%;
		stroke-width: 0.2;
	}
	50% {
		fill: rgba(72, 138, 20, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-width: 0.5;
	}
	70% {
		fill: rgba(72, 138, 20, 0);
		stroke: rgba(54, 95, 160, 1);
		stroke-width: 1;
	}
	90%,
	100% {
		fill: rgba(72, 138, 204, 1);
		stroke: rgba(54, 95, 160, 0);
		stroke-dashoffset: -25%;
		stroke-dasharray: 50% 0;
		stroke-width: 0;
	}
}
```

效果如下（hover下面的按钮查看效果）：

<iframe height="400" style="width: 100%;" scrolling="no" title="SVG Text Line Effect" src="https://codepen.io/Chokcoco/embed/dyOjMMd?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/dyOjMMd'>SVG Text Line Effect</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>