## 多种方案实现单列等宽，其他多列自适应均匀布局

多种方案实现单列等宽，其他多列自适应均匀布局

### 需求

共4列，首列宽度固定为200px，其余3列均分剩余宽度，每列间距10px

### 实现

+ `display: grid` 实现
+ `display: flex` 实现
+ `position: aboslute + float` 实现
+ `position: aboslute + float +非calc实现`

### 难点

对于不使用 flex、grid 以及 css3 特性 calc 而言，实现多列自适应均匀分布只能是百分比。

百分比均分后间距的均分，这里参考了 bootstrap 的实现方式。
 
HTML：

```pug
// pug 模板引擎

div.g-grid
    - for(var i=0; i<4; i++)   
        div.g-item #{i}
        
div.g-flex
    - for(var i=0; i<4; i++)   
        div.g-item #{i}
        
div.g-position
    - for(var i=0; i<4; i++)   
        div.g-item #{i}

div.g-justify  
    div.g-left 0
    div.g-col
        div.g-row
            - for(var i=1; i<4; i++) 
                div.g-item-box
                    div.g-item #{i}
```

SCSS：
```scss
h2 {
    font-size: 28px;
    text-align: center;
    color: #fff;
    background: #009688;
    line-height: 2;
}

.g-left,
.g-item {
    background: #3f51b5;
    line-height: 200px;
    color: #fff;
    text-align: center;
    font-size: 24px;
}

.g-grid {
    height: 200px;
    background: #ff9800;
    display: grid;
    grid-template-columns: 200px repeat(3, 1fr);
    grid-column-gap: 10px;
    margin-bottom: 20px;
}

.g-flex {
    height: 200px;
    background: #ff9800;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 20px;

    .g-item {
        flex: 0 1 calc((100% - 200px - 30px) / 3);
    }
    
    .g-item:first-child {
        flex: 0 1 200px;
    }
}

.g-position {
    position: relative;
    height: 200px;
    background: #ff9800;
    margin-bottom: 20px;

    .g-item {
        float: left;
        width: calc((100% - 200px - 30px) / 3);
        margin-left: 10px;
    }
    
    .g-item:nth-child(2) {
        float: left;
        width: calc((100% - 200px - 30px) / 3);
        margin-left: 210px;
    }
    
    .g-item:first-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        float: unset;
        margin-left: unset;
    }
}

.g-justify {
    position: relative;
    height: 200px;
    background: #ff9800;
    margin-bottom: 20px;

    .g-col,
    .g-row,
    .g-item-box {
        box-sizing: border-box;
    }
    
    .g-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
    }
    
    .g-row {
        margin-right: -5px;
        margin-left: -5px;
    }
    
    .g-col {
        position: absolute;
        top: 0;
        left: 210px;
        right: 0;
        height: 200px;
        overflow: hidden;
        
        &:before,
        &:after {
          display: table;
          content: " ";
        }
        
        &:after {
          clear: both;
        }
        
        .g-item-box {
            position: relative;
            float: left;
            width: 33.33%;
            padding-left: 5px;
            padding-right: 5px;
        }
    }
}
```

效果如下：

<iframe height='350' scrolling='no' title='多种方案实现单列等宽，其他多列自适应均匀布局' src='//codepen.io/Chokcoco/embed/PymyKG/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/PymyKG/'>多种方案实现单列等宽，其他多列自适应均匀布局</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>