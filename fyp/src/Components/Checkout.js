import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useContext, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";

import {
  Circle,
  Polyline,
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import { useParams } from "react-router-dom";
const center = [41.82343770202198, -71.42458763869125];
const outerborder = { color: "#ff5100" };
const border = { color: "#000000" };

export default function Checkout() {
  let { id } = useParams();

  // setting state variable and function
  let { authState, setAuthState } = useContext(AuthContext);
  // const [tagList, setTag] = useState([]);
  // const [blogListShow, setListBlog] = useState([]);
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [seatId, setSeatInput] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState("");
  const [seat, setSeat] = useState([]);
  const [showId, setShowInput] = useState("");
  const [show, setShow] = useState([]);
  const [singleMovie, setSingleMovie] = useState({});

  // get data from API using axois and use effect for auto reload page

  let config = {
    // replace this key with yours
    publicKey: "test_public_key_dc74e0fd57cb46cd93832aee0a390234",
    productIdentity: "1234567890",
    productName: "Drogon",
    productUrl: "http://gameofthrones.com/buy/Dragons",
    eventHandler: {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log(payload);
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log("widget is closing");
      },
    },
    paymentPreference: ["KHALTI"],
  };

  let checkout = new KhaltiCheckout(config);
  let btn = document.getElementById("payment-button");
  const showKhalti = () => {
    // minimum transaction amount must be 10, i.e 1000 in paisa.
    checkout.show({ amount: singleMovie.price });
  };
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/seat").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setSeat(response.data);
      }
    });

    axios.get(`http://127.0.0.1:3001/movie/${id}`).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setSingleMovie(response.data);
      }
    });

    axios.get("http://127.0.0.1:3001/show").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setShow(response.data);
      }
    });
  }, []);

  const addBooking = async () => {
    const data = {
      address: address,
      description: description,
      UserId: authState.id,
      phone: phone,
      MovieId: singleMovie.id,
      movieName: singleMovie.name,
      total: singleMovie.price,
      SeatId: seatId,
      ShowId: showId,
    };

    await axios
      .post("http://127.0.0.1:3001/booking/", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
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
                    Booking Details with Rs. {singleMovie.price}{" "}
                  </h5>{" "}
                  <h6 class="card-title text-center mb-5 fw-light fs-5">
                    * Book only one seat at one booking *
                  </h6>{" "}
                  <form>
                    <div class="form-floating mb-5">
                      <input
                        onChange={(event) => {
                          setAddress(event.target.value);
                        }}
                        type="text"
                        class="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Address </label>{" "}
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
                      <label for="floatingInput"> Your Comment </label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      <input
                        onChange={(event) => {
                          setPhone(event.target.value);
                        }}
                        type="text"
                        class="Ordert-input form-control"
                        placeholder="floatingInput"
                      />
                      <label for="floatingInput"> Phone Number </label>{" "}
                    </div>{" "}
                    <div class="form-floating mb-3">
                      <select
                        class="form-control"
                        onChange={(event) => {
                          setShowInput(event.target.value);
                        }}
                      >
                        <option class=""> Select Show </option>;{" "}
                        {show.map((value, key) => {
                          return (
                            <option>
                              {" "}
                              {value.id} {value.show}{" "}
                            </option>
                          );
                        })}{" "}
                      </select>{" "}
                    </div>{" "}
                    <div class="mb-3">
                      <select
                        class="form-control"
                        onChange={(event) => {
                          setSeatInput(event.target.value);
                        }}
                      >
                        <option class="form-control"> Select Seat </option>;{" "}
                        {seat.map((value, key) => {
                          return (
                            <option>
                              {" "}
                              {value.id} {value.seatCode}{" "}
                            </option>
                          );
                        })}{" "}
                      </select>{" "}
                    </div>{" "}
                    <div class="d-grid mb-5">
                      <button
                        onClick={() => {
                          addBooking();
                        }}
                        class="btn btn-dark btn-Order-uppercase fw-bold"
                        type="submit"
                      >
                        Done{" "}
                      </button>{" "}
                      <br />{" "}
                      {/* <button
                                                onClick={() => {
                                                  showKhalti();
                                                }}
                                                id="payment-button"
                                                class="btn btn-outline-success"
                                              >
                                                {" "}
                                                Pay With Khalti{" "}
                                              </button>{" "} */}{" "}
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
