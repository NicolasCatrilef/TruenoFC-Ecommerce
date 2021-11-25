import React from 'react'
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react'

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
            </Card>
        </div>
    )
}

Item.prototype = {
    item: PropTypes.object.isRequired
}