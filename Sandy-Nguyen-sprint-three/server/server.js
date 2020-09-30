const axios = require('axios');
const express = require('express');
const app = express();
require('dotenv').config();

// const PORT = process.env.PORT
// const BACKEND_URL = process.env.BACKEND_URL

const {PORT, BACKEND_URL} = process.env

app.get('/', (req, res) => {
    res.send('Hello Sandy')
})

app.listen(PORT, () => console.log(`Started on ${BACKEND_URL} ${PORT}`));