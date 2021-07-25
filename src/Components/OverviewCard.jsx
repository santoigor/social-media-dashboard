import styled from 'styled-components';

const Card = styled.div`
    background: ${({theme}) => theme.cardBackground};
    border-radius: 5px;

`;

export default () => {
    return(
        <Card>
            
        </Card>
    );
}