const https = require('https');
https.get('https://www.pexels.com/search/dentist/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html'
  }
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    let images = data.match(/https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg/g);
    if(images) {
      console.log([...new Set(images)].slice(0, 10));
    } else {
      console.log('No matches');
    }
  });
});
