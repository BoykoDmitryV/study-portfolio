import React from 'react';
import {Work} from "./Work";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const WorksSpecialized = () => {
    return (
        <BoxTwo>
            <SmallText>Developer and Designer, <br/> specialized in <br/> UI/UX and Web Developer</SmallText>
                <CardBox>
                    <Work
                        iconId={"computer"}
                        description={"Front End Developer"}/>
                    <Work
                        iconId={"paint"}
                        description={"UI/UX Designer"}
                        bgColor={theme.colors.grey}
                        textColor={theme.colors.secondaryBg}/>
                    <Work
                        iconId={"thunder"}
                        description={"Branding Designer"}
                        bgColor={theme.colors.grey}
                        textColor={theme.colors.secondaryBg}/>
                </CardBox>
        </BoxTwo>
    );
};

const BoxTwo = styled.div`
    max-width: 100%;
    @media ${theme.media.mobile} {
        text-align: center;
    }
`

const SmallText = styled.p`
    padding-bottom: 20px;
    text-align: center;
    ${font({Fmax: 40, Fmin: 24, weight: 700, lineHeight: 1.8})}
    @media ${theme.media.mobile} {
    padding: 60px 0;
}
`

const CardBox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`