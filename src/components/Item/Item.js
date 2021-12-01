import React from 'react'
import PropTypes from 'prop-types';
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
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