import express from 'express';
const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Hello, World');
})

app.get('/about', (req,res) => {
    res.send('This is the about page');
})

app.get('/contact', (req, res)=>{
    res.send('This is contact page')
})

app.get('/user/:username', (req, res)=>{
    const username= req.params.username
    res.send(`Hello, ${username}!`)
})

app.get('/search', (req, res)=>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
