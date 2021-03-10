## fieldset 与 legend 实现边框嵌套文字

利用 `<fieldset>` 与 `<legend>` 实现边框嵌套文字效果

[生僻标签 fieldset 与 legend 的妙用](https://github.com/chokcoco/iCSS/issues/93)

HTML：

```html
<div class="g-triangle">
	<fieldset><legend>One</legend></fieldset>
	<fieldset><legend>Two</legend></fieldset>
	<fieldset><legend>Three</legend></fieldset>
</div>
<div class="g-pentagon">
	<fieldset><legend>One</legend></fieldset>
	<fieldset><legend>Two</legend></fieldset>
	<fieldset><legend>Three</legend></fieldset>
	<fieldset><legend>Four</legend></fieldset>
	<fieldset><legend>Five</legend></fieldset>
</div>
<div class="g-hexagon">
	<fieldset><legend>One</legend></fieldset>
	<fieldset><legend>Two</legend></fieldset>
	<fieldset><legend>Three</legend></fieldset>
	<fieldset><legend>Four</legend></fieldset>
	<fieldset><legend>Five</legend></fieldset>
	<fieldset><legend>Six</legend></fieldset>
</div>
<div class="g-octagon">
	<fieldset><legend>One</legend></fieldset>
	<fieldset><legend>Two</legend></fieldset>
	<fieldset><legend>Three</legend></fieldset>
	<fieldset><legend>Four</legend></fieldset>
	<fieldset><legend>Five</legend></fieldset>
	<fieldset><legend>Six</legend></fieldset>
	<fieldset><legend>Seven</legend></fieldset>
	<fieldset><legend>Eight</legend></fieldset>
</div>
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
}
body > div {
	position: relative;
	width: 120px;
	height: 120px;
	margin: auto;
}
fieldset{
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -100px;
	margin-top: -5px;
	width: 120px; 
	height: 120px; 
	border-top: 10px solid #000; 
	box-sizing: border-box;
}
legend{
	font-family: 'Averia Serif Libre';
	font-size: 24px;
	line-height: 10px;
	font-weight: bold;
	margin: auto; 
	padding: 2px 10px; 
	box-sizing: border-box;
} 
.g-triangle {
	fieldset {
		transform-origin: center 36%;
	}
	fieldset:nth-of-type(1) {
		transform: rotate(120deg)
	}
	fieldset:nth-of-type(2){
		transform: rotate(240deg)
	}
	fieldset:nth-of-type(3){
		transform: rotate(360deg)
	}
}
.g-pentagon {
	fieldset {
		border-top-color: deeppink;
		transform-origin: center 71%;
		
		legend {
			color: deeppink;
		}
	}
	fieldset:nth-of-type(1) {
		transform: rotate(72deg)
	}
	fieldset:nth-of-type(2){
		transform: rotate(144deg)
	}
	fieldset:nth-of-type(3){
		transform: rotate(216deg)
	}
	fieldset:nth-of-type(4){
		transform: rotate(288deg)
	}
}
.g-hexagon {
	fieldset {
		border-top-color: #673AB7;
		transform-origin: center 89%;
		
		legend {
			color: #673AB7;
		}
	}
	@for $i from 1 through 6 { 
    fieldset:nth-of-type(#{$i}) {
			transform: rotate(#{360 / 6 * $i}deg);
		}
	}
}
.g-octagon {
	fieldset {
		border-top-color: #ff5722;
		transform-origin: center 123%;
		
		legend {
			color: #ff5722;
		}
	}
	@for $i from 1 through 8 { 
    fieldset:nth-of-type(#{$i}) {
			transform: rotate(#{360 / 8 * $i}deg);
		}
	}
}
```

效果如下：

<iframe height="500" style="width: 100%;" scrolling="no" title="fieldset and legend generate polygon" src="https://codepen.io/Chokcoco/embed/zYKbQpN?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/zYKbQpN'>fieldset and legend generate polygon</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>