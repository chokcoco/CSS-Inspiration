## 使用 filter:blur | filter:constrast 生成火焰效果

使用 filter:blur | filter:constrast 生成火焰效果。

### 关键点 

本例子中两个单独的滤镜拿出来，它们的作用分别是：

+ filter: blur()： 给图像设置高斯模糊效果。
+ filter: contrast()： 调整图像的对比度。

但是，当他们“合体”的时候，产生了奇妙的融合现象，通过对比度滤镜把高斯模糊的模糊边缘给干掉，利用高斯模糊实现融合效果。

----

先来看看火焰的核心代码：

```css
.fire {
    width: 0;
    height: 0;
    border-radius: 45%;
    box-sizing: border-box;
    border: 100px solid #000;
    border-bottom: 100pxsolid transparent;
    background-color: #b5932f;
    transform: scaleX(.4);
    filter: blur(20px) contrast(30);
}
```

分解一下过程：

![](https://user-images.githubusercontent.com/8554143/30368522-f746afba-98a3-11e7-93b8-92e2e2c1c622.png)

接下来，我们只需要在火焰 .fire 这个 div 内部，用大量的黑色圆形，由下至上，无规律穿过火焰即可。由于滤镜的融合效果，火焰效果随之产生。

这里为了方便理解，我把背景色切换成白色，火焰动画原理一看即懂：

![](https://user-images.githubusercontent.com/8554143/30369622-bc2b3e6a-98a7-11e7-9422-170d6151c46c.gif)

-----

HTML：

```pug
// pug 模版
.g-container
    .g-fire
        - for (var j = 1; j <=40; j++)
            .g-dot
```

SCSS：
```scss
$douCount: 40;
$animationTime: 2;
$delayTime: 3;

@function randomNum($max, $min: 0) {
	@return ($min + random($max));
}

body {
    background: #000;
    overflow: hidden;
}

:root {
    --fireWidth: 115px;
    --fireHeight: 200px;
    --dotSize: 24px;
    --fireColor: #b5932f;
    // --fireColor: #008eff;
    // --fireColor: #ff9900;
    
}

.g-container {
    position: relative;
    width: 384px;
    height: 300px;
    margin: 0 auto;
    background-color: #000;
}

.g-fire {
    position: absolute;
    width: 0;
    height: 0;
    bottom: 100px;
    left: 50%;
    border-radius: 45%;
    box-sizing: border-box;
    border: 200px solid #000;
    border-bottom: 200px solid transparent;
    transform: translate(-50%, 0) scaleX(.4);
    background-color: var(--fireColor);
    filter: blur(20px) contrast(30);
}

.g-dot {
    position: absolute;
    bottom: -210px;
    left: 0;
    width: var(--dotSize);
    height: var(--dotSize);
    background: #000;
    border-radius: 50%;
}

@for $i from 1 to $douCount + 1 {
    .g-dot:nth-child(#{$i}) {
        bottom: -#{randomNum(120, 240)}px;
        left: #{randomNum(300, -160)}px;
        animation: move #{randomNum($animationTime * 13, 7) / 10}s infinite #{randomNum($delayTime * 20) / 10}s linear;
    }
}

@keyframes move {
    100% {
        transform: translate3d(0, -350px, 0);
    }
}
```

效果如下（点击 `Pug/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='CSS fire| CSS filter mix' src='//codepen.io/Chokcoco/embed/GvbMmE/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/GvbMmE/'>CSS fire| CSS filter mix</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>