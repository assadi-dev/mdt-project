import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #444;
  width: 100%;
  min-height: 100vh;
`;
const Content = styled.div`
  background-color: lightgray;
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
const GridContent = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  min-height: 100vh;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Content>
        <Navbar />
        <GridContent>
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Outlet />
          </div>
        </GridContent>
      </Content>
    </Wrapper>
  );
};

export default Layout;
