import styled from 'styled-components';
import { SmallGrayText } from '../UI/Container'

const Header = styled.header`
    display: flex;
    justify-content: center;
    padding: 25px 0 30px 0;

    .header-content {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
    }
`;

const Title = styled.h1`
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    color: ${({theme}) => theme.primaryTextColor};
`;


export default ({children}) => {
    return(
        <Header>
            <div className="header-content">
                <div>
                    <Title>Social Media Dashboard</Title>
                    <SmallGrayText>Total followers: 23,004</SmallGrayText>
                </div>
               {children}
            </div>
          
        </Header>
    );
}