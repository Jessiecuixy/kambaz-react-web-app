import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink to={`/Kambaz/Account/Signin`}
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`
        }>
        Signin
      </NavLink>

      <NavLink to={`/Kambaz/Account/Signup`}
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`
        }>
        Signup
      </NavLink>

      <NavLink to={`/Kambaz/Account/Profile`}
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`
        }>
        Profile
      </NavLink>
      {currentUser && currentUser.role === "ADMIN" && (
      <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
    </div>
);}
