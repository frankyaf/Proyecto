import { useNavigate } from "react-router-dom";

function LogoutButton(){
    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");

        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                padding: "8px 16px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}
        >
        Logout
        </button>
    );
}

export default LogoutButton;