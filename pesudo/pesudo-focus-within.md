## focus-within switch tab

使用 `:focus-within` 来实现 tab 切换功能。

`:focus-within` 它表示一个元素获得焦点，或，该元素的后代元素获得焦点。划重点，它或它的后代获得焦点。

这也就意味着，它或它的后代获得焦点，都可以触发 :focus-within。

### 关键点

+ 这个属性有点类似 Javascript 的事件冒泡，从可获焦元素开始一直冒泡到根元素 html，都可以接收触发 :focus-within 事件
+ 本例子的思路就是通过获焦态来控制其他选择器，以及最重要的是利用了父级的 :not(:focus-within) 来设置默认样式

### 相关文章

[神奇的选择器 :focus-within](https://github.com/chokcoco/iCSS/issues/36)

HTML：

```html
<div class="container">
    <div class="nav-box">
        <button class="nav-A">Tab-A</button>
        <button class="nav-B">Tab-B</button>
        <div class="content-box">
            <div class="content-A">
                content-A
            </div>
            <div class="content-B">
                content-B
            </div>
        </div>
    </div>
</div>
```

SCSS：
```scss
.container {
    width: 300px;
    margin: 50px auto;
    padding: 10px;
    boder: 1px solid #ddd;
}

.nav-box {
    font-size: 0;
}

button {
    width: 150px; 
    height: 64px;
    box-sizing: border-box;
    outline: none;
    background: #fff;
    border: 1px solid #ddd;
    font-size: 18px;
    cursor: pointer;
}

button:focus-within {
    color: #fff;
    background: #ffcc00;
}

.content-box {
    font-size: 24px;
    border: 1px solid #ddd;
    height: 100px;
    div {
        display: none;
    }
}

.nav-box:not(:focus-within) {
    .nav-A {
        color: #fff;
        background: #ffcc00;
    }
    
    .content-A {
        display: block;
    }
}

.nav-A:focus-within ~ .content-box .content-A {
    display: block;
}

.nav-B:focus-within ~ .content-box .content-B {
    display: block;
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='focus-within switch tab' src='//codepen.io/Chokcoco/embed/RJEpaP/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/RJEpaP/'>focus-within switch tab</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>