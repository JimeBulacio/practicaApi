import React, { useState, useEffect } from 'react';
import CardVehicle from './CardVehicle'

const Vehicle = (props) => {
    const [hasError, setErrors] = useState(false);
    const [vehicle, setVehicle] = useState({});
 
//Esta es una funcion asincronica
    async function fetchData() {
        const url = 'https://swapi.dev/api/vehicles/' + props.vehicleId;
        console.log(url)
        const res = await fetch(url);
        res
            .json()
            .then(res => setVehicle(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        //llama una API
        fetchData();
    }, []);

    return (
        <div>
            <CardVehicle vehicle={vehicle}/>
        </div>
    )
}

export default Vehicle;