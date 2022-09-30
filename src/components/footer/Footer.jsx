import React from "react";
import "./Footer.css";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";
import { BsGithub, BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <MDBFooter className="text-center  footer-background ">
      <MDBContainer className="pt-4">
        <section className="mb-4">
          <a href="http://www.facebook.com/loren.sharony">
            <button className="btn border-0 size">
              <BsFacebook className="fab fa-facebook-f" />
            </button>
          </a>

          <a href="https://www.instagram.com/loren_sharony?r=nametag">
            <button className="btn border-0 size">
              <BsInstagram className="fa-instagram" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/loren-sharony-3a8994217">
            <button className="btn border-0 size">
              <BsLinkedin className="fa-linkedin" />
            </button>
          </a>
          <a href="https://github.com/lorensharony">
            <button className="btn border-0 size">
              <BsGithub className="fa-github" />
            </button>
          </a>
        </section>
      </MDBContainer>

      <div className="text-center text-dark p-3 footer-background2">
        ©2022 Copyright:
        <a className="text-dark" href="/#">
          Loren.Sharony@gmail.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
