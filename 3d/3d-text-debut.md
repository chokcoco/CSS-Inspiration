## 3D 文字出场动画

利用 CSS 3D 实现文字出场特效

### 关键点

1. 父元素、子元素设置 `transform-style: preserve-3d`
2. 用 `span` 元素的两个伪元素复制两个相同的字，利用 `translateZ()` 让它们在 Z 轴间隔一定距离
3. 添加简单的旋转、透明度、字体颜色变化

可以得到这样一种类似电影开片的标题 3D 动画，其实只有 3 层元素，但是由于角度恰当，视觉上的衔接比较完美，看上去就非常的 3D。

HTML：
```
<div>
  <span class='C'>C</span>
  <span class='S'>S</span>
  <span class='S'>S</span>
  <span></span>
  <span class='3'>3</span>
  <span class='D'>D</span>
</div>
```

SCSS：
```scss
@import url(https://fonts.googleapis.com/css?family=Crimson+Text);
@import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
$bright : #AFA695;
$gold : #867862;
$dark : #746853;

$duration : 8s;

body, html {
	width: 100%;
	height: 100%;
	display: flex;
	background: #000;
	overflow: hidden;
}

div {
	margin: auto;
	perspective: 2000px;
	transform-style: preserve-3d;
	font: 10vw Righteous;
	animation: fade $duration infinite;
}

span {
	position: relative;
	display: inline-block;
	min-width: .5em;
	text-align: center;
	transform-style: preserve-3d;
	transform:  rotateY(25deg);
	animation: rotate $duration infinite ease-in;
	color: black;
	
	&:after, &:before {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		content: attr(class);
		color: $gold;
		z-index: -1;
		animation: shadow $duration infinite;
	}
	
	&:before {
		transform: translateZ(-14px);
	}
	&:after {
		transform: translateZ(-7px);
	}
}

@keyframes fade {
	from {
		opacity: 0;
		transform: scale(1.2);
	}
	25% { opacity: 1; }
	100% {
		transform: scale(1);
	}
}

@keyframes rotate {
	from {
		transform: rotateY(65deg);
	}
	50%, 100% {
		color: $dark;
		transform: rotateY(5deg);
	}
	100% {
		color: $gold;
	}
}

@keyframes shadow {
	from {
		color: shade($gold, 50%);
	}
	25% { 
		color: $bright;
	}
	50%, 100% {
		color: tint($gold, 100%);
	}
}
```

效果如下：

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="result" data-slug-hash="wvdZjvR" data-editable="true" data-user="Chokcoco" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Chokcoco/pen/wvdZjvR">
  CSS 3D TEXT</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>