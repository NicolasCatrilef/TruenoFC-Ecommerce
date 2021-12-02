import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

export const ItemDetail = ({ item }) => {
    return (
        <div>
            <Card>
                <Image src={item.img} wrapped ui={true} />
                <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>Stock disponible: {item.stock}</span>
                </Card.Meta>
                <Card.Description>
                    {item.price}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/category/${item.type}`}>
                        <Button color='google plus'>
                            Volver
                        </Button>
                    </Link>
                </Card.Content>
            </Card>
        </div>
    )
}
