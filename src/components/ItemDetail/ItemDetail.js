import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'

export const ItemDetail = ({ item }) => {
    return (
        <div>
            <Card>
                <Image src={item.avatar_url} wrapped ui={true} />
                <Card.Content>
                <Card.Header>{item.login}</Card.Header>
                <Card.Meta>
                    <span className='date'>{item.id}</span>
                </Card.Meta>
                <Card.Description>
                    {item.url}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Link to={`/`}>
                        <Button color='google plus'>
                            Volver
                        </Button>
                    </Link>
                </Card.Content>
            </Card>
        </div>
    )
}
