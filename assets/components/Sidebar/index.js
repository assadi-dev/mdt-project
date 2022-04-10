import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 220px;
  min-height: 100vh;
  background-color: #333840;
  color: #fff;
`;

const Content = styled.div`
  margin-top: 100px;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li`
  padding-left: 1rem;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  position: relative;

  :after {
    content: "";
    width: 5px;
    height: 50%;
    background-color: transparent;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
  :hover:after {
    background-color: #fff;
  }
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Content>
        <MenuList>
          <MenuItem>
            {" "}
            <Link to="/">Accueil</Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to="/services">Service</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/effectifs">Effectif</Link>
          </MenuItem>
          <MenuItem>
            {" "}
            <Link to="/documents">Document</Link>
          </MenuItem>
        </MenuList>
      </Content>
    </Wrapper>
  );
};

export default Sidebar;
