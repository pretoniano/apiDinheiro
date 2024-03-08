import { Request, Response } from "express";
import { serviceCreate } from "../services/serviceCreate";
import { log } from "console";

class createUser {
  async create(req: Request, res: Response) {
    const { fullName, cpf, email, password, wallet } = 
    req.body as { fullName: string, cpf: string, email: string, password: string, wallet: number };

    const service = new serviceCreate();

    try {
    const serviceResponse = service.create({fullName, cpf, email, password, wallet});

    console.log(serviceResponse)
    res.status(201).json({message: "Usuario registrado com sucesso"})
    }
    catch(error) {
      res.status(500).json({message:"erro ao registrar usuário"})
    }
  }
}

export { createUser };
