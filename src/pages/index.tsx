import React from "react"
import { Link } from "gatsby"

import styled from "../theme/styled";
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingView from "../components/organisms/LandingView";
import IntroductionView from "../components/organisms/IntroductionView";
import PsychologyView from "../components/organisms/PsychologyView";
import MacroUXView from "../components/organisms/MacroUXView";
import MicroUXView from "../components/organisms/MicroUXView";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <LandingView />
      <IntroductionView />
      <PsychologyView />
      <MacroUXView />
      <MicroUXView />
    </Background>
  </Layout>
)

export default IndexPage;



const Background = styled.div`
  background-color: ${props => props.theme.colors.primary}
`;