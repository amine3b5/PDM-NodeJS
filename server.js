//import
import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// import cors from 'cors';
import { notFoundError } from './middlewares/error-handler.js';

import  userRoutes from './routes/user.js'
import  adminRoutes from './routes/admin.js'




const app = express()
const hostanme = "127.0.0.1"
const port = process.env.PORT || 9090;
//const databaseName = "examencoteserveur223sp";// hetha ynajim yetbadel   es
const databaseName = process.env.DB_NAME || "hackathon";
const db_url = process.env.DB_URL || `mongodb://127.0.0.1:27017`;

// app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }))
//DB
mongoose.set('debug', true)
mongoose.Promise = global.Promise;
mongoose
  .connect(`${db_url}/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch((err) => {
    console.log(err);
  });


app.use('/user', userRoutes)
app.use('/admin', adminRoutes)
app.use(notFoundError)


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});