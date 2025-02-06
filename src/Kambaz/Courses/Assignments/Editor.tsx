import { Form, Button, Card, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <Form id="wd-assignments-editor">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control id="wd-name" type="text" defaultValue="A1" />
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
            <Form.Control id="wd-points" type="number" defaultValue="100" />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
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
        </Row>

        <Row className="mb-3 align-items-center">
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
                <Form.Control className="mb-4" id="wd-due-date" type="datetime-local" defaultValue="2024-05-13T23:59" />

                <Row className="mb-2 align-items-center fw-bold">
                  <Col md={4} >
                    <Form.Label>Available from</Form.Label>
                  </Col>
                  <Col md={4}>
                  <Form.Label>Until</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2 align-items-center">
                  <Col md={4}>
                    <Form.Control id="wd-available-from" type="datetime-local" defaultValue="2024-05-06T12:00" />
                  </Col>
                  <Col md={4}>
                    <Form.Control id="wd-available-until" type="datetime-local" defaultValue="2024-05-20T12:00" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <div className="text-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
