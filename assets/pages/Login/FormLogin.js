import React from "react";
import Input from "../../components/Input";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #444;
`;
const FormContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;

const Botomseparator = styled.div`
  margin-bottom: 2rem;
`;

const LoginButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 1.5rem;
  :hover {
    background-color: #f03262;
  }
`;

const FormBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormLogin = () => {
  return (
    <PageContainer>
      <FormContainer>
        <form action="">
          <Input
            borderClass="input-form"
            name="username"
            placeholder="Prénom nom"
            borderColor={"green"}
            style={{ fontSize: "2rem", color: "#fff", textAlign: "center" }}
          />
          <Botomseparator />
          <Input
            borderClass="input-form"
            type="password"
            name="password"
            placeholder="Mot de passe"
            borderColor={"green"}
            style={{ fontSize: "2rem", color: "#fff", textAlign: "center" }}
          />
        </form>
        <Botomseparator />
        <FormBottom>
          <LoginButton>Se connecter</LoginButton>
        </FormBottom>
      </FormContainer>
    </PageContainer>
  );
};

export default FormLogin;
