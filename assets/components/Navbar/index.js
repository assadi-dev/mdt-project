import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #444;
  width: 100%;
 position:sticky;
  color: #fff;
  height 70px;
  display:flex;
  align-items:center;
  z-index:55;
 
`;

const Left = styled.div`
  flex: 0.25;
`;
const Logo = styled.img`
  margin-left: 1rem;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: red;
  object-fit: contain;
`;
const Middle = styled.div`
  text-align: center;
  flex: 1 0;
`;
const Right = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Photo = styled.img`
  width: 50px;
  height: 50px;

  object-fit: cover;
`;
const Name = styled.p`
  font-size: 1.2rem;
  transform: translateY(100%);
  position: absolute;
  background-color: #444;
  width: 100%;
  right: 0;
  bottom: 0;
  padding: 0.5rem;
  text-align: center;
`;

const Title = styled.h2``;

const Navbar = () => {
  return (
    <NavContainer>
      <Left>
        {" "}
        <Logo />
      </Left>
      <Middle>
        <Title>CRIMINAL INVESTIGATION BUREAU</Title>
      </Middle>
      <Right>
        <Photo />
        <Name>Matricule Nom prenom</Name>
      </Right>
    </NavContainer>
  );
};

export default Navbar;
