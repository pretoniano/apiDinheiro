import { Request, Response } from "express";
import { serviceCreate } from "../services/serviceCreate";

class createUser {
  create(req: Request, res: Response) {
    console.log("acessado");
    const { name, email } = req.body as { name: string; email: string };

    const service = new serviceCreate();

    const serviceResponse = service.executar({name, email});

    res.send(serviceResponse);
  }
}

export { createUser };
