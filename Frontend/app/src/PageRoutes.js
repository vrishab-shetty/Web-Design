import { Outlet } from "react-router-dom";
import { AppNavbar } from "./navbar/Navbar";

export const PageRoutes = () => {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
};
