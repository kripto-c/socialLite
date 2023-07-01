import { MouseEventHandler } from "react";
import "./ConfirmIMG.scss";

function ConfirmIMG({
  imgBase64,
  cancel,
}: {
  imgBase64: string;
  cancel: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div className="confirm-img">
      <div className="image-container">
        <img src={imgBase64} alt="" />
        <div className="buttons-img-change">
          <button id="cancelar" onClick={cancel}>
            Cancelar
          </button>
          <button id="confirmar">Confirmar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmIMG;
