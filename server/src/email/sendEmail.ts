import nodemailer from "nodemailer";
import * as emailData from "../config";
import { DataEmail, UserTypes } from "../graphql/resolve";
import { verifyAcoutn } from "./controllers";
import { IEmailConfig } from "./TypeEmail";

async function main(user: DataEmail, typeEmail: string) {
  let transporter = nodemailer.createTransport({
    host: emailData.Service,
    port: Number(emailData.Port),
    secure: true,
    auth: {
      user: emailData.User,
      pass: emailData.Pass,
    },
  });
  let emailConfig: IEmailConfig = {
    from: `"${typeEmail}" <${emailData.User}>`,
    to: user.email,
    subject: "",
    text: "",
    html: "",
  };

  switch (typeEmail) {
    case "VERIFICAR CUENTA":
      const data = verifyAcoutn(emailConfig, user);
      emailConfig = data;
  }

  await transporter.sendMail(emailConfig);
}

export default main;
