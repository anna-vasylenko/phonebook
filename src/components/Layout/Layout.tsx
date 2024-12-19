import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../AppBar/AppBar";
import Loader from "../Loader/Loader";

const Layout: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
