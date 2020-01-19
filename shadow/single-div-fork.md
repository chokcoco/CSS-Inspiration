## 单标签实现叉子图形

纯 CSS 单标签实现叉子图形。

### 关键点

+ 使用多重阴影的特性，完成叉子的头部部分。


HTML：

```html
<div></div>
```

SCSS：
```scss

div {
    position: relative;
    width: 140px;
    height: 140px;
    margin: auto;
    border-radius: 50%;
    background: #fff;
    
    &::before {
        content: "";
        position: absolute;
        width: 40px;
        height: 200px;
        left: 50%;
        top: 100%;
        background: #fff;
        border-radius: 20px;
        transform: translate(-50%, -50%);
    }
    
    &::after {
        content: "";
        position: absolute;
        width: 20px;
        border-radius: 15px;
        height: 100px;
        background: #fff;
        left: 0;
        top: -20px;
        box-shadow: 20px 0 0 0 #000,
            40px 0 0 0 #fff,
            60px 0 0 0 #000,
            80px 0 0 0 #fff,
            100px 0 0 0 #000,
            120px 0 0 0 #fff;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="460" style="width: 100%;" scrolling="no" title="Single Div Fork" src="https://codepen.io/Chokcoco/embed/NVGGaV?height=460&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/NVGGaV'>Single Div Fork</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>