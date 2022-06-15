const fs = require('fs')
const axios = require('axios')
const url = 'https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts'
axios.get(url).then((res) => {
  const { data } = res;
  const newdata = data.replace(/127\.0\.0\.1|localhost|::1/g, '')
  const hostarr = newdata.split(/[\r\n]+/);
  const now = new Date()
  let text = `# by: zocodo \n`;
  text += `# modification time: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}\n`;
  text += `# from: ${url}\n`;
  hostarr.forEach((item) => {
    if (/^\#/.test(item)) {
      text += item + '\n';
    } else {
      const host = item.replace(/\s|\#.+/g, '')
      if (host) {
        // text += 'host-keyword, ' + host + ', AdBlock\n';
        text += 'host, ' + host + ', AdBlock\n';

      }
    }
  })
  fs.writeFile('./adwars-quantumultX.txt', text, function() {
    console.log('ok')
  });
})

