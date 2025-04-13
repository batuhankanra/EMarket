import { Request, Response } from "express";
import prisma from "../../lib/prisma";

export async function GetCategory(req:Request,res:Response): Promise<any>  {
    try{
      
      
        const categories=await prisma.category.findMany()
        return res.status(200).json(categories)
    }catch(err){
        console.log(err)
          res.status(500).json({msg:'Unexpected server error'})
    } 
}