import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

type InformationPropsType = {
    title: string
    text?: string
}

export const Information = (props: InformationPropsType) => {
    return (
        <StyledInformation>
                <InfoName>{props.title}</InfoName>
                <InfoStats>{props.text}</InfoStats>
        </StyledInformation>
    );
};

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const InfoName = styled.h3`

    ${font({weight: 500, Fmax: 30, Fmin: 22})}
    
`

const InfoStats = styled.h3`
    font-size: 50px;
    color: ${theme.colors.accent};
`