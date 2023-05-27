import { config } from "dotenv";
config();

export const MONGODB_URI =
  process.env.MONGO_URI_PROD || "mongodb://127.0.0.1/socialLite";

export const palabraclave = process.env.JSON_WORD || "palabra";

export const SERVER_PORT = process.env.PORT || 4000;

export const Service = process.env.emailSERVICE;
export const Pass = process.env.emailPASS;
export const User = process.env.emailUSER;
export const Port = process.env.emailPORT;
