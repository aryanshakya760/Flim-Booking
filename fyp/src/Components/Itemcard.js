import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
    const { addItem } = useCart();
    return ( <
        div className = "menu-card-section  col-11 col-md-6  col-lg-3 mx-0 mb-5" >
        <
        div class = "menu-cards card p-0 overflow-hidden h-100 shadow" >
        <
        img class = "card-img-top img-fluid"
        src = { `http://127.0.0.1:3001/${props.img}` }
        alt = "Card image cap" /
        >
        <
        div class = "card-body bg-dark" >
        <
        h5 class = "card-title text-white" > { props.title } < /h5> <
        h5 class = "card-title text-white" > $ { props.price } < /h5> <
        p class = "card-text text-white" > { props.desc } < /p> <
        Link to = {
            { pathname: `/book/${props.id}` } } > Book Now < /Link> <
        /div> <
        /div> <
        /div>
    );
};
export default Itemcard;