## 利用 CSS @property 探寻渐变的极限效果

利用 CSS @property 探寻渐变的极限效果

### 关键点

利用了 CSS @property，不了解的可以猛击本文：[CSS @property，让不可能变可能](https://juejin.cn/post/6951201528543707150)

### 线性渐变

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
}

@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}

body {
    background: repeating-linear-gradient(45deg, deeppink, #fc0, #000, red, green, gray var(--per));
    animation: perChange 60s infinite linear;
    cursor: pointer;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes perChange {
    5% {
        --per: 1%;
    }
    10% {
        --per: .1%;
    }
    30% {
        --per: .01%;
    }
    50% {
        --per: .001%;
    }
    70% {
        --per: .0001%;
    }
    78% {
        --per: .00001%;
    }
    90% {
        --per: .000001%;
    }
    95%,
    100% {
        --per: .0000001%;
    }
}
```

效果如下（鼠标悬停，可以暂停动画）：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Property Animation - LinearGradient" src="https://codepen.io/Chokcoco/embed/qBjbZye?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/qBjbZye">
  CSS Property Animation - LinearGradient</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 径向渐变

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
}

@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}

body {
    background: repeating-radial-gradient(deeppink, #fc0, #000, red, green, gray var(--per));
    animation: perChange 25s infinite linear;
    cursor: pointer;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes perChange {
    5% {
        --per: 1%;
    }
    10% {
        --per: .1%;
    }
    30% {
        --per: .01%;
    }
    50% {
        --per: .001%;
    }
    70% {
        --per: .0001%;
    }
    78% {
        --per: .00001%;
    }
    90% {
        --per: .000001%;
    }
    95%,
    100% {
        --per: .0000001%;
    }
}
```

效果如下（鼠标悬停，可以暂停动画）：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Property Animation - RadialGradient" src="https://codepen.io/Chokcoco/embed/BaZjKwQ?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/BaZjKwQ">
  CSS Property Animation - RadialGradient</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 角向渐变

CSS：
```CSS
html, body {
    width: 100%;
    height: 100%;
}

@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 100%;
}

body {
    background: repeating-conic-gradient(deeppink, #fc0, #000, red, green, gray var(--per));
    animation: perChange 25s infinite linear;
    cursor: pointer;

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes perChange {
    5% {
        --per: 1%;
    }
    10% {
        --per: .1%;
    }
    30% {
        --per: .01%;
    }
    50% {
        --per: .001%;
    }
    70% {
        --per: .0001%;
    }
    78% {
        --per: .00001%;
    }
    90% {
        --per: .000001%;
    }
    95%,
    100% {
        --per: .0000001%;
    }
}
```

效果如下（鼠标悬停，可以暂停动画）：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Property Animation - ConicGradient" src="https://codepen.io/Chokcoco/embed/PojZNab?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/PojZNab">
  CSS Property Animation - ConicGradient</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>