import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div id="top" className="flex flex-col min-h-screen" >
      <Navbar/>
      <main className="flex-1">
        <Outlet />
      </main>     
    </div>
  );
}
