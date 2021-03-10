## 利用 box-reflect 实现光影按钮

[`-webkit-box-reflect`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect) 是一个非常有意思的属性，它让 CSS 有能力像镜子一样，反射我们元素原本绘制的内容。

### 核心点

利用了 `-webkit-box-reflect` 实现按钮的倒影效果，非常的有科技感。

详细信息可以看我的这篇文章：

[巧用 -webkit-box-reflect 倒影实现各类动效](https://github.com/chokcoco/iCSS/issues/100)


HTML：

```HTML
<div class="btn">Neon</div>
<div class="btn btn1">Neon</div>
<div class="btn btn2">Neon</div>
<div class="btn btn3">Neon</div>
```

SCSS：
```scss
:root {
	--color: #0ebeff;
}

@keyframes rotate {
	100% {
		transform: translate(-50%, -50%) rotate(1turn);
	}
}

.btn {
	position: relative;
	z-index: 0;
	width: 160px;
	height: 80px;
	line-height: 80px;
	color: var(--color);
	font-size: 24px;
	border-radius: 10px;
	text-align: center;
	margin: auto;
	overflow: hidden;
	cursor: pointer;
	transition: .3s;
	-webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, .4));

	&:hover {
		color: #fff;
		box-shadow: 0 0 5px var(--color),
			0 0 25px var(--color);
		
		&::after,
		&::before {
			transition: .3s;
			background: var(--color);
		}
	}
	
	&::before {
		content: '';
		position: absolute;
		z-index: -2;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 150%;
		height: 300%;
		background-color: #000;
		background-repeat: no-repeat;
		background-size: 50% 50%;
		background-position: 0 0;
		background-image: conic-gradient(var(--color), var(--color));
		animation: rotate 2s linear infinite;
	}
	
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		left: 2px;
		top: 2px;
		width: calc(100% - 4px);
		height: calc(100% - 4px);
		background: #000;
		border-radius: 10px;
	}
}

.btn1 {
	filter: hue-rotate(180deg);
}

.btn2 {
	filter: hue-rotate(270deg);
}

.btn3 {
	filter: hue-rotate(90deg);
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="-webkit-box-reflect Neon Button Hover Effect" src="https://codepen.io/Chokcoco/embed/BaQzBEG?height=400&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/BaQzBEG'>-webkit-box-reflect Neon Button Hover Effect</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>