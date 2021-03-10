## 活用 outline 巧妙实现加号符号

活用 outline 巧妙实现加号符号。

惊为天人的一个小技巧，也许算是 `outline` 的一个bug，当向内收缩 `outline` 时，神奇的事情发生了。

关于本效果的详细信息，可以看看这篇文章：

[你所不知道的 CSS 负值技巧与细节](https://github.com/chokcoco/iCSS/issues/68)

> 更新于 2021/03/09，该效果于最新版本的 Chrome 已经被修复。

HTML：

```html
<div></div>
```

SCSS：
```scss
div {
    width: 200px;
    height: 200px;
    background-color: #fc3;
    box-sizing: border-box;
    margin: auto;
}

div {
    outline: 20px solid #000;
    outline-offset: 10px;
    animation: move 8s infinite linear;
}

@keyframes move {
    50% {
        outline-offset: -118px;
    }
    100% {
        outline-offset: -118px;
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="使用outline实现加号" src="https://codepen.io/Chokcoco/embed/PrrLaP?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/PrrLaP'>使用outline实现加号</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>