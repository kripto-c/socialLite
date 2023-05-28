import path from "path";
import fs from "fs";
import { IEmailConfig } from "./TypeEmail";
import { DataEmail } from "../graphql/resolverTypes";

export const verifyAcoutn = (emailConfig: IEmailConfig, user: DataEmail) => {
  emailConfig.subject = "Verifica tu Cuenta";
  emailConfig.text = "Verifica tu Cuenta";

  let emailBody = fs.readFileSync(
    path.join(__dirname, "html", "codeVerify.html"),
    "utf-8"
  );

  let nombre = `${user.name[0].toUpperCase() + user.name.slice(1)} ${
    user.lastname[0].toUpperCase() + user.lastname.slice(1)
  }`;

  emailBody = emailBody
    .replace("##NOMBRE##", nombre)
    .replace("##CODIGO##", user.codeVerify);

  emailConfig.html = emailBody;
  return emailConfig;
};
