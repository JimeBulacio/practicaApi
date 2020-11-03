import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CardPlanet = (props) => {

    return (
        <>
                <Card border="warning" style={{ width: '18rem', margin:'5px' }}>
                    <Card.Img variant="top" src="https://i.pinimg.com/564x/cc/e2/34/cce2341b8bb5273b23a434e235d99b51.jpg"/>
                    <Card.Body>
                        <Card.Title className="text-center colores">Card de {props.planet.name}</Card.Title>
                        <Card.Text>
                            Diamtro plane: {props.planet.diameter}
                        </Card.Text>
                        <Button>Ver mas sobre el planeta</Button>
                    </Card.Body>
                </Card>
        </>
    )
}

export default CardPlanet;