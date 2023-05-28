import { Dispatch, SetStateAction } from "react";
import { useLogin } from "../../../store/LoginStore/LoginStore";
import { useNavigate } from "react-router-dom";
import "./CerrarSession.scss";

interface Props {
  set: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}
function CerrarSession({ set, value }: Props) {
  const navigate = useNavigate();

  const loginStore = useLogin((state) => state);

  const cerrar = () => {
    localStorage.removeItem("userAcount");
    loginStore.exitSession();
    set(!value);
    navigate("/");
  };

  const cancelar = () => {
    set(!value);
  };

  return (
    <div className="cs">
      <div className="cont">
        <h1>Cerrar Session</h1>
        <div className="button">
          <button onClick={cerrar}>Aceptar</button>
          <button onClick={cancelar}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default CerrarSession;
