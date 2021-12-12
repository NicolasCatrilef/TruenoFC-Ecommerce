import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import './Item.css'

export const Item = ({ item }) => {

    const currency = (number) =>{
        return new Intl.NumberFormat('es-CL', {style: 'currency',currency: 'clp', minimumFractionDigits: 0}).format(number);
    };

    return (
        <div className='card'>
            <Card>
                <Image src={item.img} wrapped ui={false} size='huge'/>
                <Card.Content>
                <Card.Header>{ item.name }</Card.Header>
                <Card.Meta>
                    <span className='date'>Stock disponible: {item.stock}</span>
                </Card.Meta>
                <Card.Description>
                    {currency(item.price)}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/item/${item.id}`}>
                        <Button color='google plus'>
                            Ver Detalle
                        </Button>
                    </Link>
                </Card.Content>
            </Card>
        </div>
    )
}

Item.prototype = {
    item: PropTypes.object.isRequired
}