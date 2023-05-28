import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { DataLogin } from "../../../pages/HomeNL/Login/Login";
import "./FormLogin.scss";

interface FormLog {
  email: string;
  password: string;
}

const initialForm = {
  email: "",
  password: "",
};

interface PropsLogin {
  get: (datos: DataLogin) => Promise<void>;
}

function FormLogin(props: PropsLogin) {
  const [formData, setFormData] = useState<FormLog>(initialForm);
  const [verPassword, setVerPassword] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.get(formData);
  };

  return (
    <div className="FormLogin">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleSubmit}>
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
