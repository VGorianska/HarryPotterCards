import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard";
import ReactDOM from 'react-dom'
import { Routes, Route } from 'react-router-dom';
import CardsCollection from "./components/CardsCollection"
import Home from './components/Home';
import styled from "styled-components";

const Header = styled.header`
font-size: 1.5rem;
display: flex;
justify-content: space-evenly;
height: 4rem;
background: #243; 
padding-top: 1rem;
`
const Link = styled.a`
text-decoration: none;
color: white;
`

 
function App() {
  
  return (
    <>
    <Header>
      <Link href="/">Home</Link>
      <Link href="/cards">Cards</Link>
      <Link href="/favourite">Favourite</Link>
    </Header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cards" element={<CardsCollection />} />
      <Route path="/favourite" element={<CardsCollection favouriteOnly={true} />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
    </>
  );
}

export default App;
