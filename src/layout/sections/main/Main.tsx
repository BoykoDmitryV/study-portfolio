import React from "react";
import styled from "styled-components";
import photo1 from "../../../assets/images/photo-1.webp"
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {font} from "../../../styles/Common";
import photo2 from "../../../assets/images/photo-2.jpg";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction={"column"} wrap={"reverse"}>
                    <Photo src={photo1} alt=""/>
                    <SmallText>Hello! <br/> I’m Zarror Nibors</SmallText>
                    <BoxContainer>
                        <BoxText>
                            I’am freelance <ColorText>web developer</ColorText> based in Indonesia who loves to craft
                            attractive design
                            experiences for
                            the web.
                        </BoxText>
                        <FlexWrapper justify={"space-between"} align={"center"}>
                            <ButtonOne>
                                <Icon iconId={"mail"} width={"18px"} height={"14px"} viewBox={"0 0 18 14"}/>
                                <span>Email me</span>
                            </ButtonOne>
                            <ButtonTwo>
                                <Icon iconId={"download"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                <span>Download CV</span>
                            </ButtonTwo>
                        </FlexWrapper>
                    </BoxContainer>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background: url(${photo1}) no-repeat;
    background-size: calc(50%);
    background-position: right;
    object-fit: cover;
    background-color: ${theme.colors.primaryBg};

    @media ${theme.media.mobile} {
        background-size: calc(0%);
        padding: 0;
    }
`

const Photo = styled.img`
    width: 0%;
    height: 0%;
    object-fit: cover;
    opacity: 0;
    @media ${theme.media.mobile} {
        width: 100%;
        height: 100%;
        max-height: 450px;
        object-fit: cover;
        opacity: 100;
        padding-right: 0;
    }
`

const SmallText = styled.h1`
    ${font({family: "'Playfair Display', sans-serif", weight: 700, Fmax: 90, Fmin: 50})}
    padding: 100px 0 10px;
    
    @media ${theme.media.mobile} {
        padding: 60px 0 28px;
    }
`

const BoxContainer = styled.div`
    font-size: 20px;
    line-height: 1.8;
    color: ${theme.colors.grey};
    max-width: 404px;
    
    @media ${theme.media.mobile} {
       margin: 40px 0 90px;
    }
`

const BoxText = styled.p`
    ${font({Fmax: 20, Fmin: 16, lineHeight: 1.8, color: theme.colors.grey})}
    margin-bottom: 30px;

    @media ${theme.media.mobile} {
        margin-bottom: 40px;
    }
`

const ColorText = styled.span`
    color: ${theme.colors.font};
`

const ButtonOne = styled.button`
    ${font({Fmax: 20, Fmin: 16})}
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 203px;
    height: 64px;
    background: ${theme.colors.accent};
    color: ${theme.colors.font};
`

const ButtonTwo = styled.button`
    ${font({Fmax: 20, Fmin: 16})}
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-decoration: underline;
    width: 201px;
    height: 44px;
`

