import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import * as db from "./Database";
import { addCourse, updateCourse, deleteCourse } from "./Courses/reducer";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./Enrollments/reducer"; 

// export default function Dashboard({ courses, course, setCourse, addNewCourse,
//   deleteCourse, updateCourse }: {
//     courses: any[]; 
//     course: any; 
//     setCourse: (course: any) => void;
//     addNewCourse: () => void; 
//     deleteCourse: (courseId: string) => void;
//     updateCourse: () => void; })
//     {
  export default function Dashboard(){
    const courses = useSelector((state: any) => state.courseReducer.courses);
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
    const displayedCourses = showAllCourses
    ? courses
    : courses.filter((courseItem: any) =>
        enrollments.some(
          (enroll: any) =>
            enroll.userId === currentUser._id && enroll.courseId === courseItem._id
        )
      );

    // console.log("courses:", courses);
  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <Button
        variant="info"
        className="float-end mb-3"
        onClick={() => setShowAllCourses(!showAllCourses)}
      >
        {showAllCourses ? "Enrollments" : "All Courses"}
      </Button>
      <h5>New Course
          <button className="btn btn-primary float-end me-2"
                  id="wd-add-new-course-click"
                  onClick={() => {setSelectedCourse({
                    _id: uuidv4(),
                    name: "",
                    description: "",
                    src: "./images/reactjs.jpg",
                  });
            dispatch(addCourse(selectedCourse));}} > Add </button>
          <button className="btn btn-warning float-end me-2"
                  onClick={() => dispatch(updateCourse(selectedCourse))} id="wd-update-course-click">
          Update
        </button>
      </h5><hr />
      <br />
      <FormControl value={selectedCourse.name} className="mb-2"
              onChange={(e) => setSelectedCourse({ ...selectedCourse, name: e.target.value }) } />
      <FormControl as="textarea" value={selectedCourse.description} rows={3}
              onChange={(e) => setSelectedCourse({ ...selectedCourse, description: e.target.value }) } />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div className="row" id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        {displayedCourses.map((courseItem: any) => {
            const isEnrolled = enrollments.some(
              (enroll: any) =>
                enroll.userId === currentUser._id &&
                enroll.courseId === courseItem._id
            );
        
            return (
                <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                  <Card>
                    <Link to={`/Kambaz/Courses/${courseItem._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <Card.Img src={courseItem.src} variant="top" width="100%" height={160} />
                      <Card.Body className="card-body">
                        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {courseItem.name} </Card.Title>
                        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                          {courseItem.description} </Card.Text>
                        <Button variant="primary"> Go </Button>
                        <Button onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(courseItem._id));
                          }} className="btn btn-danger float-end"
                          id="wd-delete-course-click">
                          Delete</Button>
                        <Button id="wd-edit-course-click"
                          onClick={(event) => {
                          event.preventDefault();
                          setSelectedCourse(courseItem);}}
                          className="btn btn-warning me-2 float-end" >
                          Edit</Button>
                          <Button
                            variant={isEnrolled ? "danger" : "success"}
                            onClick={(event) => {
                              event.preventDefault();
                              if (isEnrolled) {
                                dispatch(
                                  unenrollCourse({
                                    userId: currentUser._id,
                                    courseId: courseItem._id,
                                  })
                                );
                              } else {
                                dispatch(
                                  enrollCourse({
                                    userId: currentUser._id,
                                    courseId: courseItem._id,
                                  })
                                );
                              }
                            }}
                            className="float-end m-2"
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                        </Button>
                      </Card.Body>
                    </Link>
                  </Card>
                </Col>
               );
              })}
        </Row>
      </div>
    </div>
);}
