## 3D 螺旋数字动画

3D 螺旋数字动画。

### 关键点

+ 借助 SASS，把每一列数字渐进旋转一定角度即可
+ 当然，细心的你应该发现，每个数字一直都是面向正面的

HTML：

```pug
// pug模板
.container
    - for(var i=0; i<36; i++)
        .line
            - for(var j=0; j<12; j++)
                .number
```

SCSS：
```scss
$lineNumber: 36;
$column: 12;
$aniTime: 10s;

@function randomNum($max, $min: 0) {
	@return ($min + random($max));
}


html,
body {
    background-color: #000;
    overflow: hidden;
}

.container {
    width: 80vw;
    position: relative;
    margin: 10vh auto;
    transform-style: preserve-3d;
    perspective: 1000px;
    display: flex;
    justify-content: space-between;
    // mix-blend-mode: luminosity;
}

.line {
    width: 20px;
    height: 80vh;
    flex: 0 1 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    .number {
        position: relative;
        font-size: 16px;
        height: calc(80vh / 18);
        border-radius: 50%;
        transform-style: preserve-3d;
        perspective: 1000px;
        box-shadow: 0 0 5px 5px rgba(255, 248, 78, .1),
            inset 0 0 5px 5px rgba(255, 248, 78, .1);
        line-height: calc(80vh / 18);
        
        &::before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            text-align: center;   
            color: #57ff5e;
            text-shadow: 0 0 40px #57ff5e;
        }
    }
}

@for $i from 0 to $lineNumber {
    .line:nth-child(#{$i + 1}) {
        transform: rotateX(#{$i * 10}deg);
        
        
        @for $j from 0 to $column {
            .number:nth-child(#{$j + 1}) {
                // 卡就去掉这一行
                animation: reRotate $aniTime linear infinite;
                
                &::before {
                    transform: rotateX(#{$i * -10}deg);
                    content: '#{randomNum(9)}';
                }
            }
        }
    }
}

.container {
    transform: rotateX(0);
    animation: conRotate $aniTime linear infinite;
}

@keyframes conRotate {
    to {
        transform: rotateX(360deg);
    }
}

@keyframes reRotate {
    to {
        transform: rotateX(-360deg);
    }
}

```

效果如下：

<iframe height="450" style="width: 100%;" scrolling="no" title="3D Spiral Number " src="https://codepen.io/Chokcoco/embed/LeWbaB?height=450&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/LeWbaB'>3D Spiral Number </a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>