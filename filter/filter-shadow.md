## 使用 filter:blur 生成彩色阴影

通常而言，我们生成阴影的方式大多是 box-shadow 、filter: drop-shadow() 、text-shadow 。但是，使用它们生成的阴影通常只能是单色或者同色系的。

但是通过巧妙的利用 filter: blur 模糊滤镜，我们可以假装生成渐变色或者说是颜色丰富的阴影效果。

### 关键点

原理就是，利用伪元素，生成一个与原图一样大小的新图叠加在原图之下，然后利用滤镜模糊 filter: blur() 配合其他的亮度/对比度，透明度等滤镜，制作出一个虚幻的影子，伪装成原图的阴影效果。

嗯，最重要的就是这一句 `filter: blur(10px) brightness(80%) opacity(.8)`。

HTML：

```html
<div class="container">
    <div class="avator"></div>
    <p>bulr shadow</p>
</div>
```

SCSS：
```scss
$img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505822443&di=941986df9c6514d5d43eaba4aa938347&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.qqtouxiang8.net%2Fuploads%2Fallimg%2Fc150313%2F142623130563050-922006.jpg';

@import url(https://fonts.googleapis.com/css?family=Righteous);
    
.container {
    width: 200px;
    margin: 20px auto;
}

.avator {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url($img) no-repeat center center;
    background-size: 100% 100%;
    
    &::after {
        content: "";
        position: absolute;
        top: 10%;
        left: 0%;
        width: 100%;
        height: 100%;
        background: inherit;
        background-size: 100% 100%;
        border-radius: 50%;
        transform: scale(.95);
        filter: blur(10px) brightness(80%) opacity(.8);
        z-index: -1;
    }
}

p {
    margin-top: 30px;
    text-align: center;
    font-size: 28px;
    font-family: Righteous;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='使用 filter:blur 生成彩色阴影' src='//codepen.io/Chokcoco/embed/eGYYpo/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/eGYYpo/'>使用 filter:blur 生成彩色阴影</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>