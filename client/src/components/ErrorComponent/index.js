import React from 'react';
import { ErrorPageContainer, ErrorPageText, ErrorPageH1, ButtonContainer, BackButton } from "./ErrorStyle"
const ErrorComponent = () => {
  return (
    <>
      <ErrorPageContainer>
        <ErrorPageText>
          <ErrorPageH1>
            Something Went Wrong <br /> Please Try Again
          </ErrorPageH1>
        </ErrorPageText>
      </ErrorPageContainer>
      <ButtonContainer>
        <BackButton to="/">Go to Home Page</BackButton>
      </ButtonContainer>
    </>
  );
};

export default ErrorComponent;
