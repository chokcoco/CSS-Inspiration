## 利用动画延迟实现波浪动画

利用动画延迟实现的波浪效果。

### 关键点

给每个子元素设定一个高度变化的动画，同时按顺序给每个元素设定一个不同时间的负延迟即可，就可以得到一个简单的波浪效果。

关于本效果的详情，你可以查看这篇文章：[一种巧妙的使用 CSS 制作波浪效果的思路](https://github.com/chokcoco/iCSS/issues/112)

HTML（使用了 Pug 模板引擎）：

```Pug
div.g-container
 -for(var i=0; i<24; i++)
    div.g-item
```

SCSS：
```scss
html,
body {
    width: 100%;
    height: 100%;
    display: flex;
    background: #fff;
}

$count: 24;
$speed: 1s;

:root {
    --angle: 15deg;
}

.g-container {
    position: relative;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: flex-end;
    border-radius: 50%;
    border: 2px solid #000;
    overflow: hidden;
    flex-shrink: 0;
    margin: auto;
}

.rect {
    border-radius: 0;
}

.g-item {
    --f: #{$speed / -24};
    --h: 50px;
    flex-grow: 1;
    background-color: #000;
    animation: heightChange $speed infinite ease-in-out alternate;
}

.g-container .g-item {
    animation: heightChange $speed infinite ease-in-out alternate,
        skewChange $speed infinite ease-in-out alternate;
}

@for $i from 0 to $count {
    .g-container {
        .g-item:nth-child(#{$i + 1}) {
            animation-delay: calc(var(--f) * #{$i}),
                calc(var(--f) * #{$i} - #{$speed / 2});
        }
    }
}

@keyframes heightChange {
    from {
        height: var(--h);
    }
    to {
        height: calc(var(--h) + 30px);
    }
}

@keyframes skewChange {
    from {
        transform: scale(1.2) translate3d(0, 10px, 0) skewY(calc(var(--angle) * 1));
    }
    to {
        transform: scale(1.2) translate3d(0, 10px, 0) skewY(calc(var(--angle) * -1));
    }
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="PureCSS Wave Effects" src="https://codepen.io/Chokcoco/embed/KKmJabd?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/KKmJabd">
  PureCSS Wave Effects</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>