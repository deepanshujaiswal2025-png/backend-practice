import express from 'express';
import {userFunction, searchFunction} from './controller.js';

const app = express();

const PORT = 3000;

//Set EJS as view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const userName = 'Elon Musk';
    res.render('index', {userName});
})
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
