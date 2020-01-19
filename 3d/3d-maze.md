## 3D 迷宫线条特效

3D 迷宫线条特效。

在这里 [使用线性渐变实现类迷宫图形](./background/bg-linear-gradient-maze.md)，利用线性渐变实现了一个简单的类似迷宫的线条图像，这里再实现一个 3D 的。

本效果还搭配了滤镜和混合模式一起使用。

HTML：

```pug
// pug模板
-for(var j=0; j<10; j++)
    div.g-grid
        - for(var i=0; i<400; i++)
            div.g-box
```

SCSS：
```scss
$count: 400;
$containerCount: 10;

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 2500;
    animation: spectiveMove 40s infinite alternate linear;
    filter: blur(1px) contrast(2);
    // mix-blend-mode: screen;
    background: linear-gradient(45deg, #000, #444);
}

@function randomRotate() {
    $r: random(100);
    @if $r > 50 { @return 45  }
    @if $r <= 50      { @return -45 }
}

.g-grid {
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    display: grid;
    grid-template-columns:  repeat(20, 5%);
    grid-template-rows: repeat(20, 5%);
    // transform: translate3d(0, 0, #{random(50)}px);
}

@for $i from 1 to $count + 1 {
    .g-box:nth-child(#{$i}) {
        background: linear-gradient(#{randomRotate()}deg, transparent 49.5%, deeppink 49.5%, deeppink 50.5%, transparent 50.5%);
        transform: translate3d(0, 0, #{random(100)}px);
    }
    
}

@for $i from 1 to $containerCount + 1 {
    .g-grid:nth-child(#{$i}) {
        transform: translate3d(-50%, 0, #{180 * $i + random(50)}px) rotateZ(#{random(90)}deg);
    }
}

@keyframes spectiveMove {
    100% {
        perspective: 600;
    }
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS 3D MAZE" src="https://codepen.io/Chokcoco/embed/dLYpxK?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/dLYpxK'>CSS 3D MAZE</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>