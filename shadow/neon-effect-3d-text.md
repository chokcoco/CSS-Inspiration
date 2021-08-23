## Neon Effect 3D TEXT

利用阴影实现的 3D 氖灯效果。

### 关键点

+ 利用 `text-shadow` 叠加多层文字阴影
+ 利用 animation 动态改变阴影颜色

HTML：
```
<div class="container">
	<p class="a">CSS 3D</p>
	<p class="b">NEON</p>
	<p class="a">EFFECT</p>
</div>
```

SCSS：
```scss
@import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap");

html,
body {
	width: 100%;
	height: 100%;
	display: flex;
	font-family: "Rajdhani", sans-serif;
	font-weight: bold;
	background: #000;
}

.container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: auto;
	transform: rotateX(25deg) rotateY(-25deg);
}

p {
	text-align: center;
	display: block;
	font-size: 26vh;
	letter-spacing: 0.1em;
	max-height: 22vh;
}

.a {
	color: #88e;
	text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
		0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
		0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
	animation: pulsea 300ms ease infinite alternate;
}

.b {
	color: #f99;
	text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
		0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
		0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
	animation: pulseb 300ms ease infinite alternate;
}

@keyframes pulsea {
	0% {
		text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #aaf;
	}
	50% {
		text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #aaf,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
	}
	75% {
		text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #aaf, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
	}
	100% {
		text-shadow: 0 0 0.3em rgba(200, 200, 255, 0.4), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #88e, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #66c,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #44a;
	}
}

@keyframes pulseb {
	0% {
		text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #faa;
	}
	50% {
		text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #faa,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
	}
	75% {
		text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #faa, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
	}
	100% {
		text-shadow: 0 0 0.3em rgba(255, 100, 200, 0.3), 0.04em 0.04em 0 #112,
			0.045em 0.045em 0 #f99, 0.09em 0.09em 0 #112, 0.095em 0.095em 0 #b66,
			0.14em 0.14em 0 #112, 0.145em 0.145em 0 #a44;
	}
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="Neon Effect, 3D" src="https://codepen.io/Chokcoco/embed/gOWNWXV?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/gOWNWXV">
  Neon Effect, 3D</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>