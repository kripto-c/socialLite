import path from "node:path";
import fs from "node:fs";
import { IEmailConfig } from "./TypeEmail";
import { DataEmail } from "../graphql/resolve";

export const verifyAcoutn = (emailConfig: IEmailConfig, user: DataEmail) => {
  emailConfig.subject = "Verifica tu Cuenta";
  emailConfig.text = "Verifica tu Cuenta";
  let data = fs.readFileSync(
    path.join(__dirname, "html", "codeVerify.html"),
    "utf-8"
  );
  let nombre = `${user.name[0].toUpperCase() + user.name.slice(1)} ${
    user.lastname[0].toUpperCase() + user.lastname.slice(1)
  }`;

  data = data
    .replace("##NOMBRE##", nombre)
    .replace("##CODIGO##", user.codeVerify);
  emailConfig.html = data;
  return emailConfig;
};
