## CSS-Doodle background + mask 实现万花筒效果

CSS-Doodle background + mask 实现万花筒效果

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) 是一个基于 Web-Component 的库。允许我们快速的创建基于 CSS Grid 布局的页面，以实现各种 CSS 效果（或许可以称之为 CSS 艺术）。

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
  :doodle {
    @grid: 2 x 5;

  }
  
  width: 40vmin;
  height: 40vmin;
  
  --colorMain: rgb(@r(255), @r(255), @r(255));
  --colorSub: rgb(@r(255), @r(255), @r(255));

  position: relative;
  box-sizing: border-box;
  margin: 1vmin;
  border-radius: 50%;
  border:2px solid #666;
  box-shadow: 1px 1px 4px 2px #222;
  // background: conic-gradient(from @r(360)deg, var(--colorMain), transparent, var(--colorSub), transparent, var(--colorMain));
  background: var(--colorMain);
  overflow: hidden;
    
  :after {
    --angle: calc(360deg / @index);
    --start: @r(8, 30)px;
    --end: @r(24, 80)px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(@r(360)deg, var(--colorMain), var(--colorSub), var(--colorMain));
    mask: @m(@index, (
      repeating-linear-gradient(calc(var(--angle) * @n), #fff 0, #fff var(--start), transparent var(--start), transparent var(--end))
    ));
    -webkit-mask-composite: xor;
  }

</css-doodle>
```

SCSS：
```scss
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #333;
}
```

效果如下（点击下图可以刷新效果）：

<iframe height="600" style="width: 100%;" scrolling="no" title="CSS Doodle - CSS MASK Background" src="https://codepen.io/Chokcoco/embed/eYzwXRx?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/eYzwXRx'>CSS Doodle - CSS MASK Background</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>