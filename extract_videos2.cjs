const https = require('https');

https.get('https://adibfarah569.wixsite.com/adibfarah/projects', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // Wix stores data in a JSON object inside the HTML usually
    const matches = data.match(/https:\/\/(www\.)?(youtube\.com|vimeo\.com|video\.wixstatic\.com)[^\s"']+/g);
    console.log('Found URLs:', matches ? [...new Set(matches)] : 'None');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
