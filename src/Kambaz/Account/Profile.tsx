import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      {profile && (
        <div>
      <Form.Control defaultValue={profile.username} id="username" className="wd-username mb-2"
                    onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
      <Form.Control defaultValue={profile.password}   id="password" className="wd-password mb-2" 
                    onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
      <Form.Control defaultValue={profile.firstName} id="wd-firstname" className="mb-2" 
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
      <Form.Control defaultValue={profile.lastName} id="wd-lastname" className="mb-2"
                    onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })} />
      <Form.Control defaultValue={profile.dob} id="wd-dob" className="mb-2" 
                    onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
      <Form.Control defaultValue={profile.email} type="email" id="wd-email" className="mb-2"
                    onChange={ (e) => setProfile({ ...profile, email: e.target.value })} />

      <Form.Select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
      defaultValue="FACULTY" id="wd-role" className="mb-2"  >
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </Form.Select>

      <Button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </Button>
      <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
        Sign out
      </Button>
        </div>
      )}
    </div>
);}
