import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

export const Social = () => {
    return (
        <StyledSocial>
            <SocialTitle>Let’s <br/> Connect</SocialTitle>
            <SocialIcons>
                <a href=""><Icon iconId={"dribble"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a>
                <a href=""><Icon iconId={"upwork"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a>
                <a href=""><Icon iconId={"youtube"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a>
                <a href=""><Icon iconId={"linkedin"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a>
                <a href=""><Icon iconId={"github"} width={"25"} height={"25"} viewBox={"0 0 25 25"}/></a>
            </SocialIcons>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    width: 100%;
`

const SocialTitle = styled.h3`
    ${font({weight: 700, Fmax: 100, Fmin: 50})};
`

const SocialIcons = styled.ul`
    padding-top: 30px;
    max-width: 325px;
    display: flex;
    justify-content: space-between;

    @media ${theme.media.tablet} {
        padding: 60px 0 90px;
    }
`