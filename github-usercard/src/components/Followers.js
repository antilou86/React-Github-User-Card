import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components'

const FollowDiv = styled.div`
    width:60%;
    margin: 20px auto;
    padding: 20px 20px;
    display: flex;
    background-color: grey;
    border-radius: 10px;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

const Followers = props => {

    return (
        <FollowDiv>
            {props.followerData.map(follower => <FollowerCard key={follower.id} follower={follower}/>)}
        </FollowDiv>
    )
}


export default Followers