## mix-blend-mode MIX

使用 background-blend-mode | mix-blend-mode 可以实现很多很有意思的动画融合效果。

当然，也可以搭配 filter 中的 blur 和 contrast。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### mix-blend-mode

除了 `mix-blend-mode` ，CSS 还提供一个 `background-blend-mode` 。也就是背景的混合模式。

+ 可以是背景图片与背景图片的混合，
+ 也可以是背景图片和背景色的之间的混合。

利用混合模式，我们可以尽情发挥想象。

### Demo MIX 1

HTML：

```pug
.container
    .top
        - for (i = 0; i < 60; i++)
            .top_ball
                .ball
    .left
        - for (i = 0; i < 60; i++)
            .top_ball
                .ball
    .right
        - for (i = 0; i < 60; i++)
            .top_ball
                .ball
```

SCSS：
```scss
$count: 60;

@function setBorderRadius() {
    $pattern1: random(80) + 20;
    $pattern2: 100 - $pattern1;
    $pattern3: random(80) + 20;
    $pattern4: 100 - $pattern3;
    $pattern5: random(80) + 20;
    $pattern6: 100 - $pattern5;
    $pattern7: random(80) + 20;
    $pattern8: 100 - $pattern7;
    
    @return (#{$pattern3 + 0%} #{$pattern4 + 0%} #{$pattern1 + 0%} #{$pattern2 +
        0%} / #{$pattern5 + 0%} #{$pattern7 + 0%} #{$pattern8 + 0%} #{$pattern6 +
        0%});
}

html, body {
    width: 100%;
    height: 100%;
    background: #000;
}

.container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    filter: blur(3px) contrast(500) hue-rotate(50deg);
    animation: filterChange 10s infinite alternate;
}

.ball {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: setBorderRadius();
    mix-blend-mode: screen;
}

.top,
.left,
.right{
    position: absolute;
    width: 20vmin;
    height: 20vmin;
    
    @for $i from 1 through $count {
        .top_ball:nth-child(#{$i}) {
            $size: random(15) + 5vmin;
            $opacity: random(100) / 100;
            position: absolute;
            top: 50%;
            left: 50;
            transform: translate(-50%, -50%);
            width: $size;
            height: $size;
            border-radius: setBorderRadius();
            background: rgba(random(255), random(255), random(255), $opacity);
        }
    }
}

.top {
    top: 10vh;
    left: 50vw;
    
    @for $i from 1 through $count {
        .top_ball:nth-child(#{$i}) {
            animation: rotate random(5000) + 1000ms infinite (200 * $i * -1ms) alternate;
        }
    }
}

.left {
    top: 70vh;
    left: 35vw;
    
    @for $i from 1 through $count {
        .top_ball:nth-child(#{$i}) {
            animation: rotateLeft random(5000) + 1000ms infinite (200 * $i * -1ms) alternate;
        }
    }
}

.right {
    top: 70vh;
    left: 65vw;
    
    @for $i from 1 through $count {
        .top_ball:nth-child(#{$i}) {
            animation: rotateRight random(5000) + 1000ms infinite (200 * $i * -1ms) alternate;
        }
    }
}


@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }

  100% {
    transform: translate(calc(-50% - 15vw), calc(-50% + 60vh)) rotate(360deg);
  }
}

@keyframes rotateLeft {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }

  100% {
    transform: translate(calc(-50% + 30vw), -50%) rotate(360deg);
  }
}

@keyframes rotateRight {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }

  100% {
    transform: translate(calc(-50% - 15vw), calc(-50% - 60vh)) rotate(360deg);
  }
}

@keyframes filterChange {
    100% {
        filter: blur(15px) contrast(10) hue-rotate(10deg);
    }
}
```

效果如下：

<iframe height="320" style="width: 100%;" scrolling="no" title="PURE CSS MIX ?" src="https://codepen.io/Chokcoco/embed/REoKpQ?height=320&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/REoKpQ'>PURE CSS MIX ?</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Demo MIX2

HTML：

```HTML
<div></div>
```

SCSS：
```scss
html,
body {
    overflow: hidden;
    // filter: blur(2px) contrast(3) hue-rotate(-20deg);
}

body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #9c27b0, #ffc107, #fdf5cf, #F44336);
    z-index: 20;
    mix-blend-mode: color-burn;
}

body::after {
    content: "";
    position: absolute;
    top: -200%;
    left: 0;
    right: 0;
    bottom: -200%;
    background: radial-gradient(circle at 35% 75%, #000, #fff, #333, #ccc, #666, #aaa);
    background-size: 25% 25%;
    animation: rotate 10s infinite linear;
    z-index: 10;
    mix-blend-mode: color-dodge;
}

div {
    width: 200vw;
    height: 200vh;
    background: radial-gradient(circle at 50% 50%, #fff, #333, #ccc, #666, #aaa, #000);
    background-size: 30% 25%;
    animation: move 10s infinite linear alternate;
}

@keyframes move {
    100% {
        transform: translate(-100vw, 0);
    }
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
```

效果如下：

<iframe height="320" style="width: 100%;" scrolling="no" title="CSS MAGIC MIX" src="https://codepen.io/Chokcoco/embed/bOgamV?height=320&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/bOgamV'>CSS MAGIC MIX</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Demo MIX3

HTML：

```pug
.container
    -for(var i=0; i<8; i++)
        .circle
```

SCSS：
```scss
$n: 8;

@function randomColor() {
    @return rgba(random(255), random(255), random(255), 1);
}

html,
body {
    width: 100%;
    height: 100%;
    background: #000;
}

.container {
    position: absolute;
    width: 300px;
    height: 300px;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    // mix-blend-mode: color-dodge;
    // background-blend-mode: color-dodge;
}

.circle {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    mix-blend-mode: color-dodge;
    top: 0;
    left: 0;
    will-change: transform;
    background: #fff;
}

@for $i from 1 through $n {
    .circle:nth-child(#{$i}) {
        background: radial-gradient(randomColor() 15%, randomColor() 30%, randomColor() 45%, randomColor() 60%, randomColor() 75%, randomColor() 90%, randomColor() 100%);
        transform: rotate($i * 45deg) translate3d(0, 0, 0);
        animation: move-#{$i} 15s infinite 2s ease-in-out;
    }
    
    @keyframes move-#{$i} {
        10% { transform: rotate($i * 45deg) translate3d(120px, 0, 0) rotateZ(90deg); }
        20% { transform: rotate($i * 90deg) translate3d(50px, 0, 0) rotateY(90deg); }
        30% { transform: rotate($i * 180deg) translate3d(125px, 0, 0) rotateY(180deg); }
        40% { transform: rotate($i * 135deg) translate3d(50px, 0, 0) rotateX(180deg); }
        50% { transform: rotate($i * 45deg) translate3d(100px, 0, 0) rotateX(180deg); }
        60% { transform: rotate($i * 405deg) translate3d(10px, -20px, 0) rotateX(90deg) rotateY(180deg); }
        70% { transform: rotate($i * -45deg) translate3d(120px, 50px, 0) rotateY(0deg); }
        80% { transform: rotate($i * 90deg) translate3d(50px, 0, 0) rotateY(180deg); }
        90% { transform: rotate($i * 45deg) translate3d(150px, -20px, 0) rotateX(180deg);}
        100% { transform: rotate($i * 45deg) translate3d(0, 0, 0); }
    }
}
```

效果如下：

<iframe height="450" style="width: 100%;" scrolling="no" title="CSS MAGIC MIX 2" src="https://codepen.io/Chokcoco/embed/royQvE?height=450&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/royQvE'>CSS MAGIC MIX 2</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
