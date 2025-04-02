import { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithObjects() {
	const [assignment, setAssignment] = useState({
		id: 1, 
		title: "NodeJS Assignment",
		description: "Create a NodeJS server with ExpressJS",
		due: "2021-10-10", 
		completed: false, 
		score: 0,
		});
	const [mod, setMod] = useState({
    id: "CS5610",
    name: "Web Development",
    description: "Client and Server integration",
    course: "CS"
	});

	const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
	const MODULE_API = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
			<h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>

			{/* Assignment Section */}
      <h4>Assignment</h4>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}`}>Get Assignment</a>
      <a className="btn btn-primary me-2" href={`${ASSIGNMENT_API_URL}/title`}>Get Title</a>

      <h5 className="mt-3">Edit Title</h5>
			<a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
			<br />

      <h5>Edit Score</h5>
			<a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Score
      </a>
      <FormControl
        className="w-75" id="wd-assignment-score"
        defaultValue={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
      />
			<br />

			<h5>Edit Completed</h5>
			{/* <FormControl
				as="select"
				className="w-25 mb-2"
				id="wd-assignment-completed"
				value={assignment.completed.toString()}
				onChange={(e) =>
					setAssignment({ ...assignment, completed: e.target.value === "true" })
				}
			>
				<option value="true">true</option>
				<option value="false">false</option>
			</FormControl> */}


			{/* <a
				id="wd-update-assignment-completed"
				className="btn btn-primary"
				href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
			>
				Update Completed
			</a> */}
			<div className="d-flex align-items-center justify-content-between mb-3">
				<FormCheck
					type="checkbox"
					label="Completed"
					checked={assignment.completed}
					onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
				/>
				<a id="wd-update-assignment-completed"
					className="btn btn-primary"
					href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
					Update Completed
				</a>
			</div>
      <hr />

      {/* Module Section */}
      <h4>Module</h4>
      <a className="btn btn-primary me-2" href={`${MODULE_API}`}>Get Module</a>
      <a className="btn btn-primary me-2" href={`${MODULE_API}/name`}>Get Module Name</a>

      <h5 className="mt-3">Edit Name</h5>
      <a className="btn btn-primary float-end" href={`${MODULE_API}/name/${mod.name}`}>Update Module Name</a>
      <FormControl
        className="w-75" id="wd-module-name"
        value={mod.name}
        onChange={(e) => setMod({ ...mod, name: e.target.value })}
      />
			<br />

      <h5>Edit Description</h5>
      <a className="btn btn-primary float-end" href={`${MODULE_API}/description/${mod.description}`}>Update Description</a>

      <FormControl
        className="w-75" id="wd-module-description"
        value={mod.description}
        onChange={(e) => setMod({ ...mod, description: e.target.value })}
      />
		<hr />
    </div>
);}
