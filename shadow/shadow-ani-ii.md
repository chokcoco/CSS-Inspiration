## box-shadow实现背景动画 

box-shadow实现背景动画 。

### 关键点

+ 当 box-shadow 的模糊半径和扩张半径都为 0 的时候，我们可以得到一个和元素大小一样的阴影 
+ box-shadow 是可以设置多层的，也就是多层阴影，而且可以进行过渡变换动画（补间动画）
+ background-image: linear-gradient()，也就是渐变背景是不能进行补间动画的

HTML：

```html
<div></div>
```

SCSS：
```scss
@function listShadowOne() {
	$n: 10;
    $m: 5;
	$list: ();
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin $j*2*10vmin #fff;
	    }
    }

	@return $list;
}

@function listShadowThree() {
	$n: 10;
    $m: 5;
	$list: ();
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin ($j*2-1)*10vmin #fff;
	    }
    }

	@return $list;
}

@function listShadowTwo() {
	$n: 10;
    $m: 5;
	$list: ();
    
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin $j*2*10vmin-10vmin #00f1fc;
	    }
    }

	@return $list;
}

@function listShadowFour() {
	$n: 10;
    $m: 5;
	$list: ();
    
    @for $j from 0 to $m {
        @for $i from 0 to $n {
            $list: $list, $i*10vmin ($j*2-1)*10vmin+10vmin #fd0130;
	    }
    }

	@return $list;
}


body {
    background: #000;
    overflow: hidden;
}

div {
    position: relative;
    width: 100vmin;
    height: 100vmin;
    margin: 0 auto;
    background: #000;
    animation: scale 5s infinite alternate;
    transform-origin: center center;
}

div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5vmin;
    height: 5vmin;
    // background: #fff;
    box-shadow: listShadowOne();
    animation: radiusChange 5s infinite alternate;
}

div::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5vmin;
    height: 5vmin;
    // background: #fff;
    box-shadow: listShadowThree();
    animation: radiusChangeAfter 5s infinite alternate;
}

@keyframes radiusChange {
    25% {
        box-shadow: listShadowOne();
        border-radius: 50%;
    }
    50% {
        box-shadow: listShadowTwo();
        border-radius: 0%;
    }
    100% {
        box-shadow: listShadowOne();
        border-radius: 50%;
    }
}

@keyframes radiusChangeAfter {
    25% {
        box-shadow: listShadowThree();
        border-radius: 50%;
    }
    50% {
        box-shadow: listShadowFour();
        border-radius: 0%;
    }
    100% {
        box-shadow: listShadowThree();
        border-radius: 50%;
    }
}

@keyframes scale {
    25% {
        transform: scale(2);
    }
    50% {
        transform: scale(2);
    }
}
```

效果如下（点击 `HTML/SCSS` 可以对代码进行编辑）：

<iframe height='350' scrolling='no' title='box-shadow实现类似线性渐变背景动画' src='//codepen.io/Chokcoco/embed/dggoZw/?height=265&theme-id=0&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/Chokcoco/pen/dggoZw/'>box-shadow实现类似线性渐变背景动画</a> by Chokcoco (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>