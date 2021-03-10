## 使用 background-attachment 实现毛玻璃效果

使用 background-attachment，filter: blur() 实现毛玻璃效果。

毛玻璃效果的重点在于，需要虚化的底图部分是会随页面 resize 变换而变换的。

`background-attachment:fixed` 则可以完美契合这一需求。

### 关键点

`background-attachment` 算是一个比较生僻的属性，基本上平时写业务样式都用不到这个属性。但是它本身很有意思。

`background-attachment`：如果指定了 `background-image` ，那么 `background-attachment` 决定背景是在视口中固定的还是随着包含它的区块滚动的。

### background-attachment: fixed

**fixed** 此关键字表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。

HTML：

```html
<div>
    <p>使用 <br />background-attachment: fixed <br />filter: bulr() <br />实现毛玻璃效果</p>
</div>
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
    background-attachment: fixed;
    background-size: cover;
    background-position: top;
    overflow: hidden;
}

div {
    position: relative;
    width: 30vw;
    height: 40vh;
    background: inherit;
    margin: 50px auto;
    padding: 5vmin;
    border-radius: 5px;
    border: 2px solid rgba(255, 255, 255, .5);
    // transform: translate(-50%, -50%);
    // left: 50%;
    // top: 50%;
    
    p {
        position: relative;
        color: #000;
        z-index: 10;
        font-size: 24px;
        line-height: 1.5;
        
    }
    
    &::after {
        position: absolute;
        content: "";
        background: inherit; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        filter: blur(10px);
        z-index: 0;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='400' scrolling='no' title='使用background-attachment: fixed | filter: bulr() 实现毛玻璃效果' src='//codepen.io/Chokcoco/embed/OawrWM/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/OawrWM/'>使用background-attachment: fixed | filter: bulr() 实现毛玻璃效果</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>