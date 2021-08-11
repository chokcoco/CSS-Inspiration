const fs = require('fs');
const path = require("path");
const filePath = path.resolve(__dirname, './');

const ONLINE_URL = 'https://csscoco.com/inspiration/#/.';
const FILE_NAME = './_sidebar.md';
const FILE_NAME_README = './README.md';
const FILE_NAME_HASHMAP = './hashmap.js';
const FILE_NAME_ARR = [];
const HASHMAP = {};
const regExp = /([^\u4E00-\u9FA50-9a-zA-Z_])/g;

const contentName = {
  'layout': '布局（Layout）',
  'shadow': '阴影(box-shadow、drop-shadow)',
  'pesudo': '伪类/伪元素',
  'filter': '滤镜(fliter)',
  'border': '边框',
  'background': '背景/渐变(linear-gradient/radial-gradient/conic-gradient)',
  'blendmode': '混合模式（mix-blend-mode/background-blend-mode)',
  '3d': '3D',
  'animation': '动画/过渡(transition/animation)',
  'clippath': 'clip-path',
  'text': '文本类',
  'others': '综合',
  'cssdoodle': 'CSS-Doodle',
  'svg': 'svg',
}

async function readFile(filePath) {
  await initWrite();

  Object.keys(contentName).forEach(async item => {
    const curPath = path.resolve(filePath, item);
    const newContent = `\n## ${contentName[item]} \n\n`;
    writeFile(FILE_NAME, newContent);
    writeFile(FILE_NAME_README, newContent);

    const files =  fs.readdirSync(curPath)

    files.forEach(async name => {
      const contentData = fs.readFileSync(`${curPath}/${name}`,'utf-8');
      const title = contentData.split('\n')[0].split('## ')[1].replace(/[\r\n]/g,"");
      const appendContent = `+ [${title}](./${item}/${name}) \n`;
      const appendContentReadme = `+ [${title}](${ONLINE_URL}/${item}/${name}) \n`;
      const id = name.split('.')[0];

      FILE_NAME_ARR.push({
        id,
        name: title.replace(regExp, '')
      });
      HASHMAP[id] = true;

      writeFile(FILE_NAME, appendContent);
      writeFile(FILE_NAME_README, appendContentReadme);
    });

    console.log('HASHMAP', HASHMAP);

    writeFileHashMap();
  });
}

async function writeFile(name, data) {
  fs.appendFileSync(name, data,  function(err) {
    if (err) {
        return console.error(err);
    }

    console.log("数据写入成功！");
 });
}

async function initWrite() {
  const initData = `# CSS-Inspiration \n\n + [引言](./init.md) \n\n`;
  const initDataReadme = `![logo2.png](./images/logo2.png)\n\n这里可以让你寻找到使用或者是学习 CSS 的灵感，以分类的形式，展示不同 CSS 属性或者不同的课题使用 CSS 来解决的各种方法。\n\n## 在线预览\n\n[Online Pages](https://chokcoco.github.io/CSS-Inspiration/#/)\n`;

  fs.writeFileSync(FILE_NAME, initData, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log("初始化数据写入成功！");
  });

  fs.writeFileSync(FILE_NAME_README, initDataReadme, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log("初始化数据写入成功！");
  });
}

async function writeFileHashMap() {
  const data = `module.exports = ${JSON.stringify(HASHMAP)}`;

  fs.writeFileSync(FILE_NAME_HASHMAP, data, function(err) {

    if (err) {
        return console.error(err);
    }

    console.log("HASHMAP写入成功！");
  });
}

readFile(filePath);
