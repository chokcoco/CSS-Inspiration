## box-shadow实现背景动画 

box-shadow实现背景动画 。

### 关键点

+ 当 box-shadow 的模糊半径和扩张半径都为 0 的时候，我们可以得到一个和元素大小一样的阴影 
+ box-shadow 是可以设置多层的，也就是多层阴影，而且可以进行过渡变换动画（补间动画）
+ background-image: linear-gradient()，也就是渐变背景是不能进行补间动画的

HTML：

```html
<div class="shadow"></div>
<div class="gradient"></div>
```

SCSS：
```scss
.shadow {
    position: relative;
    width: 250px;
    height: 250px;
    border: 1px solid #333;
    box-sizing: border-box;
    margin: 50px;
    float: left;
    overflow: hidden;
    
    &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        top: -50px;
        left: -50px;
        box-shadow: 
            50px 50px, 150px 50px, 250px 50px,
            50px 100px, 150px 100px, 250px 100px,
            50px 150px, 150px 150px, 250px 150px,
            50px 200px, 150px 200px, 250px 200px,
            50px 250px, 150px 250px, 250px 250px;
        animation: move 3s infinite linear;
    }
}

@keyframes move {
    25% {
        transform: translate(50px);
        color: coral;
        box-shadow: 
            50px 50px, 150px 50px, 250px 50px,
            50px 100px, 150px 100px, 250px 100px,
            50px 150px, 150px 150px, 250px 150px,
            50px 200px, 150px 200px, 250px 200px,
            50px 250px, 150px 250px, 250px 250px;
    }
    50% {
        transform: translate(0px);
        color: brown;
        border-radius: 0;
        box-shadow: 
            50px 50px, 150px 50px, 250px 50px,
            100px 100px, 200px 100px, 300px 100px,
            50px 150px, 150px 150px, 250px 150px,
            100px 200px, 200px 200px, 300px 200px,
            50px 250px, 150px 250px, 250px 250px;
    }
    75% {
        transform: translate(0px);
        color: teal;
        border-radius: 50%;
        box-shadow: 
            50px 50px, 150px 50px, 250px 50px,
            100px 100px, 200px 100px, 300px 100px,
            50px 150px, 150px 150px, 250px 150px,
            100px 200px, 200px 200px, 300px 200px,
            50px 250px, 150px 250px, 250px 250px;
    }
    100% {
        border-radius: 0%;
        box-shadow: 
            50px 50px, 150px 50px, 250px 50px,
            50px 100px, 150px 100px, 250px 100px,
            50px 150px, 150px 150px, 250px 150px,
            50px 200px, 150px 200px, 250px 200px,
            50px 250px, 150px 250px, 250px 250px;
    }
}

.gradient {
    position: relative;
    width: 250px;
    height: 250px;
    border: 1px solid #333;
    box-sizing: border-box;
    margin: 50px;
    float: left;
    background-image: linear-gradient(90deg, #000 0%, #000 50%, #fff 50%, #fff 100%);
    background-size:  100px 100px;
}


```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='box-shadow实现背景动画 ' src='//codepen.io/Chokcoco/embed/WaBYZL/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/WaBYZL/'>box-shadow实现背景动画 </a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>