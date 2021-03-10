## 使用 background-attachment 实现滚动阴影

这里，我们借助 `background-attachment: srcoll` 和 `background-attachment: local` 两个属性，在滚动初始的时候，利用两层背景叠加在一起隐藏阴影背景，真正滚动的时候，将叠加的部分移走，只漏出阴影部分即可。

详见这篇文章：[使用纯 CSS 实现滚动阴影效果](https://juejin.cn/post/6913725602428600334)

HTML：

```html
<div class="g-table">
    <table>
        <thead>
            <tr>
                <th>日期</th>
                <th>姓名</th>
                <th>地址</th>
            </tr>    
        </thead>
    </table>
    <div class="g-scroll">
        <table>
            <tbody>
                <tr>
                    <td>2021-01-01</td>
                    <td>XXXXX</td>
                    <td>DDDDD</td>
                </tr>    
            </tbody>
        </table>
    </div>
</div>
```

SCSS：
```scss
.g-table {
    margin: 50px auto;
    width: 450px;
}

table {
    position: relative;
    width: 450px;
    border: 1px solid #ccc;
    text-align: center;
    
    tbody {
        border-collapse: separate;
        height: 200px;
    }
    
    td, th {
        width: 150px;
        padding: 5px;
        border: 1px solid #ccc;
    }
}

.g-scroll {
    top: -1px;
    position: relative;
    height: 200px;
    overflow-y: scroll;
    overflow-x: hidden;
    background: 
        linear-gradient(#fff, transparent) top / 100% 100px,
        radial-gradient(at 50% -15px, rgba(0, 0, 0, .8), transparent 70%) top / 100000% 12px;
    background-repeat: no-repeat;
    background-attachment: local, scroll;
}
```

效果如下（滚动表格即可看到效果）：

<iframe height="500" style="width: 100%;" scrolling="no" title="Pure CSS Table scroll shadow" src="https://codepen.io/Chokcoco/embed/abmqMJQ?height=500&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/abmqMJQ'>Pure CSS Table scroll shadow</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>