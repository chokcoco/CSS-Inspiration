## 使用:not()伪类实现弹窗背景元素模糊

使用:not()伪类实现弹窗背景元素模糊。

### 用法 

CSS 否定伪类，:not(X)，是以一个简单的以选择器X为参数的功能性标记函数。它匹配不符合参数选择器X描述的元素。

### not 伪类关键点

+ 可以利用这个伪类写一个完全没有用处的选择器。例如， :not(*) 匹配任何非元素的元素，因此这个规则将永远不会被应用。
+ 可以利用这个伪类提高规则的优先级。例如， #foo:not(#bar) 和 #foo 会匹配相同的元素。 但是前者的优先级更高。
+ :not(foo) 将匹配任何非foo元素，包括html和body。
+ 这个选择器只会应用在一个元素上，你无法用它排除所有父元素。比如， body :not(table) a 将依旧会应用在table内部的`<a>` 上, 因为 `<tr>`将会被 :not()这部分选择器匹配。

-------

HTML：
```html
<div class="container s-blur">
    <div class="g-header">Header</div>
    <div class="g-content">
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </div>
    <div class="g-footer">Footer</div>
    <div class="g-wrap">
        利用:not()伪类使除了弹窗之外的所有元素都进行模糊
    </div>
</div>
```

SCSS：
```scss
.s-blur > :not(.g-wrap){
    filter: blur(2px);
    
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,.3);
        filter: blur(2px);
        z-index: 2;
    }
}

.g-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 50vh;
    font-size: 30px;
}

.g-container {
    position: relative;
}

.g-header,
.g-content,
.g-footer{
    padding: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 40px;
    box-sizing: border-box;
    color: #fff;
    overflow: hidden;
}

.g-header,
.g-footer{
    height: 20vh;
    background: brown;
}

.g-content {
    height: 60vh;
    background: #77ccdd;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='使用:not()伪类实现弹窗背景元素模糊' src='//codepen.io/Chokcoco/embed/RqWBGB/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/RqWBGB/'>使用:not()伪类实现弹窗背景元素模糊</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>