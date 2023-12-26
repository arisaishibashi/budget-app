import React from "react";
import styled from "styled-components";
import HomeComponent from "./modules/home";


const Container = styled.div`
background-color: #333333;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: #333333;
  color: #F7F7F7;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;
const App = () => {
  return (
    <Container>
      <Header>Available budget in November 2023</Header>
      <HomeComponent />
    </Container>
  );
};

export default App;