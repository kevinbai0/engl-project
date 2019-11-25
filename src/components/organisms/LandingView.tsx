import React from "react";
import styled from "../../theme/styled";
import Title from "../../theme/Title";
import Button from "../../theme/Button";
import LandingGraphic from "../svg/LandingGraphic";
import playScrollAnimation from "../../hooks/playScrollAnimation";

const LandingView = () => {
    return (
       <Container>
            <LandingViewGraphic />
            <ActionView>
                <LandingTitle>The Interrelationship Between UI and UX</LandingTitle>
                <Button onClick={() => playScrollAnimation(window.innerHeight)}>Explore</Button>
            </ActionView>
        </Container>
    )
}

export default LandingView;


const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LandingTitle = styled(Title)`
  max-width: 500px;
`;

const LandingViewGraphic = styled(LandingGraphic)`
  width: 160vw;
  height: auto;
  align-self: flex-end;
  ${props => props.theme.mediaQueries.tablet} {
    width: auto;
    min-width: 100vw;
  }
`;

const ActionView = styled.div`
  position: absolute;
  left: ${props => props.theme.space.mobileMargin};
  bottom: 20vw;
  right: ${props => props.theme.space.mobileMargin};
  ${props => props.theme.mediaQueries.tablet} {
    left: ${props => props.theme.space.desktopMargin};
    right: auto;
    bottom: ${props => props.theme.space.desktopMargin};
  }
`;