## 使用 margin auto 实现 flex 下的 justify-content: space-between

使用 margin auto 实现 flex 下的 justify-content: space-between

### 难点

核心点在于使用了 FFC/GFC 使 margin: auto 可以自动分配剩余空间。

在 `dispaly: flex`  下：

+ Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.

> [CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins)

简单翻译一下，大意是在  **flex 格式化上下文**中，设置了 `margin: auto` 的元素，在通过 `justify-content` 和 `align-self` 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去

这里，很重要的一点是，margin auto 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。

 
HTML：

```HTML
<ul class="g-flex">
    <li>liA</li>
    <li>liB</li>
    <li>liC</li>
    <li>liD</li>
    <li>liE</li>
</ul>
```

SCSS：
```scss
.g-flex {
    height: 100px;
    margin-bottom: 100px;
    box-sizing: border-box;
    background: #037d65;
    
    display: flex;
    // justify-content: space-between;
}

li {
    width: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    
    margin: auto;
}

li:first-child {
    margin-left: 0;
}

li:last-child {
    margin-right: 0;
}
```

效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title="margin auto 实现 flex 下的 space-between" src="https://codepen.io/Chokcoco/embed/gJXawm?height=300&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/gJXawm'>margin auto 实现 flex 下的 space-between</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>