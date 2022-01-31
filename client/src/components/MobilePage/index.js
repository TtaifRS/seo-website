import React from 'react';
import { MobilePageContainer, MobilePageText, MobilePageH1 } from "./MobilePageStyle"

const MobilePage = () => {
  return (
    <MobilePageContainer>
      <MobilePageText>
        <MobilePageH1>
          Please visit this <br /> website from <br /> DESKTOP
        </MobilePageH1>
      </MobilePageText>
    </MobilePageContainer>
  );
};

export default MobilePage;
