## 6种实现多列等高的方法

多种实现多列等高的方法

### 需求

多列等高，要求左右两列高度自适应且一样，分别设置不同背景色

### 实现

1. `padding + margin + overflow` 实现多列等高效果，兼容性好
2.  border实现多列等高，左边框宽度为200px，左列浮动，伪元素清除浮动
3. 父元素线性渐变背景色实现多列等高（同理各种颜色障眼法）
4. display：flex实现多列等高
5. display：grid实现多列等高
6. display:table-cell 实现多列等高

 
HTML：

```html
<div class="g-container">
    <div class="g-xxx">
        <div class="g-left">
            content<br/>
        </div>
        <div class="g-right">
            content<br/>
            content<br/>
            content<br/>
            content<br/>
        </div>
    </div>
</div>
```


SCSS：
```scss
h2 {
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    background: #00bcd4;
    color: #fff;
}

.g-container {
    width: 1000px;
    margin: 0 auto;
    line-height: 2;
    color: #fff;
    
    & > div {
        margin-bottom: 50px;
    }
}



.g-padmar {
    position: relative;
    overflow: hidden;

    .g-left {
        float: left;
        width: 200px;
        background: #4caf50;
        padding-bottom:9999px;
	    margin-bottom:-9999px;
    }
    
    .g-right {
        float: left;
        width: 800px;
        background: #99afe0;
        padding-bottom: 9999px;
        margin-bottom: -9999px;
    }
}

.g-border {
    position: relative;
    width: 800px;
    border-left: 200px solid #4caf50;
    background: #99afe0;
    
    &::after {
        content: ".";
        display:block;
        height: 0;
        clear: both;
    }
    
    .g-right {
        width: 800px;
    }
    
    .g-left {
        float: left;
        width: 200px;
        margin-left: -200px;
    }
}

.g-lineargradient {
    background: linear-gradient(90deg, #4caf50 0, #4caf50 20%, #99afe0 20%, #99afe0);
    overflow: hidden;
    
    .g-left {
        float: left;
        width: 200px;
    }
    
    .g-right {
        float: left;
        width: 800px;
    }
}

.g-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    
    .g-left {
        flex: 200px 0 0 ;
        background: #4caf50;
    }
    
    .g-right {
        flex: auto 1 0;
        background: #99afe0;
    } 
}

.g-grid {
    display: grid;
    // align-items: stretch; 默认值
    grid-template-columns: 200px auto;
    
    .g-left {
        background: #4caf50;
    }
    
    .g-right {
        background: #99afe0;
    } 
}

.g-table {
    overflow:hidden;
	display:table;
    
    .g-left {
        width: 200px;
        display: table-cell;
        background: #4caf50;
    }
    
    .g-right {
        width: 800px;
        display: table-cell;
        background: #99afe0;
    } 
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='6种实现多列等高的方法' src='//codepen.io/Chokcoco/embed/bmKzdw/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/bmKzdw/'>6种实现多列等高的方法</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>