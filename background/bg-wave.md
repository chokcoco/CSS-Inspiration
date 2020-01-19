## 使用渐变实现波浪效果/波浪进度框

使用渐变实现波浪效果/波浪进度框。

### 关键点

+ 利用多重线性渐变及单个元素可以设置多层渐变叠加实现


HTML：

```html
<div class="wave"></div>
```

SCSS：
```scss
.wave {
    width: 20vmax;
    height: 20vmax;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #0092d4;
    background: linear-gradient(0deg, #0092d4 0%, #6bcefb 50%, transparent 50%);
    border-radius: 50%;
    z-index: 1;
    overflow: hidden;
    cursor: pointer;
}

.wave::before,
.wave::after {
    content: "";
    position: absolute;
    transform: scaleX(1.3);
}

.wave::after {
    top: 50%;
    left: 0;
    right: 0;
    background-repeat: repeat-x;
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(
        circle at 10px 15px,
        transparent 12px,
        #fff 13px,
        #fff 20px
    );
}

.wave::before {
    top: 50%;
    left: 0;
    right: 0;
    background-repeat: repeat-x;
    height: 15px;
    background-size: 40px 20px;
    background-image: radial-gradient(
        circle at 10px 0px,
        #fff 12px,
        transparent 13px
    );
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='400' scrolling='no' title='使用渐变实现波浪效果' src='//codepen.io/Chokcoco/embed/VVNVJw/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/VVNVJw/'>使用渐变实现波浪效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>