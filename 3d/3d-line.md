## 3D 线条动画

3D 线条动画。

### 关键点

+ 借助 SASS，其实是 100 个元素，借助 animation-delay 实现的一条线

HTML：

```pug
// pug模板
div.container
    - for(var i=0; i<100; i++)
        div.circle
```

SCSS：
```scss
$n: 100;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

@function randomColor() {
    @return rgba(randomNum(255), randomNum(255), randomNum(255), randomNum(100)/100);
}

html,
body {
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1vmin;
    height: 1vmin;
    transform-style: preserve-3d;
    perspective: 1000;
    animation: screenMove 16s infinite alternate;
    // mix-blend-mode: lighten;
}

@for $i from 1 through $n { 
    .circle:nth-child(#{$i}) {
        position: absolute;
        top: 0;
        left: 0;
        width: 1vmax;
        height: 1vmax;
        border-radius: 50%;
        animation: anim-#{$i} 10s infinite 0.01s * $i alternate ease-in-out;
        background: hsl($i * 2, 95, 60);
        // mix-blend-mode: lighten;
    }
    
    @keyframes anim-#{$i}{
        100% {
          filter: hue-rotate(360deg);
          transform: 
            rotate(28 * 360deg) 
              translate3d(50vmin, 50vmin, -#{$i * 20}px)
            scale(6);
        }
    }
}

@keyframes screenMove {
    100% {
        transform: translate3d(-50%, -50%, 0) rotateY(45deg);
    }
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height="350" style="width: 100%;" scrolling="no" title="CSS线条动画" src="https://codepen.io/Chokcoco/embed/XogwvV?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/XogwvV'>CSS线条动画</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>