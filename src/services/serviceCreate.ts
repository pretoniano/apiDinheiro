
interface User {
    name:string,
    email:string
}

class serviceCreate {
    executar({ name, email }: User) {
        console.log("chegou ao serviço")
        console.log("criando usuário")
        
        
        return {ok: true}
    }
}

export { serviceCreate }