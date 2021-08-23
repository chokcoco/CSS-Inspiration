## 3D 立方体进度条

使用 CSS 3D 实现的立方体制作酷炫的进度条。

### 关键点

+ 可以利用 CSS Property 实现渐变的动画效果
+ 可以利用滤镜的 hue-rotate 变化实现整体的颜色变化


HTML：
```
<div class="demo-cube perspective percentage">
  <ul class="cube">
    <li class="top"></li>
    <li class="bottom"></li>
    <li class="front"></li>
    <li class="back"></li>
  </ul>
</div>

<div class="demo-cube perspective colorful">
  <ul class="cube">
    <li class="top"></li>
    <li class="bottom"></li>
    <li class="front"></li>
    <li class="back"></li>
  </ul>
</div>

<div class="demo-cube perspective pink">
  <ul class="cube">
    <li class="top"></li>
    <li class="bottom"></li>
    <li class="front"></li>
    <li class="back"></li>
  </ul>
</div>
```

SCSS：
```scss
@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 0%;
}

body,
html {
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #EEEFED, #F9E3E9);
  display: flex;
  flex-direction: column;
}

.demo-cube {
  margin: auto;
}

.perspective {
  transform-style: preserve-3d;
  perspective: 520px;
  transform: rotateX(15deg);
}

ul {
  padding: 0;
  list-style: none;
}

.demo-cube {
  position: relative;
  width: 100%;
  height: 200px;

  .cube {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 100px;
    transform-style: preserve-3d;
    transform-origin: 50px 50px;
    transform: translate(-50%, -50%) rotateX(-33.5deg);

    li {
      position: absolute;
      display: block;
      width: 100px;
      height: 100px;
      // background: rgba(156, 39, 176, .4);
      // border: 1px solid #ddd;
    }
    .top {
      width: 300px;
      transform: rotateX(90deg) translateZ(50px);
    }
    .bottom {
      width: 300px;
      transform: rotateX(-90deg) translateZ(50px);
    }
    .front {
      width: 300px;
      transform: translateZ(50px);
    }
    .back {
      width: 300px;
      transform: rotateX(-180deg) translateZ(50px);
    }
  }
}

.percentage .cube {
  .top,
  .front,
  .bottom,
  .back {
    background: linear-gradient(90deg, rgba(156, 39, 176, .3), rgba(255, 34, 109, .8) 65%, rgba(255, 255, 255, .6) 65%, rgba(255, 255, 255, .6));
  }
}

.colorful {
  animation: hueRotate 10s infinite linear;
  .cube {
    .top,
    .front,
    .bottom,
    .back {
        background: linear-gradient(90deg, rgba(40, 101, 127, .9), rgba(133, 165, 181, .5) 85%, rgba(255, 255, 255, .6) 85%, rgba(255, 255, 255, .6));
    }
  }
}
.pink .cube {
  .top,
  .front,
  .bottom,
  .back {
    background: linear-gradient(90deg, rgba(255, 217, 34, .6), rgba(255, 34, 109, .8) var(--per), rgba(255, 34, 109, .1) var(--per), rgba(255, 34, 109, .1));
    animation: perChange 6s infinite;
  }
}

@keyframes perChange {
  0% {
    --per: 0%;
  }
  90%,
  to {
    --per: 80%;
  }
}

@keyframes hueRotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
```

效果如下：

<iframe height="550" style="width: 100%;" scrolling="no" title="Webpack logo" src="https://codepen.io/Chokcoco/embed/gORYybM?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/gORYybM">
  Webpack logo</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>