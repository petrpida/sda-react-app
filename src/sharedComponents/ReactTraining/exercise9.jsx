import React, {useEffect, useState} from "react";
import NavButton from "../NavButton";
import Person from "./Person";

export default function Exercise9 () {
    const [data, setData] = useState()

    // useEffect(() => {
    //     fetch("https://random-data-api.com/api/users/random_user?size=12")
    //         .then(response => response.json())
    //         .then(responseData => {
    //             setData(responseData)
    //             console.log(responseData)})
    // }, [])

    function getResponse() {
        fetch("https://random-data-api.com/api/users/random_user?size=12")
            .then(response => response.json())
            .then(responseData => {
                setData(responseData)
                console.log(responseData)})
    }

    return (
        <div>
          <h1 className="m-5 text-center">Exercise 9: Working with API</h1>
        <div className="container m-5 w-75 mx-auto">
            <div>
                <button className="btn btn-danger btn-lg m-3" onClick={function () {
                    getResponse();
                }}>FETCH RANDOM</button>
            </div>
            <div className="row bg-warning justify-content-evenly">
                {data && data.map((el, index) => (<Person key={index} link={el.avatar} firstName={el.first_name} lastName={el.last_name}/>))}
            </div>
        </div>
            <NavButton name="Back" link="/reacttraining"/>
            <NavButton name="HOME" link="/"/>
        </div>
    )
}