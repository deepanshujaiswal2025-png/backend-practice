import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;

app.use(cookieParser());

app.get('/', (req, res) => {
    res.cookie('name', 'backend-practice');
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})