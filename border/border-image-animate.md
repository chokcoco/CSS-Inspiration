## 利用 border-image 实现动态边框

利用 border-image 实现动态边框。

利用 `border-image`，我们也可以实现一些有意思的边框动画。关于 `border-image`，有一篇非常好的讲解文章 -- [border-image 的正确用法](https://aotu.io/notes/2016/11/02/border-image/index.html)，本文不对基本定义做过多的讲解。

如果我们有这样一张图：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e1b8128cc4e497ba601f366a0b40b08~tplv-k3u1fbpfcp-watermark.image)

便可以利用 `border-image-slice` 及 `border-image-repeat` 的特性，得到类似的边框图案：

```CSS
div {
  width: 200px;
  height: 120px;
  border: 24px solid;
  border-image: url(image-url);
  border-image-slice: 32;
  border-image-repeat: round;
}
```
在这个基础上，可以随便改变元素的高宽，如此便能扩展到任意大小的容器边框中：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99c4a2f549be43b19db451cd302db99d~tplv-k3u1fbpfcp-watermark.image)

[CodePen Demo -- border-image Demo](https://codepen.io/Chokcoco/pen/oNzJeKd)

接着，在这篇文章 -- [How to Animate a SVG with border-image](https://css-tricks.com/how-to-animate-a-svg-with-border-image/) 中，还讲解了一种利用 `border-image` 的边框动画，非常的酷炫。

与上面例子不一样的是，我们只需要让我们的图案，动起来，就是我们需要这样一个背景图（掘金不支持 SVG 动图，[原图地址](https://skullctf.com/images/skull-border.svg)）：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/552672644b4f459db0f2e8a4ea1ea209~tplv-k3u1fbpfcp-watermark.image)

那么，我们也就能得到运动的边框图，代码完全一样，但是，边框是运动的：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce046136a20d436ba1ab8074b02d6372~tplv-k3u1fbpfcp-watermark.image)


效果如下：

<iframe height="400" style="width: 100%;" scrolling="no" title="Dancing Skull Border" src="https://codepen.io/Chokcoco/embed/XWjEgRq?height=400&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/Chokcoco/pen/XWjEgRq'>Dancing Skull Border</a> by Chokcoco
  (<a href='https://codepen.io/Chokcoco'>@Chokcoco</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>