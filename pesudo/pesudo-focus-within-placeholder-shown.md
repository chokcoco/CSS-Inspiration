## placeholder-shown 配合 focus-within 实现 input 输入交互

使用 `:placeholder-shown` && `:focus-within` 实现 input 输入交互。

+ `:focus-within`: 是一个CSS 伪类 ，表示一个元素获得焦点，或，该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配:focus伪类
+ `:placeholder-shown`:  CSS 伪类 在 `<input>` 或 `<textarea>` 元素显示 placeholder text 时生效

-----

HTML：

```html
<div class="g-container">
  <input type="text" placeholder="输入你想查询的内容" class="g_input_search" >
  <button type="button" class="g_button_search">GO</button>
</div>
```

SCSS：
```scss
.g-container {
    position: relative;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    width: 500px;
    height: 60px;
    overflow: hidden;
    transition: 0.3s;

    & > * {
        border: none;
        outline: none;
    }

    .g_input_search {
        padding: 0 15px;
        height: 100%;
        width: 100%;
        border: 1px solid #ddd;
        font-size: 18px;
        box-sizing: border-box;

        &:not(:placeholder-shown) {
            border: 1px solid #03a9f4;
            
            + .g_button_search {
                opacity: 1;
            }
        }

        &:placeholder-shown {
            
            + .g_button_search {
                opacity: 0;
            }
        }
    }

    .g_button_search {
        background: #03a9f4;
        color: #feffd4;
        font-size: 15px;
        cursor: pointer;
        width: 100px;
        height: calc(100% - 20px);
        transition: 0.3s;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    
    &:focus-within {
        transform: translateY(-4px);
        border-color: #bbb;
        box-shadow: 4px 4px 10px 2px #ddd;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='265' scrolling='no' title=':placeholder-shown && :focus-within' src='//codepen.io/Chokcoco/embed/xJWwyB/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/xJWwyB/'>:placeholder-shown && :focus-within</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>