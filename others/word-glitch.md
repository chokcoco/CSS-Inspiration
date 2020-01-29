## CSS文字故障效果

CSS文字故障效果。

### 关键点

+ 利用了伪元素生成了文字的两个副本
+ 视觉效果由位移、遮罩、混合模式完成
+ 配色借鉴了抖音 LOGO 的风格

详细信息可以看我的这篇文章：

[CSS 故障艺术](https://github.com/chokcoco/iCSS/issues/78)


HTML：

```HTML
<div class="text-magic" data-word="CSSTextMagic">
    CSSTextMagic
    <div class="white"></div>
</div>
```

SCSS：
```scss
.text-magic {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2.4);
    width: 300px;
    font-size: 36px;
    font-family: Raleway, Verdana, Arial;
    color: #fff;
}
.white {
    position: absolute;
    left: -10px;
    width: 100%;
    height: 3px;
    background: #000;
    z-index: 4;
    animation: whiteMove 3s ease-out infinite;
}

.text-magic::before {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0.5px;
    height: 0px;
    color: rgba(255, 255, 255, 0.9);
    overflow: hidden;
    z-index: 2;
    animation: redShadow 1s ease-in infinite;
    filter: contrast(200%);
    text-shadow: 1px 0 0 red;
}

.text-magic::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: -3px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
    overflow: hidden;
    z-index: 3;
    background: rgba(0, 0, 0, 0.9);
    animation: redHeight 1.5s ease-out infinite;
    filter: contrast(200%);
    text-shadow: -1px 0 0 cyan;
    mix-blend-mode: darken;
}

@keyframes redShadow {
    20% {
        height: 32px;
    }
    60% {
        height: 6px;
    }
    100% {
        height: 42px;
    }
}

@keyframes redHeight {
    20% {
        height: 42px;
    }
    35% {
        height: 12px;
    }
    50% {
        height: 40px;
    }
    60% {
        height: 20px;
    }
    70% {
        height: 34px;
    }
    80% {
        height: 22px;
    }
    100% {
        height: 0px;
    }
}

@keyframes whiteMove {
    8% {
        top: 38px;
    }
    14% {
        top: 8px;
    }
    20% {
        top: 42px;
    }
    32% {
        top: 2px;
    }
    99% {
        top: 30px;
    }
}
```

效果如下（右下角 rerun 可以重复播放动画）：

<iframe height="350" style="width: 100%;" scrolling="no" title="CSS文字故障效果" src="https://codepen.io/Chokcoco/embed/EMxGXV?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/EMxGXV'>CSS文字故障效果</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>