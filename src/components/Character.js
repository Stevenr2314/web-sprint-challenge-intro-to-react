// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterWrapper = styled.div`
    display: flex;
`;

const ImageWrapper = styled.span`
    display: flex;
`;

const ImageButton = styled.span`
    display: inline-block;
`;

const CharacterImage = styled.span`
    border-radius: 2%;
`;

const CharacterInfo = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
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
    background-color: 'antiquewhite';
    list-style-type: none;
`;

const characterAttr = (character) => {
    const characterEntries = Object.entries(character).slice(0,7)
    const listCharacterAttr = characterEntries.map( ([key, value]) => (
        <li>
            <KeyP>{key}:</KeyP> <ValueP>{value}</ValueP>
        </li>
    ));

    return <ul>{listCharacterAttr}</ul>
}

const Character = props =>
{
    const {characters} = props;
    /* 
        Iterate over each character and save each key value pair up to a certain amount
    
    */
    

    return (
        <CharacterWrapper>
            <ImageWrapper>
                <ImageButton></ImageButton>
                <CharacterImage></CharacterImage>
                <ImageButton></ImageButton>
                {characters.map(character => 
                   (<CharInfoDiv>
                        <CharacterInfo>
                            {characterAttr(character)}
                        </CharacterInfo>
                    </CharInfoDiv>)
                )}
            </ImageWrapper>
        </CharacterWrapper>
    );
}

export default Character;