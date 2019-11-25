import React from "react"
import { Link } from "gatsby"

import styled from "../theme/styled";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Title from "../theme/Title";
import Button from "../theme/Button";
import LandingGraphic from "../components/svg/LandingGraphic";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <LandingView>
        <LandingViewGraphic />
        <ActionView>
          <LandingTitle>The Interrelationship Between UI and UX</LandingTitle>
          <Button>Get Started</Button>
        </ActionView>
      </LandingView>
    </Background>
  </Layout>
)

export default IndexPage;



const Background = styled.div`
  background-color: ${props => props.theme.colors.primary}
`;

const LandingView = styled.div`
  width: 100vw;
  height: 100vh;
`;

const LandingTitle = styled(Title)`
  max-width: 500px;
  
`;

const LandingViewGraphic = styled(LandingGraphic)`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 100vw;
  height: auto;
`;

const ActionView = styled.div`
  position: absolute;
  left: 10vw;
  right: 10vw;
  bottom: 10vw;
`;