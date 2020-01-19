## 圆锥渐变配合混合模式实现炫酷光影效果

圆锥渐变配合混合模式实现炫酷光影效果。

圆锥渐变，又叫角向渐变，属于正在路上的标准，具体的，可以看看我的这篇文章：

[神奇的 conic-gradient 圆锥渐变](https://www.cnblogs.com/coco1s/p/7079529.html)

HTML：

```html
<div></div>
```

SCSS：
```scss
@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomConicGradient() {
	$n: 16 + random(16);
	$list: ();
	
	@for $i from 0 to $n {
		$list: $list, rgba(hsl(100, randomNum(250, 5, 10%), randomNum(1, 1, 1%)), randomNum(100, 0, .01));
	}
		
	@return conic-gradient($list, nth($list, 1));
}

div {
    width: 100vw;
    height: 100vh;
	margin: 0;
	background: 
		radial-gradient(hsl(9, randomNum(100, 75, 1%), randomNum(100, 75%, 1%)), black);
	
	&:before, &:after {
		position: absolute;
		top: 50%; left: 50%;
		margin: -100vmax; 
		width: 200vmax; 
        height: 200vmax;
		opacity: .5;
		mix-blend-mode: overlay;
		animation: rotate randomNum(100, 25, .1s) ease-in-out infinite;
		content: '';
	}
	
	&:before { background: randomConicGradient(); }
	&:after {
		background: randomConicGradient();
		animation-duration: randomNum(100, 25, .1s);
		animation-direction: reverse;
	}
}

@keyframes rotate { 
    to { 
        transform: rotate(1turn); 
    } 
}
```

上面效果，使用了圆锥渐变 polyfill JS 库：

+ https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js
+ https://leaverou.github.io/conic-gradient/conic-gradient.js

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="350" style="width: 100%;" scrolling="no" title="animation conic-gradient" src="https://codepen.io/Chokcoco/embed/gRRdQq?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/gRRdQq'>animation conic-gradient</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>