## mix-blend-mode 叠加多重渐变背景

使用 background-blend-mode | mix-blend-mode 可以实现很多很有意思的动画融合效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### mix-blend-mode

除了 `mix-blend-mode` ，CSS 还提供一个 `background-blend-mode` 。也就是背景的混合模式。

+ 可以是背景图片与背景图片的混合，
+ 也可以是背景图片和背景色的之间的混合。

利用混合模式，我们可以尽情发挥想象。

### 多重渐变背景配合多重混合模式

原理大致是这样：

![bg5](https://user-images.githubusercontent.com/8554143/100539321-a3c11c80-3270-11eb-89ec-61aff7012be1.gif)

HTML：

```
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
```

SCSS：
```scss
html, body {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    padding-bottom: 100px;
}

div {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

div:nth-child(1) {
    background: linear-gradient(
        238deg,
        rgb(130, 255, 0) 0%,
        rgb(0, 84, 166) 100%
    );
    animation: move 12s infinite linear;
}

div:nth-child(2) {
    background: linear-gradient(238deg, rgb(33, 200, 69) 0%, rgb(0, 0, 100) 100%);
    mix-blend-mode: overlay;
    animation: move 6s infinite linear;
}

div:nth-child(3) {
    background: linear-gradient(238deg, rgb(200, 255, 255) 48%, rgb(3, 0, 151) 100%);
    mix-blend-mode: multiply;
    animation: move 6s infinite linear;
}

div:nth-child(4) {
    background: radial-gradient(
        100% 85% at 0% 100%,
        rgb(0, 0, 0) 0%,
        rgb(0, 131, 255) 50%,
        rgb(255, 0, 0) 100%
    );
    mix-blend-mode: difference;
    animation: move 6s infinite linear;
}

div:nth-child(5) {
    background: radial-gradient(
        100% 225% at 0% 100%,
        rgb(255, 0, 0) 0%,
        rgb(66, 255, 0) 100%
    );
    mix-blend-mode: difference;
    animation: move 6s infinite linear;
}

div:nth-child(6) {
    background: radial-gradient(
        100% 140% at 100% 0%,
        rgb(0, 134, 62) 0%,
        rgb(0, 239, 255) 50%,
        rgb(0, 113, 186) 100%
    );
    mix-blend-mode: overlay;
    animation: move 6s infinite linear;
}

@keyframes move {
    0% {
        filter: unset;
    }
    
    100% {
        filter: hue-rotate(360deg);
    }
}
```

效果如下：

<iframe height="500" style="width: 100%;" scrolling="no" title="graideint background mix 2" src="https://codepen.io/Chokcoco/embed/BaLyYPv?height=265&theme-id=default&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/BaLyYPv'>graideint background mix 2</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>