import { Request, Response } from "express";
import prisma from "../../lib/prisma";


export async function DeleteCategory(req:Request<{id:string}>,res:Response):Promise<any> {
    try{
        const id =req.params.id
        if(!id){
            return res.status(400).json({msg:'bad request'})
        }
        await prisma.category.delete({
            where:{
                id
            }
        })
        return res.status(200).json({msg:'success delete'})

    }catch(err){
        console.log(err)
        return res.status(500).json({msg:'Unexpected server error'})
    }
}