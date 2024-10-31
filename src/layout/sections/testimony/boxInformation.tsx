import React from 'react';
import styled from "styled-components";
import {Information} from "../contacts/Information";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const BoxInformation = () => {
    return (
        <StyledBoxInformation>
            <FlexWrapper direction={"column"} justify={"space-between"}>
                <Information title={"Satisfaction Clients"} text={"100 %"}/>
                <Information title={"Clients On Worldwide"} text={"+ 80"}/>
                <Information title={"Projects Done"} text={"743"}/>
            </FlexWrapper>
        </StyledBoxInformation>
    );
};

const StyledBoxInformation = styled.div`
    max-width: 195px;
    height: 450px;
    
    @media ${theme.media.tablet} {
        padding: 70px 0 90px;
    }
`