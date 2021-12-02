import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return (
        <div>
            <Card>
                <Image src={item.img} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{ item.name }</Card.Header>
                <Card.Meta>
                    <span className='date'>Stock disponible: {item.stock}</span>
                </Card.Meta>
                <Card.Description>
                    {item.price}
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