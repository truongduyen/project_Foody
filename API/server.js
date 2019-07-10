const express = require('express');
const http = require('http');
const app = express();
require('dotenv').config;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const indexRouter = require('../API/routers/index')
const PORT = process.env.PORT || 4000;

//app
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use('/', indexRouter)
app.use(bodyParser.urlencoded({extended: true,}))



const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`app is running on port ${PORT}. `)
})
