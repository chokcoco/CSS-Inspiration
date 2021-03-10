## 线性渐变实现内切角

线性渐变实现内切角。

### 关键点

+ 利用多重线性渐变及单个元素可以设置多层渐变叠加实现


HTML：

```html
<div class="notching"></div>
```

SCSS：
```scss
 .notching{
    width: 160px;
    padding: 60px 20px;
}
.notching{
    background:
    linear-gradient(135deg, transparent 15px, deeppink 0)
    top left,
    linear-gradient(-135deg, transparent 15px, deeppink 0)
    top right,
    linear-gradient(-45deg, transparent 15px, deeppink 0)
    bottom right,
    linear-gradient(45deg, transparent 15px, deeppink 0)
    bottom left;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='线性渐变实现内切角' src='//codepen.io/Chokcoco/embed/dQeWQK/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/dQeWQK/'>线性渐变实现内切角</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>