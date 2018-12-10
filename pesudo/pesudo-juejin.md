## 伪元素 focus-within 纯 CSS 方式实现掘金登陆特效

伪元素 `:focus-within` 纯 CSS 方式实现掘金登陆特效。

![](https://user-images.githubusercontent.com/8554143/43560900-2ef72358-9647-11e8-8123-ecfc45828c3d.gif)

`:focus-within` 伪类选择器，它表示一个元素获得焦点，或，该元素的后代元素获得焦点。划重点，**它或它的后代获得焦点**。

这也就意味着，**它或它的后代获得焦点**，都可以触发 `:focus-within`。


### 相关文章

[神奇的选择器 :focus-within](https://github.com/chokcoco/iCSS/issues/36)

HTML：

```html
<div class="g-container">
    <h2>登录</h2>
    <div class="g-username">
        <input name="loginPhoneOrEmail" maxlength="64" placeholder="请输入手机号或邮箱" class="input">
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="g-username">
    </div>

    <div class="g-password">
        <input name="loginPassword" type="password" maxlength="64" placeholder="请输入密码" class="input">
        <img src="https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="g-password">
    </div>

    <img src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" class="g-normal">
</div>
```

SCSS：
```scss
$bg-normal: 'https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png';
$bg-username: 'https://b-gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png';
$bg-password: 'https://b-gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png';

.g-container {
    position: relative;
    width: 318px;
    margin: 100px auto;
    height: 370px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    z-index: 10;
    
    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    
    input {
        outline: none;
        padding: 10px;
        width: 100%;
        border: 1px solid #e9e9e9;
        border-radius: 2px;
        outline: none;
        box-sizing: border-box;
        font-size: 16px;
    }
}

img {
    position: absolute;
    top: -20%;
    left: 50%;
    width: 120px;
    height: 95px;
    transform: translate(-50%, 0);
}

.g-username {
    margin-bottom: 10px;
    
    img {
        display: none;
        width: 120px;
        height: 113px;
    }
}

.g-username:focus-within ~ img {
    display: none;
}

.g-username:focus-within {   
    input {
        border-color: #007fff;
    }
    img {
        display: block;
    }
}

.g-password {
    margin-bottom: 10px;
    
    img {
        display: none;
        width: 103px;
        height: 84px;
        top: -15%;
    }
}

.g-password:focus-within ~ img {
    display: none;
}

.g-password:focus-within {   
    input {
        border-color: #007fff;
    }
    img {
        display: block;
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='400' scrolling='no' title='掘金登录效果纯CSS实现' src='//codepen.io/Chokcoco/embed/yqKrPR/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/yqKrPR/'>掘金登录效果纯CSS实现</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>