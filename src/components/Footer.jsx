import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="https://github.com/jkkariuki"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <FontAwesomeIcon className="icons" icon={faGithub} size="2x" />
          </a>
          <span class="mb-3 mb-md-0 text-muted">
            © 2023 JKCodes - James Kariuki
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
