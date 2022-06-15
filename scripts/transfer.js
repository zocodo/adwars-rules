const fs = require('fs')
const axios = require('axios')
axios.get('https://raw.githubusercontent.com/jdlingyu/ad-wars/master/hosts').then((res) => {
  const { data } = res;
  const newdata = data.replace(/127\.0\.0\.1|localhost|::1/g, '')
  const hostarr = newdata.split(/[\r\n]+/);
  let text = '# modification time: ' + Date.now() + '\n';
  hostarr.forEach((item) => {
    item = item.replace(/\s|\#.+/g, '')
    if (item) {
      text += 'host-keyword, ' + item + ', AdBlock\n';
    }
  })
  fs.writeFile('./adwars-quantumultX.txt', text, function() {
    console.log('ok')
  });
})

