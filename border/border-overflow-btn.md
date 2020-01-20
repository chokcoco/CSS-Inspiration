## 巧用 overflow 及实现边框线条动画

巧用 overflow 及实现边框线条动画。

借助 overflow 是实现 CSS 效果非常常见的手段。

HTML：

```html
<div>Hover Me</div>
```

SCSS：
```scss
div {
    position: relative;
    margin: auto;
    width: 200px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
    
    &::after {
        content: "Hover Me";
        position: absolute;
        top: 4px;
        bottom: 4px;
        right: 4px;
        left: 4px;
        line-height: 92px;
        font-size: 24px;
        background: #fff;
        border: 2px solid yellowgreen;
        cursor: pointer;
        color: yellowgreen;
    }
    
    &::before {
        content: "";
        position: absolute;
        top: 0px;
        bottom: 0px;
        right: -20px;
        left: 0px;
        background: #fff;
        transform: rotateZ(-90deg) translate(-100%, -100%);
        transform-origin: top left;
        transition: transform .3s;
        transition-timing-function: linear;
    }
    
    &:hover::before {
        transform: rotateZ(0deg) translate(0%, -0%);
    }
}
```

效果如下：

<iframe height="420" style="width: 100%;" scrolling="no" title="巧用overflow及transform实现线条hover效果" src="https://codepen.io/Chokcoco/embed/PooBpQe?height=420&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/PooBpQe'>巧用overflow及transform实现线条hover效果</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>