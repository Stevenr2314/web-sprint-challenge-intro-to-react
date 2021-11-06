// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;

`;

const ImageWrapper = styled.span`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: auto;
    overflow: hidden;
`;

const ImageButton = styled.button`
    font-size: 3rem;
    height: 10%;
`;

const CharacterImage = styled.img`
    display: block;
    border-radius: 2%;
    max-width: 60%;
    min-height: 90%;
`;

const CharacterInfoList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0 10% 0 0;
`;

const CharacterInfo = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const KeyP = styled.p`
    color: 'red';
    font-weight: 600;
    display: inline-block;
`;

const ValueP = styled.p`
    color: 'blue';
    display: inline-block;
`;

const CharInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: dimgrey;
    list-style-type: none;
    width: 30%;
    font-size: 1.7rem;
`;


const CharacterName = styled.h1`
    padding: 2%;
    font-size: 3rem;
`;
const getCharacter = (characters, name) => {
   const selectedCharacter = characters.filter(character => character.name === name)
   console.log(selectedCharacter)
   return selectedCharacter;
}

const characterAttr = (character) => {
    const characterEntries = Object.entries(character).slice(1,7)
    const listCharacterAttr = characterEntries.map( ([key, value]) => (
        <CharacterInfo>
            <KeyP>{key}:</KeyP> <ValueP>{value}</ValueP>
        </CharacterInfo>
    ));

    return <ul>{listCharacterAttr}</ul>
}
const Character = props =>
{
    const {characters, currentChar, lukeImg} = props;
    return (
        <CharacterWrapper>
            <ImageWrapper>
                <ImageButton>⬅</ImageButton>
                <CharacterImage src={lukeImg} alt={'Luke Skywalker'}/>
                <ImageButton>➡</ImageButton>
            </ImageWrapper>
            <CharInfoDiv>
                    <CharacterName>{currentChar}</CharacterName>
                    <CharacterInfoList>
                        {characterAttr(getCharacter(characters, currentChar)[0])}
                    </CharacterInfoList>
                </CharInfoDiv>
        </CharacterWrapper>
    );
}

export default Character;