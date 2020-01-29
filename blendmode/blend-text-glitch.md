## 类抖音 LOGO 文字故障效果

使用 mix-blend-mode 实现类抖音 LOGO 文字故障效果。

CSS3 新增了一个很有意思的属性 -- `mix-blend-mode` ，其中 mix 和 blend 的中文意译均为混合，那么这个属性的作用直译过来就是混合混合模式，当然，我们我们通常称之为混合模式。

混合模式最常见于 photoshop 中，是 PS 中十分强大的功能之一。当然，瞎用乱用混合模式谁都会，利用混合模式将多个图层混合得到一个新的效果，只是要用到恰到好处，或者说在 CSS 中利用混合模式制作出一些效果则需要对混合模式很深的理解及不断的尝试。

### 关键点

+ 利用 `mix-blend-mode: lighten` 混合模式实现两段文字结构重叠部分为白色
+ 利用元素位移完成错位移动动画，形成视觉上的冲击效果

HTML：

```html
<div class="text-magic" data-word="CSSTextGlitch">
    <div class="white"></div>
</div>
```

SCSS：
```scss
.text-magic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(3);
    width: 300px;
    font-size: 36px;
    font-family: Raleway, Verdana, Arial;
    color: transparent;
}
.white {
    position: absolute;
    left: -10px;
    width: 100%;
    height: 1px;
    background: #000;
    z-index: 4;
    animation: whiteMove 10s ease-out infinite;
}

.text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
    height: 36px;
    color: red;
    overflow: hidden;
    z-index: 2;
    filter: contrast(200%);
    text-shadow: 1px 0 0 red;
    animation: move 0.95s infinite;
}

.text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -1px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    color: cyan;
    filter: contrast(200%);
    text-shadow: -1px 0 0 cyan;
    mix-blend-mode: lighten;
    animation: move 1.1s infinite 0.2s;
}

@keyframes whiteMove {
    9% {
        top: 38px;
    }
    14% {
        top: 8px;
    }
    18% {
        top: 42px;
    }
    22% {
        top: 1px;
    }
    32% {
        top: 32px;
    }
    34% {
        top: 12px;
    }
    40% {
        top: 26px;
    }
    43% {
        top: 7px;
    }
    99% {
        top: 30px;
    }
}

@keyframes move {
    10% {
        top: -0.4px;
        left: -1.1px;
    }
    20% {
        top: 0.4px;
        left: -0.2px;
    }
    30% {
        left: .5px;
    }
    40% {
        top: -0.3px;
        left: -0.7px;
    }
    50% {
        left: 0.2px;
    }
    60% {
        top: 1.8px;
        left: -1.2px;
    }
    70% {
        top: -1px;
        left: 0.1px;
    }
    80% {
        top: -0.4px;
        left: -0.9px;
    }
    90% {
        left: 1.2px;
    }
    100% {
        left: -1.2px;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height="350" style="width: 100%;" scrolling="no" title="类抖音LOGO文字故障效果" src="https://codepen.io/Chokcoco/embed/KKwLaOV?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/KKwLaOV'>类抖音LOGO文字故障效果</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>