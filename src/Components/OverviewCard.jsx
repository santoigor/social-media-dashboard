import styled from 'styled-components';
import { SmallGrayText } from '../UI/Container'

const Card = styled.div`
    background: ${({theme}) => theme.cardBackground};
    border-radius: 5px;
    padding: 10px;

    width: 100%;
    max-width: 500px;

    .row {
        display: flex;
        justify-content: space-between;
    }


`;

export default ({
    title, 
    social_media, 
    percentage,
    number
}) => {
    return(
        <Card>
            <div className='row'>
                <SmallGrayText>{title}</SmallGrayText>
            </div>

            <div className='row'>
                {number}
                {percentage?.percent}
            </div>
        </Card>
    );
}