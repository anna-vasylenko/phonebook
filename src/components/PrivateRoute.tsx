import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../hooks/hook";

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
