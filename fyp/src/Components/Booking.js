import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useContext, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [booking, setBooking] = useState([]);
  const [movie, setMovie] = useState([]);
  const id = booking.MovieId;
  // get data from API using axois and use effect for auto reload page
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/booking/${id}`, {
        headers: {
          accessTokenFromFrontend: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setMovie(response.data);
        }
      });
    axios
      .get("http://127.0.0.1:3001/booking/myBookings", {
        headers: {
          accessTokenFromFrontend: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          setBooking(response.data);
        }
      });
  }, []);
  return (
    <div className="cart-content ">
      <section className="py-auto container ">
        <div className="row justify-contetn-center">
          <div className="col-11 col-md-12">
            <h5 className="text-white"> </h5>{" "}
            <div class="table-responsive">
              <table style={{ color: "white" }} class="table">
                <thead>
                  <tr>
                    <th scope="col"> Movie Name </th>{" "}
                    <th scope="col"> Phone Number </th>{" "}
                    <th scope="col"> Address </th> <th scope="col"> Price </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {booking.map((item, index) => {
                    return (
                      <tr>
                        <td> {item.movieName} </td> <td> {item.phone} </td>{" "}
                        <td> {item.address} </td> <td> {item.total} </td>{" "}
                      </tr>
                    );
                  })}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};
export default Cart;
