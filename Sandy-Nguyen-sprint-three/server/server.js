const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const data = require('./data.json');

app.use(bodyParser.json())

const {PORT, BACKEND_URL} = process.env

app.get('/videos', (_req, res) => {
    res.json(data)
})

// app.get('/videos/:id', (_req, res) => {
//   let id = req.params.id;
//   let video = data.filter(video => video.id === id);
//   return res.json({message: 'Video Loaded', data: video})
// })

app.post('/videos', (req, res) => {
    const { id, title, channel, image, description, views, likes, duration, video, timestamp, comments } = req.body
  res.json([
    ...data, 
    {
      id,
      title,
      channel,
      image,
      description,
      views,
      likes,
      duration,
      video,
      timestamp,
      comments,
    }
  ])
})

app.listen(PORT, () => console.log(`Listening on ${BACKEND_URL}:${PORT}`));