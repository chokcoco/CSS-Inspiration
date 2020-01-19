## 使用渐变实现舞台灯光聚焦效果

使用渐变实现舞台灯光聚焦效果。

### 关键点

+ 利用径向渐变生成一个从透明到黑色蒙板的占据整个屏幕的渐变
+ 为了让中心聚焦处可移动动画，整个渐变的容器需要比屏幕更大


HTML：

```html
<div class="radial-circle"></div>
```

SCSS：
```scss
$img: 'https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=';

html,
body {
    width: 100%;
    height: 100%;
    background-image: url($img);
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
}

.radial-circle {
    position: absolute;
    top: -100%;
    left: -100%;
    right: -100%;
    bottom: -100%;
    background: radial-gradient(circle at 50% 50%, transparent 0%, transparent 3%, rgba(0, 0, 0, .7) 3.5%, rgba(0, 0, 0, .8) 100%);
    animation: move 10s infinite alternate;
}

@keyframes move {
    0% {
        transform: translateX(-10%);
    }
    100% {
        transform: translateX(10%);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='使用渐变实现舞台灯光聚焦效果' src='//codepen.io/Chokcoco/embed/PxrxGX/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/PxrxGX/'>使用渐变实现舞台灯光聚焦效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>