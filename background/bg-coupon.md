## 渐变实现优惠券波浪造型

渐变实现优惠券波浪造型。

### 关键点

+ 利用多重线性渐变及单个元素可以设置多层渐变叠加实现


HTML：

```html
<div class="coupon">50</div>
<div class="wave">50</div>
```

SCSS：
```scss
.coupon {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 50px auto;
    background-image: 
        radial-gradient(circle at 1px 8px, transparent 6px, #f49714 6px, #f49714 0px),
        radial-gradient(circle at 199px 8px, transparent 6px, #f49714 6px, #f49714 0px);
    background-size: 200px 18px;
    background-position: 0 0, 200px 0;
    background-repeat-x: no-repeat;
    
    
    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;
    
    &::before {
        position: absolute;
        content: "";
        left: 240px;
        top: 0;
        bottom : 0;
        width: 0;
        border-left: 1px dashed #fff;
    }
    
    &::after {
        position: absolute;
        content: "立即领取";
        font-size: 30px;
        width: 70px;
        top: 50%;
        right: 2%;
        transform: translate(-50%, -50%);
        line-height: 40px;
        letter-spacing: 5px;
    }
}

.wave {
    position: relative;
    width: 400px;
    height: 160px;
    margin: 50px auto;
    background: linear-gradient(90deg, #945700 0%, #f49714 100%);
    filter: drop-shadow(-7px 4px 3px #333);
    font-size: 100px;
    color: #fff;
    font-weight: bold;
    line-height: 160px;
    padding-left: 60px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 5px;
    text-shadow: -2px -2px 2px #333;
    
    &::before,
    &::after {
        content: "";
        position: absolute;
        top: 0;
        // left: 0;
        right: 0;
        bottom :0;
    }
    
    &::before {
        width: 10px;
        background-image: radial-gradient(circle at -5px 10px, transparent 12px, #fff 13px, #fff 0px);
        background-size: 20px 20px;
        background-position: 0 15px;
    }
    
    &::after {
        width: 15px;
        background-image: radial-gradient(circle at 15px 10px, #fff 12px, transparent 13px, transparent 0px);
        background-size: 20px 40px;
        background-position: 0 15px;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='优惠券波浪造型(coupon)' src='//codepen.io/Chokcoco/embed/vQLQXp/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/vQLQXp/'>优惠券波浪造型(coupon)</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>