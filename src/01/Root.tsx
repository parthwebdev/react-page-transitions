import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

function Root() {
  return (
    <div className="h-[calc(100%-80px)] max-w-4xl mx-auto">
      <Navbar />

      <Outlet />
    </div>
  );
}

export default Root;
