import { useParams } from "react-router";
import { useEffect, useState } from "react";
import * as coursesClient from "../client";
import PeopleTable from "./Table"; 

export default function EnrolledUsers() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    const users = await coursesClient.findUsersForCourse(cid!);
    setUsers(users);
  };

  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  return (
    <div className="p-3">
      <h2>People in this course</h2>
      <PeopleTable users={users} />
    </div>
  );
}