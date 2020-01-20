## PURE CSS 实现鼠标跟随

PURE CSS 实现鼠标跟随。

### 关键点

+ 障眼法，通过将屏幕铺满 div 进行控制鼠标跟随
+ 配合了滤镜 `blur` 以及 `contrast`

详细信息，可以看看我的这篇文章：

[不可思议的纯 CSS 实现鼠标跟随](https://github.com/chokcoco/iCSS/issues/46)

HTML：

```pug
// pug模板
div.g-container
    -for(var i=0; i<100; i++)
        div.position
    .ball
        -for(var j=0; j<10; j++)
            .point
```

SCSS：
```scss
$count: 100;
$points: 10;

.g-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    // mix-blend-mode: screen;
}

.position {
    position: absolute;
    width: 10vw;
    height: 10vh;
    box-sizing: border-box;
    cursor: pointer;
    // border: 1px solid #eee;
}

@for $i from 0 through $count {
    $x: $i % 10;
    $y: ($i - $x) / 10;

    .position:nth-child(#{$i + 1}) {
        top: #{$y * 10}vh;
        left: #{$x * 10}vw;
    }

    .position:nth-child(#{$i + 1}):hover ~ .ball .point {
        top: #{$y * 10 + 5}vh;
        left: #{$x * 10 + 5}vw;
        // transform: translate(-50%, -50%) scale(random(2) + 0.2);
        //
    }
}

.ball {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(5px) contrast(10) hue-rotate(50deg);
    // background: #000;
    background: linear-gradient(45deg, #000, #333, #666, #999, #ccc, #fff);

    .point {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
    }

    @for $j from 0 through $points {
        .point:nth-child(#{$j}) {
            width: 3vmax + 1vmax * $j;
            height: 3vmax + + 1vmax * $j;
            border: 0.9vmax solid #fff;
            border-radius: 50%;
            transition: 1s;
            transition-delay: 8ms * $j;
            transition-timing-function: cubic-bezier(0.27, 1.06, 0.82, 1.11);
        }
    }
}

@keyframes rotate {
    100% {
        transform: translate(-50%, -50%) rotate(90deg) scale(1.2);
    }
}
```

效果如下（在下图移动指针查看效果）：

<iframe height="400" style="width: 100%;" scrolling="no" title="鼠标跟随动画 PURE CSS MAGIC MIX" src="https://codepen.io/Chokcoco/embed/zyyYqN?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/zyyYqN'>鼠标跟随动画 PURE CSS MAGIC MIX</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>