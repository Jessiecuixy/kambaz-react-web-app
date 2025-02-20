import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
              <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <Card.Img src={course.src} variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </Card.Title>
                      <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </Card.Text>
                      <Button variant="primary"> Go </Button>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          {/* <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5100.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5100 Foundation Artificial Intelligence </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    AI Foundation technology  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5610.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5610 Web Development </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5800.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5800 Algorithm </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Methods for solving problems  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5200.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5200 Database </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Organized data storage  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5008.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5008 Data Structure </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Data organization format  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5004.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5004 Object-Oriented Design </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Design with objects  </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>

          <Col className="wd-dashboard-course" style={{ width: "260px" }}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home"
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/cs5002.jpg" width={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS5002 Discrete Structures </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Mathematical structures for computation </Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col> */}
        </Row>
      </div>
    </div>
);}
