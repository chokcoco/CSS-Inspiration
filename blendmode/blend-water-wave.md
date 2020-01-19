## CSS WAVE MOVE(惊艳的水波效果)

使用 mix-blend-mode 实现惊艳的水波效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### mix-blend-mode

除了 `mix-blend-mode` ，CSS 还提供一个 `background-blend-mode` 。也就是背景的混合模式。

+ 可以是背景图片与背景图片的混合，
+ 也可以是背景图片和背景色的之间的混合。

### 关键点

本例是 `background-blend-mode`、`mix-blend-mode` 以及滤镜的配合使用。

HTML：

```html
<div></div>
```

SCSS：
```scss
$circles: ();
$move: ();
$n: 8;

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

@for $i from 0 through $n {
    $start-x: randomNum(100, 1) * 1vw;
    $start-y: randomNum(100, 1) * 1vh;

    $end-x: randomNum(150, -50) * 1vw;
    $end-y: randomNum(150, -50) * 1vh;

    $circles: append(
        $circles,
        radial-gradient(
                randomNum(75, 25) * 1vw,
                #ddd 0%,
                #666 10%,
                #fff,
                #000,
                #999
            )
            $start-x $start-y,
        comma
    );

    $move: append($move, $end-x $end-y, comma);
}

html,
body {
    width: 100%;
    height: 100%;
    overflow:hidden;
}

div {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom :0;
    background: $circles;
    animation: waveMove 15s infinite linear alternate;
    background-blend-mode: difference;
    filter: blur(2px) hue-rotate(0);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #03a9f4;
        mix-blend-mode: color-burn;
    }
}

@keyframes waveMove {
    100% {
        background-position: $move;
        filter: blur(5px) hue-rotate(30deg);
    }
}
```

效果如下：

<iframe height="320" style="width: 100%;" scrolling="no" title="CSS WAVE MOVE" src="https://codepen.io/Chokcoco/embed/VqbxQr?height=320&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/VqbxQr'>CSS WAVE MOVE</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>