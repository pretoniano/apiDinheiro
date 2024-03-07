import express from "express";
import { Request, Response } from "express";

const userRouter = express.Router();

userRouter.get("/user", (req, res) => {
  console.log("parabéns, a rota está funcionando");
  res.send("ok");
});


export default userRouter;
