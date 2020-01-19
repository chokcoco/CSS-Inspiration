## 使用 mix-blend-mode 实现图片任意颜色赋值技术

使用 `mix-blend-mode` 实现图片任意颜色赋值技术。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。


### 关键点

详细分析请看：[两行 CSS 代码实现图片任意颜色赋色技术](https://www.cnblogs.com/coco1s/p/8080211.html)

HTML：

```html
<div class="pic">原图</div>
<div class="pic pic1">红色</div>
<div class="pic pic2">灰色</div>
<div class="pic pic3">渐变色</div>
```

SCSS：
```scss
$img: 'https://user-images.githubusercontent.com/8554143/34239266-232bdfc0-e641-11e7-8792-408782aaa78e.png';

.pic {
    width: 200px;
    height: 200px;
    margin: 50px;
    text-align: center;
    font-size: 42px;
    line-height: 420px;
    float: left;
    background-image: url($img);
    background-size: cover;
}

.pic1 {
    background-image: url($img), linear-gradient(#f00, #f00);
    background-blend-mode: lighten;
    background-size: cover;
}

.pic2 {
    background-image: url($img), linear-gradient(#333, #333);
    background-blend-mode: lighten;
    background-size: cover;
}

.pic3 {
    background-image: url($img), linear-gradient(#f00, #00f);
    background-blend-mode: lighten;
    background-size: cover;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='400' scrolling='no' title='纯色图片赋色技术尝试' src='//codepen.io/Chokcoco/embed/rpLryX/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/rpLryX/'>纯色图片赋色技术尝试</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>