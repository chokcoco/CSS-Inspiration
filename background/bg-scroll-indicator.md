## 使用线性渐变实现滚动进度条

使用线性渐变实现滚动进度条。

滚动下面的页面，你会看到顶部实现了进度条的效果，这里其实是个简单的利用了线性渐变的障眼法。

具体可以看看这篇文章：

[不可思议的纯 CSS 滚动进度条效果](https://github.com/chokcoco/iCSS/issues/43)

HTML：

```html
<h1>不可思议的纯 CSS 进度条效果</h1>

....

<p>OK，继续。这个效......</p>
```

SCSS：
```scss
body {
    position: relative;
    padding: 50px;
    font-size: 24px;
    line-height: 30px;
    background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
    background-size: 100% calc(100% - 100vh + 5px);
    background-repeat: no-repeat;
    z-index: 1;
}

body::after {
    content: "";
    position: fixed;
    top: 5px;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    z-index: -1;
}


/**
 * Unrelated css
 */

h1 {
    font-size: 32px;
    line-height: 60px;
}

ul {
    margin-top: 30px;
}

p {
    font-size: 24px;
    line-height: 30px;
    margin-top: 30px;
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="使用线性渐变实现滚动进度条" src="https://codepen.io/Chokcoco/embed/KbBXQM?height=350&theme-id=default&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/KbBXQM'>使用线性渐变实现滚动进度条</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>