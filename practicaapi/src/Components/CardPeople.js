import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CardPeople = (props) => {

    return (
        <>
            
                <Card border="warning" style={{ width: '18rem', margin:'5px' }}>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/5/5c/C-3PO_droid.png"/>
                    <Card.Body>
                        <Card.Title className="text-center colores">Card de {props.character.name}</Card.Title>
                        <Card.Text>
                            Gender: {props.character.gender}
                        </Card.Text>
                        <Button>Ver mas sobre el personaje</Button>
                    </Card.Body>
                </Card>
        </>
    )
}

export default CardPeople;