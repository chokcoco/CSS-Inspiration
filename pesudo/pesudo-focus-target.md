## 使用 target 伪类实现纯 CSS Tab 切换

使用 `:target` 来实现 tab 切换功能。

实现 Tab 切换的难点在于如何使用 CSS 接收到用户的点击事情并对相关的节点进行操作。即是：

+ 如何接收点击事件
+ 如何操作相关DOM

### 关键点

+ 要使用 `:target` 伪元素，需要 HTML 锚点，以及锚点对应的 HTML 片段
+ 核心是使用 `:target` 伪类接收点击事件
+ 通过兄弟选择符 `~` 控制样式

### 相关文章

[纯CSS的导航栏Tab切换方案](https://www.cnblogs.com/coco1s/p/5955631.html)

HTML：

```html
<div class="container">
		<div id="content1" class="active">列表1内容:123456</div>
		<div id="content2">列表2内容:abcdefgkijkl</div>
	
		<ul class='nav'>
				<li class="active"><a href="#content1">列表1</a></li>
				<li><a href="#content2">列表2</a></li>
		</ul>
	
		<div class="wrap"></div>
</div>
```

SCSS：
```scss
.container {
	position: relative;
	width: 400px;
	margin: 50px auto;
}

.nav {
	position: relative;
	overflow: hidden;
}

li {
	width: 200px;
	float: left;
	text-align: center;
	background: #ddd;
}

li a {
	display: block;
	width: 200px;
	line-height: 36px;
	font-size: 18px;
	cursor: pointer;
	text-decoration: none;
	color: #000;
}

#content1,
#content2 {
	position: absolute;
	overflow: hidden;
	top: 36px;
	width: 400px;
	height: 100px;
	border: 1px solid #999;
	box-sizing: border-box;
	padding: 10px;
}

#content1,
#content2 {
	display: none;
	width: 100%;
	background: #fff;
}

#content1:target,
#content2:target {
	display: block;
}

#content1.active {
	display: block;
}

.active ~ .nav li {
	&:first-child {
		background: #ff7300;
		color: #fff;
	}
}

#content1:target ~ .nav li {
	background: #ddd;
	color: #000;

	// 改变li元素的背景色和字体颜色
	&:first-child {
		background: #ff7300;
		color: #fff;
	}
}

#content2:target ~ .nav li {
	background: #ddd;
	color: #000;

	// 改变li元素的背景色和字体颜色
	&:last-child {
		background: #ff7300;
		color: #fff;
	}
}

.wrap {
	position: absolute;
	overflow: hidden;
	top: 36px;
	width: 400px;
	height: 100px;
	border: 1px solid #999;
	box-sizing: border-box;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='纯CSS导航切换(:target伪类实现)' src='//codepen.io/Chokcoco/embed/mAxQBv/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/mAxQBv/'>纯CSS导航切换(:target伪类实现)</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>