const express=require('express');
const cors=require('cors');
const authRouter=require('./routes/auth')
const blogsRouter=require('./routes/blogs')
const categoryRouter=require('./routes/category')
const app = express();
const  connectToDb=require('./config/db.js')
const PORT=9000;

connectToDb();

app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    console.log("API running...");
})

app.use('/api/v1',authRouter)
app.use('/api/v1',blogsRouter)
app.use('/api/v1',categoryRouter)

app.listen(PORT,()=>{
    console.log("Database Running...")
})