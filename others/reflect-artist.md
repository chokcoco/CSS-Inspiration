## 利用 box-reflect 实现艺术图形

[`-webkit-box-reflect`](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-box-reflect) 是一个非常有意思的属性，它让 CSS 有能力像镜子一样，反射我们元素原本绘制的内容。

### 核心点

利用了 `-webkit-box-reflect` 实现多层倒影的嵌套。

详细信息可以看我的这篇文章：

[巧用 -webkit-box-reflect 倒影实现各类动效](https://github.com/chokcoco/iCSS/issues/100)


HTML：

```HTML
<div class="g-wrap1 line3">
    <div class="g-wrap2">
        <div class="g-wrap3">
            <div class="g-wrap4"></div>
        </div>
    </div>
</div>
```

SCSS：
```scss
.g-wrap4 {
    width: 50px;
    height: 50px;
    background: linear-gradient(45deg, #000 10%, transparent 10%, transparent 30%, #000 30%, #000 50%, transparent 50%,  transparent 70%, #000 70%, #000 90%, transparent 0);
}

.radial {
    .g-wrap4 {
        width: 50px;
        height: 50px;
        background: radial-gradient(circle at 0 0, #000 30%, transparent 30%, transparent 40%, #000 40%, #000 50%, transparent 50%), radial-gradient(circle at 100% 100%, #000 10%, transparent 10%, transparent 30%, #000 30%, #000 40%, transparent 40%);
    }
}

.g-wrap4 {
    -webkit-box-reflect: right 0px;
}
.g-wrap3 {
    -webkit-box-reflect: below 0px;
}
.g-wrap2 {
    -webkit-box-reflect: left 0px;
}
.g-wrap1 {
    -webkit-box-reflect: above 0px;
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="-webkit-box-reflect artist" src="https://codepen.io/Chokcoco/embed/vYyyYQj?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/vYyyYQj'>-webkit-box-reflect artist</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>