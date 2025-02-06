import { Button, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { LiaFileAltSolid, LiaPlusSolid, LiaSearchSolid } from "react-icons/lia";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white border-end-0">
            <LiaSearchSolid />
          </span>
          <input
            type="text"
            placeholder="Search..."
            id="wd-search-assignment"
            className="form-control border-start-0"
          />
        </div>
        <div>
          <Button variant="light" size="lg" className="me-2" id="wd-add-assignment-group">
            <LiaPlusSolid className="me-1" /> Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment">
            <LiaPlusSolid className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup id="wd-assignments" className="wd-lessons rounded-0">
        <div className="d-flex align-items-center p-3 bg-light fw-bold border wd-title ps-2">
          <BsGripVertical className="me-2 text-secondary fs-4" />
          <span className="fs-5">  <GoTriangleDown /> ASSIGNMENTS</span>
          <span className="ms-auto text-muted fs-6 border rounded-pill px-2 py-1">40% of Total</span>
          <FaPlus className="ms-3 text-secondary" />
          <IoEllipsisVertical className="text-secondary fs-4 ms-2" />
        </div>

        <ListGroup.Item className="d-flex align-items-center wd-lesson p-3 ps-1">
          <BsGripVertical className="me-3 text-secondary fs-4" />
          <LiaFileAltSolid className="me-4 text-success fs-4" />
          <div className="flex-grow-1">
            <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-dark text-decoration-none fs-5">A1</a>
            <div className="text-muted small">
              <span className="text-danger fw-bold">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |<br />
              <b>Due</b> May 13 at 11:59pm | 100 pts
            </div>
          </div>
          <FaCheckCircle className="text-success fs-4" />
          <IoEllipsisVertical className="text-secondary fs-4 ms-2" />
        </ListGroup.Item>

        <ListGroup.Item className="d-flex align-items-center wd-lesson p-3 ps-1">
          <BsGripVertical className="me-3 text-secondary fs-4" />
          <LiaFileAltSolid className="me-4 text-success fs-4" />
          <div className="flex-grow-1">
            <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-dark text-decoration-none fs-5">A2</a>
            <div className="text-muted small">
              <span className="text-danger fw-bold">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |<br />
              <b>Due</b> May 20 at 11:59pm | 100 pts
            </div>
          </div>
          <FaCheckCircle className="text-success fs-4" />
          <IoEllipsisVertical className="text-secondary fs-4 ms-2" />
        </ListGroup.Item>

        <ListGroup.Item className="d-flex align-items-center wd-lesson p-3 ps-1">
          <BsGripVertical className="me-3 text-secondary fs-4" />
          <LiaFileAltSolid className="me-4 text-success fs-4" />
          <div className="flex-grow-1">
            <a href="#/Kambaz/Courses/1234/Assignments/123" className="fw-bold text-dark text-decoration-none fs-5">A3</a>
            <div className="text-muted small">
              <span className="text-danger fw-bold">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |<br />
              <b>Due</b> May 27 at 11:59pm | 100 pts
            </div>
          </div>
          <FaCheckCircle className="text-success fs-4" />
          <IoEllipsisVertical className="text-secondary fs-4 ms-2" />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
