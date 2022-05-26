## 使用混合模式叠加实现文字波浪效果

使用混合模式叠加实现文字波浪效果

### 关键点

传统的文字镂空展示背景更多的是使用 `background-clip`。

但是本效果文字的背景是动画效果，无法使用 `background-clip` 进行穿透，这里通过混合模式 `mix-blend-mode` 的特性实现。


HTML：
```
<div class="g-container">
    <p>TEXT WAVE</p>
</div>
```

SCSS：
```scss
html, body {
    width: 100%;
    height: 100%;
    display: flex;
}

.g-container {
    margin: auto;
}

p {
    position: relative;
    font-size: 120px;
    font-weight: bold;
    background: #fff;
    color: #000;
    overflow: hidden;
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -923px;
        left: 50%;
        width: 2000px;
        height: 2000px;
        border-radius: 45% 48% 43% 47%;
        transform: translate(-50%, -50%);
        background: rgba(3, 169, 244, .85);
        animation: rotate 10s infinite linear;
        z-index: 1;
        mix-blend-mode: lighten;
    }
    
    &::after {
        border-radius: 43% 47% 44% 48%;
        animation: rotate 10s infinite .5s linear;
    }
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
```

效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title="Pure CSS Text Wave" src="https://codepen.io/Chokcoco/embed/jOwEqvR?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/jOwEqvR">
  Pure CSS Text Wave</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>