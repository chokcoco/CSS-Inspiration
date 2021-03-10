## 使用 mix-blend-mode 实现光影文字效果

使用 mix-blend-mode 实现光影文字效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### 关键点

+ 利用混合模式 `mix-blend-mode: multiply` 生成渐变色的文字。
+ 利用 `mix-blend-mode: color-dodge` 混合模式，给文字加上点缀，实现美妙的光影效果

详细的可以看看这篇文章：[奇思妙想 CSS 文字动画 ](https://github.com/chokcoco/iCSS/issues/101)

HTML：

```html
<div class="g-container">
    <p>Magic Text</p>
</div>
```

SCSS：
```scss

.g-container {
    margin: auto;
}

p {
    position: relative;
    font-size: 12vw;
    line-height: 16vw;
    // color: #9a9acc;
    overflow: hidden;
    -webkit-text-stroke: 3px #7272a5;

    &::before {
        content: " ";
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
        mix-blend-mode: multiply;
    }

    &::after {
        content: "";
        background: radial-gradient(circle, #fff, #000 50%);
        background-size: 25% 25%;
        position: absolute;
        top: -100%;
        left: -100%;
        right: 0;
        bottom: 0;
        mix-blend-mode: color-dodge;
        animation: mix 8s linear infinite;
    }
}

@keyframes mix {
    to {
        transform: translate(50%, 50%);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="400" style="width: 100%;" scrolling="no" title="Hollow TEXT EFFECT" src="https://codepen.io/Chokcoco/embed/Rwoybzr?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/Rwoybzr'>Hollow TEXT EFFECT</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>