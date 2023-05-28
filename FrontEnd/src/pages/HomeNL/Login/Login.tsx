import FormLogin from "../../../components/componentNL/FormLogin/FormLogin";
import { useMutation, useQuery } from "@apollo/client";
import { getLogin } from "../../../GraphQL/getLogin";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ValidateToken } from "../../../GraphQL/validateToken";
import { useLogin } from "../../../store/LoginStore/LoginStore";
import "./Login.scss";

export interface DataLogin {
  email: string;
  password: string;
}

function Login() {
  const loginStore = useLogin((state) => state);

  const navigate = useNavigate();
  const [error, setError] = useState();
  const [login, { loading, data }] = useMutation(getLogin);

  const getAcoutn = async (datos: DataLogin) => {
    try {
      const result = await login({ variables: datos });
      if (!result.data.login.verified) {
        localStorage.setItem("token", result.data.login.token);
        navigate(`/validate/${result.data.login._id}`);
      } else {
        loginStore.setLogin(result.data.login);
        navigate("/login/");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
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
