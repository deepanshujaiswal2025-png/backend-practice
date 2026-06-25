import express from 'express';
import {userFunction, searchFunction} from './controller.js';

const app = express();

const PORT = 3000;

app.use((req,res,next) => {
    console.log('A new request received at '+Date.now());
    next();
})

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.get('/user/:username', userFunction)

app.get('/search', searchFunction)

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
