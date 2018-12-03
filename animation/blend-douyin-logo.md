## 使用 mix-blend-mode 实现抖音 LOGO

使用 mix-blend-mode 实现抖音 LOGO。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### 关键点

+ 主要借助伪元素实现了整体 J 结构，借助了 mix-blend-mode 实现融合效果
+ 利用 `mix-blend-mode: lighten` 混合模式实现两个 J 形结构重叠部分为白色

HTML：

```html
<div class="g-container">
    <div class="j"></div>
    <div class="j"></div>
</div>
```

SCSS：
```scss
body {
    background: #000;
    overflow: hidden;
}

.g-container {
    position: relative;
    width: 200px;
    margin: 100px auto;
    filter: contrast(150%) brightness(110%);
}

.j {
    position: absolute;
    top: 0;
    left: 0;
    width: 47px;
    height: 218px;
    z-index: 1;
    background: #24f6f0;

    &::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border: 47px solid #24f6f0;
        border-top: 47px solid transparent;
        border-radius: 50%;
        top: 121px;
        left: -147px;
        transform: rotate(45deg);
    }
    
        &::after {
        content: "";
        position: absolute;
        width: 140px;
        height: 140px;
        border: 40px solid #24f6f0;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
        top: -110px;
        right: -183px;
        border-radius: 100%;
        transform: rotate(45deg);
        z-index: -10;
    }
}

.j:last-child {
    left: 10px;
    top: 10px;
    background: #fe2d52;
    z-index: 100;
    mix-blend-mode: lighten;
    animation: moveLeft 10s infinite;
    
    &::before {
        border: 47px solid #fe2d52;
        border-top: 47px solid transparent;

    }
    &::after {
        border: 40px solid #fe2d52;
        border-right: 40px solid transparent;
        border-top: 40px solid transparent;
        border-left: 40px solid transparent;
    }
}

@keyframes moveLeft {
    0% {
        transform: translate(200px);
    }
    50% {
        transform: translate(0px);
    }
    100% {
        transform: translate(0px);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='450' scrolling='no' title='使用 mix-blend-mode 实现抖音 LOGO' src='//codepen.io/Chokcoco/embed/oQxQyw/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/oQxQyw/'>使用 mix-blend-mode 实现抖音 LOGO</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>