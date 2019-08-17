import React from "react";
import {Card, Grid, Image} from 'semantic-ui-react';
import styled from 'styled-components';

// const WrapperDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: flex-start;
//   padding: 2.5%;
// `;

export default function EpisodeCard(props) {
  return (
    <>
    <Card.Group>
      <Card>
        <Card.Content>
        <Card.Header>{props.episodeAttrs.name}</Card.Header>
            <Card.Meta>{props.episodeAttrs.episode}</Card.Meta>
            <Card.Description>{props.episodeAttrs.air_date}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
    </>
  )
}