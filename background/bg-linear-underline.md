## 线性渐变实现下划线

利用线性渐变实现下划线。与传统下划线相比，渐变实现的下划线有更多的可操控性。

+ 可控下划线距离底部的距离
+ 可控下划线的粗细
+ 可控下划线的颜色
+ 可添加动画&渐变

HTML：

```html
<hgroup class="underline">
    <h1 class="underline1-ajkps">.underline1-ajkpys</h1>
    <h1 class="underline2-ajkps">.underline2-ajkpys</h1>
    <h1 class="underline3-ajkps">.underline3-ajkpys</h1>
</hgroup>
```

SCSS：
```scss
.underline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    text-align: center;
    color: white;
    font-size: 200%;
    background: #00aabb;
    border-radius: 0.5em;
}

.underline1-ajkps,
.underline2-ajkps,
.underline3-ajkps {
    height: 100px;
    cursor: pointer;
    position: absolute;
    left: 16%;
    text-shadow: 0.1em 0 #00aabb, -0.1em 0 #00aabb;
    transition: 1s;
}

.underline1-ajkps {
    top: 10%;
    background: linear-gradient(white, white) no-repeat;
    background-size: 100% 1px;
    background-position: -10em 1.15em;
}

.underline1-ajkps:hover {
    background-position: 0 1.15em;
}

.underline2-ajkps {
    top: 38%;
    background: linear-gradient(90deg, white 50%, transparent 0) repeat-x;
    background-size: 0.2em 2px;
    background-position: -3em 1.15em;
}

.underline2-ajkps:hover {
    background-position: 0 1.15em;
}

.underline3-ajkps {
    top: 66%;
    background: 
        linear-gradient(-45deg, transparent 40%, white 0, white 60%, transparent 0) 0 1em,
        linear-gradient(45deg, transparent 40%, white 0, white 60%, transparent 0) 0.1em 1em;
    background-repeat: repeat-x;
    background-size: 0.15em 0.1em;
    background-position: -3em 1.15em;
}
.underline3-ajkps:hover {
    background: linear-gradient(-45deg, transparent 40%, deeppink 0, deeppink 60%, transparent 0) 0 1em,
        linear-gradient(45deg, transparent 40%, deeppink 0, deeppink 60%, transparent 0) 0.1em 1em;
    background-repeat: repeat-x;
    background-size: 0.15em 0.1em;
    background-position: 0 1.15em;
}

```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='利用 线性渐变 实现下划线' src='//codepen.io/Chokcoco/embed/pQKzBg/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/pQKzBg/'>利用 线性渐变 实现下划线</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>