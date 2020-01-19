## 3D 无限延伸视角动画

3D 无限延伸视角动画。


### 关键点

这个实现起来非常有难度。

+ 四面墙壁的无限延伸的感觉塑造
+ 视角的变动
+ 远处最深处的遮罩

非原创，原效果链接：[Perspective Origin Tunnel Animation](https://codepen.io/jkantner/pen/zXwyGr)

HTML：

```HTML
<main>
	<div class="t"></div>
	<div class="r"></div>
	<div class="b"></div>
	<div class="l"></div>
</main>
```

SCSS：
```scss
body {
	background: #575757;
	display: flex;
	height: 100vh;
	margin: 0;
	
}
main {
	/* Timing */
	--durM: 6s;
	--durD: 0.5s;
	/* Tunnel itself */
	--size: 20em;
	--depth: calc(var(--size) * 6);
	--bgPos: calc(var(--size) * 0.4);
	/* Camera movement */
	--endX1: 33%;
	--endX2: 67%;
	--endY1: 40%;
	--endY2: 60%;
	animation: po var(--durM) ease-in-out infinite;
	margin: auto;
	overflow: hidden;
	perspective: 5em;
	perspective-origin: 50% 50%;
	position: relative;
	width: var(--size);
	height: var(--size);
	transform: scale(6);
}
main:before, div {
	position: absolute;
}
main:before {
	animation: end var(--durM) ease-in-out infinite;
	background: currentColor;
	box-shadow: 0 0 1em 1em;
	color: #000;
	content: "";
	display: block;
	margin: -0.5em -0.5em;
	width: 1em;
	height: 1em;
	top: 50%;
	left: 50%;
	z-index: 5;
}
div {
	background: conic-gradient(#000 25%,#fff 0 50%,#000 0 75%,#fff 0) 0 0 / var(--bgPos) var(--bgPos);
}
.t, .l {
	top: 0;
	left: 0;
	transform-origin: 0 0;
}
.r, .b {
	right: 0;
	bottom: 0;
	transform-origin: 100% 100%;
}
.t, .b {
	width: 100%;
	height: var(--depth);
}
.r, .l {
	filter: brightness(70%);
	width: var(--depth);
	height: 100%;
}
.t {
	animation: t var(--durD) linear infinite;
	background-position: 0 calc(var(--bgPos) / 2);
	filter: brightness(40%);
	transform: rotateX(-90deg);
}
.r {
	animation: r var(--durD) linear infinite;
	background-position: calc(var(--bgPos) / 2) 0;
	transform: rotateY(-90deg);
}
.b {
	animation: b var(--durD) linear infinite;
	transform: rotateX(90deg);
}
.l {
	animation: l var(--durD) linear infinite;
	transform: rotateY(90deg);
}
@keyframes po {
	from, to { perspective-origin: var(--endX1) var(--endY1) }
	25% { perspective-origin: var(--endX2) var(--endY1) }
	50% { perspective-origin: var(--endX2) var(--endY2) }
	75% { perspective-origin: var(--endX1) var(--endY2) }
}
@keyframes t {
	to { transform: rotateX(-90deg) translateY(calc(var(--bgPos) * -1)) }
}
@keyframes r {
	to { transform: rotateY(-90deg) translateX(var(--bgPos)) }
}
@keyframes b {
	to { transform: rotateX(90deg) translateY(var(--bgPos)) }
}
@keyframes l {
	to { transform: rotateY(90deg) translateX(calc(var(--bgPos) * -1)) }
}
@keyframes end {
	from, to {
		top: var(--endY1);
		left: var(--endX1);
	}
	25% {
		top: var(--endY1);
		left: var(--endX2);
	}
	50% {
		top: var(--endY2);
		left: var(--endX2);
	}
	75% {
		top: var(--endY2);
		left: var(--endX1);
	}
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height="600" style="width: 100%;" scrolling="no" title="Perspective Origin Tunnel Animation" src="https://codepen.io/Chokcoco/embed/eYYJaMZ?height=600&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/eYYJaMZ'>Perspective Origin Tunnel Animation</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>