import React from "react";
import { Link } from "react-router-dom";
import bug from "../assets/images/bugger.png";
import mo from "../assets/images/momo.png";
import { AuthContext } from "../helpers/AuthContext";
import { useContext } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Home() {
  const { authState } = useContext(AuthContext);
  return (
    <div className="Home-page">
      <div className="Home-head justify-content-center ">
        <h3 class="h1 text-white "> Welcome to our Movie Application </h3>{" "}
        <p class="h6 text-white"> Entertainment makes life better! </p>{" "}
        <Link type="button" class="head-btn btn btn-light" to="/menu">
          {" "}
          Movies{" "}
        </Link>{" "}
        {!authState.status && (
          <>
            <Link type="button" class="head-btn btn btn-light" to="/register">
              {" "}
              Register{" "}
            </Link>{" "}
          </>
        )}{" "}
      </div>{" "}
      <div class="popular-items mt-5 mb-5">
        <h3 class=" large text-center text-dark font-weight-bol">
          These are some of our latest movies{" "}
        </h3>{" "}
        <div class="box-content container">
          <div class="home-box justify-content-center row">
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4 mt-4">
              <div class="top-card card  ">
                <img
                  src={bug}
                  alt=""
                  class="card-img-top"
                  style={{ height: "12rem", width: "3.5rems" }}
                />{" "}
                <div class="card-content card-body bg-dark text-white">
                  <h5 class="card-title"> Movies 1 </h5>{" "}
                  <p> This is one of our most popular movies </p>{" "}
                  <Link
                    type="button"
                    class="head-top-btn btn btn-light"
                    to="/menu"
                  >
                    {" "}
                    Open{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-lg-4  col-md-6  col-sm-12 mb-4 mt-4">
              <div class="top-card card  ">
                <img
                  src={mo}
                  alt=""
                  class="card-img-top "
                  style={{ height: "12rem", width: "3.5rems" }}
                />{" "}
                <div class="card-content card-body bg-dark text-white">
                  <h5 class="card-title"> Movies 1 </h5>{" "}
                  <p> This is one of our most popular movies </p>{" "}
                  <Link
                    type="button"
                    class="head-top-btn btn btn-light"
                    to="/menu"
                  >
                    {" "}
                    Open{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-lg-4  col-md-6 col-sm-12 mb-4 mt-4">
              <div class="top-card card  ">
                <img
                  src={bug}
                  alt=""
                  class="card-img-top"
                  style={{ height: "12rem", width: "3.5rems" }}
                />{" "}
                <div class="card-content card-body bg-dark text-white">
                  <h5 class="card-title"> Movies 1 </h5>{" "}
                  <p> This is one of our most popular movies </p>{" "}
                  <Link
                    type="button"
                    class="head-top-btn btn btn-light"
                    to="/menu"
                  >
                    {" "}
                    Open{" "}
                  </Link>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
