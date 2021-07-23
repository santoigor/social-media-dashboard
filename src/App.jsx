import Card from "./Components/Card";
import Header from "./Components/Header";

import { GlobalStyle } from "./GlobalStyle";
import styled from 'styled-components'
import { info } from "./Data";

const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: space-around;
`;

const FollowersList = styled.section`
  position: absolute;
  top: 150px;

  display: flex;
  gap: 30px;

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>

        <Header />
        <FollowersList>
          {
            info.data.map( ({
              id,
              media,
              profile,
              followersNumber,
              statistics
            }) =>  <Card 
            key={id} 
            media={media} 
            profile={profile} 
            followersNumber={followersNumber} 
            statistics={statistics} /> )
          }
        </FollowersList>
      </Wrapper>
      </>
  );
}

export default App;
