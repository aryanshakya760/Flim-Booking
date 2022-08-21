import React from "react";
import logo from "../assets/images/brand.png";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Nav() {
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ ...authState, status: false });
    // window.location.reload(false);
  };
  const { authState } = useContext(AuthContext);
  let { setAuthState } = useContext(AuthContext);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Required"),
      password: Yup.string().required(" PASSWORD Required"),
    }),
  });

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src={logo}
              alt="Akagamiphoto"
              className="logo-nav  "
              style={{ height: "7rem", width: "10rem" }}
            />{" "}
          </Link>{" "}
          <button
            type="button"
            class="navbar-toggler"
            dataBsToggle="collapse"
            dataBsTtarget="#navbarCollapse"
          >
            <span class="navbar-toggler-icon bg-light"> </span>{" "}
          </button>{" "}
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
              <Link class="nav-link text-white h5" to="/menu">
                <span>
                  <i class="fa-solid fa-list"> </i>{" "}
                </span>{" "}
                Movies{" "}
              </Link>{" "}
              {authState.status && (
                <>
                  <Link class="nav-link text-white h5" to="/cart">
                    <span>
                      <i class="fas fa-cart-book"> </i>{" "}
                    </span>{" "}
                    My Booking{" "}
                  </Link>{" "}
                  {authState.isVerified && (
                    <>
                      <Link class="nav-link text-white h5" to="/addMovie">
                        <span>
                          <i class="fas fa-cart-plus"> </i>{" "}
                        </span>{" "}
                        Add Movie{" "}
                      </Link>{" "}
                    </>
                  )}{" "}
                </>
              )}{" "}
              {!authState.status && (
                <>
                  <span>
                    <i class="fa-solid fa-address-card"> </i>{" "}
                  </span>{" "}
                  <Link class="nav-link text-white h5" to="/register">
                    Register{" "}
                  </Link>{" "}
                </>
              )}{" "}
              <Link class="nav-link text-white h5" to="/about">
                <span>
                  <i class="fa-solid fa-circle-info"> </i>{" "}
                </span>{" "}
                About Us{" "}
              </Link>{" "}
            </div>{" "}
            {!authState.status && (
              <>
                <div class="navbar-nav ms-auto">
                  <Link class="btn text-white h5" to="/login">
                    Login{" "}
                  </Link>{" "}
                </div>{" "}
              </>
            )}{" "}
            {authState.status && (
              <>
                <div class="navbar-nav ms-auto">
                  {" "}
                  <Link
                    onClick={() => {
                      logout();
                    }}
                    class="btn text-white h5"
                    to="/login"
                  >
                    <span> {authState.username} </span>
                    Logout{" "}
                  </Link>{" "}
                </div>{" "}
              </>
            )}{" "}
            <div
              class="modal fade"
              id="ishan"
              tabindex="-1"
              ariaLabelledby="exampleModalLabel"
              ariaHidden="true"
            ></div>{" "}
          </div>{" "}
        </div>{" "}
      </nav>{" "}
    </div>
  );
}
