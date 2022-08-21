import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useContext, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function AddMovie() {
  // setting state variable and function
  let { authState, setAuthState } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);

  // get data from API using axois and use effect for auto reload page
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/categories").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setCategory(response.data);
      }
    });
  }, []);

  const addMovie = async () => {
    alert("here");
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("CategoryId", categoryId);

    await axios
      .post("http://127.0.0.1:3001/movie", formData)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("here");

          alert(response.data);
        }
      });
  };
  return (
    <>
      <div className="Order-page">
        <div className="container">
          <div className="order-panel row">
            <div className="Address-detail col-lg-12 col-md-12 col-sm-12">
              <div class="card border-0 shadow rounded-3 my-5">
                <div class="card-body ">
                  <h5
                    style={{ color: "red" }}
                    class="card-title  h-4 text-center mb-1  fs-5"
                  >
                    Add Movie{" "}
                  </h5>{" "}
                  <form>
                    <div class="form-floating mb-5">
                      <input
                        onChange={(event) => {
                          setName(event.target.value);
                        }}
                        type="text"
                        class="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Name </label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-5">
                      <input
                        onChange={(event) => {
                          setDescription(event.target.value);
                        }}
                        type="text"
                        class="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Description </label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      <input
                        onChange={(event) => {
                          setPrice(event.target.value);
                        }}
                        type="text"
                        class="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Price </label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      <input
                        onChange={(event) => {
                          setImage(event.target.files[0]);
                        }}
                        type="file"
                        class="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Movie Banner </label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      <select
                        class="form-control"
                        onChange={(event) => {
                          setCategoryId(event.target.value);
                        }}
                      >
                        <option class=""> Select Movie Category </option>;{" "}
                        {category.map((value, key) => {
                          return (
                            <option>
                              {" "}
                              {value.id} {value.title}{" "}
                            </option>
                          );
                        })}{" "}
                      </select>{" "}
                    </div>{" "}
                    <div class="d-grid mb-5">
                      <button
                        onClick={() => {
                          addMovie();
                        }}
                        class="btn btn-dark btn-Order-uppercase fw-bold"
                        type="submit"
                      >
                        Add Movie{" "}
                      </button>{" "}
                    </div>{" "}
                  </form>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
