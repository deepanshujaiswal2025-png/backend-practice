import express from 'express';
import {userFunction, searchFunction} from './controller.js';

const app = express();

const PORT = 3000;

app.post('/form', (req, res) => {
    console.log(req.body);
    res.send('Form received');
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
