import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";

const Contact = () => {
  return (
    <>
      <ul>
        <li><a href="TBD" target="_blank">Address</a></li>
        <li><a href="TBD" target="_blank">Phone Number</a></li>
        <li><a href="TBD" target="_blank">Email</a></li>
      </ul>
    </>
  );
};

function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="Little Lemon Logo" />

        <section>
          <h1>Doormat Navigation</h1>
          <Nav />
        </section>

        <section>
          <h1>Contact</h1>
          <Contact />
        </section>

        <section>
            <h1>Social Media Links</h1>
            <Contact />
        </section>
      </footer>
    </>
  );
}

export default Footer;
