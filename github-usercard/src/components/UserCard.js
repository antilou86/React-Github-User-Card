import React from 'react';
import styled from 'styled-components'


const WrapperDiv = styled.div`
    width:60%;
    margin: 20px auto;
    padding: 20px 20px;
    display: flex;
    background-color: grey;
    border-radius: 10px;
    flex-flow: verticle wrap;
    justify-content: space-between;
    
`

const RoundedImg = styled.img `
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const InnerRight = styled.div `
    width: 50%;
    text-align: right;
`



const UserCard = (props) => {

    return (
            <WrapperDiv> 
                <div> 
                    <RoundedImg src={props.userData.avatar_url ? props.userData.avatar_url : null} alt="profile image of the currently selected user"/>
                    <h3>{props.userData.name}</h3>
                </div>
                <InnerRight>
                    <p>Username: {props.userData.login}</p> 
                    <p>Bio: {props.userData.bio}</p>
                    <p>Total followers: {props.userData.followers} </p>
                    <p>Total following: {props.userData.following}</p>
                    <p>Public repos: {props.userData.public_repos}</p>
                    <a href={props.userData.html_url}><p>Check out their github!</p></a>
                </InnerRight>
            </WrapperDiv>
    )
}

export default UserCard