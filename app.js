import express from 'express';
import router from './router.js'

const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
    res.send('Hello, World');
})

app.use('/user', router)
app.use(express.json())

app.post('/users', (req, res) =>{
    const {name, email} = req.body
    res.json({
        message: `User: ${name}\nEmail: ${email}`
    })
})

app.put('/users/:id', (req, res)=>{
    const userID= req.params.id
    const {name, email} =req.body
    res.json({
        message: `User ${userID} updated to ${name}, ${email}`
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
