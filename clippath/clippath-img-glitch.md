## clip-path 实现图片的故障艺术风格动画

clip-path 实现图片的故障艺术风格动画。

### clip-path

一个非常有意思的 CSS 属性。

`clip-path` CSS 属性可以创建一个只有元素的部分区域可以显示的剪切区域。区域内的部分显示，区域外的隐藏。剪切区域是被引用内嵌的URL定义的路径或者外部 SVG 的路径。

[MDN - clip-path](https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path)

### 关键点

+ 使用元素的伪元素复制两份图片副本，再使用 clip-path 对图片进行裁剪并且添加位移、变形、滤镜等等。
+ 动画部分代码太多了，有一半使用了 SASS 的循环函数随机生成

HTML：

```HTML
<div></div>
```

SCSS：
```scss
$img: "xxx";

@function randomNum($max, $min: 0, $u: 1) {
    @return ($min + random($max)) * $u;
}

div {
    position: relative;
    width: 658px;
    height: 370px;
    margin: auto;
    background: url($img) no-repeat;
    animation: main-img-hide 20s infinite step-end;
}

div::before,
div::after {
    position: absolute;
    width: 658px;
    height: 370px;
    top: 0;
    left: 0;
    background: inherit;
}

div::after {
    content: "";
    animation: glitch-one 20s infinite step-end;
}

div::before {
    content: "";
    animation: glitch-two 20s infinite 1s step-end;
}

@keyframes glitch-one {
    @for $i from 20 to 30 {
        #{$i / 2}% {
            left: #{randomNum(200, -100)}px;
            clip-path: inset(#{randomNum(150, 30)}px 0 #{randomNum(150, 30)}px);
        }
    }

    15.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }
    16% {
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
    }
    45% {
        opacity: 0.5;
        left: -20px;
        filter: hue-rotate(90deg) saturate(1.3);
    }
    45.5% {
        left: 0px;
        filter: invert(1);
    }

    46% {
        clip-path: inset(150px 0 160px);
        left: 15%;
    }
    46.5% {
        clip-path: inset(20px 0 200px);
        left: -10%;
        transform: scale(1.1);
    }
    47% {
        clip-path: inset(240px 0 20px);
        left: -11%;
        transform: scale(1.2);
    }
    47.5% {
        clip-path: inset(20 0 20px);
        left: 13%;
        transform: scale(1.3);
        filter: invert(0);
    }
    48% {
        clip-path: inset(120 0 120px);
        left: 15%;
        transform: scale(1.1);
    }
    48.5% {
        clip-path: inset(260px 0 10px);
        left: -11%;
        transform: scale(1.2);
        filter: none;
    }
    49% {
        clip-path: inset(5px 0 350px);
        left: 11%;
        transform: scale(1.3);
    }
    49.5% {
        clip-path: inset(105px 0 210px);
        left: 0%;
        transform: scale(1.1);
    }
    50% {
        clip-path: inset(175px 0 160px);
        left: -11%;
    }
    50.5% {
        clip-path: inset(95px 0 230px);
        left: -14%;
        transform: scale(1.2);
    }
    51% {
        clip-path: inset(235px 0 12px);
        left: -14%;
    }
    51.5% {
        clip-path: inset(350px 0 7px);
        left: -14%;
    }
    52% {
        clip-path: inset(320px 0 27px);
        left: -12%;
        transform: scale(1.1);
    }
    52.5% {
        clip-path: inset(190px 0 127px);
        left: -11%;
        transform: scale(1.3);
        filter: hue-rotate(90deg) saturate(1.3);
    }
    54% {
        clip-path: inset(20px 0 20px);
        left: 12%;
        transform: scale(1.1);
        filter: none;
    }
    54% {
        background-image: none;
    }
}

@keyframes glitch-two {
    @for $i from 40 to 50 {
        #{$i / 2}% {
            left: #{randomNum(200, -100)}px;
            clip-path: inset(#{randomNum(180)}px 0 #{randomNum(180)}px);
        }
    }

    25.5% {
        clip-path: inset(10px 0 320px);
        left: -20px;
    }
    26% {
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
    }
    45% {
        opacity: 0.3;
        left: -20px;
        filter: hue-rotate(45deg) saturate(1.1);
    }
    45.5% {
        left: 0px;
        filter: invert(1.2);
    }

    46% {
        clip-path: inset(50px 0 260px);
        left: -12%;
    }
    46.5% {
        clip-path: inset(120px 0 100px);
        left: 8%;
        transform: scale(1.2);
    }
    47% {
        clip-path: inset(40px 0 300px);
        left: 8%;
        transform: scale(1.3);
    }
    47.5% {
        clip-path: inset(220 0 70px);
        left: -9%;
        transform: scale(1.1);
        filter: invert(1.1);
    }
    48% {
        clip-path: inset(240px 0 120px);
        left: 11%;
        transform: scale(1.2);
    }
    48.5% {
        clip-path: inset(0px 0 310px);
        left: -12%;
        transform: scale(1.2);
        filter: none;
    }
    49% {
        clip-path: inset(255px 0 50px);
        left: 11%;
        transform: scale(1.3);
    }
    49.5% {
        clip-path: inset(10px 0 240px);
        left: 6%;
        transform: scale(1.1);
    }
    50% {
        clip-path: inset(275px 0 90px);
        left: -12%;
    }
    50.5% {
        clip-path: inset(195px 0 90px);
        left: 14%;
        transform: scale(1.4);
    }
    51% {
        clip-path: inset(35px 0 282px);
        left: -14%;
    }
    51.5% {
        clip-path: inset(350px 0 7px);
        left: 14%;
    }
    52% {
        clip-path: inset(20px 0 270px);
        left: -12%;
        transform: scale(1.1);
    }
    52.5% {
        clip-path: inset(90px 0 227px);
        left: -11%;
        transform: scale(1.3);
        filter: hue-rotate(150deg) saturate(1.3);
    }
    54% {
        clip-path: inset(220px 0 100px);
        left: 12%;
        transform: scale(1.1);
        filter: none;
    }
    54% {
        background-image: none;
    }
}

@keyframes main-img-hide {
    5% {
        filter: invert(1);
    }
    5.2% {
        filter: none;
    }
    10% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    11% {
        filter: none;
        opacity: 1;
    }
    45% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    46% {
        filter: none;
        opacity: 1;
    }
    53.5% {
        opacity: 0.5;
        filter: grayscale(1);
    }
    54% {
        filter: none;
        opacity: 1;
    }
    54.5% {
        opacity: 0.5;
        filter: hue-rotate(30deg);
    }
    55% {
        filter: none;
    }
    55.5% {
        background-image: none;
        filter: none;
        opacity: 1;
    }
    56% {
        background-image: url($img);
        opacity: 0.5;
    }
    56.5% {
        background-image: none;
    }
    57% {
        background-image: url($img);
        opacity: 0.8;
    }
    57.5% {
        opacity: 0.3;
    }
    58% {
        background-image: none;
    }
}
```

效果如下：

<iframe height="500" style="width: 100%;" scrolling="no" title="Clip-path 的 Glitch Art" src="https://codepen.io/Chokcoco/embed/eYmaoNg?height=500&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/eYmaoNg'>Clip-path 的 Glitch Art</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>