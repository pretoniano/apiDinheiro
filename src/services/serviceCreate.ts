import userModel, { User } from "../models/user.model";

interface dataUser {
  fullName: string;
  cpf: string;
  email: string;
  password: string;
  wallet: number;
}

class serviceCreate {
  async create({ fullName, cpf, email, password, wallet }: dataUser) {
    
    //******cadastramento de usuario no mongo DB

    try{
        const user = new userModel({
            fullName,
            cpf,
            email,
            password,
            wallet
        })

        user.save()
        return {message: "usuario criado"}
    }
    catch(error) {
        console.log(`tivemos problema ao registrar o usuário: ${error}`)
    }
    
  }
}

export { serviceCreate };
