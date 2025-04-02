import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
export default function AccountNavigation() {
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
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
    </div>
);}
