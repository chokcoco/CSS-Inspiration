## 立体投影

CSS 实现立体投影。

### 关键点

+ 立体投影的关键点在于利于伪元素生成一个大小与父元素相近的元素，然后对其进行 rotate 以及定位到合适位置，再赋于阴影操作。
+ 颜色的运用也很重要，阴影的颜色通常比本身颜色要更深，这里使用 hsl 表示颜色更容易操作，l 控制颜色的明暗度。

HTML：

```html
<div class="g-left"></div>
<div class="g-both"></div>
<div class="g-slide"></div>
```

SCSS：
```scss
div {
    position: relative;
    width: 600px;
    height: 100px;
    margin: 5vmin auto 15vmin;
    background: hsl(48, 100%, 50%);
    border-radius: 20px;
    box-shadow: 0 0 5px 2px hsl(48, 100%, 45%);
}

.g-left::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 0;
    border-radius: 10px;
    background: hsl(48, 100%, 20%);
    transform: translate(0, -15%) rotate(-4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(48, 100%, 20%);
    z-index: -1;
}

.g-both {
    background: hsl(199, 98%, 48%);
    box-shadow: 0 0 5px 2px hsl(199, 98%, 40%);
}

.g-both::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    border-radius: 10px;
    background: hsl(199, 98%, 20%);
    transform: translate(0, -20%) rotate(-4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
    z-index: -1;
}

.g-both::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 5%;
    right: 5%;
    bottom: 15%;
    border-radius: 10px;
    background: hsl(199, 98%, 20%);
    transform: translate(0, -20%) rotate(4deg);
    transform-origin: center center;
    box-shadow: 0 0 20px 15px hsl(199, 98%, 20%);
    z-index: -1;
}

.g-slide {
    background: hsl(150, 62%, 52%);
    box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);
}

.g-slide::before {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 90%;
    right: 5%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(105%, 10%) rotate(15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
}

.g-slide::after {
    content: "";
    position: absolute;
    top: 15%;
    bottom: 20%;
    left: 5%;
    right: 90%;
    border-radius: 10px;
    background: hsl(150, 62%, 20%);
    transform: translate(-105%, 10%) rotate(-15deg);
    transform-origin: center center;
    box-shadow: 0 0 10px 7px hsl(150, 62%, 20%);
    z-index: -1;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='立体投影' src='//codepen.io/Chokcoco/embed/LgdRKE/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/LgdRKE/'>立体投影</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>