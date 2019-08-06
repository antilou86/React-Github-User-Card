import React from 'react';
import styled from 'styled-components'


const RoundedImg = styled.img `
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const DivContainer = styled.div `
    width: 40%;
    border-radius: 10px;
    display: flex;
    flex-flow: row nowrap;
    background-color: white;
    margin: 5px 5px;
`

const FollowerCard = (props) => {

    return (
        <DivContainer>
            <RoundedImg src={props.follower.avatar_url}/>
            <p>{props.follower.login}</p>
        </DivContainer>
    )
}

export default FollowerCard