const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const videosData = require('./data.json');

app.use(bodyParser.json())

const {PORT, BACKEND_URL} = process.env

app.get('/videos', (_req, res) => {
  res.json(videosData);
})

app.get('/videos/:id', (req, res) => {
  const updatedVideo = videosData.find(video => video.id === req.params.id)
  const { id, title, channel, image, description, views, likes, duration, video, timestamp, comments } = updatedVideo
  res.json({
    id: id,
    title: title,
    channel: channel,
    image: image,
    description: description,
    views: views,
    likes: likes,
    duration: duration,
    video: video,
    timestamp: timestamp,
    comments: comments
  })
})

app.post('/videos', (req, res) => {
    const { newNextVideo, newHeroVideo } = req.body

    const nextVideoList = videosData.pop()
    nextVideoList.push(newNextVideo)
    
    videosData.push(newHeroVideo)
    videosData.push(nextVideoList)

  res.json(videosData)
})

app.listen(PORT, () => console.log(`Listening on ${BACKEND_URL}:${PORT}`));