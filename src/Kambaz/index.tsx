import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";

import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./Enrollments/reducer";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findAllCourses();
      setCourses(courses);
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

  const addNewCourse = async (course: any) => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const updateCourse = async (course: any) => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const handleToggleEnroll = (
    userId: string,
    courseId: string,
    isEnrolled: boolean
  ) => {
    if (isEnrolled) {
      dispatch(unenrollCourse({ user: userId, course: courseId }));
    } else {
      dispatch(enrollCourse({ user: userId, course: courseId }));
    }
  };

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    addNewCourse={addNewCourse}
                    updateExistingCourse={updateCourse}
                    deleteExistingCourse={deleteCourse}
                    toggleEnroll={handleToggleEnroll}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
            <Route
              path="/Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
