## 利用 resize 实现图片切换预览功能

利用 resize 实现图片切换预览功能 。

### 关键点

+ CSS `resize` 属性允许你控制一个元素的可调整大小性
+ 配合 `resize` 实现子元素的动态宽度

HTML：

```
<h1>PURE CSS SWITCH PIUTURE</h1>
<div class='picA'>
    <div class='picB'>
        <textarea readonly class='resizeElement'></textarea>
    </div>
</div>
```

SCSS：
```scss
html {
    background: #ddd;
    height: 100%;
    width: 100%;
}
.picA {
    background-image: url(https://2.bp.blogspot.com/-v3a3glbYRA8/UnqwXdlbwvI/AAAAAAAAHug/gNE9IhI2WSI/s1600/primavera-2.jpg);
    width: 800px;
    height: 470px;
    border: 20px solid #f0e5ab;
    border-radius: 3px;
    box-shadow: 0 0 1px #999, -2px 2px 3px rgba(0, 0, 0, 0.2);
    padding: 0;
    margin: 1rem auto;
    position: relative;
    overflow: hidden;
}

.picB {
    background-image: url(https://1.bp.blogspot.com/-W4DXI0ORnZg/UnqwWvUkTmI/AAAAAAAAHuY/vEsWcZBOCcI/s1600/oto%C3%B1o.jpg);
    height: 470px;
/*     resize: horizontal; */
    position: absolute;
    top: 0;
    left: 0;
    min-width: 0;
    max-width: 800px;
    box-sizing: border-box;
}
.picB:before {
    content: "↔";
    background: rgba(0, 0, 0, 0.7);
    font-size: 18px;
    color: white;
    top: 0;
    right: 0px;
    height: 100%;
    line-height: 486px;
    position: absolute;
}

.resizeElement {
    resize: horizontal;
    opacity: 0;
    position: relative;
    top: 50%;
    left: 0px;
    margin-right: 0px;
    width: 0px;
    height: 15px;
    max-width: 794px;
    min-width: 15px;
    outline: 0 solid transparent;
    cursor: move;
    transform: scaleY(35);
    transform-origin: center center;
/*     animation: delta 5s 1 normal ease-in-out 1s; */
}
@keyframes delta {
    30% {
        width: 500px;
    }
    60% {
        width: 150px;
    }
    80% {
        width: 250px;
    }
}
```

效果如下：

<iframe height="650" style="width: 100%;" scrolling="no" title="Image Swapping ↔ pure Css" src="https://codepen.io/Chokcoco/embed/bGqWJZL?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/bGqWJZL">
  Image Swapping ↔ pure Css</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>