## 借助transition-delay实现按钮border动画效果

借助 `transition-delay` 实现按钮 border hover 时的动画效果。


### 关键点

+ 给容器每一边的 border 合理设置 `transition-delay`，可以延缓动画的发生，再连贯的拼凑在一起实现一些效果

HTML：

```html
<div class="both">Both</div>
<div class="rectangle">Rectangle</div>
<div class="circle">Circle</div>
```

SCSS：
```scss
body {
    background: #000;
}

div {
    position: relative;
    width: 200px;
    height: 64px;
    line-height: 64px;
    box-shadow: inset 0 0 0 3px #fff;
    margin: 50px auto;
    text-align: center;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    transition: color 1s;
}

div::before,
div::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    box-sizing: border-box;
    // transition: width .5s, height .5s;
    // transition-delay: .5s, 0s;
    border: 3px solid transparent;
}

.both:hover {
    color: #00e2ff;
    
    &::before {
        transition: width .5s, height .5s, border-bottom-color 0s;
        transition-delay: .5s, 0s, .5s;
        width: 200px;
        height: 64px;
        border-left: 3px solid #00e2ff;
        border-bottom: 3px solid #00e2ff;
    }
    
    &::after {
        transition: width .5s, height .5s, border-right-color .5s;
        transition-delay: 0s, .5s, .5s;
        width: 200px;
        height: 64px;
        border-top: 3px solid #00e2ff;
        border-right: 3px solid #00e2ff;
    }
}

.rectangle {
    &::after {
        top: unset;
        left: unset;
        right: 0;
        bottom: 0;
    }
    
    &:hover {
        color: #00e2ff;
        
        &::before {
            transition: width .25s, height .25s, border-bottom-color 0s;
            transition-delay: .25s, 0s, .25s;
            width: 200px;
            height: 64px;
            border-left: 3px solid #00e2ff;
            border-bottom: 3px solid #00e2ff;
        }

        &::after {
            transition: width .25s, height .25s, border-top-color .25s;
            transition-delay: 0.75s, 0.5s, 0.75s;
            width: 200px;
            height: 64px;
            border-top: 3px solid #00e2ff;
            border-right: 3px solid #00e2ff;
        }
    }   
}

.circle {
    width: 120px;
    height: 120px;
    line-height: 120px;
    border-radius: 50%;
    
    &::before,
    &::after{
        border-radius: 50%; 
    }
    
    &:hover {
        color: #00e2ff;
        
        &::before {
            width: 120px;
            height: 120px;
            border-color: #00e2ff;
            transition: border-top-color .25s linear,
                        border-right-color .25s linear,
                        border-bottom-color .25s linear,
                        border-left-color .25s linear;
            transition-delay: 0s, .25s, .5s, .75s;
        }
        
        &::after {
            width: 120px;
            height: 120px;
            border-top: 3px solid #00e2ff;
            transform: rotate(270deg);
            transition: transform .75s linear;
            transition-delay: 0s;
        }
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='450' scrolling='no' title='借助transition-delay实现按钮border动画效果' src='//codepen.io/Chokcoco/embed/GwKOem/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/GwKOem/'>借助transition-delay实现按钮border动画效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>