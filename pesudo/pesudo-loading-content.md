## 伪元素实现打点 loading 效果

伪元素实现打点 loading 效果。

### 关键点

+ 非常有意思，借助动画操控伪元素的 content

一看就懂：

HTML：
```html
<p>加载中</p>
```

SCSS：
```scss
p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    font-size: 6vw;
    line-height: 8vw;
}

p::after {
    content: "";
    position: absolute;
    top: 0%;
    bottom: 0;
    animation: dot 3s infinite steps(3, start);
    line-height: 9vw;
}

@keyframes dot {
    33.33% {
        content: ".";
    }
    66.67% {
        content: "..";
    }
    100% {
        content: "...";
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS实现打点loading效果" src="https://codepen.io/Chokcoco/embed/yrJpQG?height=300&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/yrJpQG'>CSS实现打点loading效果</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>