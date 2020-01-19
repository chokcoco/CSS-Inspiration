## 使用 checked 伪类实现纯 CSS Tab 切换

使用 `:checked` 来实现 tab 切换功能。

实现 Tab 切换的难点在于如何使用 CSS 接收到用户的点击事情并对相关的节点进行操作。即是：

+ 如何接收点击事件
+ 如何操作相关DOM

拥有 checked 属性的表单元素， `<input type="radio">` 或者 `<input type="checkbox">` 能够接收到点击事件。

### 关键点

+ 使用 radio 标签的 `:checked` 伪类，加上 `<label for>` 实现纯 CSS 捕获点击事情
+ 使用了 `~` 选择符对样式进行控制

### 相关文章

[纯CSS的导航栏Tab切换方案](https://www.cnblogs.com/coco1s/p/5955631.html)

HTML：

```html
<div class="container">
	<input class="nav1" id="li1" type="radio" name="nav">
	<input class="nav2" id="li2" type="radio" name="nav">
	<ul class='nav'>
		<li class='active'><label for="li1">列表1</label></li>
		<li><label for="li2">列表2</label></li>
	</ul>
	<div class="content">
		<div class="content1 default">列表1内容:123456</div>
		<div class="content2">列表2内容:abcdefgkijkl</div>
	</div>
</div>
```

SCSS：
```scss
.container{
	position:relative;
	width:400px;
	margin: 50px auto;
}

input{
	display:none;
}

.nav{
	position:relative;
	overflow:hidden;
}

li{
	width:200px;
	float:left;
	text-align:center;
	background:#ddd;
}

li label{
	display:block;
	width:200px;
	line-height:36px;
	font-size:18px;
	cursor:pointer;
}

.content{
	position:relative;
	overflow:hidden;
	width:400px;
	height:100px;
	border:1px solid #999;
	box-sizing:border-box;
	padding:10px;
}

.content1,
.content2{
	display:none;
	width:100%;
	height:100%;
}

.nav1:checked ~ .nav li {
	background:#ddd;
	color:#000;
	
	&:first-child{
		background:#ff7300;
		color:#fff;
	}
}
.nav2:checked ~ .nav li{
	background:#ddd;
	color:#000;
	
	&:last-child{
		background:#ff7300;
		color:#fff;
	}
}

.nav1:checked ~ .content > div{
	display:none;
	
	&:first-child{
	display:block;
	}
}
.nav2:checked ~ .content > div{
	display:none;
	
	&:last-child{
	display:block;
	}
}

.active {
		background:#ff7300;
		color:#fff;
}

.default{
	display:block;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='纯CSS导航切换(label 绑定 input:radio && ~)' src='//codepen.io/Chokcoco/embed/VKXXEq/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/VKXXEq/'>纯CSS导航切换(label 绑定 input:radio && ~)</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>