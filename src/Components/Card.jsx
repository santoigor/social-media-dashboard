import styled from 'styled-components';
import facebookIcon from '../Assets/icon-facebook.svg';
import instagramIcon from '../Assets/icon-instagram.svg';
import twitterIcon from '../Assets/icon-twitter.svg';
import youtubeIcon from '../Assets/icon-youtube.svg';
import upIcon from '../Assets/icon-up.svg';
import downIcon from '../Assets/icon-down.svg';

import { SmallGrayText } from '../UI/Container'

import { 
        limeGreen, 
        brightRed,
        facebookColor,
        twitterColor,
        instagramColor,
        youtubeColor,
        grayText
    } from '../UI/Variables'

const mediaReferences = {
    facebook: { 
        color: facebookColor,
        icon: facebookIcon,
    },
    twitter: {
        color: twitterColor,
        icon: twitterIcon
    },
    instagram:{  
        color: instagramColor,
        icon: instagramIcon
    },
    youtube: { 
        color: youtubeColor,
        icon: youtubeIcon
    }
};

const Rectangle = styled.div`
    width: 180px;
    height: 3px;
    background: ${ ({media}) => mediaReferences[media].color };
    border-top-left-radius: 2px; 
    border-top-right-radius: 2px; 
`;
const Card = styled.div`
    border: 0;
    border-radius: 5px;

    background: ${({theme}) => theme.cardBackground};
    width: 180px;
    cursor: pointer;

    .card-content {
        padding: 20px;
        display: flex;  
        align-items: center;
        flex-direction: column;

        .social-media {
            display: flex;
            gap: 10px;
            font-size: 12px;
            color: ${grayText};
        }
    }

    &:hover {
        filter: brightness(0.9);
    };
`;
const FollowersData = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 0 16px 0;

    .number {
        font: 700 45px 'Inter', sans-serif;
        color:  ${({theme}) => theme.primaryTextColor};
    }

    .followers {
        font-size: 10px;
        letter-spacing: 2px;
        color: ${grayText};
    }
`;
const Statistic = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;

    color: ${({diff}) => diff === 'up'? limeGreen : brightRed};
`;

export default ({
    media,
    profile,
    followersNumber,
    statistics
}) => {

 return(
     <Card >
         <Rectangle media={media} />
         <div className="card-content">
            <div className="social-media">
                <img src={mediaReferences[media].icon} alt={`logo do ${media}`} />
                <SmallGrayText>{profile}</SmallGrayText>
            </div>
            <FollowersData>
                <p className="number">{followersNumber}</p>
                <p className="followers">FOLLOWERS</p>
            </FollowersData>
            <Statistic diff={statistics.diference}>
                <img src={statistics.diference === 'up'? upIcon : downIcon} alt="" />
                {statistics.number} Today
            </Statistic>
         </div>
     </Card>
 );
}