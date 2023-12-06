import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-20 flex items-center justify-between">
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/preview">Preview</Link>
      </div>

      <h3 className="uppercase text-center font-bold">
        Page <br /> Transition
      </h3>
    </div>
  );
}
export default Navbar;
