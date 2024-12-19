import { Navigate } from "react-router-dom";

import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useAppSelector } from "../hooks/hook";

type PestrictedRouteProps = {
  children: React.ReactElement;
};

const RestrictedRoute = ({ children }: PestrictedRouteProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default RestrictedRoute;
