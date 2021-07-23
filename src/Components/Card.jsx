import styled from 'styled-components';

const Rectangle = styled.div`
    width: 180px;
    height: 3px;
    background: red;
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
    font-size: 12px;
`;

export default ({
    media,
    profile,
    followersNumber,
    statistics
}) => {

 return(
     <Card>
         <Rectangle />
         <div className="card-content">
            <div className="social-media">
                <p>icon</p>
                <p>{profile}</p>
            </div>
            <FollowersData>
                <p className="number">{followersNumber}</p>
                <p className="followers">FOLLOWERS</p>
            </FollowersData>
            <Statistic>{statistics.number} Today</Statistic>
         </div>
     </Card>
 );
}