## CSS-Doodle background + mask 实现条纹艺术背景

CSS-Doodle background + mask 实现条纹艺术背景

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) 是一个基于 Web-Component 的库。允许我们快速的创建基于 CSS Grid 布局的页面，以实现各种 CSS 效果（或许可以称之为 CSS 艺术）。

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
	:doodle {
		@grid: 3 x 1;
	}

	width: 40vmin;
	height: 80vmin;

	--colorMain: rgb(@r(255), @r(255), @r(255));
	--colorSub: rgb(@r(255), @r(255), @r(255));
	--colorThird: rgb(@r(255), @r(255), @r(255));

	position: relative;
	box-sizing: border-box;
	margin: 1vmin;
	border-radius: 5vmin;
	border:2px solid #666;
	box-shadow: 1px 1px 4px 2px #222;
	background: conic-gradient(from @r(360)deg, var(--colorMain), transparent, var(--colorSub), transparent, var(--colorMain));
	overflow: hidden;

	@nth(2) {
		background: linear-gradient(var(--colorMain), var(--colorSub));
	}
	
	@nth(3) {
		background: unset;
	}

	:before {
		--size: @r(2, 15)px;
		--maskSize: @r(10, 75)px;
		--percentage: @r(10, 30)%;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(@r(360)deg, var(--colorMain), var(--colorSub));
		mask: 
			linear-gradient(135deg, #fff var(--size), transparent 0),
			linear-gradient(-135deg, #fff var(--size), transparent 0),
			linear-gradient(45deg, #fff var(--size), transparent 0),
			linear-gradient(-45deg, #fff var(--size), transparent 0),
			linear-gradient(135deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-135deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(45deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-45deg, #fff calc(var(--percentage) + var(--size)), transparent 0),
			linear-gradient(135deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-135deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0),
			linear-gradient(45deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0),
			linear-gradient(-45deg, #fff calc(var(--percentage) + var(--percentage) + var(--size)), transparent 0);
		mask-size: var(--maskSize) var(--maskSize);
		mask-position: 50% 50%;
		-webkit-mask-composite: xor;
	}
</css-doodle>
```

SCSS：
```scss
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #333;
}
```

效果如下（点击下图可以刷新效果）：

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS Doodle - CSS MASK Background 3" src="https://codepen.io/Chokcoco/embed/WNGeaXb?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/WNGeaXb'>CSS Doodle - CSS MASK Background 3</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>