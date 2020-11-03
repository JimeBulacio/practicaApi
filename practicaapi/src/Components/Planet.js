import React, { useState, useEffect } from 'react';
import CardPlanet from './CardPlanet'

const Planet = (props) => {
    const [hasError, setErrors] = useState(false);
    const [planet, setPlanet] = useState({});
 
//Esta es una funcion asincronica
    async function fetchData() {
        const url = 'https://swapi.dev/api/planets/' + props.planetId;
        console.log(url)
        const res = await fetch(url);
        res
            .json()
            .then(res => setPlanet(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        //llama una API
        fetchData();
    }, []);

    return (
        <div>
            <CardPlanet planet={planet}/>
        </div>
    )
}

export default Planet;