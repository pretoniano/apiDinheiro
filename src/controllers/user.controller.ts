import { Request, Response } from "express";

class createUser {
  create(req: Request, res: Response) {
    console.log("acessado");

    res.json({ message: "criado" });
  }
}

export { createUser };
