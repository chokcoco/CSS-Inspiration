const gitalk = new Gitalk({
    clientID: '38238cb03b9966294d48',
    clientSecret: '2550a359e8369c93d7dd1259f9db3984a117387f',
    repo: 'CSS-Inspiration',
    owner: 'chokcoco',
    admin: ['chokcoco'],
    distractionFreeMode: true,
    id: md5(window.location.hash)
});

window.gittalk = gitalk;

gitalk.render('app');