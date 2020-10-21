import React from "react";
import "./Contact.css";
import Header from "../components/Header";
import avatar from "../images/contact.jpeg";
import linkedin from "../images/linkedin.png"
import github from "../images/github.png";

function Contact() {
  return (
    <div>
      <Header />
      <div className="main">

        <img src={avatar} className="avatar" alt="Avatar" height={300} />
        <br />
        <h1>Hi! I'm Susan.<br />
        I'm a systems Engineer at HBO.<br />
        Please reach out and say hi.</h1>
      </div>
      <table>
        <tr>
          <td>
            <img src={linkedin} alt="linkedin" height={150} />
          </td>
          <td>
            <img src={github} alt="Github" height={150} />
          </td>
        </tr>
      </table>

    </div>

  );
}

export default Contact;
