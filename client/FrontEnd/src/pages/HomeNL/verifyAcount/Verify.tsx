import { useParams } from "react-router-dom";
import { useState, useRef, FormEventHandler } from "react";
import { useQuery } from "@apollo/client";
import "./Verify.scss";
import { ValidateCode } from "../../../GraphQL/validateToken";
import { toast } from "sonner";

function VerifyAcoutn() {
  const params = useParams();
  const input = useRef<HTMLInputElement>(null);
  const [errForm, setErrForm] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [datosValidar, setDatosValidar] = useState<boolean>(false);

  const {
    loading: load,
    data: validate,
    error,
  } = useQuery(ValidateCode, {
    skip: !datosValidar,
    variables: { id: params.id, code: input.current?.value },
  });

  const checkCode: FormEventHandler = (e) => {
    e.preventDefault();
    if (input.current && input.current.value.length <= 8) {
      setErrForm(true);
    } else {
      setErrForm(false);
      setDatosValidar(true);
    }
  };

  if (validate) {
    toast.success("Cuenta verificada con Exito", {
      description: "Sera redirigido a la pagina principal",
    });
    setTimeout(() => {
      alert("HOME");
    }, 1000);
  }

  if (error) toast.error(error.message);

  console.log(params);
  return (
    <div className="content">
      <div className="form">
        <form>
          <h1>Ingresa tu codigo de verificacion</h1>
          <input
            className={errForm || err ? "error" : ""}
            type="text"
            ref={input}
            placeholder="Enter your code"
          />
          {errForm && <p>El codigo debe tener 9 digitos</p>}
          <div>
            <button>Cancelar</button>
            <button className="verificar" onClick={checkCode}>
              Verificar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VerifyAcoutn;
