import { Button, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaPlus, FaTrash } from "react-icons/fa";
import { LiaFileAltSolid, LiaPlusSolid, LiaSearchSolid } from "react-icons/lia";
import { GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";


export default function Assignments(
) {
  const { cid } = useParams(); 
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid); 
  const navigate = useNavigate()
  const dispatch = useDispatch();

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
        {currentUser && currentUser.role === "FACULTY" && (
        <div>
          <Button variant="light" size="lg" className="me-2" id="wd-add-assignment-group">
            <LiaPlusSolid className="me-1" /> Group
          </Button>
          <Button variant="danger" size="lg" id="wd-add-assignment" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/Editor`)}>
            <LiaPlusSolid className="me-1" /> Assignment
          </Button>
        </div>
        )}
      </div>

      <ListGroup id="wd-assignments" className="wd-lessons rounded-0">
        <div className="d-flex align-items-center p-3 bg-light fw-bold border wd-title ps-2">
          <BsGripVertical className="me-2 text-secondary fs-4" />
          <span className="fs-5"> <GoTriangleDown /> ASSIGNMENTS</span>
          <span className="ms-auto text-muted fs-6 rounded-pill px-2 py-1">40% of Total</span>
          <FaPlus className="ms-3 text-secondary" />
          <IoEllipsisVertical className="text-secondary fs-4 ms-2" />
        </div>

        {courseAssignments.map((assignment: any) => (
          <ListGroup.Item key={assignment._id} className="d-flex align-items-center wd-lesson p-3 ps-1">
            <BsGripVertical className="me-3 text-secondary fs-4" />
            <LiaFileAltSolid className="me-4 text-success fs-4" />
            <div className="flex-grow-1">
              <div
                className="fw-bold text-dark text-decoration-none fs-5">
                {assignment.title}
                </div>
              <div className="text-muted small">
                <span className="text-danger fw-bold">Multiple Modules</span> | <b>Not available until</b> {new Date(assignment.availabletime).toLocaleDateString("en-US", {month: "short", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true}).replace(",", " at ")} |<br />
                <b>Due</b> {new Date(assignment.duetime).toLocaleDateString("en-US", {month: "short", day: "numeric", hour: "numeric", minute: "2-digit", hour12: true}).replace(",", " at ")} | {assignment.awards} <span>pts</span>
              </div>
            </div>
            <FaCheckCircle className="text-success fs-4" />
            {currentUser && currentUser.role === "FACULTY" && (
            <FaTrash className="text-danger fs-4 ms-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (
                window.confirm(
                  "Are you sure you want to delete this assignment?"
                )
              ) {
                dispatch(deleteAssignment(assignment._id));
              }
            }}/>
            )}
            <IoEllipsisVertical className="text-secondary fs-4 ms-2" />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}