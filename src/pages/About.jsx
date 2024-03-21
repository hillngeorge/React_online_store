import "./About.css";
import { useState } from "react";

function About() {
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    console.log("button clicked!");
    setContactVisible(!contactVisible);
  }
  return (
    <div className="about page">
      <h3>George Dick</h3>

      {contactVisible ? (
        <div className="box">
          <p>
            To get in touch please write to <b>George.dick@sdgku.edu</b>
          </p>
        </div>
      ) : null}
      <button onClick={showData} className="btn btn-outline-dark">
        View Contact Info
      </button>
    </div>
  );
}

export default About;
