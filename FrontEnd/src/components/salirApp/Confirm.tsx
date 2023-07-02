import { Dispatch, SetStateAction } from "react";
import "./Confirm.scss";

function Confirm({
  setExitApp,
}: {
  setExitApp: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="confirm-exit">
      <div className="container-confirm">
        <h1>Seguro que quiere salir de SociaLite?</h1>
        <div>
          <button onClick={() => setExitApp(false)}>Cancelar</button>
          <button onClick={() => closeApp()}>Salir</button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
