import React from "react";
import imge from "../assets/images/I.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let n = useNavigate();

  const register = (e) => {
    axios
      .post("http://127.0.0.1:3001/users", {
        email: email,
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          n("/login");

          window.location.reload(true);
          alert("Users added");
        }
      });
  };

  return (
    <div>
      <div className="register-page">
        <section className="register-Section  ">
          <div className="container ">
            <div className="row d-flex justify-content-center align-items-center ">
              <div className="col card-registration card">
                <div className="row g-0">
                  <div className=" Registration-Image col-xl-6 d-none d-xl-block">
                    <img
                      src={imge}
                      alt="Akagami-logo"
                      className="img-fluid"
                      style={{
                        bordertopleftradius: "25rem",
                        borderbottomleftradius: "25rem",
                      }}
                    />{" "}
                  </div>{" "}
                  <div className="register-panel col-xl-6">
                    <div className=" p-md-5 ">
                      <h3 className="mb-5 text-uppercase text-white h3">
                        Registration{" "}
                      </h3>{" "}
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline mb-4">
                            <label
                              className="form-label text-white h5"
                              for="email"
                            >
                              Email ID{" "}
                            </label>{" "}
                            <input
                              className="form-control form-control-lg"
                              type="email"
                              id="email"
                              onChange={(event) => {
                                setEmail(event.target.value);
                              }}
                            />{" "}
                          </div>{" "}
                          <div className="col-md-12 mb-4">
                            <label
                              className="form-label text-white h5"
                              for="username"
                            >
                              Username{" "}
                            </label>{" "}
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              id="username"
                              onChange={(event) => {
                                setUsername(event.target.value);
                              }}
                            />{" "}
                          </div>{" "}
                          <div className="col-md-12 mb-4">
                            <div className="form-outline">
                              <label
                                className="form-label text-white h5"
                                for="Password"
                              >
                                Password{" "}
                              </label>{" "}
                              <input
                                className="form-control form-control-lg"
                                type="password"
                                id="Password"
                                onChange={(event) => {
                                  setPassword(event.target.value);
                                }}
                              />{" "}
                            </div>{" "}
                          </div>{" "}
                          <div className="d-flex justify-content-end pt-3">
                            <button
                              onClick={() => {
                                register();
                              }}
                              type="button"
                              class="btn btn-dark"
                            >
                              Registration{" "}
                            </button>{" "}
                          </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </div>
  );
}
