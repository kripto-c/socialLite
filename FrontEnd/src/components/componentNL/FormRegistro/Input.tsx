import React, { ChangeEventHandler, LegacyRef, useRef, useState } from "react";
import "./Input.scss";

interface Props {
  inputName: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  val: string;
  type: string;
  className?: string;
}

export function Input(props: Props) {
  const input = useRef<HTMLInputElement>(null);
  const [err, setErr] = useState<boolean>(false);
  const [msgErr, setMsgErr] = useState<string>("");

  const validate = () => {
    if (props.name == "email") {
      const regexEmail = /^\S+@\S+\.\S+$/;
      if (!regexEmail.test(props.val)) {
        setMsgErr("Email no valido");
        return setErr(true);
      }
    }

    const value: any = input.current?.value;
    setErr(value.length <= 3);
    setMsgErr("Debe tener mas de 3 caracteres");
  };

  return (
    <div className={props.className ? `input ${props.className}` : "input"}>
      <input
        ref={input}
        onBlur={validate}
        type={props.type}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        className={err ? "err" : ""}
      />
      {err ? <p className="errmsg">{msgErr}</p> : null}

      <label
        htmlFor={props.name}
        data-name={err ? "err" : ""}
        className={props.val.length ? "label" : ""}
      >
        {props.inputName}
      </label>
    </div>
  );
}

export default Input;
