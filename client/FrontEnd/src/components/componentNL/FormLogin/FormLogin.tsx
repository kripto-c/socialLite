import { ChangeEventHandler, useState } from "react";
import { login } from "../../GraphQL/getLogin";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import "./FormLogin.scss";

interface FormLog {
  email: string;
  password: string;
}

const initialForm = {
  email: "",
  password: "",
};

function FormLogin() {
  const [formData, setFormData] = useState<FormLog>(initialForm);
  const [verPassword, setVerPassword] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="FormLogin">
      <h1>Iniciar Sesion</h1>
      <form>
        <div className="email">
          <input id="email" type="text" onChange={handleChange} name="email" />
          <label
            htmlFor="email"
            className={formData.email.length ? "label" : ""}
          >
            Email
          </label>
        </div>
        <div className="password">
          <input
            type={verPassword ? "text" : "password"}
            onChange={handleChange}
            name="password"
            id="pass"
          />
          <label
            htmlFor="pass"
            className={formData.password.length ? "label" : ""}
          >
            Password
          </label>
          <div className="check">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setVerPassword(!verPassword)}
            />
            {verPassword ? (
              <label htmlFor="checkbox">
                <img src="/icon/viewPass.png" alt="" />
              </label>
            ) : (
              <label htmlFor="checkbox">
                <img src="/icon/noPass.png" alt="" />
              </label>
            )}
          </div>
        </div>
        <button
          className="boton"
          disabled={formData.email.length == 0 || formData.password.length == 0}
        >
          Iniciar Sesion
        </button>
      </form>
      <div className="link">
        <Link to="/registrarse">
          No tienes Cuenta? <span>Registrate</span>
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
