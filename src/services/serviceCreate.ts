interface dataUser {
  name: string;
  email: string;
}

class serviceCreate {
  executar({ name, email }: dataUser) {
    console.log(name);
    console.log(email);

    return { ok: true };
  }
}

export { serviceCreate };
