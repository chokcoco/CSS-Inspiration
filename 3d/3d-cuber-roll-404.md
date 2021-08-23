## 3D 立方体滚动 404 效果

使用 CSS 3D 实现的立方体制作的一个 404 效果。

### 关键点

其核心就在于在一个 CSS 3D 立方体的基础上：

1. 添加立方体的滚动动画
2. 控制下落的缓动函数，及落地的震荡动画（为了效果更为逼真，运用了设计动画中的预备动作、跟随和重叠动画等技巧）
3. 控制立方体及地面数字画面的平移
4. 控制动画的无限循环

整体制作还是非常有难度的，但是用在自己的 404 页面，确实也是非常的酷炫。这个效果，我最早见于 [Yusuke Nakaya](https://codepen.io/YusukeNakaya) 大神，完整的代码你也可以戳这里：[CodePen -- Only CSS: 404 Rolling Box ](https://codepen.io/YusukeNakaya/pen/YLPVER)

HTML（使用了 Pug 模板引擎）：
```
.rail
  - for (i = 0; i < 10; i++)
    .stamp.four 4
    .stamp.zero 0
.world
  .forward
    .box
      - for (i = 0; i < 6; i++)
        .wall
```

SCSS：
```scss
body {
  background: #fff;
  height: 100vh;
  overflow: hidden;
  display: flex;
  font-family: 'Anton', sans-serif;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

$wallSize: 200px;

div {
  transform-style: preserve-3d;
}
.rail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(-30deg) rotateY(-30deg);
  .stamp {
    position: absolute;
    width: $wallSize;
    height: $wallSize;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 20, 20, 1);
    color: #fff;
    font-size: 7rem;
    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        animation: stampSlide 20 * 2000ms ($i * -2000) - 300ms linear infinite;
      }
    }
  }
}
@keyframes stampSlide {
  0% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize) translateY(130px);
  }
  100% {
    transform: rotateX(90deg) rotateZ(-90deg) translateZ(-$wallSize) translateY(130 - 200 * 20px);
  }
}
.world {
  transform: rotateX(-30deg) rotateY(-30deg);
  .forward {
    position: absolute;
    animation: slide 2000ms linear infinite;
  }
  .box {
    width: $wallSize;
    height: $wallSize;
    transform-origin: 100% 100%;
    animation: roll 2000ms cubic-bezier(1.000, 0.010, 1.000, 1.000) infinite;
    .wall {
      position: absolute;
      width: $wallSize;
      height: $wallSize;
      background: rgba(10, 10, 10, 0.8);
      border: 1px solid rgba(250, 250, 250, 1);
      box-sizing: border-box;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 7rem;
      }
      &:nth-child(1) {
        transform: translateZ($wallSize / 2);
      }
      &:nth-child(2) {
        transform: rotateX(180deg) translateZ($wallSize / 2);
      }
      &:nth-child(3) {
        transform: rotateX(90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) rotateZ(90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(4) {
        transform: rotateX(-90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) rotateZ(-90deg) translateZ(-1px);
          animation: zeroFour 4000ms -2000ms linear infinite;
        }
      }
      &:nth-child(5) {
        transform: rotateY(90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
      &:nth-child(6) {
        transform: rotateY(-90deg) translateZ($wallSize / 2);
        &::before {
          transform: rotateX(180deg) rotateZ(180deg) translateZ(-1px);
          animation: zeroFour 4000ms linear infinite;
        }
      }
    }
  }
}

@keyframes zeroFour {
  0% {
    content: '4';
  }
  100% {
    content: '0';
  }
}

@keyframes roll {
  0% {
    transform: rotateZ(0deg);
  }
  85% {
    transform: rotateZ(90deg);
  }
  87% {
    transform: rotateZ(88deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-$wallSize);
  }
}
```

效果如下：

<iframe height="500" style="width: 100%;" scrolling="no" title="Only CSS: 404 Rolling Box" src="https://codepen.io/Chokcoco/embed/MdGYbX?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/MdGYbX">
  Only CSS: 404 Rolling Box</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>