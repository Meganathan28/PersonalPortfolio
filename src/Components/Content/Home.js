import React from "react";
import Typed from "typed.js";
import "../../Styles/Home.css";
import { useEffect } from "react";
import DeveloperLogo from "../../assets/Images/developer.jpg";
import Resume from "../../assets/docs/Resume.jpg";
import { Link } from "react-scroll";
import About from "./About";
import leetcodeIcon from "../../assets/Icons/leetcode.svg";
function Home() {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Designer",
        "Frontend Developer",
        "Backend Devloper",
        "MERN Developer",
      ],
      typeSpeed: 150,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  });
  return (
    <>
      <div className="container">
        <div className="row py-1 py-md-5">
          <div className="col-12 col-md-6">
            <div className="mt-md-5  align-items-center d-flex justify-content-center">
              <img
                src={DeveloperLogo}
                className="img-fluid rounded-circle border-primary developer-logo"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="mt-md-5 mt-2">
              <h1 className="text-center">
                Meganathan Saravanan <br />
                <span className="text-break mt-md-4"></span>
                <span ref={el} className="text-primary" />
              </h1>
              <p className="text-lighter text-break text-justify ">
                Hello! I'm{" "}
                <span className="text-primary fw-bolder">Meganathan S</span>, a
                MERN stack developer passionate about building dynamic and
                scalable web applications. Proficient in MongoDB, Express.js,
                React, and Node.js, along with strong skills in HTML, CSS, and
                JavaScript, I enjoy creating seamless user experiences and
                robust backend solutions. Let's collaborate to craft impactful
                and innovative digital solutions!
              </p>

              <div className="d-flex align-items-center justify-content-md-start justify-content-evenly">
                <a href={Resume}>
                  <button className="  btn btn-primary shadow-lg ">
                    Download CV
                    <i className="bi bi-file-earmark-person-fill"></i>
                  </button>
                </a>
                <Link to="Contact" className="ms-3 ms-md-5">
                  <button className="btn btn-outline-primary shadow">
                    Contact <i className="bi bi-send-fill"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 fs-3 ">
            <div className="d-flex justify-content-evenly justify-content-md-start gap-5 align-content-center">
              <a
                href="https://www.linkedin.com/in/s-meganathan/"
                target="_blank"
              >
                <i className="bi bi-linkedin "></i>
              </a>
              <a className=" " href="https://github.com/Meganathan28">
                <i className="bi bi-github text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Home;
