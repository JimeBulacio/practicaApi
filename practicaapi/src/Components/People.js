import React, { useState, useEffect } from 'react';
import CardPeople from './CardPeople'

const People = (props) => {
    const [hasError, setErrors] = useState(false);
    const [people, setPeople] = useState({});
 
//Esta es una funcion asincronica
    async function fetchData() {
        const url = 'https://swapi.dev/api/people/' + props.peopleId;
        console.log(url)
        const res = await fetch(url);
        res
            .json()
            .then(res => setPeople(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        //llama una API
        fetchData();
    }, []);

    return (
        <div>
            <CardPeople character={people}/>
        </div>
    )
}

export default People;