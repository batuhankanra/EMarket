import { Request, Response } from "express";
import prisma from "../../lib/prisma";


export async function GetUser(req:Request,res:Response) {
    try{
        const user =await prisma.user.findMany({})
        res.status(200).json(user)
    }catch(err){

    } 
}