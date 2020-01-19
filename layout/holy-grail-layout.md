## 圣杯布局

最常见的圣杯布局实现方法。

### 需求

圣杯布局左中右三列布局，渲染顺序中间列书写在前保证提前渲染，左右两列定宽，中间列自适应剩余宽度。

圣杯布局与双飞翼布局的不同之处，圣杯布局的的左中右三列容器没有多余子容器存在，通过控制父元素的 padding 空出左右两列的宽度。

### 关键点

+ 圣杯布局的关键点是通过 margin-left 与 left 属性将左右两列放置到准确的位置
+ 圣杯布局的关键点父元素需要设置 padding
+ 圣杯布局的关键点 margin-left 取值为百分比时，是以其父元素的宽度为基准的

HTML：

```pug
// pug 模板引擎
div.g-container
    div.g-middle middle
    div.g-left left
    div.g-right right
```

SCSS：
```scss
.g-container {
    // overflow: hidden;
    position: relative;
    height: 100vh;
    padding: 0 200px;
    min-width: 400px;
    
    & > div {
        height: 100vh;
        float: left;
        text-align: center;
        color: #fff;
        line-height: 100vh;
        font-size: 3vw;
    }
}

.g-middle {
    position: relative;
    width: 100%;
    background: #cc6630;
}

.g-left {
    position: relative;
    width: 200px;
    background: #ffcc00;
    margin-left: -100%;
    left: -200px;
}

.g-right {
    position: relative;
    width: 200px;
    background: pink;
    margin-left: -200px;
    right: -200px;
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='圣杯布局' src='//codepen.io/Chokcoco/embed/MPERMw/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/MPERMw/'>圣杯布局</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>