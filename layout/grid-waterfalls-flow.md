## CSS实现瀑布流布局（display: grid）

本例使用 CSS grid 实现瀑布流布局

关键点，

+ 使用 `grid-template-columns`、`grid-template-rows` 分割行列
+ 使用 `grid-row` 控制每个 item 的所占格子的大小

HTML：

```pug
// pug 模板引擎
div.g-container
    -for(var i = 0; i<8; i++)
            div.g-item
```

SCSS：
```scss
$count: 8;

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 1fr);
}

@for $i from 1 to $count+1 {
    .g-item:nth-child(#{$i}) {
        position: relative;
        background: randomColor();
        margin: 0.5vw;

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

.g-item {
    &:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / 3;
    }
    &:nth-child(2) {
        grid-column: 2;
        grid-row: 1 / 4;
    }
    &:nth-child(3) {
        grid-column: 3;
        grid-row: 1 / 5;
    }
    &:nth-child(4) {
        grid-column: 4;
        grid-row: 1 / 6;
    }
    &:nth-child(5) {
        grid-column: 1;
        grid-row: 3 / 9;
    }
    &:nth-child(6) {
        grid-column: 2;
        grid-row: 4 / 9;
    }
    &:nth-child(7) {
        grid-column: 3;
        grid-row: 5 / 9;
    }
    &:nth-child(8) {
        grid-column: 4;
        grid-row: 6 / 9;
    }
}

```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS实现瀑布流布局（display: grid）' src='//codepen.io/Chokcoco/embed/KGXqyo/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/KGXqyo/'>CSS实现瀑布流布局（display: grid）</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>