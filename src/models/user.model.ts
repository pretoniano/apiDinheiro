import { Schema, Document } from "mongoose";
import mongoose from "mongoose";

export interface User extends Document {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  wallet: number;
}

const userSchema = new Schema({
  fullName: { type: String, required: true },
  cpf: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  wallet: { type: Number, default: 0 },
});

export default mongoose.model<User>("User", userSchema);
