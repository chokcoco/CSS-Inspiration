## PURE CSS 实现鼠标跟随

PURE CSS 实现鼠标跟随。

### 关键点

+ 其实也是障眼法，通过将屏幕铺满 div 进行控制。

详细信息，可以看看我的这篇文章：

[不可思议的纯 CSS 实现鼠标跟随](https://github.com/chokcoco/iCSS/issues/46)

HTML：

```pug
// pug模板
div.g-container
    -for(var i=0; i<100; i++)
        div.position
    .ball
```

SCSS：
```scss
$count: 100;

.g-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
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
    
    .position:nth-child(#{$i + 1}):hover ~ .ball {
        top: #{$y * 10 + 5}vh;
        left: #{$x * 10 + 5}vw;
        // transform: translate(-50%, -50%) scale(random(2) + 0.2);
        // 
    }
}

.ball {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10vmax;
    height: 10vmax;
    border-radius: 43%;
    border: 2px solid #333;
    transform: translate(-50%, -50%) rotate(0deg) scale(.8);
    transition: .1s ease-in;
    // transition-delay: .01s;
    animation: rotate 3s infinite ease-in-out alternate;
    z-index: -1;
}

@keyframes rotate {
    100% {
        transform: translate(-50%, -50%) rotate(90deg) scale(1.2);
    }
}
```

效果如下（在下图移动指针查看效果）：

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS实现鼠标跟随" src="https://codepen.io/Chokcoco/embed/MZqMVO?height=450&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/MZqMVO'>CSS实现鼠标跟随</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>