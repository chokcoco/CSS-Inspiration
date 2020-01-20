## 使用text-decoration实现波浪效果

使用text-decoration实现波浪效果。

### text-decoration

一个非常有意思的 CSS 属性。

`text-decoration` 这个 CSS 属性是用于设置文本的修饰线外观的（下划线、上划线、贯穿线/删除线 或 闪烁）。

并且在 [CSS Text Decoration Module Level 3](https://drafts.csswg.org/css-text-decor-3/#text-decoration-property) 新增了波浪线。

### 关键点

使用 `text-decoration-style: wavy` 生成波浪下划线。

### 缺点

缺点在于由于是文本，使用 `text-decoration-style: wavy` 生成的波浪线受字体的影响很大，极有可能在一部分设备调试正常，在另一部设备由于字体的变化导致譬如动画首尾衔接出现问题。

HTML：

```HTML
<div >ABCDEFGHIJKLMNOPQ</div>
<div class="wave">ABCDEFGHIJKLMNOPQ</div>

```

SCSS：
```scss
div {
    width : 200px;
    height: 200px;
    line-height: 200px;
    font-size: 50px;
    margin: auto;
    text-align: center;
    overflow: hidden;
}

.wave {
    border: 5px solid deeppink;
    border-radius: 50%;
    animation: indent 5s infinite linear;
}

div {
    color: transparent;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: deeppink;
}

@keyframes indent {
    100% {
        text-indent: -110px;
    }
}
```

效果如下（点击 `PUG/SCSS` 可以对代码进行编辑）：

<iframe height="350" style="width: 100%;" scrolling="no" title="下划线实现波浪" src="https://codepen.io/Chokcoco/embed/YMWavM?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/YMWavM'>下划线实现波浪</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>