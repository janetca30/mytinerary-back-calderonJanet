import 'dotenv/config.js';
import './config/database.js'
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from './routes/index.js';
import cors from 'cors';

import {__dirname} from './utils.js'; 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(logger('dev'));                                     //para registrar peticiones HTTP
app.use(express.json());                                    //permite entradas y tambien trabajar con formato json
app.use(express.urlencoded({ extended: false }));           //permite capturar consultas complejas
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());                                             //permite origenes cruzados(front/back)

//router
app.use('/api', indexRouter);


//catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === '­development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
