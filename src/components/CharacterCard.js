import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return(
    <Card>
      <Image src={props.charAttrs.image} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{props.charAttrs.name}</Card.Header>
    <Card.Meta>{props.charAttrs.location.name}</Card.Meta>
    <Card.Description>{props.charAttrs.species}</Card.Description>
    <Card.Description>{props.charAttrs.status}</Card.Description>
    <Card.Description>{props.charAttrs.origin.name}</Card.Description>
  </Card.Content>
  <Card.Content extra>
    <a>
      <Icon name='user' />
      Episodes
    </a>
  </Card.Content>
</Card>
  )
}