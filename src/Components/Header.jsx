import styled from 'styled-components';
import Toggle from './Toggle';

const Header = styled.header`
    width: 100%;
    background: hsl(225, 100%, 98%);
    display: flex;
    justify-content: center;
    align-items:  flex-start;

    height: 250px;

    .header-content {
        width: 100%;
        max-width: 900px;
        display: flex;
        justify-content: space-between;
        margin-top: 35px;
    }
`;

const Title = styled.h1`
    font-size: 26px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
`;
const NumberFollowers = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 14px;
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