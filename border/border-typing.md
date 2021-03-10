## border-color 变换实现文字输入效果

border-color 变换实现文字输入效果。

### 关键点 

+ 利用 border-right 实现光标闪烁

----

HTML：

```html
<h1>Pure CSS Typing animation.</h1>
```

SCSS：
```scss
body {
    background: black;
    color: #fff;
}

h1 {
    font: bold 200% Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 16.5em;
    width: 26ch;
    margin: 2em 1em;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3s steps(26, end),
        cursor-blink 0.3s step-end infinite alternate;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes cursor-blink {
    50% {
        border-color: transparent;
    }
}
```

效果如下：

<iframe height='350' scrolling='no' title='纯 CSS 实现文字输入效果' src='//codepen.io/Chokcoco/embed/WXGoGB/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/WXGoGB/'>纯 CSS 实现文字输入效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>