## 渐变实现波浪边框

渐变实现波浪边框。

### 关键点

+ 利用多重线性渐变及单个元素可以设置多层渐变叠加实现


HTML：

```html
<body></body>
```

SCSS：
```scss
body {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #607d8b, #673ab7);
    background-size: 100% 50px;
    background-repeat: no-repeat;
    
    &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 40px;
          right: 0;
          background-repeat: repeat-x;
          height: 10px;
          background-size: 20px 20px;
          background-image: radial-gradient(circle at 10px -5px, transparent 12px, #fff 13px, #fff 20px);
    }
    
    &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 35px;
          right: 0;
          background-repeat: repeat-x;
          height: 15px;
          background-size: 40px 20px;
          background-image: radial-gradient(circle at 10px 15px, white 12px, transparent 13px);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='265' scrolling='no' title='波浪边框(优惠券边框)' src='//codepen.io/Chokcoco/embed/MzwxBm/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/MzwxBm/'>波浪边框(优惠券边框)</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>