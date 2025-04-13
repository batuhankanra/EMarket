import { Router } from "express";
import userRouter from './user'
import categoryRouter from './category'
import productRouter from './product'


const routes=Router()

routes.use('/user',userRouter)
routes.use('/categories',categoryRouter)
routes.use('/product',productRouter)


export default routes