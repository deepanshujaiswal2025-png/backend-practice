import express from 'express';
import multer from 'multer';

const app = express();
const upload = multer();

const PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(upload.array());

app.get('/', (req, res) => {
    res.send('Hi, this is an Express server');
})

app.post('/', (req, res) => {
    
})

app.post('/form', (req, res) => {
    console.log(req.body);
    res.send('Form received');
})

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})
