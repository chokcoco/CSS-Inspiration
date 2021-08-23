## 3D 宇宙时空穿梭效果

利用 CSS 3D 实现星空穿梭效果

### 关键点

1. 选取一张合适的星空图
2. 利用 5 个元素设定上述星空图，在 3D 效果的作用下，在上下左右中5个方向铺满一屏
3. 父容器在极小的 `perspective` 值下，设定容器的 `translateZ`动画，实现效果
4. 通过两组同样的动画，其中一组设置负延迟实现动画的衔接

HTML：
```
<div class="g-container">
  <div class="g-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>   
      <div class="item item-top"></div>
      <div class="item item-bottom"></div> 
      <div class="item item-middle"></div>    
  </div>
  <div class="g-group">
      <div class="item item-right"></div>
      <div class="item item-left"></div>   
      <div class="item item-top"></div>
      <div class="item item-bottom"></div>   
      <div class="item item-middle"></div>    
  </div>
</div>
```

SCSS：
```scss
html, body{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
  text-align: center;
}

body:before{
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.g-container{
  display: inline-block;
  vertical-align: middle;
  perspective: 4px;
  perspective-origin: 50% 50%;
  position: relative;
  animation: hueRotate 21s infinite linear;
}

.g-group{
  position: absolute;
/*   perspective: 4px; */
  width: 1000px;
  height: 1000px;
  left: -500px;
  top: -500px;
  transform-style: preserve-3d;
  animation: move 12s infinite linear;
  animation-fill-mode: forwards;
}

.g-group:nth-child(2){
  animation: move 12s infinite linear;
  animation-delay: -6s;
}

.item {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(https://z3.ax1x.com/2021/08/20/fLwuMd.jpg);
  background-size: cover;
  opacity: 1;
  animation: fade 12s infinite linear;
  animation-delay: 0;
}

.g-group:nth-child(2) .item {
  animation-delay: -6s;
}

.item-right {
  transform: rotateY(90deg) translateZ(500px);
}

.item-left {
  transform: rotateY(-90deg) translateZ(500px);
}

.item-top {
  transform: rotateX(90deg) translateZ(500px);
}

.item-bottom {
  transform: rotateX(-90deg) translateZ(500px);
}

.item-middle {
  transform: rotateX(180deg) translateZ(1000px);
}

@keyframes move {
  0%{
    transform: translateZ(-500px) rotate(0deg);
  }
  100%{
    transform: translateZ(500px) rotate(0deg);
  }
}

@keyframes fade {
  0%{
    opacity: 0;
  }
  25%,
  60%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}

@keyframes hueRotate {
  0% {
    filter: hue-rotate(0);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
```

效果如下：

<iframe height="450" style="width: 100%;" scrolling="no" title="Pure CSS Galaxy  Shuttle" src="https://codepen.io/Chokcoco/embed/abWeNEV?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/abWeNEV">
  Pure CSS Galaxy  Shuttle</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>