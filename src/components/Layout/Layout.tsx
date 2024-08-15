import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="w-full grow">
        <Outlet />
      </div>
    </div>
  );
}
