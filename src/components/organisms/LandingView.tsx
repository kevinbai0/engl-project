import React, { useState } from "react";
import styled from "../../theme/styled";
import Title from "../../theme/Title";
import Button from "../../theme/Button";
import LandingGraphic from "../svg/LandingGraphic";
import playScrollAnimation from "../../hooks/playScrollAnimation";
import Clickable from "../molecules/Clickable";
import Modal from "../molecules/Modal";
import Body from "../../theme/Body";

const LandingView = () => {
  const [ modalState, setModalState ] = useState({title: "", isVisible: false} as {title: string, isVisible: boolean, body?: any});
  const showModal = (title: string, body: any) => setModalState({title, body, isVisible: true});

    return (
       <Container>
          <Modal isVisible={modalState.isVisible} title={modalState.title} onHide={() => setModalState({title: "", isVisible: false})}>{modalState.body}</Modal>
          <LandingViewGraphic />
            <ActionView>
                <LandingTitle>The Interrelationship Between 
                  <Clickable onClick={() => showModal("User Interface (UI)", <UIBody />)}> UI</Clickable> and 
                  <Clickable onClick={() => showModal("User Experience (UX)", <UXBody />)}> UX</Clickable></LandingTitle>
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

const UIBody = () => <Body>
  User Interfaces: refers to the visual and aesthetic makeup of a website
</Body>

const UXBody = () => <Body>
  User Experience: refers to the design of the overall experience of a website (not in terms of aesthetics) 
</Body>