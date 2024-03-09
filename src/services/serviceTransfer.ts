import userModel from "../models/user.model";
import mongoose from "mongoose";
import { Request, Response } from "express";


const transfer = async (req: Request, res: Response) => {
    try{
        //*****tratamento de dados******
        const {cpfRevender, cpfStore, amount} = req.body as {cpfRevender: string, cpfStore: string, amount: number}

        const revender = await userModel.findOne({cpf: cpfRevender})

        if(!revender) {
            res.status(404).json({error: "revendedor não encontrado"})
            return 
        }

        if (revender.wallet < amount) {
            res.status(400).json({error: "saldo insuficiente para realizar a transferencia"})
            return
        }

        //*****iniciando a transação****
        const session = await mongoose.startSession()
        session.startTransaction()

        try{
            //atualizacao de revendedor
            
            revender.wallet -= amount
            await revender.save()

            //atualizacao de lojista
            const store = await userModel.findOneAndUpdate(
                {cpf:cpfStore},
                {$inc: { wallet: amount } },
                { new: true }
            )

            if (!store) {
                throw new Error("Destinatario não encontrado")
            }

            await session.commitTransaction()
            session.endSession()
            
            res.status(200).json({message: "transferencia concluida com sucesso"})
            return {ok:true}
        }
        catch(error) {
            await session.abortTransaction();
            session.endSession();

            res.status(500).json({error:"erro ao realizar a transferencia"})
        }

    }
    catch(error) {res.status(500).json({error: "erro ao realizar a transacao"})}
}
export default transfer