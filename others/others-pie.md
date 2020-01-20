## 纯CSS实现360°饼图

纯CSS实现360°饼图

### 关键点

+ 核心在于超过 180° 时，使用一个半圆图辅助


HTML：

```HTML
<div class="container">
    <div class="left">
        <div class="left-pie"></div>
    </div>
    <div class="right">
        <div class="right-pie"></div>
    </div>
</div>
```

SCSS：
```scss
body {
    background: #000;
}

.container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 50px auto;
}

.left {
    position: absolute;
    left: 100px;
    top: 0;
    width: 100px;
    height: 200px;
    overflow: hidden;
    
    .left-pie {
        position: relative;
        left: -100px;
        width: 200px;
        height: 200px;
        background: linear-gradient(90deg, transparent 50%, yellowgreen 50%);
        border-radius: 50%;
        transform-origin: 50% 50%;
        transform: rotate(-180deg);
        animation: rotate 4s infinite linear;
    }
}

.right {
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 200px;
    overflow: hidden;
    
    .right-pie {
        position: relative;
        left: 0;
        width: 200px;
        height: 200px;
        background: linear-gradient(90deg, yellowgreen 0%, yellowgreen 50%, transparent 50%);
        border-radius: 50%;
        transform-origin: 50% 50%;
        transform: rotate(-180deg);
        animation: rotate 4s infinite 2s linear;
    }
}

@keyframes rotate {
    50% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
```

效果如下（右下角 rerun 可以重复播放动画）：

<iframe height="350" style="width: 100%;" scrolling="no" title="PURE CSS PIE ROTATE" src="https://codepen.io/Chokcoco/embed/BMgZvM?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/BMgZvM'>PURE CSS PIE ROTATE</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>