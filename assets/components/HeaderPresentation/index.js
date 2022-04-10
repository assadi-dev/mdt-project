import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

const Title = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

const HeaderPresentation = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default HeaderPresentation;
