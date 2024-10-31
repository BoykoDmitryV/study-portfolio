import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <IconsBox>
                    <Icon iconId={'figma'}/>
                    <Icon iconId={'html'}/>
                    <Icon iconId={'css'}/>
                    <Icon iconId={'sass'}/>
                    <Icon iconId={'react'}/>
                </IconsBox>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background: ${theme.colors.secondaryBg};
    padding: 50px 0;
`

const IconsBox = styled.div`
    overflow: auto;
    width: 1200px;

    & > *:not(:first-child) {
        margin-left: 165px;
    }

    @media ${theme.media.tablet} {
        width: 710px;
        & > *:not(:first-child) {
            margin-left: 50px;
        }
    }
`

