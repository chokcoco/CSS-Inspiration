## 利用 filter:blur 增强文字的 3D 效果

利用 filter:blur 增强文字的 3D 效果

### 关键点

1. 第一个字符和最后一个字符在旋转的最左效果和最右效果下分别会离我们最近和最远，它们的效果其实应该是一致的，所以第一个字符和最后一个字符应该统一处理，依次类推，第二个字符和倒数第二字符统一处理，这里可以借助 SASS 利用 `:nth-child` 和 `:nth-last-child` 高效编写 CSS 代码
2. 每次有一半是清晰的，一半的是模糊的，需要区分对待，利用 `animation-delay` 让一半的动画延迟一半进行
3. 可以再配合 `text-shadow` 让文字更立体点


HTML：
```
<p>
    <span>C</span>
    <span>S</span>
    <span>S</span>
    <span>3</span>
    <span>D</span>
    <span>E</span>
    <span>F</span>
    <span>F</span>
    <span>E</span>
    <span>C</span>
    <span>T</span>
</p>
```

SCSS：
```scss
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

$count: 12;

body, html {
    width: 100%;
    height: 100%;
    display: flex;
    font-family: 'Lobster', cursive;
    perspective: 160vmin;
    overflow: hidden;
}

p {
    margin: auto;
    font-size: 24vmin;
    white-space: nowrap;
    transform-style: preserve-3d;
    animation: rotate 10s infinite ease-in-out;
    
    span {
        text-shadow: 
            1px 1px 0 rgba(0, 0, 0, .9),
            2px 2px 0 rgba(0, 0, 0, .7),
            3px 3px 0 rgba(0, 0, 0, .5),
            4px 4px 0 rgba(0, 0, 0, .3),
            5px 5px 0 rgba(0, 0, 0, .1);
        
        &:nth-child(-n+5) { 
            animation-delay: -5s; 
        }
    }
}

@for $i from 1 to 7 {
    span:nth-child(#{$i}), 
	span:nth-last-child(#{$i}) {
        animation: filterBlur-#{$i} 10s infinite ease-in-out;
	}
    @keyframes filterBlur-#{$i} {
        0% {
            filter: blur(0px) contrast(5);
        }
        50% {
            filter: blur(#{7 - $i}px) contrast(1);
        }
        100% {
            filter: blur(0px) contrast(5);
        }
    }
}
@keyframes rotate {
    0% {
        transform: rotateY(-45deg);
    }
    50% {
        transform: rotateY(45deg);
    }
    100% {
        transform: rotateY(-45deg);
    }
}
```

效果如下：

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS 3D Text Blur Effect" src="https://codepen.io/Chokcoco/embed/rNwOvNW?default-tab=result&editable=true&theme-id=light" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Chokcoco/pen/rNwOvNW">
  CSS 3D Text Blur Effect</a> by Chokcoco (<a href="https://codepen.io/Chokcoco">@Chokcoco</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>