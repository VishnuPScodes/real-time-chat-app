
import express from 'express';
import fs from 'fs';

const app = express();
app.get('/', (req, res) => {
    res.sendFile('./index.html');
})

app.get('/videoplayer', (req, res) => {
    const range = req.headers.range
    const videoPath = './video.mp4';
    const videoSize = fs.statSync(videoPath).size
    const chunkSize = 1 * 1e6;
    const start = 0
    const end = 10000000;
    console.log('end is', end);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206, headers)
    const stream = fs.createReadStream(videoPath, {
        start,
        end
    })
    stream.pipe(res)
})
app.listen(3000, () => {
    console.log('listening to the port 3000');
});