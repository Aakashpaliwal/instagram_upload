import React, { Fragment } from "react";
import "./header.scss";

export default function Header() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#">
          Instagram
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse ml-auto"
          id="navbarSupportedContent"
        >
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <button className="btn btn-upload" type="button">
              <i class="lni lni-upload"></i>&nbsp; Upload Now
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
}
