## CSS 实现瀑布流布局（display: flex）

本例使用 CSS flex 实现瀑布流布局

关键点，横向 flex 布局嵌套多列纵向 flex 布局，使用了 vw 进行自适应缩放

HTML：

```pug
// pug 模板引擎
div.g-container
    -for(var i = 0; i<4; i++)
        div.g-queue
            -for(var j = 0; j<8; j++)
                div.g-item
```

SCSS：
```scss
$lineCount: 4;
$count: 8;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgb(randomNum(255), randomNum(255), randomNum(255));
}

.g-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
}

.g-queue {
    display: flex;
    flex-direction: column;
    flex-basis: 24%;

}

.g-item {
    position: relative;
    width: 100%;
    margin: 2.5% 0;
}

@for $i from 1 to $lineCount+1 {
    .g-queue:nth-child(#{$i}) {
        @for $j from 1 to $count+1 {
            .g-item:nth-child(#{$j}) {
                height: #{randomNum(300, 50)}px;
                background: randomColor();

                &::after {
                    content: "#{$j}";
                    position: absolute;
                    color: #fff;
                    font-size: 24px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS实现瀑布流布局（display: flex）' src='//codepen.io/Chokcoco/embed/wYgYXX/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/wYgYXX/'>CSS实现瀑布流布局（display: flex）</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>