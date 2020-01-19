## 使用 box-shadow 实现半透明遮罩

使用 box-shadow 实现半透明遮罩，在某些特殊场景下能发挥很好的作用

HTML：

```html
<p>背景文字背景文字背景文字背景文字</p>
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: absolute;
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #666;
    cursor: pointer;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all .1s;
}

div:hover {
    box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .5);
    transform: translate(-50%, -60%);
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='使用 box-shadow 实现半透明遮罩' src='//codepen.io/Chokcoco/embed/KGQVLr/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/KGQVLr/'>使用 box-shadow 实现半透明遮罩</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>