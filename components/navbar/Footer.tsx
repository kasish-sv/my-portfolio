import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex gap-4 items-center justify-center p-8">
      <Link
        href="https://www.linkedin.com/in/kasish-shanmugam/"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="footer-link" />
      </Link>
      <Link href="https://github.com/kasish-sv" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="footer-link" />
      </Link>
      <Link href="mailto:kasishshanmugam1@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} className="footer-link" />
      </Link>
    </div>
  );
}
