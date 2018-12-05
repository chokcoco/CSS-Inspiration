## 线性渐变实现箭头符号

线性渐变实现箭头符号。

### 关键点

+ 利用多重线性渐变拼凑箭头形状
+ 恰当运用 `background-position`，`background-size`


HTML：

```html
<div class="arrow"></div>
```

SCSS：
```scss
 .arrow{
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
    width: 200px;
    height: 40px;
    text-align: center;
    color: white;
    font-size: 200%;
}
.arrow{
    background:
    linear-gradient(-135deg, transparent 10%, #04e6fb 10%, #65ff9a 100%)
    top right,
    linear-gradient(-45deg, transparent 10%, #04e6fb 10%, #65ff9a 100%)
    bottom right,
    linear-gradient(-135deg, #04e6fb 0, #65ff9a 90%, transparent 90%)
    top left,
    linear-gradient(-45deg, #04e6fb 0, #65ff9a 90%, transparent 90%)
    bottom left;
    background-size: 90% 50%;
    background-repeat: no-repeat;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='265' scrolling='no' title='使用渐变实现箭头符号' src='//codepen.io/Chokcoco/embed/BGeJGm/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/BGeJGm/'>使用渐变实现箭头符号</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>