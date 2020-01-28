## 使用 clip-path 和 border-image 实现圆角渐变边框

使用 clip-path 和 border-image 实现圆角渐变边框。

### border-image

`border-image` 是 CSS 规范 [CSS Backgrounds and Borders Module Level 3](https://drafts.csswg.org/css-backgrounds-3/#border-images) (最新一版的关于 background 和 border 的官方规范) 新增的一个属性值。

[border-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-image) 

### clip-path

一个非常有意思的 CSS 属性。

`clip-path` CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部 SVG 的路径。

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### 关键点


因为使用了 clip-path 裁剪后的元素，只有元素的剪切区域才能被显示，所以我们可以通过 `clip-path: inset()` 裁剪出带圆角的矩形元素。

HTML：

```HTML
<div class="border-image-clip-path"></div>
```

SCSS：
```scss

.border-image-clip-path {
    width: 200px;
    height: 100px;
    margin: auto;
    border: 10px solid;
    border-image: linear-gradient(45deg, gold, deeppink) 1;
    clip-path: inset(0px round 10px);
    animation: huerotate 6s infinite linear;
    filter: hue-rotate(360deg);
}

@keyframes huerotate {
    0% {
        filter: hue-rotate(0deg);
    }
    100% {
        filter: hue-rorate(360deg);
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="使用 clip-path 和 border-image 实现圆角渐变边框" src="https://codepen.io/Chokcoco/embed/povBORP?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/povBORP'>使用 clip-path 和 border-image 实现圆角渐变边框</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>