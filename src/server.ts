import { app } from "./app";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});

process.on("SIGINT", () => {
  server.close();
  console.log("servidor fechado");
});
