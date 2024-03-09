import express from "express";
import { Request, Response } from "express";
import { transferMoney } from "../controllers/transfer.controller";

const transferRouter = express.Router();

transferRouter.post("/money", (req: Request, res: Response) => {
    return transferMoney(req, res)
})

export default transferRouter;