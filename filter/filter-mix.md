## 滤镜及混合模式混搭特效

使用滤镜及混合模式混搭特效。

本例子中用到了：

+ filter: contrast()
+ filter: brightness() 
+ filter: blur()
+ background-blend-mode: multiply
+ mix-blend-mode: saturation

-------

HTML：
```html
<div class="halftone">
    <img src="https://avatars3.githubusercontent.com/u/8554143?s=460&v=4">
</div>
```

SCSS：
```scss
.halftone {
  position: absolute;
  width: 20vw;
  height: 20vw;
  background: white;
  top: 50%;
  left: 50%;
  filter: contrast(100000%);
  transform: translate(-50%, -50%);
  overflow: hidden; // 电脑性能好的，关掉这个属性
}

.halftone > img {
  width: 100%;
  height: 100%;
  filter: brightness(0.5) blur(4px);
  animation: 3s animation-filter infinite alternate;
}

.halftone::after {
  content: "";
  position: absolute;
  top: -100%;
  left: -100%;
  right: -100%;
  bottom: -100%;
  background-blend-mode: multiply;
  background: radial-gradient(8px 8px, cyan, white),
        radial-gradient(8px 8px, magenta, white),
        radial-gradient(8px 8px, yellow, white);
  background-size: 8px 8px;
  background-position: 0 -3px, -2px 0, 2px 0;
  mix-blend-mode: saturation;
  pointer-events: none;
  transform: rotate(11.25deg);
  transition: 1s ease-in-out transform;
  z-index: 1;
  animation: 3s animation-overlay infinite alternate;
}

@keyframes animation-overlay {
  0% {
    transform: rotate(450deg) scale(15);
  }

  100% {
    transform: rotate(-90deg);
  }
}

@keyframes animation-filter {
  0% {
    filter: brightness(0.5) blur(40px);
  }

  100% {
    filter: brightness(0.5) blur(4px);
  }
}

```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='使用 fliter:blur | filter:brightness | mix-blend-mode | background-blend-mode 生成特殊图片融合动画' src='//codepen.io/Chokcoco/embed/pLKmZQ/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/pLKmZQ/'>使用 fliter:blur | filter:brightness | mix-blend-mode | background-blend-mode 生成特殊图片融合动画</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>