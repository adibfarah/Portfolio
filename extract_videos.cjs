const https = require('https');

https.get('https://adibfarah569.wixsite.com/adibfarah/projects', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const iframes = data.match(/<iframe[^>]+src="([^">]+)"/g);
    const videos = data.match(/<video[^>]+src="([^">]+)"/g);
    const wixVideos = data.match(/video.wixstatic.com[^"'\s]+/g);
    const youtube = data.match(/youtube\.com\/embed\/[^"'\s?]+/g);
    const vimeo = data.match(/player\.vimeo\.com\/video\/[^"'\s?]+/g);
    
    console.log('YouTube:', youtube ? [...new Set(youtube)] : 'None');
    console.log('Vimeo:', vimeo ? [...new Set(vimeo)] : 'None');
    console.log('Wix Videos:', wixVideos ? [...new Set(wixVideos)] : 'None');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
