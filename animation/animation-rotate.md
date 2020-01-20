## 正负旋转相消动画

正负旋转相消动画。

### 关键点

利用了两个容器相向旋转，其中具体的一些细节，的可以看看我的这篇文章：

[你所不知道的 CSS 动画技巧与细节](https://www.cnblogs.com/coco1s/p/7443263.html)

HTML：

```html
<div class="reverseRotate">
    <div class="rotate">
        <div class="content">正负旋转相消3D动画</div>
    </div>
</div>
```

SCSS：
```scss

div {
    transform-style: preserve-3d;
    perspective: 500px;
}

.reverseRotate {
    margin: 20vh auto;
}

.rotate,
.reverseRotate {
    width: 50vh;
    height: 50vh;
}

.content {
    width: 100%;
    height: 100%;
    line-height: 50vh;
    text-align: center;
    background-color: rgba(255, 100, 100, .8);
    font-size: 5vh;
    color: #fff;
    box-shadow: 0px 0px 8px 2px rgba(100, 100, 100, .6);
}

.rotate {
    animation: rotate 5s linear infinite; 
}

.reverseRotate {
    animation: reverseRotate 5s linear infinite; 
}

@keyframes rotate {
    0% {
        transform: rotateX(0deg) rotateZ(0deg);
    }
    50% {
        transform: rotateX(40deg) rotateZ(180deg);
    }
    100% {
        transform: rotateX(0deg) rotateZ(360deg);
    }
}

@keyframes reverseRotate {
    0% {
        transform: rotateZ(0deg);
    }
    100% {
        transform: rotateZ(-360deg);
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="Css动画正负旋转相消" src="https://codepen.io/Chokcoco/embed/XaBJPy?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/XaBJPy'>Css动画正负旋转相消</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>