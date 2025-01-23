import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
      <br />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5100.jpg" width={200} />
            <div>
              <h5> CS5100 Foundation Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                AI Foundation technology  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5610.jpg" width={200} />
            <div>
              <h5> CS5610 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5800.jpg" width={200} />
            <div>
              <h5> CS5800 Algorithm </h5>
              <p className="wd-dashboard-course-title">
                Methods for solving problems  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5200.jpg" width={200} />
            <div>
              <h5> CS5200 Database </h5>
              <p className="wd-dashboard-course-title">
                Organized data storage  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5008.jpg" width={200} />
            <div>
              <h5> CS5008 Data Structure </h5>
              <p className="wd-dashboard-course-title">
                Data organization format  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5004.jpg" width={200} />
            <div>
              <h5> CS5004 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Design with objects  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br />
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cs5002.jpg" width={200} />
            <div>
              <h5> CS5002 Discrete Structures  </h5>
              <p className="wd-dashboard-course-title">
                Mathematical structures for computation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
