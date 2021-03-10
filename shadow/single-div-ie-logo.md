## 单标签借助 inset shadow 实现IE LOGO

单标签借助 inset shdow 实现IE LOGO。

### 关键点

+ 关键在于类似星环的外围一圈使用了内阴影实现 

HTML：

```html
<div class="IE"></div>
```

SCSS：
```scss
.IE {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-image: radial-gradient(#fff 38%, transparent 38%),
        radial-gradient(#09c 0%, #09c 100%);
}
.IE:before {
    content: "";
    width: 285px;
    height: 122px;
    background: none;
    border-radius: 100%;
    position: absolute;
    top: 33px;
    left: -45px;
    margin: auto;
    box-shadow: inset 0 12px 0 13px #09c, -35px -8px 0 -5px #fff;
    transform: rotate(-35deg);
}
.IE:after {
    content: "";
    width: 120px;
    height: 25px;
    background: #09c;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 50px 23px 0 -2px #fff;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='单标签借助 inset shdow 实现IE LOGO' src='//codepen.io/Chokcoco/embed/rqgGqR/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/rqgGqR/'>单标签借助 inset shdow 实现IE LOGO</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>