## retina屏下的1px线的实现

retina屏下的1px线的实现，适用于 dpr：2 的情况。

+ 法一：使用渐变实现，使用两种颜色填充 1px 宽内容
+ 法二：使用缩放实现，对 1px 高度线条进行0.5倍缩放
+ 法三：base64 编码实现
+ 法四：base64 编码嵌入SVG实现

HTML：

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <title>retina屏下的1px线的实现</title>
</head>

<body>
    <div class="border_normal">正常使用1px border效果（本DEMO请在移动端环境下查看）</div>
    <div class="border_gradient">法一：使用渐变实现，使用两种颜色填充 1px 宽内容 </div>
    <div class="border_scale">法二：使用缩放实现，对 1px 高度线条进行0.5倍缩放</div>
    <div class="border_base64">法三：base64 编码实现</div>
    <div class="border_svg">法四：base64 编码嵌入SVG实现</div>
</body>
```

SCSS：
```scss
body {
    // overflow: hidden;
}

div {
    width: 100vw;
    height: 80px;
    margin: 30px auto;
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    padding-top: 20px;
    font-size: 16px;
    box-sizing: border-box;
}

/*border-top:1px*/
.border_normal,
.border_gradient,
.border_scale,
.border_boxshadow,
.border_base64,
.border_svg{
    border-top: 1px solid #999;
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .border_gradient {
        background-image: linear-gradient(to top, transparent 50%, #999 50%);
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: top center;
        border-top: 0 none;
        padding-top: 1px;
    }
    
    .border_scale {
        position: relative;
        padding-top: 1px;
        border-top: 0 none;
    }
    .border_scale:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        border-top: 1px solid #999;
        transform: scale(0.5);
        transform-origin: 0 0;
        box-sizing: border-box;
    }
    .border_base64 {
        padding-top: 1px;
        border-top: 0 none;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY5g5c+Z/BhAAABRcAsvqBShzAAAAAElFTkSuQmCC);
        background-position: 0 0;
        background-repeat: repeat-x;
        background-size: 1px 1px;
    }
    
    .border_svg {
		border-top: 0 none;
		background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='1'><rect fill='#999' x='0' y='0.5' width='100%' height='0.5' /></svg>");	
	 	background-position:0 0;
	 	background-repeat:no-repeat;
    }

}
```

效果如下，demo效果需要在移动端环境下观看（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='retina屏下的1px线的实现' src='//codepen.io/Chokcoco/embed/XyNjqK/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/XyNjqK/'>retina屏下的1px线的实现</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>