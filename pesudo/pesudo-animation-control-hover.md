## 伪元素 hover 实现纯 CSS 方式控制动画的暂停与播放

伪元素 `:hover` 实现纯 CSS 方式控制动画的暂停与播放。

### 关键点

+ 使用 hover 伪类，在鼠标悬停在按钮上面时，控制动画样式的暂停
+ 使用了 `~` 选择符对样式进行控制

### 相关文章

[纯 CSS 方式实现 CSS 动画的暂停与播放](https://github.com/chokcoco/iCSS/issues/12)

HTML：

```html
<div class="btn stop">stop</div>
<div class="animation"></div>
```

SCSS：
```scss
.animation {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    background: deeppink;
    animation: move 2s linear infinite alternate;
}

input {
    display: none;
}

@keyframes move {
    0% {
        transform: translate(-100px, 0);
    }
    100% {
        transform: translate(100px, 0);
    }
}

.btn {
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border:1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    
    &:hover {
        background: #ddd;
        color: #333;
    }
    
    &:active {
        background: #aaa;
    }
}

.stop:hover ~ .animation {
    animation-play-state: paused;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='纯 CSS 方式实现 CSS 动画的暂停与播放 (Hover) ' src='//codepen.io/Chokcoco/embed/PpxKBX/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/PpxKBX/'>纯 CSS 方式实现 CSS 动画的暂停与播放 (Hover) </a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>