## CSS-Doodle spotlight🎆

CSS-Doodle spotlight🎆

### CSS-doodle

[css-doodle](https://github.com/css-doodle/css-doodle) 是一个基于 Web-Component 的库。允许我们快速的创建基于 CSS Grid 布局的页面，以实现各种 CSS 效果（或许可以称之为 CSS 艺术）。

HTML：

```HTML
<!-- https://css-doodle.com -->

<css-doodle>
    :doodle { 
        @grid: 1x26 / 100vw 100vh; 
        background: #000;
    } 
    
    :container { 
        max-width: 70vw;
        margin: 0 auto;
    } 
    

    @even {
        position: relative;
        height: 70%;
        top: 10%;
        background: linear-gradient(to top, rgba(@r(50, 255), @r(255, 255), 255, 1), rgba(255, 255, 255, .1) 80%);
        transform: perspective(@r(7, 35)vmin) rotateX(-@r(15, 45)deg) skewX(@r(-60, 60)deg);
        transform-origin: center bottom;
        box-shadow: 0 0 2vmin .1vmin rgba(255, 255, 255, .7);
        opacity: 0;
        animation: fadeIn 7s infinite calc(@index() * 0.03s);
    }
    
    @keyframes fadeIn {
        1% {
            opacity: 1;
        }
        10% {
            opacity: 1;
            filter: hue-rotate(0);
        }
        50% {
            opacity: 1;
            transform: perspective(@r(10, 35)vmin) rotateX(-@r(15, 45)deg) skewX(0deg);
            filter: hue-rotate(360deg);
        }
        50.1% {
            opacity: 0;
        }
    }

</css-doodle>
```

SCSS：
```scss
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

效果如下（点击下图可以刷新效果）：

<iframe height="420" style="width: 100%;" scrolling="no" title="CSS-Doodle spotlight" src="https://codepen.io/Chokcoco/embed/xxxMoqV?height=420&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/xxxMoqV'>CSS-Doodle spotlight</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>