## 借助 translate3d\perspective 实现 3D 视差效果

借助 translate3d\perspective 实现 3D 视差效果。

视差滚动（Parallax Scrolling）是指让多层背景以不同的速度移动，形成立体的运动效果，带来非常出色的视觉体验。 作为网页设计的热点趋势，越来越多的网站应用了这项技术。

### 关键点

+ 我们给容器设置上 transform-style: preserve-3d 和 perspective: xpx，那么处于这个容器的子元素就将位于3D空间中，

+ 再给子元素设置不同的 transform: translateZ()，这个时候，不同元素在 3D Z轴方向距离屏幕（我们的眼睛）的距离也就不一样

+ 滚动滚动条，由于子元素设置了不同的 transform: translateZ()，那么他们滚动的上下距离 translateY 相对屏幕（我们的眼睛），也是不一样的，这就达到了滚动视差的效果。

详细分析请看：[滚动视差？CSS 不在话下](https://www.cnblogs.com/coco1s/p/9453938.html)

HTML：

```html
<div class="card">
  <div class="card-content">
    <h1>Just hover around</h1>
    <p>translateZ 3D</p>
    <p class="related">3D视差</p>
  </div>
</div>
```

SCSS：
```scss

body{
  background: #edf2f4;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  height: 100vh;
  font-family: "Playfair Display",georgia,serif;
}
.card{
  pointer-events: none;
  transform: translateZ(0);
  padding: 30px;
  background: white;
  border-radius: 5px;
  width: 400px;
  height: 200px;
  margin: auto;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  display: flex;
  box-shadow: 0 0 5px rgba(0,0,0,.1);
  position: relative;
  animation: move 10s infinite alternate;
  
  &:after{
    content:" ";
    position: absolute;
    width: 100%;
    height: 10px;
    border-radius: 50%;
    left:0;
    bottom:-50px;
    box-shadow: 0 30px 20px rgba(0,0,0,.3);
    
  }
  
  .card-content{
    margin: auto;
    text-align:center;
    transform-style: preserve-3d;
    line-height: 40px;
  }
  
  h1{
    transform: translateZ(100px);
  }
  p{
    transform: translateZ(50px);
    display: block;
    
    &.related{
      transform: translateZ(80px);
      font-style: italic;
    }
  }
  a{
    color:#69c6b8;
    pointer-events: auto;
  }
}

@keyframes move {
    0% {
        transform: rotateY(20deg) rotateZ(10deg);
    }
    100% {
        transform: rotateY(-60deg) rotateZ(-10deg);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='420' scrolling='no' title='translateZ 实现 3D 视差' src='//codepen.io/Chokcoco/embed/wQrNrd/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/wQrNrd/'>translateZ 实现 3D 视差</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>