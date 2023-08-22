import React from "react";

const Footer = ()=>{
  return(
      <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
          <p className="text-muted text-center text-md-left">
              Copyright © 2021{" "}
              <a href="https://www.nobleui.com" target="_blank">
                  NobleUI
              </a>
              . All rights reserved
          </p>
          <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">
              Handcrafted With{" "}
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-heart mb-1 text-primary ml-1 icon-small"
              >
                  <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
          </p>
      </footer>
  )
}
export default Footer
