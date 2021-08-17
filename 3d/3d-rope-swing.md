## 3D 绳动画

非常好的学习 CSS 3D 的动画 DEMO。

HTML：

```HTML
<input type="checkbox" id="toggle" checked />
<section id="sect">
	<label for="toggle" class="toggle">change view</label>
	<ul>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
		<li>swing</li>
	</ul>
</section>
```

SCSS：
```scss
// vars

$random_color: rgba(rd(255),rd(255),rd(255),.33);

$c: ( // colors
	t: rgba(0,0,0,0),
	s: #000,
	w: #fff,
	gr: desaturate(rgb(rd(255),rd(255),rd(255)), 100%),
	r: rgb(rd(255),rd(150),rd(150)),
	g: rgb(rd(150),rd(255),rd(150)),
	b: rgb(rd(150),rd(150),rd(255)),
	bg: $random_color,
	cp: ( // color palette
		1: #283739,
		2: #2C5D63,
		3: #A9C52F,
		4: #F7EEBB
	),
);

// settings
$f: unquote("'Podkova', serif");
$fb: unquote("'Trebuchet MS', Helvetica, sans-serif");
$fz: 16px;
// uncomment for responsive font-size
$fz: unquote('calc(1.1vw + 1.1vh - .6vmin)');
@media screen and (max-width: 600px) {
	body > * {
		font-size: 1.5em;
	}
}

$time: 4s;

// --------- defaults ---------
* {
	&:focus {
		outline: 0;
	}
	
	&, &:before, &:after {
		box-sizing: border-box;
	}
}
// @include placeholder(){
// 		font-family: $f;
// }
// --------------------
html {
	background-color: clr(s);
	
	body {
		font-family: $f;
		font-size: $fz;
		color: clr(w);
		background-color: clr(bg);
	}
	
	&, body {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
}
#toggle {
	display: none;
}

.toggle {
	position: fixed;
	z-index: 10;
	left: 1em;
	top: 1em;
	display: inline-block;
	padding: .4em .5em .5em;
	cursor: pointer;
	text-indent: 1.7em;
	color: clr(cp, 3);
	border-radius: .25em;
	transition: all $time/5;
	background-color: clr(cp, 1);
	
	&:before {
		content: '';
		position: absolute;
		z-index: 20;
		left: .5em;
		top: .4em;
		width: 1em;
		height: 1em;
		display: inline-block;
		border: 2px solid clr(cp, 2);
		vertical-align: middle;
		border-radius: 3px;
	}
	
	&:after {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		z-index: 21;
		display: inline-block;
		border: 2px solid clr(cp,4);
		border-width: 0 4px 4px 0;
		left: .75em;
		top: .75em;
		opacity: 0;
		transition: all $time/5;
		transform: rotate(45deg);

		#toggle:checked + #sect & {
			width: .5em;
			top: .25em;
			height: 1em;
			opacity: 1;
		}
	}
	
	#toggle:checked + #sect & {
		color: clr(cp, 4);
	}
}

#sect	{
	width: 100vw;
	height: 100vh;
	padding: 1em;
	text-align: center;
	vertical-align: middle;
	display: block;
	position: relative;
	perspective: 600px;
	
	ul {
		display: block;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		transition: all $time/3;
		transform-style: preserve-3d;
		transform: translateZ(-70vmax)  translateX(-50vw) rotateY(0deg);
		position: absolute;
		
		#toggle:checked + & {
			transform: translateZ(-50em)  translateX(0vw) rotateY(90deg);

		}
	}
	
	li {
		display: inline-block;
		position: absolute;
		font-size: 3em;
		margin-left: -5em;
		transition: all $time/5;
		// filter: blur(0px);
		opacity: 1;
		color: clr(cp, 4);
		transform-origin: center -123vmax;
		animation: pendulum ease-in-out infinite alternate $time;
		
		&:before {
			content: '';
			position: absolute;
			bottom: 100%;
			width: 1px;
			box-shadow: 0 0 0 .01em clr(cp, 3);
			height: 25em;
			left: 50%;
			background-color: clr(cp, 3);
		}
		
		@for $i from 0 to 24 {
			&:nth-of-type(#{$i}) {
				left: 2.5em * $i;
				animation-delay: -#{$i/10}s;

		#toggle:checked + & {
				// filter: blur(#{floor($i/3)}px);
				opacity: 1.2 - ($i/15);
				}
			}
		}
	}
}

@keyframes pendulum {
	from {
		transform: translateY(70vh) rotateX(-45deg);
	}
	to {
		transform: translateY(70vh) rotateX(45deg);
	}
}



// ease():
// default, in-cubic, out-cubic, in-out-cubic, in-circ, out-circ, in-out-circ, in-expo, out-expo, in-out-expo, in-quad, out-quad, in-out-quad, in-quart, out-quart, in-out-quart, in-quint, out-quint, in-out-quint, in-sine, out-sine, in-out-sine, in-back, out-back, in-out-back, liquid", bounce, in-out-bounce, perpetuum, impetus, full-circle, gravity, overshot, downhill, pendulum, wtf, swing
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS Pendulum" src="https://codepen.io/Chokcoco/embed/yLMxXwV?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/yLMxXwV">
  CSS Pendulum</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>