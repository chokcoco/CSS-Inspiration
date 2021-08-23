## 3D 光影变换文字效果

利用 CSS 3D 实现光影变换文字效果。

### 关键点

+ 给父元素 `div` 设置 `transform-style: preserve-3d`，给每个 `<h1>` 设定不同的 `translateZ()` 来达到文字的 3D 效果
+ 辅助一些旋转，色彩变化给效果增色

HTML：
```
<div>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>
  <h1>Glowing 3D TEXT</h1>  
</div>
```

SCSS：
```scss
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap');

html,
body {
    width: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
    text-align: center;
    font-family: 'Rajdhani', sans-serif;
}

div {
    animation: wobble 5s ease-in-out infinite;
    transform-origin: center center;
    transform-style: preserve-3d;
/*     perspective: 500px; */
}

@keyframes wobble {
    0%,
    100% {
        transform: rotate3d(1, 1, 0, 40deg);
    }
    25% {
        transform: rotate3d(-1, 1, 0, 40deg);
    }
    50% {
        transform: rotate3d(-1, -1, 0, 40deg);
    }
    75% {
        transform: rotate3d(1, -1, 0, 40deg);
    }
}

h1 {
    position: absolute;
    display: block;
    width: 100%;
    top: 120px;
    font-size: 100px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(255, 100, 100, 1);
    text-shadow: 
        0 0 5px rgba(255, 0, 0, 1), 
        0 0 20px rgba(255, 0, 0, .8), 
        0 0 50px rgba(255, 0, 0, .6);
    animation: glow 10s ease-in-out infinite;
}

@keyframes glow {
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(360deg);
    }
}

h1:nth-child(2) {
    transform: translateZ(5px);
}
h1:nth-child(3) {
    transform: translateZ(10px);
}
h1:nth-child(4) {
    transform: translateZ(15px);
}
h1:nth-child(5) {
    transform: translateZ(20px);
}
h1:nth-child(6) {
    transform: translateZ(25px);
}
h1:nth-child(7) {
    transform: translateZ(30px);
}
h1:nth-child(8) {
    transform: translateZ(35px);
}
h1:nth-child(9) {
    transform: translateZ(40px);
}
h1:nth-child(10) {
    transform: translateZ(45px);
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="Glowing 3D  TEXT" src="https://codepen.io/Chokcoco/embed/WNjmJeV?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/WNjmJeV">
  Glowing 3D  TEXT</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>