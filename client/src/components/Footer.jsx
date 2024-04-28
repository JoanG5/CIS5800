import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-36">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/JoanG5/CIS5800"
            className="link link-hover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-0 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            </svg>
            GitHub Repo
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Joe's Deli</p>
      </aside>
    </footer>
  );
}

export default Footer;
