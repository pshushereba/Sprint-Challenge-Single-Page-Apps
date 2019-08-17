import React from "react";
import {Card, Grid, Image} from 'semantic-ui-react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2.5%;
`;

export default function LocationCard(props) {
  return (
    <>
    <WrapperDiv>
      <Card>
        <Card.Content>
        <Card.Header>{props.locationAttrs.name}</Card.Header>
        <Card.Meta>{props.locationAttrs.type}</Card.Meta>
        <Card.Description>{props.locationAttrs.dimension}</Card.Description>
    {/* <Card.Description>{props.locationAttrs.residents}</Card.Description> */}
        </Card.Content>
      </Card>
    </WrapperDiv>
    </>
  )
}