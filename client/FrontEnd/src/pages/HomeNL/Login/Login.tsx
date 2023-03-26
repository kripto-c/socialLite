import FormLogin from "../../../components/componentNL/FormLogin/FormLogin";
import { useMutation, useQuery } from "@apollo/client";
import { getLogin } from "../../../GraphQL/getLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ValidateToken } from "../../../GraphQL/validateToken";
import { isLogin } from "../../../store/store";
import "./Login.scss";

export interface DataLogin {
  email: string;
  password: string;
}

function Login() {
  const log = isLogin((state) => state.log);
  const setLogin = isLogin((state) => state.setLogin);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [validar, setValidar] = useState<boolean>(false);
  const [datosValidar, setDatosValidar] = useState<string>("");
  const [login, { loading, data }] = useMutation(getLogin);
  const { loading: load, data: validate } = useQuery(ValidateToken, {
    skip: !datosValidar,
    variables: { token: datosValidar },
  });

  const getAcoutn = async (datos: DataLogin) => {
    try {
      await login({ variables: datos });
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (data) {
    localStorage.setItem("userAcount", JSON.stringify(data.login));
    navigate("/login");
    setLogin(true);
  } else if (validate) {
    localStorage.setItem("userAcount", JSON.stringify(validate.validarToken));
    navigate("/login");
    setLogin(true);
  }

  useEffect(() => {
    const userData = localStorage.getItem("userAcount");
    if (userData != undefined) {
      setValidar(true);
      setDatosValidar(JSON.parse(userData).token);
      setLogin(true);
    }
  }, []);

  return validar ? (
    <div className="validar">
      <img src="/icon/load.svg" alt="" />
    </div>
  ) : (
    <div className="Login">
      {loading ? (
        <div className="modal">
          <img src="/icon/load.svg" alt="" />
        </div>
      ) : null}
      {error ? (
        <div className="modal-Err">
          <div className="adv">
            <p>{error}</p>
            <button onClick={() => setError(undefined)}>X</button>
          </div>
        </div>
      ) : null}
      <FormLogin get={getAcoutn} />
    </div>
  );
}

export default Login;
