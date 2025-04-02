import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const { profileLoaded } = useSelector((state: any) => state.accountReducer);

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
      dispatch(setCurrentUser(null));
    }
    setPending(false);
  };

  useEffect(() => {
    if (!profileLoaded) {
      fetchProfile();
    } else {
      setPending(false);
    }
  }, [profileLoaded]);

  if (!pending) {
    return children;
  }
}
