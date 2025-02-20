import { Form, Card, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  console.log(cid);
  const assignment = assignments.find(a => a._id === aid && a.course === cid);
  if (!assignment) {
    return <div className="container mt-4 text-danger">Assignment not found.</div>;
  }
  return (
    <div className="container mt-4">
      <Form id="wd-assignments-editor">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control id="wd-name" type="text" defaultValue={assignment.title} />
        </Form.Group>

        <Card className="mb-4">
          <Card.Body>
            <p>
              The assignment is <span className="text-danger">available online</span>
            </p>
            <p>
              Submit a link to the landing page of your Web application running
              on Netlify.
            </p>
            <p>The landing page should include the following:</p>
            <ul>
              <li>Your full name and section</li>
              <li>Links to each of the lab assignments</li>
              <li>Link to the Kanbas application</li>
              <li>Links to all relevant source code repositories</li>
            </ul>
            <p>
              The Kanbas application should include a link to navigate back to the landing page.
            </p>
          </Card.Body>
        </Card>

        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control id="wd-points" type="number" defaultValue={assignment.awards} />
          </Col>
        </Row>

        {/* <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row> */}

        {/* <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Row> */}

        {/* <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>
                <Form.Select id="wd-submission-type" className="mb-4">
                  <option value="online">Online</option>
                </Form.Select>

                <Form.Label className="mb-2 fw-bold">Online Entry Options</Form.Label>
                <Form.Check className="mb-2" id="wd-text-entry" type="checkbox" label="Text Entry" />
                  <Form.Check
                    id="wd-website-url"
                    type="checkbox"
                    label="Website URL"
                    defaultChecked
                  />
                  <Form.Check className="mb-2" id="wd-media-recordings" type="checkbox" label="Media Recordings" />
                  <Form.Check className="mb-2" id="wd-student-annotation" type="checkbox" label="Student Annotation" />
                  <Form.Check className="mb-2" id="wd-file-upload" type="checkbox" label="File Uploads" />
              </Card.Body>
            </Card>
          </Col>
        </Row> */}

        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>
                <Form.Label className="mb-2 fw-bold">Assign to</Form.Label>
                {/* <Form.Control className="mb-4" id="wd-assign-to" type="text" defaultValue="Everyone" /> */}
                <div className="form-control d-flex align-items-center">
                  <span className="bg-light px-3 py-1 border rounded me-2">Everyone
                    <span className="ms-4 text-muted" style={{ cursor: "pointer" }}>✕</span>
                  </span>
                </div>

                <Form.Label className="mb-2 fw-bold">Due</Form.Label>
                <Form.Control className="mb-4" id="wd-due-date" type="datetime-local" defaultValue={assignment.duetime} />

                <Row className="mb-2 align-items-center fw-bold">
                  <Col md={6} >
                    <Form.Label>Available from</Form.Label>
                  </Col>
                  <Col md={6}>
                  <Form.Label>Until</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2 align-items-center">
                  <Col md={6}>
                    <Form.Control id="wd-available-from" type="datetime-local" defaultValue={assignment.availabletime} />
                  </Col>
                  <Col md={6}>
                    <Form.Control id="wd-available-until" type="datetime-local" defaultValue={assignment.duetime} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <div className="text-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">
            Cancel
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}
