import styled from 'styled-components';
import Toggle from './Toggle';

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items:  flex-start;
    width: 100%;
    padding: 20px;

    .header-content {
        width: 100%;
        max-width: 800px;
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.primaryTextColor}
`;
const NumberFollowers = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: hsl(228, 12%, 44%);
`;

export default () => {
    return(
        <Header>
            <div className="header-content">
                <div>
                    <Title>Social Media Dashboard</Title>
                    <NumberFollowers>Total followers: 23,004</NumberFollowers>
                </div>
                <Toggle/>
            </div>
          
        </Header>
    );
}