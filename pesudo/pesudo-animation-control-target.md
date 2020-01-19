## 伪元素 target 实现纯 CSS 方式控制动画的暂停与播放

伪元素 `:target` 实现纯 CSS 方式控制动画的暂停与播放。

### 关键点

+ 如何接收点击事件：本例子最重要的核心便是使用 `:target` 伪类接收点击事件
+ 如何操作相关DOM：通过兄弟选择符 `~` 控制样式

### 相关文章

[纯CSS的导航栏Tab切换方案](http://www.cnblogs.com/coco1s/p/5955631.html)

HTML：

```html
<div id="stop"></div>
<div id="play"></div>

<div class="box">
    <a class="btn" href="#stop">stop</a>
    <a class="btn" href="#play">play</a>
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
    display: block;
    width: 50px;
    margin: 10px auto;
    text-align: center;
    border:1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    text-decoration: none;
    
    a {
        display: block;
        width: 100%;
        height: 100%;
    }
    
    &:hover {
        background: #ddd;
        color: #333;
    }
    
    &:active {
        background: #aaa;
    }
}

#stop:target ~ .animation {
    animation-play-state: paused;
}

#play:target ~ .animation {
    animation-play-state: running;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='纯 CSS 方式实现 CSS 动画的暂停与播放（:target）' src='//codepen.io/Chokcoco/embed/Jwjmdm/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/Jwjmdm/'>纯 CSS 方式实现 CSS 动画的暂停与播放（:target）</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>