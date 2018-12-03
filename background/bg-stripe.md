## 利用线性渐变背景实现条纹字

利用线性渐变背景实现条纹字。

### 关键点

重点在于渐变色白色与透明色的重复渐变。

结合其他 CSS 属性有很多作用，譬如立体条纹字。

HTML：

```html
<p>所有字体都是条纹字</p>
<p>利用线性渐变背景实现</p>
<p>重点在于渐变色白色与透明色的重复渐变</p>
<p>结合其他CSS属性有很多作用，譬如立体条纹字</p>
```

SCSS：
```scss
p {
    position: relative;
    text-align: center;
    font-size: 15vmin;
    line-height: 25vmin;
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
        background-size: 6px 6px;
        z-index: 1;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='线性渐变实现条纹字' src='//codepen.io/Chokcoco/embed/YJgJjQ/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/YJgJjQ/'>线性渐变实现条纹字</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>