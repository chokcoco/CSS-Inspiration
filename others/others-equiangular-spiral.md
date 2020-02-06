## 等角螺线

等角螺线。

等角螺线，一个很有意思的几何图形。

等角螺线的臂的距离以几何级数递增。 等角螺线是自我相似的；这即是说，等角螺线经放大后可与原图完全相同。 等角螺线的渐屈线和垂足曲线都是等角螺线。 从原点到等角螺线的任意点上的长度有限，但由那点出发沿等角螺线走到原点却需绕原点转无限次。

### 关键点

1. 借助了三角函数，而 CSS 本身是没有三角函数的，所以需要使用 SCSS 实现三角函数方法（Sin、Cos）
2. SCSS 实现三角函数又借助了泰勒公式，具体可以看我的这篇文章：[在 CSS 中使用三角函数绘制曲线图形及展示动画](https://github.com/chokcoco/iCSS/issues/72)

Pug模板（HTML模板引擎）：

```pug
- for(var i=0; i<32; i++)
    .box
```

SCSS：
```scss
// scss 实现 sin、cos、tan
$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
    $value: $base;
    @if $exp > 1 {
        @for $i from 2 through $exp {
            $value: $value * $base;
        }
    }
    @if $exp < 1 {
        @for $i from 0 through -$exp {
            $value: $value / $base;
        }
    }
    @return $value;
}

@function fact($num) {
    $fact: 1;
    @if $num > 0 {
        @for $i from 1 through $num {
            $fact: $fact * $i;
        }
    }
    @return $fact;
}

@function _to_unitless_rad($angle) {
    @if unit($angle) == "deg" {
        $angle: $angle / 180deg * $pi;
    }
    @if unit($angle) == "rad" {
        $angle: $angle / 1rad;
    }
    @return $angle;
}

@function sin($angle) {
    $a: _to_unitless_rad($angle);
    $sin: $a;
    @for $n from 1 through $_precision {
        $sin: $sin + (pow(-1, $n) / fact(2 * $n + 1)) * pow($a, (2 * $n + 1));
    }
    @return $sin;
}

@function cos($angle) {
    $a: _to_unitless_rad($angle);
    $cos: 1;
    @for $n from 1 through $_precision {
        $cos: $cos + (pow(-1, $n) / fact(2 * $n)) * pow($a, 2 * $n);
    }
    @return $cos;
}

@function tan($angle) {
    @return sin($angle) / cos($angle);
}

$squares: 32;
$angle: $pi / ($squares - 1);
$ratio: 1 / (sin($angle) + cos($angle));
$size: 100;

div {
    position: absolute;
    left: 50%;
    top: 50%;
    border: 2px black solid;
    @for $i from 0 through $squares {
        &:nth-child(#{$i}) {
            $s: pow($ratio, $i) * $size;
            width: #{$s}vmin;
            height: #{$s}vmin;
            transform: translate(-50%, -50%) rotate(#{$angle}rad);
        }
        $angle: $i * $pi / ($squares - 1);
    }
}
```

效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS 旋转方形等角螺线" src="https://codepen.io/Chokcoco/embed/abzeZjd?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/abzeZjd'>CSS 旋转方形等角螺线</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

----

当然，可以加上色彩：

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS 旋转方形等角螺线2" src="https://codepen.io/Chokcoco/embed/jOEgrvJ?height=400&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/jOEgrvJ'>CSS 旋转方形等角螺线2</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

或者加上动画：

<iframe height="400" style="width: 100%;" scrolling="no" title="CSS 旋转方形等角螺线动画" src="https://codepen.io/Chokcoco/embed/povMbYX?height=400&theme-id=default&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/povMbYX'>CSS 旋转方形等角螺线动画</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>