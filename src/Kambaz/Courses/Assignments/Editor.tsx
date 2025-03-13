import { useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const isEditMode = Boolean(aid);
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const foundAssignment = isEditMode
    ? assignments.find((a: any) => a._id === aid && a.course === cid)
    : null;
  if (isEditMode && !foundAssignment) {
    return (
      <div className="container mt-4 text-danger">
        Assignment not found.
      </div>
    );
  }
  const assignment = foundAssignment || {
    title: "",
    course: "",
    description: "",
    awards: "",
    duetime: "",
    availabletime: "",
  };
  const [title, setTitle] = useState(
    isEditMode ? foundAssignment!.title : "New Assignment"
  );
  const [description, setDescription] = useState(
    isEditMode ? foundAssignment!.description : "New Assignment Description"
  );
  const [points, setPoints] = useState(assignment.awards);
  const [dueTime, setDueTime] = useState(assignment.duetime);
  const [availableFrom, setAvailableFrom] = useState(assignment.availabletime);
  const [availableUntil, setAvailableUntil] = useState(assignment.duetime);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = () => {
    // console.log("cid =", cid);
    const newAssignment = {
      _id: isEditMode ? foundAssignment!._id : uuidv4(),
      course: cid,
      title,
      description,
      awards: points,
      duetime: dueTime,
      availabletime: availableFrom,
      availableUntil,
    };

    if (isEditMode) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }
    navigate("/Kambaz/Courses/" + cid + "/Assignments");
  };

  const handleCancel = () => {
    navigate("/Kambaz/Courses/" + cid + "/Assignments");
  };

  return (
    <div className="container mt-4">
      <Form id="wd-assignments-editor">
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control
            id="wd-description"
            as="textarea"
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-3 align-items-center">
          <Col md={3} className="text-end">
            <Form.Label>Points</Form.Label>
          </Col>
          <Col md={9}>
            <Form.Control
              id="wd-points"
              type="number"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3} className="text-end">
            <Form.Label>Assign</Form.Label>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>
                <Form.Label className="mb-2 fw-bold">Due</Form.Label>
                <Form.Control
                  className="mb-4"
                  id="wd-due-date"
                  type="datetime-local"
                  value={dueTime}
                  onChange={(e) => setDueTime(e.target.value)}
                />
                <Row className="mb-2 align-items-center fw-bold">
                  <Col md={6}>
                    <Form.Label>Available from</Form.Label>
                  </Col>
                  <Col md={6}>
                    <Form.Label>Until</Form.Label>
                  </Col>
                </Row>
                <Row className="mb-2 align-items-center">
                  <Col md={6}>
                    <Form.Control
                      id="wd-available-from"
                      type="datetime-local"
                      value={availableFrom}
                      onChange={(e) => setAvailableFrom(e.target.value)}
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      id="wd-available-until"
                      type="datetime-local"
                      value={availableUntil}
                      onChange={(e) => setAvailableUntil(e.target.value)}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <div className="text-end">
          <Button variant="secondary" className="me-2" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

