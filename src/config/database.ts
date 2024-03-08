import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://pretoniano:projeto123@clientes.le1cfhp.mongodb.net/?retryWrites=true&w=majority&appName=Clientes";

    const connection = await mongoose.connect(uri,);
    console.log(`Conectado ao MongoDB: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Erro na conexão ao MongoDB:`, error);
  }
};

export default connectDB;
