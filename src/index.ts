import express from 'express'
import routes from './routes/index'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
 
dotenv.config()
const app =express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.set("trust proxy",true)

app.use('/api',routes)

app.listen(3000,()=>{
    console.log('server is running')
})