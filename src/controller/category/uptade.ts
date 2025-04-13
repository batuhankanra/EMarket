import { Request, Response } from "express";
import prisma from "../../lib/prisma";
import { CategoryProps } from "../../types";

export async function UpdateCategory(req:Request<{id:string},{},CategoryProps>,res:Response): Promise<any>  {
    try{
        const {id}=req.params
        
        const body=req.body
        if(!id || !body.name ){
            return res.status(400).json({msg:'bad request'})
        }
        await prisma.category.update({
            where:{
                id:id
            },
            data:{
                name:body.name
            }
        })
        res.status(200).json({msg:'updated'})
        
    }catch(err){
        console.log(err)
          res.status(500).json({msg:'Unexpected server error'})
    } 
}