import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
// import { courses } from "../Database";

import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import PeopleTable from "./People/Table";

export default function Courses() {
    const { cid } = useParams();
    const courses = useSelector((state: any) => state.courseReducer.courses);
    const course = courses.find((course: any) => course._id === cid);
    const { pathname } = useLocation();
    const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isEnrolled = enrollments.some(
      (enroll: any) => enroll.user === currentUser._id && enroll.course === cid
  );

  if (currentUser && currentUser.role === "STUDENT" && !isEnrolled) {
      return <Navigate to="/Kambaz/Dashboard" replace />;
  }
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name}  &gt; {pathname.split("/")[4]} </h2>
        <hr />
        <div className="d-flex">
          <div className="d-none d-md-block">
            <CourseNavigation />
          </div>
          <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/Editor" element={<AssignmentEditor />} /> 
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </div>
        </div>
      </div>
  );}
  