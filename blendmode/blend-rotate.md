## mix-blend-mode 实现 loading 效果

mix-blend-mode 实现 loading 效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### 关键点

这里使用了 `mix-blend-mode: difference` 差值模式，通过查看每个通道中的颜色信息，比较底色和绘图色，用较亮的像素点的像素值减去较暗的像素点的像素值。与白色混合将使底色反相；与黑色混合则不产生变化。

通俗一点就是上方图层的亮区将下方图层的颜色进行反相，暗区则将颜色正常显示出来，效果与原图像是完全相反的颜色。

看看利用了这个混合模式，运用在一些多图层效果里，可以产生十分绚烂的混合效果：

HTML：

```pug
// pug模版
.container
    -for (var x = 0; x < 6; x++)
        .box
```

SCSS：
```scss
$count : 6;
$each: 360deg / $count;
$distance: 100px;
$boxshadow: 25px;

body {
    background-color: #000;
    overflow: hidden;
}

.container {
    position: absolute;
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

.box {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    background: rgb(0, 0, 0);
    box-shadow: inset 0 $boxshadow 0 $boxshadow rgb(255, 255, 255);
    mix-blend-mode: difference;
}

@for $i from 1 through $count {
    $curRotate: $i * $each;
    
    .box:nth-child(#{$i}) {
        transform: rotate($curRotate) translate(0, 50%);
        animation: move#{$i} 10s linear infinite alternate;
    }
    
    @keyframes move#{$i} {
        100% {
            transform: rotate(calc(1080deg + #{$curRotate})) translate($distance);
        }
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='400' scrolling='no' title='pureCssAnimation(webkit Only)' src='//codepen.io/Chokcoco/embed/VbMrKX/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/VbMrKX/'>pureCssAnimation(webkit Only)</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>