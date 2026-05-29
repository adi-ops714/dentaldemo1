const https = require('https');
https.get('https://www.pexels.com/search/dentist/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0'
  }
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const matches = [...data.matchAll(/src="(https:\/\/images\.pexels\.com\/photos\/\d+\/pexels-photo-\d+\.jpeg[^"]*)"/g)];
    const urls = matches.map(m => m[1]);
    console.log([...new Set(urls)].slice(0, 10));
  });
});
