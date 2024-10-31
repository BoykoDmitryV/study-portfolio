import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"center"}>
                    <span>
                  Created by <TextB>Zarror</TextB> | All Reserved!
                    </span>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    ${font({weight: 500, Fmax: 20, Fmin: 16, lineHeight: 1.8, color: theme.colors.grey})}
    letter-spacing: 0.02em;
    background-color: ${theme.colors.secondaryBg};
    padding-bottom: 50px;

    @media ${theme.media.tablet} {
        padding: 30px 0;
    }
    
`

const TextB = styled.b`
    color: ${theme.colors.font};
`