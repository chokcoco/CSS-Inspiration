## 伪元素实现边界智能判断移动

伪元素实现边界智能判断移动。



### 关键点

+ 利用了伪元素生成了 4 个三角形组成了一个正方形，通过 hover 哪个透明的三角形来判断用户的操作方位。

当然，在本题**伪元素**不是必须的，只是简化了标签的使用。

-------

HTML：
```html
<div class="box">
    <div class="box__right">Right → Left</div>
    <div class="box__left">Left → Right</div>
    <div class="box__top">Top → Bottom</div>
    <div class="box__bottom">Bottom → Top</div>
    <div class="box__center">Hover from any side</div>
</div>
```

SCSS：
```scss
.box {
    margin: 5em auto;
    position: relative;
    width: 10em;
    height: 10em;
    line-height: 10em;
    overflow: hidden;
}

.box__right,
.box__left,
.box__top,
.box__bottom,
.box__center {
    position: absolute;
    width: inherit;
    height: inherit;
    text-align: center;
    line-height: inherit;
    transition: transform 0.4s ease;
}

.box__right:before,
.box__left:before,
.box__top:before,
.box__bottom:before,
.box__center:before {
    position: absolute;
    content: "";
    width: 70.71%;
    height: 70.71%;
    transform: rotate(45deg);
}

.box__right:hover,
.box__left:hover,
.box__top:hover,
.box__bottom:hover,
.box__center:hover {
    transform: translateX(0);
    z-index: 1;
}

.box__right:hover:before,
.box__left:hover:before,
.box__top:hover:before,
.box__bottom:hover:before,
.box__center:hover:before {
    width: 100%;
    height: 100%;
    transform: none;
}

.box__right {
    background: blue;
    transform: translateX(100%);
}

.box__right:before {
    right: 100%;
    bottom: 0;
    transform-origin: 100% 100%;
}

.box__right:hover ~ .box__center {
    transform: translateX(-100%);
}

.box__left {
    background: green;
    transform: translateX(-100%);
}

.box__left:before {
    left: 100%;
    transform-origin: 0 0;
}

.box__left:hover ~ .box__center {
    transform: translateX(100%);
}

.box__top {
    background: red;
    transform: translateY(-100%);
}

.box__top:before {
    top: 100%;
    right: 0;
    transform-origin: 100% 0;
}

.box__top:hover ~ .box__center {
    transform: translateY(100%);
}

.box__bottom {
    background: yellow;
    transform: translateY(100%);
}

.box__bottom:before {
    bottom: 100%;
    left: 0;
    transform-origin: 0 100%;
}

.box__bottom:hover ~ .box__center {
    transform: translateY(-100%);
}

.box__center {
    background: orange;
    z-index: -1;
}
```

效果如下：

<iframe height="420" style="width: 100%;" scrolling="no" title="CSS AUTO MOVE" src="https://codepen.io/Chokcoco/embed/rRLJrR?height=420&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/rRLJrR'>CSS AUTO MOVE</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>