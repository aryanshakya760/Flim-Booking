import Itemcard from "./Itemcard";
import axios from "axios";
import { useState, useEffect } from "react";

const Movie = () => {
    const [productList, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/movie").then((response) => {
            setProduct(response.data);
        });
    }, []);
    return ( <
        >
        <
        h1 className = "text-center" > Movies < /h1>{" "} <
        h2 className = "text-center" > < /h2>{" "} <
        section className = "py-4 container" >
        <
        div className = "row justify-content-center" > { " " } {
            productList.map((item, index) => {
                return ( <
                    Itemcard img = { item.image }
                    title = { item.name }
                    desc = { item.description }
                    price = { item.price }
                    item = { item }
                    id = { item.id }
                    />
                );
            })
        } { " " } <
        /div>{" "} <
        /section>{" "} <
        />
    );
};
export default Movie;