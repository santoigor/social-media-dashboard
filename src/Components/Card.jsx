import styled from 'styled-components';
import facebookIcon from '../Assets/icon-facebook.svg';
import instagramIcon from '../Assets/icon-instagram.svg';
import twitterIcon from '../Assets/icon-twitter.svg';
import youtubeIcon from '../Assets/icon-youtube.svg';
import upIcon from '../Assets/icon-up.svg';
import downIcon from '../Assets/icon-down.svg';

const mediaReferences = {
    facebook: { 
        color: "hsl(208, 92%, 53%)",
        icon: facebookIcon,
    },
    twitter: {
        color: "hsl(203, 89%, 53%)",
        icon: twitterIcon
    },
    instagram:{  
        color: "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
        icon: instagramIcon
    },
    youtube: { 
        color: "hsl(348, 97%, 39%)",
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

    background: hsl(227, 47%, 96%);
    width: 180px;

    .card-content {
        padding: 20px;
        display: flex;  
        align-items: center;
        flex-direction: column;

        .social-media {
            display: flex;
            gap: 10px;
            font-size: 12px;
        }
    }
`;
const FollowersData = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 0 16px 0;

    .number {
        font: 700 45px 'Inter', sans-serif;
    }

    .followers {
        font-size: 10px;
        letter-spacing: 2px;
        color: hsl(228, 12%, 44%);
    }
`;
const Statistic = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 10px;

    color: ${({diff}) => diff === 'up'? 'hsl(163, 72%, 41%)' : 'hsl(356, 69%, 56%)'};
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
                <p>{profile}</p>
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