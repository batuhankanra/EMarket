import express from 'express'
import routes from './routes/index'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app =express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/api',routes)

app.listen(3000,()=>{
    console.log('server is running')
})