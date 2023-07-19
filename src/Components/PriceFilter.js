import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const PriceFilter= ({houses}) => {
    // iterate through the price values in houses
    // return all prices
    //store them in a set , to remove duplicates
    //create an array out of it
    //use that in the select field to display options
    let myhouses = houses;
    let prices = Array.from(new Set(myhouses.map((elem) => elem.price)));
    console.log(prices);
    let navigate = useNavigate();

    let changeHandler = (e) => {
        console.log("change handler" + e.target.value);
        let price = e.target.value;
        navigate(`searchresults/${price}`);

    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-10">
                    Search By Price
                    <select onChange={changeHandler} >                        
                        {
                            prices.map((elem)=> <option key={elem} value={elem}> {elem} </option>)
                        }
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default PriceFilter ;
