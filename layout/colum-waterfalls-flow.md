## CSS实现瀑布流布局（column-count）

本例使用 CSS column 实现瀑布流布局

关键点，

+ column-count: 元素内容将被划分的最佳列数
+ break-inside: 避免在元素内部插入分页符

HTML：

```pug
// pug 模板引擎
div.g-container
    -for(var j = 0; j<32; j++)
        div.g-item
```

SCSS：
```scss
$count: 32;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
    column-count: 4;
    column-gap: .5vw;
    padding-top: .5vw;
}

.g-item {
    position: relative;
    width: 24vw;
    margin-bottom: 1vw;
    break-inside: avoid;
}

@for $i from 1 to $count+1 {
    .g-item:nth-child(#{$i}) {
        height: #{randomNum(300, 50)}px;
        background: randomColor();

        &::after {
            content: "#{$i}";
            position: absolute;
            color: #fff;
            font-size: 2vw;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS实现瀑布流布局（column-count）' src='//codepen.io/Chokcoco/embed/LgjazE/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/LgjazE/'>CSS实现瀑布流布局（column-count）</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>