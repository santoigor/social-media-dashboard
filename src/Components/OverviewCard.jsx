import styled from 'styled-components';
import upIcon from '../Assets/icon-up.svg';
import downIcon from '../Assets/icon-down.svg';

import { SmallGrayText, Statistic, SocialMediaNumber } from '../UI/Container'

import facebookIcon from '../Assets/icon-facebook.svg';
import instagramIcon from '../Assets/icon-instagram.svg';
import twitterIcon from '../Assets/icon-twitter.svg';
import youtubeIcon from '../Assets/icon-youtube.svg';

import { 
    facebookColor,
    twitterColor,
    instagramColor,
    youtubeColor,
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

const Card = styled.div`
    background: ${({theme}) => theme.cardBackground};
    border-radius: 5px;
    padding: 10px;

    width: 100%;
    max-width: 500px;

    .row {
        display: flex;
        justify-content: space-between;
        padding: 8px

    }

    .social-icon {
        width: 12px;
        height:12px;
    } 

    &:hover {
        filter: brightness(0.9);
    }
`;

export default ({
    title, 
    social_media, 
    percentage,
    number
}) => {
    console.log(mediaReferences[social_media]?.icon);
    return(
        <Card>
            <div className='row'>
                <SmallGrayText>{title}</SmallGrayText>
                <img className='social-icon' src={mediaReferences[social_media]?.icon} alt={`ícone do ${social_media}`}/>
            </div>

            <div className='row'>
                <SocialMediaNumber isOverview >{number}</SocialMediaNumber>
                <Statistic diff={percentage?.diference}>
                    <img src={percentage?.diference === 'up'? upIcon : downIcon} alt="" />
                    {percentage?.percent}
                </Statistic>  
            </div>
        </Card>
    );
}