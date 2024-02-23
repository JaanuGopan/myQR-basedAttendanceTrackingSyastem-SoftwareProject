import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../layout/navigationbar/Navbar";

function HomePage() {
  return (
    <div className="container">
      <Navbar />
      <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">My Website</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a className="me-3 py-2 text-dark text-decoration-none" href="/">
            Home
          </a>
          <a className="me-3 py-2 text-dark text-decoration-none" href="/login">
            Login
          </a>
          <a
            className="me-3 py-2 text-dark text-decoration-none"
            href="/signup"
          >
            SignUp
          </a>
        </nav>
      </header>

      <main>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Welcome to My Website</h1>
            <p className="col-md-8 fs-4">
              This is a sample home page built with React and Bootstrap.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
