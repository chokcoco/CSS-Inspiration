const gitalkConfig = {
    clientID: '38238cb03b9966294d48',
    clientSecret: '2550a359e8369c93d7dd1259f9db3984a117387f',
    repo: 'CSS-Inspiration',
    owner: 'chokcoco',
    admin: ['chokcoco'],
    distractionFreeMode: false,
    language: "zh-CN",
}

window.$docsify = {
    loadSidebar: true,
    name: 'CSS Inspiration -- CSS灵感',
    repo: 'https://github.com/chokcoco/CSS-Inspiration',
    // 完整配置参数
    search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: "auto", // or 'auto'
        placeholder: '搜索效果或CSS关键字，优惠券 或者 clip-path',
        noData: 'No Results!',
        // 搜索标题的最大程级, 1 - 6
        depth: 2
    },
    plugins: [
        function(hook, vm) {
            hook.beforeEach(function(html) {
                //console.log('beforeEach');
            });
        
            hook.doneEach(function() {
                var label, domObj, main, divEle, gitalk;

                label = vm.route.path.split("/").pop();
                domObj = Docsify.dom;
                main = domObj.getNode("#main");

                Array.apply(
                    null,
                    document.querySelectorAll("div.gitalk-container")
                ).forEach(function(ele) {
                    ele.remove();
                });

                divEle = domObj.create("div");
                divEle.id = "gitalk-container-" + label;
                divEle.className = "gitalk-container";
                divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
                domObj.appendTo(domObj.find(".content"), divEle);
                console.log('gitalk', gitalk);
                gitalk = new Gitalk(
                    Object.assign(gitalkConfig, { id: !label ? "home" : label })
                );
                console.log('gitalk', gitalk);
                gitalk.render("gitalk-container-" + label);
            });
        }
      ]
}



// const gitalk = new Gitalk({
//     clientID: '38238cb03b9966294d48',
//     clientSecret: '2550a359e8369c93d7dd1259f9db3984a117387f',
//     repo: 'CSS-Inspiration',
//     owner: 'chokcoco',
//     admin: ['chokcoco'],
//     distractionFreeMode: true,
//     id: md5(window.location.hash)
// });

// window.gittalk = gitalk;

// gitalk.render('app');

