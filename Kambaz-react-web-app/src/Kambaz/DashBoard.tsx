import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (10)</h2> <hr />
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

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/designpatterns.jpg" width={200} />
            <div>
              <h5> CS5010 Design Patterns </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/algorithm.jpg" width={200} />
            <div>
              <h5> CS5800 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Algoritms  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dbms.jpg" width={200} />
            <div>
              <h5> CS5110 DBMS </h5>
              <p className="wd-dashboard-course-title">
                DataBase Management Systems </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/toc.jpg" width={200} />
            <div>
              <h5> CS3800 TOC </h5>
              <p className="wd-dashboard-course-title">
                Theory of Computation  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ml.jpg" width={200} />
            <div>
              <h5> CS5678 ML </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dl.jpg" width={200} />
            <div>
              <h5> CS5234 DL </h5>
              <p className="wd-dashboard-course-title">
                Deep Learning  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/ai.jpg" width={200} />
            <div>
              <h5> CS5987 AI </h5>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/oop.jpg" width={200} />
            <div>
              <h5> CS4234 OOP </h5>
              <p className="wd-dashboard-course-title">
                Object Oriented Programming  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/cn.jpg" width={200} />
            <div>
              <h5> CS2345 CN </h5>
              <p className="wd-dashboard-course-title">
                Computer Networks  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <div className="wd-dashboard-course"> ... </div>
      </div>
    </div>
);}
