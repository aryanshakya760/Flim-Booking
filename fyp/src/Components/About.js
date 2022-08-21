import React, { useState } from "react";
import abpic from "../assets/images/About-1.jpg";
import axios from "axios";
import { AuthContext } from "../helpers/AuthContext";
import { useContext, useEffect } from "react";
export default function About() {
  const [journey, setJourney] = useState([]);
  // get data from API using axois and use effect for auto reload page
  useEffect(() => {
    axios.get("http://127.0.0.1:3001/journey").then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setJourney(response.data);
      }
    });
  }, []);

  return (
    <div>
      <div className="About-sec">
        <h3 class="text-center text-white"> Information </h3>{" "}
        <div class="our-milestone">
          <section class="experience pt-100 pb-100" id="experience">
            <div class="container">
              <div class="row">
                <div class="col-xl-8 mx-auto text-center">
                  <div class="section-title text-white">
                    <h4> Our Journey </h4> <p>Work hard to make history </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div class="row">
                <div class="col-xl-12">
                  <ul>
                    {" "}
                    {journey.map((item, index) => {
                      return (
                        <span>
                          {" "}
                          <li>
                            <div class="timeline_content text-white">
                              <h4> {item.year} </h4> <p> {item.description} </p>{" "}
                            </div>{" "}
                          </li>{" "}
                        </span>
                      );
                    })}{" "}
                  </ul>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
