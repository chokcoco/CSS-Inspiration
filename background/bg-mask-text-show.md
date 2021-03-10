## mask-image 实现文字的渐现

使用 `mask` 实现文字的渐现效果。

### 关键点

使用 mask 最重要结论就是：**添加了 mask 属性的元素，其内容会与 mask 表示的渐变的 transparent 的重叠部分，并且重叠部分将会变得透明**。

详细的可以看看这篇文章：[奇思妙想 CSS 文字动画](https://github.com/chokcoco/iCSS/issues/101)

HTML：

```html
<p>Hello Mask</p>
<p class="radial">Hello Mask</p>
```

SCSS：
```scss
p {
    margin: auto;
    font-family: "Reggae One", cursive;
    font-size: 48px;
    color: #fff;
    mask: radial-gradient(
        circle at 0 50%,
        #000,
        transparent 10%,
        transparent 0
    );
    mask-size: 100%;
    animation: scale 5s infinite;
}
.radial {
    mask: radial-gradient(
        circle at 50% 0,
        #000,
        transparent 20%,
        transparent 0
    );
    mask-size: 100% 100%;
    animation: scale2 5s infinite;
}
@keyframes scale {
    50%,
    100% {
        mask-size: 2000%;
    }
}
@keyframes scale2 {
    50%,
    100% {
        mask-size: 100% 2000%;
    }
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="MASK Text Effect" src="https://codepen.io/Chokcoco/embed/OJbxZLM?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/OJbxZLM'>MASK Text Effect</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>