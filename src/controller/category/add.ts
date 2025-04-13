import { Request, Response } from "express";
import { CategoryProps } from "../../types";
import prisma from "../../lib/prisma";


export async function AddCategory(req:Request<{},{},CategoryProps>,res:Response): Promise<any> {
    try{
        const body=req.body
        if(!body.userId || !body.name ){
            return res.status(400).json('Please fill in the blanks.')
        }
        await prisma.category.create({
            data:{
                name:body.name,
                userid:body.userId
            }
        })
        return res.status(201).json({msg:'Category created!'})
    }
    catch (err){
        console.log(err)
        return res.status(500).json({msg:'unknown error '})
    }
}