import useQuestionStore from "../../store/zustand";
import { Link } from "react-router-dom";

function Navbar() {
  const { auth, logoutUser } = useQuestionStore();
  return (
    <nav className="w-full b-transparent text-neutral-900 px-5 md:px-10 flex items-center justify-between py-5 text-sm border-b-slate-200 border">
      <h1 className="text-dodgerblue-500 text-2xl font-bold tracking-tight flex items-center gap-1">
        Take <span className="text-neutral-900">Quiz</span>
      </h1>
      <div className="space-x-5">
        {!auth?.email && (
          <Link
            className="py-2px px-5 text-orange-500 font-semibold border rounded-full border-orange-500"
            to={"./login"}
          >
            Log in
          </Link>
        )}
      </div>
      {auth?.email? (
        <button className="py-2 transition px-5 text-neutral-50 font-semibold rounded-full bg-red-600"
        onClick={logoutUser}
        ></button>
):(
    <Link
    className="py-2 transaction px-5 text-neutral-50 fonr-semibold rounded-full bg-orange-500" to={"/register"}>
   Register
    </Link>
      )}
    </nav>
  );
}
export default Navbar;
