## mask-image 实现图片变幻

mask-image 实现图片变幻。

主要借助了 mask-image，一张图片上应用 `mask-image: linear-gradient(0, rgba(0, 0, 0, 1) 40%, transparent 60%);`，透明的部分则会凸显出另外一张图。

再利用动画，让 `mask-image: linear-gradient` 的角度旋转起来。

详见：[奇妙的 CSS MASK](https://github.com/chokcoco/iCSS/issues/80)

HTML：

```html
<div class="a"></div>
<div class="b"></div>
```

SCSS：
```scss
$img2: 'http://up.enterdesk.com/edpic_source/21/00/00/210000f8e772d7fc0758e67ae4b48807.jpg';

$img1: 'https://images.unsplash.com/photo-1440688807730-73e4e2169fb8?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop=';

$count: 360;

div {
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    height: 100vh;
    
}

.a {
    background: url($img1);
    background-size: 100% auto;
}

.b {
    background: url($img2);
    background-size: 100% auto;
    mask-image: linear-gradient(0, rgba(0, 0, 0, 1) 40%, transparent 60%);
    mask-image-position: 50% 50%;
    animation: move 10s infinite;
}

@keyframes move {
    
    @for $i from 0 through $count {
        #{$i / $count * 100}% {
            mask-image: linear-gradient($i / $count * 360deg, rgba(0, 0, 0, 1) 40%, transparent 60%);
        }        
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="mask-image 实现图片变幻" src="https://codepen.io/Chokcoco/embed/VqdQwB?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/VqdQwB'>mask-image 实现图片变幻</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>