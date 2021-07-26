import Card from "./Components/Card";
import Header from "./Components/Header";
import  Toggle from "./Components/Toggle";
import OverviewCard from "./Components/OverviewCard";
import { dark, light } from "./UI/Themes"


import { GlobalStyle } from "./UI/GlobalStyle";
import { ThemeProvider } from "styled-components";
import styled from 'styled-components'

import { grayText } from './UI/Variables';
import { Container } from './UI/Container';
import { info, overviewInfo } from "./Data";
import { useState } from "react";

const Wrapper = styled.div`
  height: 160px;
  background: ${({theme}) => theme.headerBackground};
  border-radius: 0 0 25px 25px;
`;

const FollowersList = styled.section`
  display: flex;
  gap: 23px;

`;

const Subtitle = styled.h2`
  font: 700 16px 'Inter', sans-serif;
  color: ${({isDark, theme}) => isDark ?  theme.primaryTextColor : grayText};
  padding: 40px 0 15px 0;

`;

const Overview = styled.div`

  .overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
`;

function App() {
  const [ isThemeDark, setIsThemeDark ] = useState(false);
  return (
    <ThemeProvider theme={isThemeDark ? dark : light}>
      <GlobalStyle />
     
      <Wrapper>
      <Container>
        <Header>
          <Toggle onClick={ () => setIsThemeDark(!isThemeDark)} isDark={isThemeDark} />
        </Header>
        </Container>
        <Container>
        <FollowersList>
          {
            info.data.map(({
              id,
              media,
              profile,
              followersNumber,
              statistics
            }) => <Card 
                    key={id} 
                    media={media} 
                    profile={profile} 
                    followersNumber={followersNumber} 
                    statistics={statistics} /> 
            )
          }
        </FollowersList>
        <Overview>
          <Subtitle isDark={isThemeDark}>Overview - Today</Subtitle>
          <div className="overview-content">
            { overviewInfo.data.map(({
              title, 
              social_media, 
              number, 
              percentage}) => <OverviewCard 
                                title={title} 
                                social_media={social_media} 
                                percentage={percentage} 
                                number={number} />
              )
            }
          </div>
          </Overview>
          </Container>
      </Wrapper>
     
      </ThemeProvider>
  );
}

export default App;
