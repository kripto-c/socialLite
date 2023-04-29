import { useState } from "react";
import FormRegistro from "../../../components/componentNL/FormRegistro/FormRegistro";
import { useMutation } from "@apollo/client";
import { newUser } from "../../../GraphQL/createUser";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import "./Registrarse.scss";

export interface NewData {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
}

interface Result {
  lastName: string;
  email: string;
  name: string;
  username: string;
  _id: string;
}

function Registrarse() {
  const navigate = useNavigate();
  const [error, setError] = useState<any>(undefined);
  const [createUser, { data, loading }] = useMutation(newUser);

  const handleSubmit = async (datos: NewData) => {
    try {
      await createUser({ variables: datos });
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  const registroExito = (email: string) => {
    toast.success("Registrado con exito", {
      description: `Se envio un correo con un codigo de Verificacion a ${email}`,
    });
    setTimeout(() => {
      toast.message("No ve el mensaje?", {
        description: `Revise la carpeta de span - contacte con nosotros - correo@gmail.com`,
      });
    }, 500);
    navigate("/");

    return <span></span>;
  };

  return (
    <div className="registro">
      <FormRegistro submit={handleSubmit} />
      {loading ? (
        <div className="modal">
          <img className="load" src="/icon/load.svg" alt="" />
        </div>
      ) : null}
      {error !== undefined
        ? // <div className="modal">
          //   <div className="div-err">
          //     <h1>Ocurrio un error!</h1>
          //     <p>{error.message}</p>
          //     <div className="cerrar">
          //       <button
          //         onClick={() => {
          //           setError(undefined);
          //         }}
          //       >
          //         Cerrar
          //       </button>
          //     </div>
          //   </div>
          // </div>
          toast.error("Ocurrio un error", {
            description: `${error.message}`,
          })
        : null}
      {data
        ? // <div className="modal">
          //   <div className="registroCompleto">
          //     <h1>Registro Completo</h1>
          //     <h2>
          //       Se envio un enlace de verificacion a {data.createUser.email}
          //     </h2>
          //     <p>Solo dura 30 minutos</p>
          //     <div className="btn">
          //       <button onClick={() => navigate("/")}>Cerrar</button>
          //       {toast.success(
          //         "Se envio un correo con un codigo de Verificacion"
          //       )}
          //     </div>
          //   </div>
          // </div>
          registroExito(data.createUser.email)
        : null}
    </div>
  );
}

export default Registrarse;
