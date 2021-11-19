import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './UserCard.css';

const UserCard = () => (
    <div className="UserCard">
        <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='mini' wrapped ui={true} />
            <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
        </Card>
    </div>
)

export default UserCard