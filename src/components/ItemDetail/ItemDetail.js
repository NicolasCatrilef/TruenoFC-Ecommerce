import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({ item }) => {

    const [next, setNext] = useState(false);

    const addCart = (cantidad) =>{
        setNext(true);
        alert(`Se añadieron ${cantidad} elementos al carrito`);
    };


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
                    {
                        !next ? (
                            <ItemCount stock={item.stock} fnAddCart={addCart}/>
                        ) : (
                            <>
                                <Link to={`/category/${item.type}`}>
                                    <Button color='black' style={{ with: '5px' }}>
                                        Seguir Comprando
                                    </Button>
                                </Link>
                                <Link to={'/cart'}>
                                    <Button color='google plus'>
                                        Ver Carro
                                    </Button>
                                </Link>
                            </>
                        )
                    }
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
