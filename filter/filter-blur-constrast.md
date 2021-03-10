## 使用 filter:blur | filter:constrast 生成特殊融合效果

使用 filter:blur | filter:constrast 生成特殊融合效果。

### 关键点 

本例子中两个单独的滤镜拿出来，它们的作用分别是：

+ filter: blur()： 给图像设置高斯模糊效果。
+ filter: contrast()： 调整图像的对比度。

但是，当他们“合体”的时候，产生了奇妙的融合现象，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。

----

HTML：

```pug
// pug 模版
.container
    .bg
    - for(var i=0; i<1; i++)
        .box
```

SCSS：
```scss
.container {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    filter: contrast(20);
}

.bg {
    position: absolute;
    width: 200px;
    height: 200px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #000;
    filter: contrast(20) blur(6px);
    
}

.box {
    position: absolute;
    top: 50%;
    left: 80px;
    transform: translate(-50%, -50%) rotate(0);
    background-color: blue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    filter: unset;
    filter: contrast(20) blur(6px);
    animation: turn 5s linear infinite;
    transform-origin: -100% center;
}

@keyframes turn {
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
```

效果如下：

<iframe height='350' scrolling='no' title='blur && constrast' src='//codepen.io/Chokcoco/embed/pPdQGj/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/pPdQGj/'>blur && constrast</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>