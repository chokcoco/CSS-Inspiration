## 夜晚居室图

夜晚居室图（不知道叫什么好）

### 关键点

1. 使用了渐变完成了墙面窗户和地板上窗户的倒影
2. 使用了 transform 变换完成了视觉上的效果
3. 使用了 shadow 实现了门缝透光效果

HTML：

```HTML
<div class="container">
    <div class="window">
        <div class="moon"></div>
    </div>
    <div class="floor"></div>
    <div class="door"></div>
</div>
```

SCSS：
```scss
$dark: #0d0d2d;
$outside: #999;

body,
html {
    width: 100%;
    height: 100%;
    background: #0d0d2d;
}

.container {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    perspective: 180px;
}

.window {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 200px;
    transform: translate3d(250px, 110px, -190px) rotateY(110deg);
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $outside;
        z-index: 1;
    }
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            linear-gradient(0deg, transparent 12px, $dark 12px, $dark 15px),
            linear-gradient(90deg, $dark 20px, transparent),
            linear-gradient(90deg, $dark 20px, transparent),
            linear-gradient(90deg, $dark 5px, transparent),
            linear-gradient(90deg, $dark 5px, transparent);
        background-size: 100% 15px, 20px 100%, 20px 100%, 5px 100%, 5px 100%;
        background-repeat: repeat, no-repeat, no-repeat, no-repeat, no-repeat;
        background-position: 0 10px, 100px 0, 280px 0, 50px 0, 200px 0;
        z-index: 3;
    }
    
    .moon {
        position: absolute;
        width: 60px;
        height: 100px;
        top: 13px;
        left: 3px;
        background: #e6e6e6;
        z-index: 2;
        border-radius: 50%;
        box-shadow: inset 16px 5px 8px #e6e6e6;
        -webkit-transform: scale(0.6);
        transform: scale(0.3);
    }
}

.floor {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 200px;
    transform: translate3d(7px, 270px, -115px) rotateZ(-90deg) rotateY(100deg);
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $outside;
        z-index: 1;
    }
    
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            linear-gradient(0deg, transparent 12px, $dark 12px, $dark 15px),
            linear-gradient(90deg, $dark 20px, transparent),
            linear-gradient(90deg, $dark 20px, transparent),
            linear-gradient(90deg, $dark 5px, transparent),
            linear-gradient(90deg, $dark 5px, transparent);
        background-size: 100% 15px, 20px 100%, 20px 100%, 5px 100%, 5px 100%;
        background-repeat: repeat, no-repeat, no-repeat, no-repeat, no-repeat;
        background-position: 0 10px, 100px 0, 280px 0, 50px 0, 200px 0;
        z-index: 2;
    }
}

.door {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, -290px);
    width: 50px;
    height: 100px;
    border-radius: 100px 100px 0 0 ;
    background: linear-gradient(45deg, transparent 65%, $outside);
    box-shadow: inset -5px 5px 4px $outside;
}
```

效果如下：

<iframe height="600" style="width: 100%;" scrolling="no" title="Night" src="https://codepen.io/Chokcoco/embed/gObZyBX?height=600&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/gObZyBX'>Night</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>