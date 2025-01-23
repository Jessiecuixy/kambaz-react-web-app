export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><b>Assignment Name</b></label><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={45} rows={10}>
          The assignment is available online Submit a link to the landing page of ...
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top"></td>
            <td>
              <label> Online Entry Options </label><br/>
              <input id="wd-text-entry" type="checkbox" />
              <label htmlFor="wd-text-entry"> Text Entry </label>
              <br />
              <input id="wd-website-url" type="checkbox" />
              <label htmlFor="wd-website-url"> Website URL </label>
              <br />
              <input id="wd-media-recordings" type="checkbox" />
              <label htmlFor="wd-media-recordings"> Website Recordings </label>
              <br />
              <input id="wd-student-annotation" type="checkbox" />
              <label htmlFor="wd-student-annotation"> Student Annotation </label>
              <br />
              <input id="wd-file-upload" type="checkbox" />
              <label htmlFor="wd-file-upload"> File Uploads </label>
              <br /><br />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Assign
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <input id="wd-assign-to" value="Everyone" />
              <br /><br />
              <label htmlFor="wd-due-date">Due</label><br />
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
              <br /><br />
              <table>
                <tr>
                  <td>
                    <label htmlFor="wd-available-from">Available from</label><br />
                      <input id="wd-available-from" type="date" value="2024-05-06" /><br/>
                  </td>
                  <td>
                      <label htmlFor="wd-available-until">Until</label><br />
                      <input id="wd-available-until" type="date" value="2024-05-20" /><br/>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <hr />
        <div style={{ textAlign: "right" }}>
          <button>Cancel</button>
          <button>Save</button>
        </div>
    </div>
);}
  