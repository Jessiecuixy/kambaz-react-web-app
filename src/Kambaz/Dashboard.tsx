import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as enrollmentsClient from "./Enrollments/client";

export default function Dashboard({
  courses,
  addNewCourse,
  updateExistingCourse,
  deleteExistingCourse,
}: {
  courses: any[];
  addNewCourse: (course: any) => void;
  updateExistingCourse: (course: any) => void;
  deleteExistingCourse: (courseId: string) => void;
  toggleEnroll: (userId: string, courseId: string, isEnrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const dispatch = useDispatch();

  const [selectedCourse, setSelectedCourse] = useState({
    _id: uuidv4(),
    name: "",
    description: "",
    src: "/images/reactjs.jpg",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);

  const displayedCourses =
    currentUser.role === "STUDENT"
      ? showAllCourses
        ? courses
        : courses.filter((courseItem: any) =>
            enrollments.some(
              (enroll: any) =>
                enroll.user === currentUser._id && enroll.course === courseItem._id
            )
          )
      : courses;

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser && currentUser.role === "STUDENT" && (
        <Button
          variant="info"
          className="float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Enrollments" : "All Courses"}
        </Button>
      )}

      {currentUser && currentUser.role === "FACULTY" && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end me-2"
              id="wd-add-new-course-click"
              onClick={() => {
                const courseToAdd = {
                  ...selectedCourse,
                  _id: uuidv4(),
                };
                addNewCourse(courseToAdd);
                setSelectedCourse({
                  _id: uuidv4(),
                  name: "",
                  description: "",
                  src: "/images/reactjs.jpg",
                });
              }}
            >
              Add
            </button>

            <button
              className="btn btn-warning float-end me-2"
              id="wd-update-course-click"
              onClick={() => updateExistingCourse(selectedCourse)}
            >
              Update
            </button>
          </h5>
          <hr />
          <br />
          <FormControl
            value={selectedCourse.name}
            className="mb-2"
            placeholder="New Course"
            onChange={(e) =>
              setSelectedCourse({ ...selectedCourse, name: e.target.value })
            }
          />
          <FormControl
            as="textarea"
            value={selectedCourse.description}
            rows={3}
            placeholder="New Description"
            onChange={(e) =>
              setSelectedCourse({ ...selectedCourse, description: e.target.value })
            }
          />
        </div>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div className="row" id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((courseItem: any) => {
            const isEnrolled = enrollments.some(
              (enroll: any) =>
                enroll.user === currentUser._id &&
                enroll.course === courseItem._id
            );

            return (
              <Col
                className="wd-dashboard-course"
                style={{ width: "300px" }}
                key={courseItem._id}
              >
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${courseItem._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      src={courseItem.src}
                      variant="top"
                      width="100%"
                      height={160}
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {courseItem.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {courseItem.description}
                      </Card.Text>
                      <Button variant="primary">Go</Button>

                      {currentUser && currentUser.role === "FACULTY" && (
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteExistingCourse(courseItem._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </Button>
                      )}

                      {currentUser && currentUser.role === "FACULTY" && (
                        <Button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setSelectedCourse(courseItem);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </Button>
                      )}

                      {currentUser && currentUser.role === "STUDENT" && (
                        <Button
                          variant={isEnrolled ? "danger" : "success"}
                          onClick={async (event) => {
                            event.preventDefault();
                            const enrollment = {
                              user: currentUser._id,
                              course: courseItem._id,
                            };
                            if (isEnrolled) {
                              await enrollmentsClient.unenrollCourse(enrollment);
                              dispatch({ type: "enrollments/unenrollCourse", payload: enrollment });
                            } else {
                              await enrollmentsClient.enrollCourse(enrollment);
                              dispatch({ type: "enrollments/enrollCourse", payload: enrollment });
                            }
                        }}
                          className="float-end"
                        >
                          {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
