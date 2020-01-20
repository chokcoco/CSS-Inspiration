## chrome Tab 分栏实现

chrome Tab 分栏实现

### 关键点

有很多小细节

+ 每个 tab active 状态下的边框实现，需要借助两个伪元素
+ 正常状态、hover状态、active状态下的层级关系

可以自己动手尝试下。

HTML：

```HTML
<ul class="container">
    <li>
        <img src="https://jestjs.io/img/favicon/favicon.ico" alt="">
        <span>The Jest Object</span>
        <div class="close">﹢</div>
        <div class="line"></div>
    </li>
    <li class="">
        <img src="https://static.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico" alt="">
        <span>ChromeTab分栏实现</span>
        <div class="close">﹢</div>
        <div class="line"></div>
    </li>
    <li class="active">
        <img src="https://github.com/fluidicon.png" alt="">
        <span>chokcoco（Coco）</span>
        <div class="close">﹢</div>
        <div class="line"></div>
    </li>
</ul>
```

SCSS：
```scss
.container {
    background: #ddd;
    height: 40px;
    margin: 20px auto;
    padding: 8px 8px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    overflow: hidden;
}

li {
    position: relative;
    font-size: 12px;
    border-radius: 10px 10px 0 0;
    flex-basis: 240px;
    display: flex;
    align-items: center;
    z-index: 1;
    cursor: default;
    transition: .3s all;
    
    img {
        width: 16px;
        height: 16px;
        margin-left: 10px;
        margin-right: 10px; 
    }
    
    .line {
        display: none;
        left: -1px;
        top: 6px;
        position: absolute;
        width: 1px; 
        height: 20px;
        background: #909090;
    }
    
    .close {
        right: 8px;
        top: 8px;
        position: absolute;
        font-size: 18px;
        transform: rotate(45deg);
        border-radius: 50%;
        cursor: pointer;
        font-weight: bold;
        
        &:hover {
            background: #d0d0d0;
        }
    }
}

li.active {
    background: #fff;
    z-index: 2;
    
    &::before,
    &::after {
        border-top: 5px solid #fff;
    }
}

li::before,
li::after {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 5px solid transparent;
    transition: .3s all;
    //border-top: 5px solid #fff;
}

li::before {
    bottom: -5px;
    left: -15px;
    transform: rotate(135deg)
}

li::after {
    bottom: -5px;
    right: -15px;
    transform: rotate(205deg)
}

li + li:not(.active) .line {
    display: block
}

li:hover:not(.active) {
    background: #ededed;
    
    .line {
        display: none!important;
    }
    
    &::before,
    &::after {
       border-top: 5px solid #ededed; 
    }
}

li:hover + li {
    .line {
        display: none!important;
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="ChromeTab分栏实现" src="https://codepen.io/Chokcoco/embed/WNNgyMV?height=350&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/WNNgyMV'>ChromeTab分栏实现</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>