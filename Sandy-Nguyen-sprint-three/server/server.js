const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const data = require('./data.json');
const fs = require('fs');

app.use(bodyParser.json())

const {PORT, BACKEND_URL} = process.env

app.get('/videos', (_req, res) => {
    res.json(data)
})

app.get('/videos/:id', (req, res) => {
  const updatedVideo = data.find(video => video.id === req.params.id)
  res.json({
    id: updatedVideo.id,
    title: updatedVideo.title,
    channel: updatedVideo.channel,
    image: updatedVideo.image,
    description: updatedVideo.description,
    views: updatedVideo.views,
    likes: updatedVideo.likes,
    duration: updatedVideo.duration,
    video: updatedVideo.video,
    timestamp: updatedVideo.timestamp,
    comments: updatedVideo.comments
  })
})

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