## 类抖音 LOGO 晕眩效果

使用 background-blend-mode | mix-blend-mode 实现类抖音LOGO晕眩效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### mix-blend-mode

除了 `mix-blend-mode` ，CSS 还提供一个 `background-blend-mode` 。也就是背景的混合模式。

+ 可以是背景图片与背景图片的混合，
+ 也可以是背景图片和背景色的之间的混合。

### 关键点

本例是 `background-blend-mode` | `mix-blend-mode` 是配合使用。

HTML：

```html
<div class="mix3d"></div>
```

SCSS：
```scss
.mix3d {
    margin: 30px auto 0;
    display: block;
    width: 400px;
    height: 400px;
    z-index: 2;
    background: url('https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000'), cyan;
    background-blend-mode: lighten;
    background-size: center;

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 400px;
    height: 400px;
    z-index: 3;
    background: url('https://yyb.gtimg.com/aiplat/page/product/visionimgidy/img/demo6-16a47e5d31.jpg?max_age=31536000'), red;
    background-blend-mode: lighten;
    margin-left: 10px;
    background-size: center;
    mix-blend-mode: darken;
  }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='450' scrolling='no' title='使用background-blend-mode | mix-blend-mode 实现类抖音LOGO晕眩效果' src='//codepen.io/Chokcoco/embed/VVMQgj/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/VVMQgj/'>使用background-blend-mode | mix-blend-mode 实现类抖音LOGO晕眩效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>