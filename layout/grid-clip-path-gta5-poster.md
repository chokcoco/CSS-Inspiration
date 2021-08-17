## grid 布局配合 clip-path 实现 GTA5 封面

利用 grid 布局配合 clip-path 实现 GTA5 封面。

### 关键点

+ grid 实现不规则的网格布局
+ clip-path 控制每个格子的形状

关于本效果的详细描述，你可以查看这篇文章：[新时代创意布局不完全指南](https://github.com/chokcoco/iCSS/issues/70)

HTML：

```
<div class="parent">
  <div class="child" >
    <img src="https://i.pinimg.com/originals/0d/67/72/0d677237854ed19dcfe69f0f9a4065ee.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://i.pinimg.com/736x/26/db/84/26db84b2bf348f79792f7c5f0f9bd5ef.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://i.pinimg.com/736x/45/0d/1c/450d1c87ce61bc0c2429701ed3ea631a.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://i.pinimg.com/564x/94/76/dd/9476dd3d346a3d697362da94b9aa2dc2.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://www.sitedogta.com.br/gta5/imagens/personagens/Trevor%20GTA%20V.JPG" alt="">
  </div>
  <div class="child">
    <img src="https://i.pinimg.com/564x/3b/3b/56/3b3b56745376625aa66d5943b3db0275.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://i.pinimg.com/originals/c8/9c/6b/c89c6b8f2165cfbe5ecccfebace1042d.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://i.pinimg.com/736x/ea/e7/b5/eae7b513060702e86bdd51d4d5cfc5ae.jpg" alt="">
  </div>
  <div class="child">
    <img src="https://cdn.hipwallpaper.com/i/94/92/Fk0l6I.jpg" alt="">
  </div>
</div>  

```

SCSS：
```scss
*{
  box-sizing: border-box;
}
body{
  padding:0; 
  margin: 0;
  background: #23232a;
}
img{
  width:100%;
  height: 100%;
  object-fit: cover;
  object-position: 40% 0;
}

.parent{
  padding: .8rem;
  background: black;
  height: 95vh;
  min-height: 500px;
  width: 100%;
  max-width: 600px;
  margin: auto;
  margin-top: 2.5vh;
  border: 1px solid #c9b473;
  overflow: hidden;
  display: grid;

  grid-template-columns: 1fr .7fr .3fr 1fr;
  grid-template-rows: 20% 40% 20% 20%;
  grid-template-areas: 'one two two three'
    'four five five five'
    'six five five five'
    'six seven eight eight';
}


// For clipping I used mozilla's inspect element. 
.child{

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3){
    img{
      width:120%;
      height: 120%;
    }
  }
  &:first-child{
    grid-area: one;
    clip-path: polygon(0% 0%, 93.24% 0%, 105.04% 110.16%, 0% 90%);
  }
  &:nth-child(2){
    grid-area: two;
    clip-path: polygon(0% 0%, 108.28% 0%, 96.45% 110.13%, 10.55% 110.93%);
  }
  &:nth-child(3){
    grid-area: three;
    clip-path:polygon(15.05% 0%, 100% 0%, 99.35% 91.7%, 3.08% 108.48%);
  }
  &:nth-child(4){
    grid-area: four;
    clip-path: polygon(0% -0.85%, 106.34% 9.98%, 121.32% 65.63%, 99.66% 109.89%, 1.86% 124.41%);

    img{
      width: 135%;
      height: 135%;
    }
  }
  &:nth-child(5){
    grid-area: five;
    clip-path: polygon(6.4% 6.48%, 47.24% 5.89%, 100% 0%, 98.41% 96.85%, 53.37% 100%, 53% 63.21%, 3.23% 73.02%, 14.30% 44.04%);
  }
  &:nth-child(6){
    grid-area: six;
    clip-path:  polygon(2.14% 29.3%, 99.34% 15.42%, 98.14% 100.82%, 1.57% 101.2%);
  }
  &:nth-child(7){
    grid-area: seven;
    clip-path: polygon(7.92% 33.47%, 96.31% 23.39%, 95.38% 100%, 5.30% 100.85%);
  }
  &:nth-child(8){
    grid-area: eight;
    clip-path: polygon(2.5% 22.35%, 100% 0%, 100% 100%, 1.55% 100%);
  }
  &:nth-child(9){
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4; 

    clip-path:polygon(5.94% 28.66%, 100.61% -0.67%, 101.1% 108.57%, 5.4% 126.28%);

    img{
      object-position: 30% 50%;
      height: 135%;
    }
  }
}
```

效果如下：

<iframe height="700" style="width: 100%;" scrolling="no" title="GTA 5 poster ( Grid and Clip Path)" src="https://codepen.io/Chokcoco/embed/jOVjxjo?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/jOVjxjo">
  GTA 5 poster ( Grid and Clip Path)</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>