## 使用线性渐变模拟进度条运动

使用线性渐变模拟进度条运动。

### 知识点

核心难点在于动画的首尾如何衔接上，需要自己尝试计算。

HTML：

```html
<div class="bar"></div>
<div class="bar overflow"></div>
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
}

.bar {
    position: relative;
    width: 400px;
    height: 30px;
    margin: auto;
    border-radius:20px;
    // border: 1px solid #000;
    background: #ffba01;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 400px;
        height: 85px;
        background: repeating-linear-gradient(45deg, #f06a0e, #f06a0e
10px, transparent 11px, transparent 19px, #f06a0e 20px);
        background-position: 0 0;
        background-repeat: no-repeat;
        animation: move 1s linear infinite;
    }
    
}

.overflow {
    overflow: hidden;
}

@keyframes move {
    from { background-position: 0 0; }
    to { background-position: 0 -56px; }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="350" style="width: 100%;" scrolling="no" title="线性渐变模拟进度条" src="https://codepen.io/Chokcoco/embed/EzZwXg?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/EzZwXg'>线性渐变模拟进度条</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>