import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const navigate = useNavigate();
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  useEffect(() => {
    if (!token) {
      navigate("/Humic20242025-2");
    }
  }, [navigate, token]);

  return token ? <Outlet /> : null;
};

export default PrivateRoute;
