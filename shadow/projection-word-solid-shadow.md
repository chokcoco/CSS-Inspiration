## 立体文字阴影

CSS 实现立体文字阴影。

### 关键点

+ 立体文字阴影的关键点在于多层 text-shadow 的叠加
+ 这里合理运用了 SASS 函数来自动计算多层 text-shadow 的 CSS 代码
+ 运用了 Sass 的颜色函数，渐进实现层级阴影颜色
    - fade-out: 改变颜色的透明度，让颜色更加透明
    - desaturate: 改变颜色的饱和度值，让颜色更少的饱和

HTML：

```html
<div>Txt Shadow</div>
<div class="left"> TxT Long Shadow</div>
```

SCSS：
```scss
body {
    background: #03a9f4;
}

@function makelongrightshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 50 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }
    @return $val;
}

@function makelongleftshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 50 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }
    @return $val;
}

div {
    text-align: center;
    font-size: 20vmin;
    line-height: 45vh;
    text-shadow: makelongrightshadow(hsla(14, 100%, 30%, 1));
    color: hsl(14, 100%, 60%);
}

.left {
    text-shadow: makelongleftshadow(hsla(231, 50%, 30%, 1));
    color: hsl(231, 50%, 60%);
}

```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='立体文字阴影' src='//codepen.io/Chokcoco/embed/JmgNNa/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/JmgNNa/'>立体文字阴影</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>