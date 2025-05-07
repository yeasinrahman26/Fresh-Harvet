import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `welcome ${user.displayName}`,
          showConfirmButton: false,
          timer: 1000,
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div>
        <button onClick={handleGoogle} className="btn bg-white font-bold ">
          <FaGoogle className="text-red-500  to text-xl " /> Google 
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
