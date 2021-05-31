import React from "react";
import styled from "styled-components";
import vectorImage from "./../../assets/vector-image.jpg";
import { Button } from "@material-ui/core";

const Homepage = () => {
  return (
    <>
      <HomepageContainer>
        <InfoContainer>
          <h3>HowYouDoin'?</h3>
          <MainContainer>
            <Container>
              <h1>Relax.</h1>
              <h1>Communicate.</h1>
              <h1>Get Better.</h1>
              <MutedText>
                You are not alone. Find activities to make you feel better. Stay
                in touch with your therapist and let them help you.
              </MutedText>
              <ButtonsContainer>
                <SignupButton variant="contained" color="primary">
                  Signup
                </SignupButton>
                <LoginButton color="primary">Login</LoginButton>
              </ButtonsContainer>
            </Container>
          </MainContainer>
        </InfoContainer>
        <ImageContainer src={vectorImage} />
      </HomepageContainer>
    </>
  );
};

const HomepageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const InfoContainer = styled.div`
  border-radius: 1rem;
  font-family: "Roboto", sans-serif;
  border: 5px solid rgb(216, 216, 216);
  border-radius: 2rem;
  flex-grow: 1;
  height: 90vh;
  margin: 2rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const ImageContainer = styled.img`
  background: transparent;
  height: 100vh;
  margin-left: 0;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  font-size: 2rem;
`;

const Container = styled.div``;

const MutedText = styled.p`
  font-size: 1rem;
  color: rgb(182, 183, 193);
  width: 80%;
  margin-top: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 60%;
`;

const SignupButton = styled(Button)`
  &&& {
    margin-right: 1rem;
    background: rgb(0, 125, 254);
  }
`;

const LoginButton = styled(Button)`
  &&& {
    color: rgb(0, 125, 254);
  }
`;

export default Homepage;
