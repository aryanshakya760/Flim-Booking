import React from "react";
import imge from "../assets/images/I.jpeg";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../helpers/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      password: Yup.string().required("Required"),
    }),
  });

  const { authState, setAuthState } = useContext(AuthContext);
  const login = (values) => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post("http://127.0.0.1:3001/users/login_user", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          // first one is name and second is access token received
          localStorage.setItem("accessToken", response.data);
          setAuthState({ ...authState, status: true });
          navigate("/");
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
                    />
                  </div>

                  <div className="register-panel col-xl-6">
                    <div className=" p-md-5 ">
                      <h3 className="mb-5 text-uppercase text-white h3">
                        Login
                      </h3>

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label text-white h5"
                              for="lastName"
                            >
                              Username
                            </label>
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              id="lastName"
                              onChange={(event) => {
                                setUsername(event.target.value);
                              }}
                              values={formik.values.username}
                            />
                            {formik.errors.lastName ? (
                              <p className="reg-validate">
                                {formik.errors.username}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <label
                              className="form-label text-white h5"
                              for="Password"
                            >
                              Password
                            </label>
                            <input
                              className="form-control form-control-lg"
                              type="password"
                              id="Password"
                              onChange={(event) => {
                                setPassword(event.target.value);
                              }}
                              values={formik.values.password}
                            />
                            {formik.errors.password ? (
                              <p className="reg-validate">
                                {formik.errors.password}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button
                          onClick={(values) => {
                            login();
                          }}
                          type="button"
                          class="btn btn-dark"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
