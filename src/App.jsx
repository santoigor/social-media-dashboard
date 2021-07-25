import Card from "./Components/Card";
import Header from "./Components/Header";
import  Toggle from "./Components/Toggle";
import OverviewCard from "./Components/OverviewCard";
import { dark, light } from "./UI/Themes"


import { GlobalStyle } from "./UI/GlobalStyle";
import { ThemeProvider } from "styled-components";
import styled from 'styled-components'

import { info, overviewInfo } from "./Data";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-around;
  

  height: 180px;
  background: ${({theme}) => theme.headerBackground};
`;

const FollowersList = styled.section`
  position: absolute;
  top: 130px;

  display: flex;
  flex-wrap: wrap;
  gap: 30px;

`;

const Subtitle = styled.h2`
  font: 700 16px 'Inter', sans-serif;
  color: hsl(228, 34%, 66%);
  position: absolute;
  top: 150px;
  left: 110px;

`;

const Overview = styled.div`
  position: relative;

  .overview-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    max-width: 800px;
    margin: 0 auto;
  }
`;

function App() {
  const [ isThemeDark, setIsThemeDark ] = useState(false);
  return (
    <ThemeProvider theme={isThemeDark ? dark : light}>
      <GlobalStyle />
      {/* <Wrapper>
        <Header>
          <Toggle onClick={ () => setIsThemeDark(!isThemeDark)} isDark={isThemeDark} />
        </Header>
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
      </Wrapper> */}
          
      <Overview>
          {/* <Subtitle>Overview - Today</Subtitle> */}
          <div className="overview-content">
            <OverviewCard />
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
      </ThemeProvider>
  );
}

export default App;
