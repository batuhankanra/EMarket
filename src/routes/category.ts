import { Router } from "express";
import { GetCategory } from "../controller/category/get";
import { AddCategory } from "../controller/category/add";
import { UpdateCategory } from "../controller/category/uptade";
import { DeleteCategory } from "../controller/category/delete";

const router=Router()


router.get('/',GetCategory)
router.post('/add',AddCategory)
router.put('/update/:id',UpdateCategory)
router.delete('/delete/:id',DeleteCategory)

export default router