import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #444;
  width: 100%;
 
  color: #fff;
  height 60px;
  display:flex;
  align-items:center;
 
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
  width: 40px;
  height: 40px;
  object-fit: contain;
`;
const Name = styled.p`
  font-size: 1.2rem;
  transform: translateY(100%);
  position: absolute;
  background-color: #444;
  width: 100%;
  right: 0;
  bottom: 0;
  padding: 1rem;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Left>
        {" "}
        <Logo />
      </Left>
      <Middle>
        <p>CRIMINAL INVESTIGATION BUREAU</p>
      </Middle>
      <Right>
        <Photo />
        <Name>Matricule Nom prenom</Name>
      </Right>
    </NavContainer>
  );
};

export default Navbar;
