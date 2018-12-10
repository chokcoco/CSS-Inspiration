## 伪元素 checked 实现纯 CSS 方式控制动画的暂停与播放

伪元素 `:checked` 实现纯 CSS 方式控制动画的暂停与播放。

### 关键点

+ 使用 radio 标签的 `:checked` 伪类，加上 `<label for>` 实现纯 CSS 捕获点击事情
+ 使用了 `~` 选择符对样式进行控制

### 相关文章

[纯 CSS 方式实现 CSS 动画的暂停与播放](https://github.com/chokcoco/iCSS/issues/12)

HTML：

```html
<input id="stop" type="radio" name="playAnimation"/>
<input id="play" type="radio" name="playAnimation"/>

<div class="box">
    <label for="stop">
        <div class="btn">stop</div>
    </label>
    <label for="play">
        <div class="btn">play</div>
    </label>
</div>

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

#stop:checked ~ .animation {
    animation-play-state: paused;
}

#play:checked ~ .animation {
    animation-play-state: running;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='纯 CSS 方式实现 CSS 动画的暂停与播放' src='//codepen.io/Chokcoco/embed/QpJwBW/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/QpJwBW/'>纯 CSS 方式实现 CSS 动画的暂停与播放</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>