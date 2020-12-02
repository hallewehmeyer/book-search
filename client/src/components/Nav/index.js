import React from "react";
import Saved from "../../pages/Saved"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <a className="navbar-brand" href="/saved">
        Saved books
      </a>
    </nav>
  );
}

export default Nav;
