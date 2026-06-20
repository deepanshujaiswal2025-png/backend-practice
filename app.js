import express from 'express';
import router from './router.js'

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req,res)=>{
    res.send({
        message:'Hello, World',
        name: "deepanshu",
        error: "no error"
    });
})

app.post('/', (req, res)=>{
    const data= req.body
    console.log(data.name)
    res.send({
        message: "data received", 
        data
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
