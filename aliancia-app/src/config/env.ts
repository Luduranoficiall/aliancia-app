import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3333;

export const env = {
  port: Number(PORT),
  nodeEnv: process.env.NODE_ENV || "development"
};
