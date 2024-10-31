import React from 'react';
import styled from "styled-components";
import {BoxContent} from "./boxContent";
import {BoxInformation} from "./boxInformation";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <TestimonyBox>
                    <BoxContent/>
                    <BoxInformation/>
                </TestimonyBox>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    background: ${theme.colors.thirdBg};
`

const TestimonyBox = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
    }
`