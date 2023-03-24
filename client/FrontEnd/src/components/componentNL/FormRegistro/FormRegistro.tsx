import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import Input from "./Input";
import { NewAcount, BirthDate } from "./FormInterface";
import { newUser } from "../../../GraphQL/createUser";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import "./FormRegistro.scss";

const initial = {
  name: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  birthdate: "",
};

const birthInitial = {
  dia: 0,
  mes: 0,
  año: 0,
};

function FormRegistro() {
  const [createUser, { data, loading, error }] = useMutation(newUser);
  const [birth, setBirth] = useState<BirthDate>(birthInitial);
  const [viewPassword, setViewPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const [registro, setRegistro] = useState<NewAcount>(initial);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const handleChangeBirthDate: ChangeEventHandler<HTMLSelectElement> = ({
    target: { name, value },
  }) => {
    if (name == "dia") {
      setBirth({ ...birth, dia: Number(value) });
    } else if (name == "mes") {
      setBirth({ ...birth, mes: Number(value) });
    } else if (name == "año") {
      setBirth({ ...birth, año: Number(value) });
    }
    return;
  };

  const days = () => {
    const dias = [];
    for (let a = 1; a <= 31; a++) {
      dias.push(a);
    }
    return dias.sort((a, b) => -1);
  };

  const month = () => {
    const meses = [];
    for (let a = 1; a <= 12; a++) {
      meses.push(a);
    }
    return meses.sort((a, b) => -1);
  };

  const years = () => {
    const años = [];
    const date = new Date();
    for (let a = 1980; a <= date.getFullYear(); a++) {
      años.push(a);
    }
    return años.sort((a, b) => -1);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const birthD = `${birth.dia}/${birth.mes}/${birth.año}`;
    const datos = registro;
    datos.birthdate = birthD;
    //===============//

    await createUser({ variables: datos });
  };

  const volver = (e: any) => {
    e.target.parentElement.parentElement.style.display = "none";
    navigate("/");
  };

  return (
    <div className="formRegistro">
      <h1>Formulario de registro</h1>
      {/* =====VALIDAR SI ESTA CARGANDO ===== */}
      {loading ? (
        <span className="load">
          <img src="/load.svg" alt="" />
        </span>
      ) : null}
      {/* =================================== */}

      {/* =====Si ya se registro se mostrara esta alerta ===== */}
      {data ? (
        <div className="registroExito">
          <span>
            <button onClick={volver}>X</button>
            <h1>Se envio un correo a</h1>
            <h2>{data.createUser.email}</h2>
            <div>
              <p>Con un enlace de verificacion</p>
              <p>(Solo dura 30 minutos)</p>
            </div>
          </span>
        </div>
      ) : null}
      {/* =====Si ya se registro se mostrara esta alerta ===== */}

      {/* =====Si ocurre un error se mostrara esta alerta ===== */}
      {error ? (
        <div className="error">
          <span>
            <button
              onClick={(e: any) => {
                window.location.reload();
              }}
            >
              X
            </button>
            <h1>Ocurrio un error</h1>
            <p>- {"el username ya fue ocupado" || error}</p>
          </span>
        </div>
      ) : null}
      {/* =====Si ocurre un error se mostrara esta alerta ===== */}

      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          inputName="Nombre"
          val={registro.name}
          type={"text"}
          onChange={handleChange}
        />
        <Input
          name="lastName"
          val={registro.lastName}
          inputName="Apellido"
          type={"text"}
          onChange={handleChange}
        />
        <Input
          name="username"
          val={registro.username}
          type={"text"}
          inputName="@Nombre de Usuario"
          onChange={handleChange}
        />
        <Input
          val={registro.email}
          name="email"
          inputName="Email"
          type={"text"}
          onChange={handleChange}
        />
        <div className="pass">
          <Input
            val={registro.password}
            name="password"
            type={viewPassword ? "text" : "password"}
            inputName="Contraseña"
            onChange={handleChange}
            className="passwordV"
          />
          <input
            type="checkbox"
            id="checkbox"
            onChange={() => setViewPassword(!viewPassword)}
          />
          {viewPassword ? (
            <label className="viewPass" htmlFor="checkbox">
              <img src="/icon/viewPass.png" alt="" />
            </label>
          ) : (
            <label className="viewPass" htmlFor="checkbox">
              <img src="/icon/noPass.png" alt="" />
            </label>
          )}
        </div>

        <div className="birthdate">
          <select
            defaultValue="disabled"
            name="dia"
            onChange={handleChangeBirthDate}
          >
            <option disabled value="disabled">
              Dia
            </option>
            {days().map((e: number) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          <select
            defaultValue="mes"
            name="mes"
            onChange={handleChangeBirthDate}
          >
            <option disabled value="mes">
              Mes
            </option>
            {month().map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>

          <select
            name="año"
            defaultValue="año"
            onChange={handleChangeBirthDate}
          >
            <option value="año" disabled>
              Año
            </option>
            {years().map((e) => {
              return (
                <option key={e} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
        <button
          className="boton"
          disabled={
            registro.email.length == 0 ||
            registro.name.length == 0 ||
            registro.lastName.length == 0 ||
            registro.password.length == 0 ||
            birth.dia == 0 ||
            birth.mes == 0 ||
            birth.año == 0 ||
            birth.año > 2006
          }
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default FormRegistro;
