## 小球穿梭效果

小球穿梭效果。

### 关键点 

主要使用了 blur、contrast 两个滤镜，它们的作用分别是：

+ filter: blur()： 给图像设置高斯模糊效果。
+ filter: contrast()： 调整图像的对比度。

但是，当他们“合体”的时候，产生了奇妙的融合现象，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。

----

HTML：

```HTML
<div class="ball"></div>

<div class="g-wall"></div>
<div class="g-wall"></div>
<div class="g-wall"></div>
<div class="g-wall"></div>
```

SCSS：
```scss
body {
    background: #000;
    filter: blur(5px) contrast(10);
    overflow: hidden;
}

.ball {
    position: absolute;
    left: 0; 
    top: 40vh;
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
    background: #fff;
    animation: move 10s infinite;
    
}

.g-wall {
    position: absolute;
    left: 20%; 
    top: 30vh;
    height: 40vh;
    width: 15vh;
    border-radius: 50%;
    background: rgba(0, 0, 0, .5);
}

.g-wall:nth-child(2) {
    left: 40%; 
    border-radius: 50%;
}

.g-wall:nth-child(3) {
    left: 60%; 
    border-radius: 50%;
}

.g-wall:nth-child(4) {
    left: 80%; 
    border-radius: 50%;
}

@keyframes move {
    
    20% {
        transform: translate(20vw, 0);
        background: #ddd;
    }
    
    100% {
        transform: translate(100vw, 0);
        background: #ddd;
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height="320" style="width: 100%;" scrolling="no" title="ball through" src="https://codepen.io/Chokcoco/embed/ZwYyKO?height=320&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/ZwYyKO'>ball through</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>