## 单侧投影

CSS 实现单侧投影。

### 关键点

+ 外 box-shadow 前四个参数：x 偏移值、y 偏移值 、模糊半径、扩张半径。
+ 单侧投影的核心是第四个参数：扩张半径。这个参数会根据你指定的值去扩大或缩小投影尺寸，如果我们用一个负的扩张半径，而他的值刚好等于模糊半径，那么投影的尺寸就会与投影所属的元素尺寸完全一致，除非使用偏移量来移动他，否则我们将看不到任何投影。

HTML：

```html
<div class='left'>左</div>
<div class='right'>右</div>
<div class='top'>上</div>
<div class='bottom'>下</div>
```

SCSS：
```scss

.left {
    box-shadow: -7px 0 5px -5px #333;
}

.right {
    box-shadow: 7px 0 5px -5px #333;
}

.top {
    box-shadow: 0 -7px 5px -5px #333;
}

.bottom {
    box-shadow: 0 7px 5px -5px #333;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='css单侧投影' src='//codepen.io/Chokcoco/embed/pergRb/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/pergRb/'>css单侧投影</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>