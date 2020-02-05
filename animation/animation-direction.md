## scale 配合 transfrom-origin 精准控制动画方向

scale 配合 transfrom-origin 精准控制动画方向。

其中具体的一些细节，的可以看看我的这篇文章：

[妙用 scale 与 transfrom-origin，精准控制动画方向](https://github.com/chokcoco/iCSS/issues/63)

HTML：

```HTML
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: absolute;
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-size: 32px;
    cursor: pointer;
    color: #333;
    text-align: center;
    transition: color .5s;
    margin: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

div::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 200px;
    transform: scaleX(0);
    height: 2px;
    background: deeppink;
    z-index: -1;
    transition: transform .5s;
    transform-origin: 100% 0;
}

div:hover::before {
    transform: scaleX(1);
    transform-origin: 0 0;
}
```

效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title="transform-origin妙用" src="https://codepen.io/Chokcoco/embed/Bxyoyz?height=300&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/Bxyoyz'>transform-origin妙用</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

------

当然，其实这只是其中一种方案。

不使用 `transform-orign` + `scale` 也是可以实现的，直接使用定位的方案如下：

HTML：

```HTML
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: relative;
    width: 200px;
    height: 60px;
    margin: auto;
    line-height: 60px;
    font-size: 32px;
    cursor: pointer;
    color: #333;
    text-align: center;
    transition: color .5s;
}

div::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background: deeppink;
    transition: all .5s;
}

div:hover::before {
    left: 0;
    width: 200px;
}
```
<iframe height="320" style="width: 100%;" scrolling="no" title="定位控制动画方向" src="https://codepen.io/Chokcoco/embed/rNVBZMa?height=320&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/rNVBZMa'>定位控制动画方向</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>