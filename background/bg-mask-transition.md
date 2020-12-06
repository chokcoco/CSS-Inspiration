## mask-image 实现图片转场变换

mask-image 实现图片转场变换。

详见：[奇妙的 CSS MASK](https://github.com/chokcoco/iCSS/issues/80)

HTML：

```html
<div></div>
```

SCSS：
```scss
html, body {
    width: 100%;
    height: 100%;
    display: flex;
}

div {
    margin: auto;
    position: relative;
    width: 30vw;
    height: 70vh;
    background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2128480768,3645204276&fm=26&gp=0.jpg) no-repeat;
    background-size: cover;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;left: 0; right: 0;bottom: 0;
        background: url(https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1877625006,2341162086&fm=26&gp=0.jpg) no-repeat;
        background-size: cover;
        z-index: 1;
        animation: maskRotate 4s ease-in-out infinite;
    }
}

@keyframes maskRotate {
    @for $i from 0 through 50 { 
        #{$i}% {
            mask: linear-gradient(45deg, #000 #{$i * 2 + '%'}, transparent #{$i * 2.5 + '%'}, transparent #{$i * 2.5 + '%'});
        }
    }
    100% {
        mask: linear-gradient(45deg, #000， #000 100%);
    }
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="MASK linear-gradient 转场" src="https://codepen.io/Chokcoco/embed/RwrpmyL?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/RwrpmyL'>MASK linear-gradient 转场</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>