import { Request, Response } from "express";
import userModel from "../models/user.model";
import transfer from "../services/serviceTransfer";


export const transferMoney = async (req: Request, res:Response) => {
    console.log("service acessado")
    try{
        transfer(req, res)

    }
    catch(error) {res.status(500).json({error: "erro ao processar a transferencia"})}
}