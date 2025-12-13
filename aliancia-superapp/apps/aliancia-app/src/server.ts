
import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { alianciaRouter } from "./modules/aliancia/routes/aliancia.routes";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const app = express();


// Middlewares básicos
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API ALIANCI.A",
      version: "1.0.0",
      description: "Documentação automática da API ALIANCI.A"
    },
  },
  apis: ["./src/**/*.ts"],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rota de status (healthcheck)
app.get("/api/v1/status", (_req, res) => {
  return res.json({
    status: "ok",
    message: "API ALIANCI.A rodando com sucesso",
    env: env.nodeEnv
  });
});

// Rotas da ALIANCI.A
app.use("/api/v1/aliancia", alianciaRouter);

// Middleware de rota não encontrada
app.use((_req, res) => {
  return res.status(404).json({
    error: "Rota não encontrada",
    message: "Verifique o caminho e tente novamente."
  });
});

// Inicializa servidor
app.listen(env.port, () => {
  console.log(`🚀 Servidor ALIANCI.A rodando na porta ${env.port}`);
});
