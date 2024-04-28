import { Navigate } from "react-router-dom";
import { useAuth } from "../../stores/useAuth";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={"/"} />;
};

export default PublicRoute;
