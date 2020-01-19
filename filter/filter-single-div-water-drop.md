## 单标签实现滴水效果

单标签实现滴水效果。

### 关键点 

主要使用了 blur、contrast 两个滤镜，它们的作用分别是：

+ filter: blur()： 给图像设置高斯模糊效果。
+ filter: contrast()： 调整图像的对比度。

但是，当他们“合体”的时候，产生了奇妙的融合现象，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。

----

HTML：

```HTML
<div>MAGICCSS</div>
```

SCSS：
```scss
div {
    position: relative;
    width: 640px;
    height: 106px;
    color: #fff;
    font-size: 124px;
    text-align: center;
    margin: 100px auto;
    border-bottom: 10px solid #fff;
    transform: skewY(5deg);
    
    &::before,
    &::after {
        position: absolute;
        content: "";
        bottom : -20px;
        left: 0;
        width: 10px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        transform: translate(0, 0);
        animation: move 7.5s ease-in-out infinite;
    }
    
    &::after {
        animation: move 7.5s ease-in-out 1s infinite;
    }
}

@keyframes move {
    80% {        
        bottom : -30px;
        transform: translate(623px, 0);
    } 93% {
        transform: translate(623px, 3px);
        opacity: 1;
    }100% {
        transform: translate(623px, 150px);
        opacity: 0;
    }
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="单标签实现滴水效果" src="https://codepen.io/Chokcoco/embed/gZVjJw?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/gZVjJw'>单标签实现滴水效果</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>