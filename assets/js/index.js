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
    function (hook, vm) {
      hook.init(function() {
        window.addEventListener('click', async (e) => {
          const target = e.target;
          const label = vm.route.path.split("/").pop();

          if (target.className.indexOf('g-btn-like') === -1 || target.className.indexOf('is-liked') !== -1) {
            return;
          }

          target.setAttribute('class', 'g-btn-like like-active');
          localStorage.setItem(`id_${label}`, true);
          await addLike(label);
          await insertPvAndLike(label);
        }, true);
      });

      hook.beforeEach(function (html) {
        //console.log('beforeEach');
      });

      hook.doneEach(function () {
        const label = vm.route.path.split("/").pop();
        gitalkRender(vm, label);
        insertPvAndLike(label);
        insertLikeDOM(label);
        addPv(label);
      });
    }
  ]
}

async function insertPvAndLike(label) {
  const id = md5(label);
  const URL = '/getPageInfo';

  await axios.get(URL, {
    params: {
      id
    }
  })
  .then(function (res) {
    const data = res.data;
    
    if (!data.ret) {
      const { likes = 0, pv = 0, ct = new Date().getTime() } = data.data;
      console.log('likes pv', likes, pv);
      insertPvDOM(pv, likes, ct);
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function addPv(label) {
  const id = md5(label);
  const URL = '/getPageInfo/addpv';

  return await axios.post(URL, {
    id
  })
  .catch(function (error) {
    console.log(error);
  });
}

async function addLike(label) {
  const id = md5(label);
  const URL = '/getPageInfo/addlike';

  return await axios.post(URL, {
    id
  })
  .catch(function (error) {
    console.log(error);
  });
}

function insertPvDOM(pv, likes, ct) {
  const el = document.querySelector('.g-pv-container');

  if (el) {
    el.remove();
  }

  let domObj, divEle;

  domObj = Docsify.dom;

  divEle = domObj.create("div");
  divEle.className = "g-pv-container";
  divEle.innerHTML = `<span class="g-time">创建于 ${format(ct)}</span><span class="g-pv">阅读 ${pv}</span><span class="g-likes">喜爱 ${likes}</span>`;
  console.log('Docsify', Docsify);
  console.log('domObj.find("h2")', domObj.findAll("h2").pop());

  domObj.appendTo(document.querySelector('#main h2'), divEle);
}

function insertLikeDOM(label) {
  const el = document.querySelector('.g-btn-like-container');

  if (el) {
    el.remove();
  }

  const isLiked = localStorage.getItem(`id_${label}`);
  console.log('isLiked', isLiked);
  let domObj, divEle;

  domObj = Docsify.dom;

  divEle = domObj.create("div");
  divEle.className = "g-btn-like-container";
  divEle.innerHTML = `<div class='g-btn-like ${isLiked ? 'is-liked' : ''}'></div>`;

  domObj.appendTo(document.querySelector('.content'), divEle);
}

function gitalkRender(vm, label) {
  let domObj, main, divEle, gitalk;

  domObj = Docsify.dom;
  main = domObj.getNode("#main");

  Array.apply(
    null,
    document.querySelectorAll("div.gitalk-container")
  ).forEach(function (ele) {
    ele.remove();
  });

  divEle = domObj.create("div");
  divEle.id = "gitalk-container-" + label;
  divEle.className = "gitalk-container";
  divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
  domObj.appendTo(domObj.find(".content"), divEle);
  gitalk = new Gitalk(
    Object.assign(gitalkConfig, { id: !label ? "home" : label })
  );
  gitalk.render("gitalk-container-" + label);
}

function format(date, unit) {
  unit = unit || 'second';

  if (!date) {
    return '';
  }

  if (typeof date === 'string') return date;
  if (typeof date === 'number') {
    // 处理前后端标准时间戳相差 3 位的问题
    if (date.length === 10) {
      date *= 1000;
    }
  }

  date = new Date(date);

  const year = addLeadingZero(date.getFullYear());
  const month = addLeadingZero(date.getMonth() + 1);
  const day = addLeadingZero(date.getDate());
  const hour = addLeadingZero(date.getHours());
  const minute = addLeadingZero(date.getMinutes());
  const second = addLeadingZero(date.getSeconds());
  if (unit === 'year') return `${year}`;
  if (unit === 'month') return `${year}-${month}`;
  if (unit === 'day') return `${year}-${month}-${day}`;
  if (unit === 'hour') return `${year}-${month}-${day} ${hour}`;
  if (unit === 'minute') return `${year}-${month}-${day} ${hour}:${minute}`;
  if (unit === 'second')
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  if (unit === 'hour2second') return `${hour}:${minute}:${second}`;
  if (unit === 'reverseDay') return `${day} ${Months[+month - 1]} ${year}`;
}

const addLeadingZero = (t) => (t < 10 ? '0' : '') + t.toString();

