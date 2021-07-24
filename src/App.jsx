import Card from "./Components/Card";
import Header from "./Components/Header";
import { dark, light } from "./UI/Themes"

import { GlobalStyle } from "./UI/GlobalStyle";
import { ThemeProvider } from "styled-components";
import styled from 'styled-components'

import { info } from "./Data";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-around;
  

  height: 180px;
  /* background: hsl(225, 100%, 98%); */
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
`;

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Wrapper>
        <Header />
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
      </Wrapper>
          
      <Overview>
          <Subtitle>Overview - Today</Subtitle>

        </Overview>

      
      </ThemeProvider>
  );
}

export default App;
