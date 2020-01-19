## 使用box-shadow/渐变实现内切角

使用box-shadow/渐变实现内切角。

### 关键点

+ 阴影实现的关键点在于使用伪元素绝对定位在容器的一角，元素本身透明，阴影扩散开形成内切圆角效果
+ 阴影实现缺点，单个标签最多只能是2个内切圆角
+ 径向渐变实现内切圆角可以是4边

HTML：

```html
<div class="shadow">使用阴影的扩散半径实现内切圆角</div>
<div class="shadow2">阴影实现缺点，单个标签最多是2边</div>
<div class="linear">使用径向渐变实现内切圆角</div>
<div class="linear2">径向渐变实现内切圆角可以是4边</div>
```

SCSS：
```scss
body {
    background: linear-gradient(90deg, #fff, #bbb);
}

div {
    position: relative;
    width: 20vw;
    height: 8vw;
    margin: 1vw auto;
    border-radius: 1vmin;
    // background: #e91e63;
    overflow: hidden;
    line-height: 8vw;
    color: #fff;
    text-align: center;
}

.shadow {
    
    &::before {
        position: absolute;
        content: "";
        top: -2vw;
        left: -2vw;
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        box-shadow: 0 0 0 25vw #e91e63; 
        z-index: -1;
        animation: shadowmove 10s infinite;
    }
}

.shadow2 {
        &::before {
        position: absolute;
        content: "";
        top: -2vw;
        left: -2vw;
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        box-shadow: 0 0 0 15vw #e91e63; 
        z-index: -1;
    }
    
    &::after {
        position: absolute;
        content: "";
        bottom: -2vw;
        right: -2vw;
        width: 4vw;
        height: 4vw;
        border-radius: 50%;
        box-shadow: 0 0 0 15vw #e91e63; 
        z-index: -1;
    }
}

@keyframes shadowmove {
    0%{
        background: #e91e63; 
        box-shadow: 0 0 0 0 #e91e63; 
    }
    
    10% {
        background: transparent; 
        box-shadow: 0 0 0 0 #e91e63; 
    }
    
    50% {
        background: transparent; 
        box-shadow: 0 0 0 25vw #e91e63; 
    }
}

.linear {
    background-size: 100% 100%;
    background-image: radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw);
    background-repeat: no-repeat;
}

.linear2 {
    background-size: 70% 70%;
    background-image: 
        radial-gradient(circle at 100% 100%, transparent 0, transparent 2vw, #03A9F5 2vw),
        radial-gradient(circle at 0 0, transparent 0, transparent 2vw, #03A9F5 2vw),
        radial-gradient(circle at 100% 0, transparent 0, transparent 2vw, #03A9F5 2vw),
        radial-gradient(circle at 0 100%, transparent 0, transparent 2vw, #03A9F5 2vw);
    background-repeat: no-repeat;
    background-position: right bottom, left top, right top, left bottom;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='使用box-shadow/渐变实现内切角' src='//codepen.io/Chokcoco/embed/ZmLLRM/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/ZmLLRM/'>使用box-shadow/渐变实现内切角</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>