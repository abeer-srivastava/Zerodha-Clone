import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <h1 className="mt-5">404 Not Found</h1>
        <Link to="/">
          <button className="p-3 btn btn-primary btn-sm w-50 mx-auto fs-5 rounded">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Notfound;
