import * as client from "./client";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin =  async () => {
    // console.log("Sign in button clicked!")
    // console.log("Database users:", db.users);
    // console.log("Entered username:", credentials.username);
    // console.log("Entered password:", credentials.password);
    const user = await client.signin(credentials);
    if (!user) 
      return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control 
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            id="wd-username"
            placeholder="username"
            className="mb-2"/>
      <Form.Control 
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            id="wd-password"
            placeholder="password" type="password"
            className="mb-2"/>
      <Button onClick={signin} id="wd-signin-btn"
            className="btn btn-primary w-100 mb-2">
            Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div> );}
