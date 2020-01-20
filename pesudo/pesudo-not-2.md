## 使用`:not()`伪类控制特殊边框样式

使用`:not()`伪类控制特殊边框样式。

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
<ul>
    <li>右边框</li>
    <li>右边框</li>
    <li>右边框</li>
    <li>右边框</li>
</ul>
```

SCSS：
```scss
ul {
    margin: 50px auto;
    width: 400px;
    height: 48px;
    font-size: 24px;
    display: flex;
    flex-direction: row;
}

ul li {
    width: 100px;
    line-height: 48px;
    text-align: center;   
}

ul li:not(:last-child) {
    border-right: 1px solid #666;
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="Use :not() to Style Borders on Lists" src="https://codepen.io/Chokcoco/embed/EMYGQZ?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/EMYGQZ'>Use :not() to Style Borders on Lists</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>