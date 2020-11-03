import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const CardVehicle = (props) => {

    return (
        <>
                <Card border="warning" style={{ width: '18rem', margin:'5px' }}>
                    <Card.Img variant="top" src="https://cdnb.artstation.com/p/assets/images/images/009/986/961/large/samize-samize-sandcrawler-thumb.jpg"/>
                    <Card.Body>
                        <Card.Title className="text-center colores">Card de {props.vehicle.name}</Card.Title>
                        <Card.Text>
                        Modelo Vehiculo: {props.vehicle.model}
                        </Card.Text>
                        <Button>Ver mas sobre el Vehicle</Button>
                    </Card.Body>
                </Card>
        </>
    )
}

export default CardVehicle;