## 线性渐变配合阴影实现条纹立体阴影条纹字

线性渐变配合阴影实现条纹立体阴影条纹字。

### 关键点

+ 借用了元素的两个伪元素 
+ 伪元素可以通过 `attr` 读取元素属性
+ 通过生成***白色->透明色***的多重线性渐变叠加在黑色之上来实现条纹效果

HTML：

```html
<div data-name="Solid Shadow Word">Solid Shadow Word</div>
```

SCSS：
```scss


div {
    font-family: Times New Roman, 'serif';
    position: relative;
    font-size: 30vmin;
    line-height: 40vmin;
    margin: 30vmin auto;
    text-align: center;
    text-shadow: 4px 4px 1px #333;
    
    &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(-45deg, #fff 0%, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent 100%);
        background-size: 6px 6px;
        z-index: 1;
    }
    
    &::after {
        position: absolute;
        content: attr(data-name);
        top: -4px;
        left: -2px;
        right: 6px;
        bottom: 6px;
        color: #333;
        z-index: 2;
        text-shadow: 3px 3px #fff;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='线性渐变配合阴影实现条纹立体阴影条纹字' src='//codepen.io/Chokcoco/embed/XxQJEB/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/XxQJEB/'>线性渐变配合阴影实现条纹立体阴影条纹字</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>