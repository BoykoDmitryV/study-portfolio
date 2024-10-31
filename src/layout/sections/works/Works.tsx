import React from 'react';
import styled from "styled-components";
import {WorksInfo} from "./WorksInfo";
import {WorksSpecialized} from "./WorksSpecialized";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <WorksContainer>
                    <WorksInfo/>
                    <WorksSpecialized/>
                </WorksContainer>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    background: ${theme.colors.primaryBg};
    
    @media ${theme.media.mobile} {
        padding: 40px 0px 90px;
    }
`

const WorksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media ${theme.media.mobile} {
        flex-direction: column;
    }
`
