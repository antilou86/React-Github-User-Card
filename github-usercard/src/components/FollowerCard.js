import React from 'react';
import styled from 'styled-components'


const RoundedImg = styled.img `
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 8px;
    margin-left: 5px;
    margin-right: 6px;
`
const DivContainer = styled.div `
    width: 47%;
    border-radius: 10px;
    display: flex;
    flex-flow: row nowrap;
    background-color: white;
    margin: 5px 5px;
    text-align: right;
`

const FollowerCard = (props) => {

    return (
        <DivContainer>
            <RoundedImg src={props.follower.avatar_url}/>
            <p>--{props.follower.login}</p>
        </DivContainer>
    )
}

export default FollowerCard