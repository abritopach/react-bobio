import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import passengerRouter from './Routes/passengerRouter';

const app = express();
const port = process.env.PORT || 5656;
// routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/passengers', passengerRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

const db = mongoose.connect('mongodb://localhost:27017/NodeRest');