import express from "express";
import { Request, Response } from "express";
import { createUser } from '../controllers/user.controller'

const userRouter = express.Router();
const createuser = new createUser;

userRouter.get("/teste", (req, res) => {
  console.log("parabéns, a rota está funcionando");
  res.send("ok");
});

userRouter.post("/register", (req:Request, res:Response) => {
  return createuser.create(req, res);
})


export default userRouter;
