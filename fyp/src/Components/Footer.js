import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class=" w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-4">
            <div class="Footer-info col-lg-4 col-md-6">
              <h6 class="h1 text-white">Website-info</h6>
              <p class="large text-muted">
                This is our website for our movies based on Nepal. Our hall is
                known for its Nepalese cinema.{" "}
              </p>
              <p class="large text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
              </p>
            </div>

            <div class="Footer-link col-lg-4 col-md-6">
              <h5 class="h3 text-white mb-3">Quick links</h5>
              <ul class=" large list-unstyled text-muted">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </ul>
            </div>
            <div class="Footer-develope col-lg-4 col-md-6">
              <h5 class="h3 text-white mb-3">Development</h5>
              <p class="large text-muted">
                This website was designed and developed by Developer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
