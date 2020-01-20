## CSS文字分裂特效

CSS文字分裂特效。

### 关键点

+ 使用多个容器，将文字进行了渐进分割
+ 配合了滤镜 `blur` 以及 `contrast`


HTML：

```pug
// pug模板
div.g-container
    -for(var i=0; i<11; i++)
        .g-view 
            .g-text MAGICCSS 
```

SCSS：
```scss
$count: 11;

html,
body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.g-container {
    position: relative;
    margin: 20vh auto;
    width: 33vw;
    height: 10vw;
    filter: blur(0.2vw) contrast(8);
}

.g-view {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    position: absolute;
    overflow: hidden;
    font-size: 6vw;
    height: 10vw;
}

.g-text {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 33vw;
    text-align: center;
}

@for $i from 0 through $count {  
    .g-view:nth-child(#{$i}) {
        width: #{$i * 3}vw;
        animation: rotate 1.5s ease-in #{$i * 140}ms;
        z-index: 10 - $i;
        
        &::before {
            $j: $i - 1;
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: #{$j * 3}vw;
            height: 10vw;
            background: #fff;
            z-index: 1;
        }
    }    
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg) scaleX(1);
    }
    50% {
        transform: translate(-50%, -50%) rotate(180deg) scaleX(0.1);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg) scaleX(1);
    }
}
```

效果如下（右下角 rerun 可以重复播放动画）：

<iframe height="350" style="width: 100%;" scrolling="no" title="CSS文字分裂特效" src="https://codepen.io/Chokcoco/embed/wRZKNY?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/wRZKNY'>CSS文字分裂特效</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>