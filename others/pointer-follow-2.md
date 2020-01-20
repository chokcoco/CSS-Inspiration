## PURE CSS 实现鼠标跟随

PURE CSS 实现鼠标跟随。

### 关键点

+ 障眼法，通过将屏幕铺满 div 进行控制鼠标跟随
+ 通过 hover 以及 transtion 改变元素的透明度 

详细信息，可以看看我的这篇文章：

[不可思议的纯 CSS 实现鼠标跟随](https://github.com/chokcoco/iCSS/issues/46)

HTML：

```pug
// pug模板
.bg hover me
.container
    - for(var i=0; i<500; i++)
        .box
```

SCSS：
```scss
$count: 500;

@function randomNum($max, $min: 0, $u: 1) {
	@return ($min + random($max)) * $u;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    line-height: 100vh;
    text-align: center;
    font-size: 15vw;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgba(118, 218, 255, .8);
    z-index: -1;
}

.container {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    cursor: pointer;
    z-index: 100;
    
    .box {
        position: relative;
        float: left;
        width: 30px;
        height: 30px;
        margin: 4px;
        // mix-blend-mode: multiply;    
        
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;  
            transform: scale3d(0.1, 0.1, 1);
            background-color: transparent;
            transition: .5s transform ease-in,
                        .5s background ease-in;
        }
    }
    
    .box:hover {
        &::before {
            transform: scale3d(1.8, 1.8, 1.8);
            transition: 0s transform;
        }
    }
}

@for $i from 1 through $count {   
    .box:nth-child(#{$i}):hover {
        &::before {
            background-color: rgba(randomNum(255), randomNum(255), randomNum(255), .8);
        }
    }
}
```

效果如下（在下图移动指针查看效果）：

<iframe height="400" style="width: 100%;" scrolling="no" title="cancle  transition " src="https://codepen.io/Chokcoco/embed/XgvjQM?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/XgvjQM'>cancle  transition </a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>