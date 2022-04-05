import React from "react";
import GithubIcon from "../../assets/icons/github-icon.svg";
import LinkedInIcon from "../../assets/icons/linkedin-icon.svg";
import "./Footer.scss";

function Footer() {
  return (
    <section className="footer">
      <a href="https://github.com/JustinLepine">
        <img className="footer__git-icon" src={GithubIcon} alt="icon" />
      </a>
      <a href="https://linkedin.com/in/justin-lepine">
        <img className="footer__link-icon" src={LinkedInIcon} alt="icon" />
      </a>
    </section>
  );
}

export default Footer;
