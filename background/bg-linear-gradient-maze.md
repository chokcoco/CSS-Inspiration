## 使用线性渐变实现类迷宫图形

使用线性渐变实现类迷宫图形。

随机的艺术。

HTML：

```pug
div.g-grid
    - for(var i=0; i<400; i++)
        div.g-box
```

SCSS：
```scss
$count: 400;

@function randomRotate() {
    $r: random(100);
    @if $r > 50 { @return 45  }
    @if $r <= 50      { @return -45 }
}

.g-grid {
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    display: grid;
    grid-template-columns:  repeat(20, 5%);
    grid-template-rows: repeat(20, 5%);
}

@for $i from 1 to $count + 1 {
    .g-box:nth-child(#{$i}) {
        background: linear-gradient(#{randomRotate()}deg, transparent 49.5%, deeppink 49.5%, deeppink 50.5%, transparent 50.5%);
    }
}
```

效果如下：

<iframe height="350" style="width: 100%;" scrolling="no" title="CSS  MAZE" src="https://codepen.io/Chokcoco/embed/zXYJaW?height=350&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/zXYJaW'>CSS  MAZE</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>