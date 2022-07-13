import React from "react";
import Images from "../../assets/icons/index";
import "./Footer.scss";

function Footer() {
  return (
    <section className="footer">
      <a href="https://github.com/JustinLepine">
        <img className="footer__git-icon" src={Images.GitHubIcon} alt="icon" />
      </a>
      <a href="https://linkedin.com/in/justin-lepine">
        <img className="footer__link-icon" src={Images.LinkedIn} alt="icon" />
      </a>
    </section>
  );
}

export default Footer;
