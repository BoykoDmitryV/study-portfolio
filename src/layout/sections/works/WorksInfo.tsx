import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const WorksInfo = () => {
    return (
        <StyledWorksInfo>
            <Years>4 +</Years>
            <TextYears>Years <br/> Experience <br/> Working</TextYears>
        </StyledWorksInfo>
    );
};

const StyledWorksInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    @media ${theme.media.mobile} {
        flex-direction: row;
    }
`

const Years = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    min-width: 133px;
    font-size: 100px;
    color: ${theme.colors.accent};
`

const TextYears = styled.h3`
    ${font({Fmax: 40, Fmin: 26, family: '"Playfair Display", sans-serif', weight: 700, lineHeight: 1.8})}
`
