## SVG绘制弧形文字

SVG绘制弧形文字。

HTML：

```html
<div class="circle-word">
    <svg width="400px" height="300px" viewBox="0 0 400 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
            <path id="textCircle" d="M 20 100 A 80 80 0 0 0 180 100 A 80 80 0 0 0 20 100" fill="none" stroke="#333"></path>
        </defs>
        <text class="textCircle" fill="yellowgreen">
            <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#textCircle">这是一段随着path路径绘制的文字</textPath>
        </text>
    </svg>
</div>
```

SCSS：
```scss
.circle-word {
    position: absolute;
    width: 400px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.textCircle {
    font-size: 20px;
    letter-spacing: 4px;
}
.textCircle2 {
    font-size: 12px;
    letter-spacing: 1px;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='SVG绘制弧形文字' src='//codepen.io/Chokcoco/embed/NEpqMK/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/NEpqMK/'>SVG绘制弧形文字</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>