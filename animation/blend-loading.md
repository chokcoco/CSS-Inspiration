## mix-blend-mode 实现 loading 效果

mix-blend-mode 实现 loading 效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### 关键点

这里使用了 `mix-blend-mode: screen` 滤色模式，这是一种提亮图像形混合模式。滤色的英文是 screen，也就是两个颜色同时投影到一个屏幕上的合成颜色。具体做法是把两个颜色都反相，相乘，然后再反相。简单记忆为"让白更白，而黑不变"。（不一定十分准确，如有错误还请指正）

我们将几个 div 按照不同延时(animation-delay)小幅度旋转起来，来达到一种很显眼很魔性的效果，适合做 loading 图。

HTML：

```html
<strong class="loading">
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
	<span></span>
</strong>
```

SCSS：
```scss
body {
	background:#291f34;
	overflow:hidden;
}

.loading {
	position:absolute;
	left:50%;
	top:30vh;
	margin-left:-20vh;
	display:block;
	width:40vh;
	height:40vh;
	text-align:center;
	filter:contrast(1.2);
	
	span {
  	    mix-blend-mode:screen;
		display:block;
		position:absolute;
		border-radius:50%;
		animation:wave 3s infinite linear;
	}
	
	span:nth-child(0) {
		left:-11%;
		right:-2%;
		top:-12%;
		bottom:-5%;
		transform-origin:46% 53%;
		animation-delay:0;
		background-color:hsl(0, 50%, 50%);
	}
	
	span:nth-child(1) {
		left:-4%;
		right:-4%;
		top:-9%;
		bottom:-2%;
		transform-origin:47% 50%;
		animation-delay:-1s;
		background-color:hsl(50, 60%, 50%);
	}
	
	span:nth-child(2) {
		left:-11%;
		right:-4%;
		top:-10%;
		bottom:-11%;
		transform-origin:49% 53%;
		animation-delay:-1.5s;
		background-color:hsl(100, 70%, 50%);
	}
	
	span:nth-child(3) {
		left:-7%;
		right:-9%;
		top:-11%;
		bottom:-4%;
		transform-origin:47% 52%;
		animation-delay:-2s;
		background-color:hsl(150, 80%, 50%);
	}
	
	span:nth-child(4) {
		left:-8%;
		right:-3%;
		top:-5%;
		bottom:-11%;
		transform-origin:47% 52%;
		animation-delay:-2.5s;
		background-color:hsl(200, 90%, 50%);
	}
	
	span:nth-child(5) {
		left:-10%;
		right:-8%;
		top:-4%;
		bottom:-9%;
		transform-origin:48% 51%;
		animation-delay:-3s;
		background-color:hsl(250, 100%, 50%);
	}
	
	span:nth-child(6) {
		left:-9%;
		right:-11%;
		top:-5%;
		bottom:-8%;
		transform-origin:47% 50%;
		animation-delay:-3.5s;
		background-color:hsl(300, 100%, 50%);
	}
}

@keyframes wave {
	from {
		transform:rotateZ(0deg);
	}
	to {
		transform:rotateZ(360deg);
	}
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='mix-blend-mode 实现 loading 效果' src='//codepen.io/Chokcoco/embed/PmJJeR/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/PmJJeR/'>mix-blend-mode 实现 loading 效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>