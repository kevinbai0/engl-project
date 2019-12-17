import React, { useState } from "react";
import styled from "../../theme/styled";
import Header from "../../theme/Header";
import Body from "../../theme/Body";
import IntroGraphic from "../svg/IntroGraphic";
import Button from "../../theme/Button";
import Div from "../../theme/Div";
import useCustomRef from "../../hooks/useCustomRef";
import playScrollAnimation from "../../hooks/playScrollAnimation";
import ThreePillarsView from "../molecules/ThreePillarsView";
import Clickable from "../molecules/Clickable";
import Modal from "../molecules/Modal";

interface ISectionProps {
    navRef: React.RefObject<HTMLDivElement>
}

const IntroductionView: React.FC<ISectionProps> = ({navRef}) => {
    const [ modalState, setModalState ] = useState({title: "", isVisible: false} as {title: string, isVisible: boolean, body?: any});
    const showModal = (title: string, body: any) => setModalState({title, body, isVisible: true});
  
    const part2Ref = useCustomRef<HTMLDivElement>(null);
    const part3Ref = useCustomRef<HTMLButtonElement>(null);
    return (
        <Container ref={navRef}>
            <Modal isVisible={modalState.isVisible} title={modalState.title} onHide={() => setModalState({title: "", isVisible: false})}>{modalState.body}</Modal>
            <Header>
                How does the 
                <Clickable onClick={() => showModal("Design", <DesignBody />)}> design </Clickable> 
                of a website affect its  
                <Clickable onClick={() => showModal("Accessibilty", <AccessibilityBody />)}> accessibility </Clickable> and 
                <Clickable onClick={() => showModal("Usability", <UsabilityBody />)}> usability </Clickable> for global audiences?
            </Header>
            <Caption>
                And how are aesthetics balanced with user experience design 
                while keeping global audiences in mind?
            </Caption>
            <Grid>
                <RectWrapper>
                    <Body inline={`line-height: 2`}>
                    Only through an effective balance of aesthetics and user experience are websites able to be accessible and usable for global audiences.
                    </Body>
                </RectWrapper>
                <ContinueButton onClick={() => playScrollAnimation(part2Ref.pos().y - 100)}>Continue</ContinueButton>
                <Graphic />
            </Grid>

            <FlexColumn>
                <Caption2 ref={part2Ref.ref}>Designing something that looks beautiful doesn’t make a website great…</Caption2>
                <FlexRow>
                    <Button ref={part3Ref.ref} onClick={_ => playScrollAnimation(part3Ref.pos().y + 100)}>Next</Button>
                    <Header>But it helps.</Header>
                </FlexRow>
            </FlexColumn>

            <ThreePillarsView />
        </Container>
    );
}
export default IntroductionView;

const Container = styled.div`
    margin: 50px ${props => props.theme.space.mobileMargin} 0;
    ${props => props.theme.mediaQueries.tablet} {
        margin: 100px ${props => props.theme.space.desktopMargin} 0;
    }
`

const Highlight = styled.span`
    color: ${props => props.theme.colors.primaryShadow};
`;

const Caption = styled(Body)`
    margin: 40px 0 0;
    max-width: 700px;
`;

const Grid = styled(Div)`
    display: grid;
    grid-template-rows: auto auto auto
    grid-template-columns: 1fr;
    align-items: start;
    justify-items: start;
    grid-column-gap: 50px;
    ${props => props.theme.mediaQueries.tablet} {
        grid-template-rows: auto auto;
        grid-template-columns: auto auto;
        grid-column-gap: 50px;
    }
`;

const Graphic = styled(IntroGraphic)`
    grid-row: 1/2;
    width: 100%;
    ${props => props.theme.mediaQueries.tablet} {
        grid-row: 1/3;
    }
`;

const RectWrapper = styled(Div)`
    background-color: ${props => props.theme.colors.primaryDarkTint};
    padding: 20px 40px;
    max-width: 500px;
    grid-row: 2/3;
    grid-column: 1/2;
    align-self: end;
    margin: 20px 0;

    ${props => props.theme.mediaQueries.tablet} {
        margin: 80px 0;
        grid-row: 1/2;
    }
`;

const ContinueButton = styled(Button)`
    grid-row: 3/4;
    ${props => props.theme.mediaQueries.tablet} {
        grid-row: 2/3;
        grid-column: 1/2;
    }
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Caption2 = styled(Header)`
    font-weight: 400;
    max-width: 700px;
    margin: 200px 0 65vh;

    align-self: flex-start;

    ${props => props.theme.mediaQueries.tablet} {
        margin: 250px 0 65vh;
    }
`;

const DesignBody = () => <Body>
    Just "Design" refers to UI and UX design
</Body>

const AccessibilityBody = () => <Body>
    Refers to how easy it is for people with disabilities to navigate and use a website
</Body>

const UsabilityBody = () => <Body>
    Refers to how easy it is for the average user to navigate and use a website
</Body>