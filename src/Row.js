import React, { useEffect, useState } from "react";
import axios from './axios';

function Row({ title, fetchUrl }){
   
    const [movie, setMovie] = useState([]);

    //snippet of code which runs based on specific conditions
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request
        }
        fetchData()
    },[]);


    return(
        <div>
            <h2>{title}</h2>
        </div>
    )
}
 
export default Row;