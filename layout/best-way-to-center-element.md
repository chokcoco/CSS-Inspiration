## 实现水平垂直居中最便捷的方法

实现水平垂直居中最便捷的方法

### 难点

核心点在于使用了 FFC/GFC 使 margin: auto 在垂直方向上居中元素。

原因如下，在 `dispaly: flex`  下：

+ Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.

> [CSS Flexible Box Layout Module Level 1 -- 8.1. Aligning with auto margins](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#auto-margins)

简单翻译一下，大意是在  **flex 格式化上下文**中，设置了 `margin: auto` 的元素，在通过 `justify-content` 和 `align-self` 进行对齐之前，任何正处于空闲的空间都会分配到该方向的自动 margin 中去

这里，很重要的一点是，margin auto 的生效不仅是水平方向，垂直方向也会自动去分配这个剩余空间。

 
HTML：

```HTML
<div class="g-container">
    <div class="g-box"></div>
</div>
```

SCSS：
```scss
.g-container {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    // display: grid;
    // display: inline-flex;
    // display: inline-grid;

}

.g-box {
    width: 40vmin;
    height: 40vmin;
    background: #000;
    margin: auto;
}
```

效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title="最便捷的垂直居中方式" src="https://codepen.io/Chokcoco/embed/GarPev?height=300&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/GarPev'>最便捷的垂直居中方式</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>