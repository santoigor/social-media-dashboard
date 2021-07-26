import styled from 'styled-components';

import { 
    limeGreen, 
    brightRed,
} from '../UI/Variables'

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`;

export const SmallGrayText = styled.p`
    font-family: 'Inter', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: hsl(228, 12%, 44%);
`;

export const Statistic = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;
    font-weight: 700;

    color: ${({diff}) => diff === 'up'? limeGreen : brightRed};
`;

export const SocialMediaNumber = styled.p`
    font-size: ${({isOverview}) => isOverview ? '20px' : '45px'};
    font-weight: 700; 
    font-family: 'Inter', sans-serif;
    color:  ${({theme}) => theme.primaryTextColor};
`;

