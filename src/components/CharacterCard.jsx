import styled from "styled-components"
import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"
import CardFront from "./CardFront"
import CardBack from "./CardBack"

const houseColors = {
  Gryffindor: "#740001",
  Slytherin: "#1A472A",
  Hufflepuff: "#FFDB00",
  Ravenclaw: "#222F5B"
}

const StyledImage = styled.img`
display: block;
width: 200px;
height: 200px;
margin: 0 auto 10px;
border-radius: 50%;
background-color: #FFF;
border: 10px solid ${props => houseColors[props.house]};
object-fit: cover;
 `;

const SectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  height: 100px;
`;

const StyledArticle = styled.article`
  margin-left: 1rem;
  font-size: 1rem;
  width: 100%;
`;

const Star = styled.div`
font-size: 3rem;
position: absolute;
right: 1rem;
top: 1rem;
`


function CharacterCard({ student, toggleFlipped, toggleFavourite }) {




  return <ReactCardFlip isFlipped={student.flipped} flipDirection="horizontal">
    <CardFront>
      <Star onClick={(event) => {
        event.preventDefault()
        toggleFavourite(student.name)
      }}>{student.favourite ? '⭐️' : '✩'}</Star>
      <SectionContainer onClick={() => toggleFlipped(student.name)}>
        <StyledArticle>
          <h2 className="card__header">{student.name}</h2>
        </StyledArticle>
      </SectionContainer>
    </CardFront>

    <CardBack onClick={() => toggleFlipped(student.name)}>
      <SectionContainer>
        <StyledImage house={student.house} src={student.image || "https://logos-world.net/wp-content/uploads/2020/04/Harry-Potter-Emblem-700x394.png"} />
        <StyledArticle>
          <h2>{student.name}</h2>
          <p>House: {student.house ?? "Not available"}</p>
          <p>Patronus: {student.patronus ?? "Not available"}</p>
          <p>Eye colour: {student.eyeColour ?? "Not available"}</p>
          <p>Actor: {student.actor ?? "Not available"}</p>
        </StyledArticle>
      </SectionContainer>
    </CardBack>
  </ReactCardFlip>
}


export default CharacterCard;


