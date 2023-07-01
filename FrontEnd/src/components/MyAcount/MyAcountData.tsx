import {
  ChangeEventHandler,
  useEffect,
  useState,
  useRef,
  MouseEventHandler,
} from "react";
import { IUserAcount } from "./MyAcountTypes";
import { useNavigate } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { ImBlocked } from "react-icons/im";
import ConfirmIMG from "./confirmProfileIMG/ConfirmIMG";
import { Link } from "react-router-dom";

function MyAcountData() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<IUserAcount>();
  const [viewChangeIMG, setViewChangeIMG] = useState<boolean>(false);
  const [userIMG, setUserIMG] = useState<string>("");

  const inputfile = useRef<HTMLInputElement>(null);

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setUserIMG(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const resetIMG: MouseEventHandler<HTMLButtonElement> = (e) => {
    setUserIMG("");
    if (inputfile.current) inputfile.current.value = "";
  };

  const changeNameUpper = (name: string) => {
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    return nameUpper;
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/");

    const data = localStorage.getItem("userAcount");
    if (!data) return;
    setUserData(JSON.parse(data));
  }, []);
  return userData ? ( // para asegurarse que solo se renderize cuando el estado "userData" tenga datos
    <>
      {userIMG.length > 0 && (
        <ConfirmIMG imgBase64={userIMG} cancel={resetIMG} />
      )}
      <div className="user-data">
        <div className="user-data-container">
          <div className="img-container">
            <div className="imgProfile">
              <img
                className="img-user"
                src={userData.profile_picture || "/UserDefault.svg"}
                alt="userPicture"
              />
            </div>
            <input
              type="file"
              id="setNewIMG"
              accept="image/*"
              ref={inputfile}
              onChange={handleChangeFile}
              style={{ display: "none" }}
            />
            <label htmlFor="setNewIMG" className="change-img-button">
              <AiOutlineCamera />
              Cambiar foto de Perfil
            </label>
            <p>(Recomendable 800x800)</p>
          </div>
          <div className="info-user">
            <h1 className="data-user">
              {changeNameUpper(userData.name)}{" "}
              {changeNameUpper(userData.lastName)}
            </h1>
            <p className="username data-user">@{userData.username}</p>
            <span></span>
            <div>
              <p className="data-user">Email: {userData.email}</p>
              <br />
              <p className="data-user">- {userData.birthdate}</p>
              <br />
              <div className="data-user">
                <Link to={`/friends/${userData._id}`}>
                  <FiUsers />
                  Ver lista de amigos
                </Link>
                <button></button>
                <Link to={`/user-blocked/${userData._id}`}>
                  <ImBlocked /> Ver lista de bloqueados
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form className="changePassword">
          <h2>Cambiar contraseña</h2>
          <div>
            <input type="text" placeholder="Nueva contraseña" />
            <input type="text" placeholder="Confirmar contraseña" />
          </div>
        </form>
      </div>
    </>
  ) : (
    <></>
  );
}

export default MyAcountData;
