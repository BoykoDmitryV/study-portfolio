import React from 'react';
import styled from "styled-components";
import {Information} from "./../contacts/Information";
import {ButtonArrow} from "../../../components/buttonArrow/ButtonArrow";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";

export const BoxEmail = () => {
    return (
        <StyledBoxEmail>
                <Information title={"Your name:"}/>
                <Field/>
                <Information title={"Your email  address:"}/>
                <Field/>
                <Information title={"Tell about the project:"}/>
                <Field/>
                <BoxButton>
                    <FlexWrapper align={"center"}>
                        <FooterButton>Send</FooterButton>
                        <ButtonArrow arrowId={"arrow-right"} width={"30px"} height={"30px"}/>
                    </FlexWrapper>
                </BoxButton>
        </StyledBoxEmail>
    );
};


const StyledBoxEmail = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 35px;
    
    //textarea {
    //    resize: none;
    //}
`

const Field = styled.input`
    width: 100%;
    font-family: "Poppins", sans-serif;
    border: 0;
    border-bottom: 1px solid ${theme.colors.font};
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.font};
    outline: none;
`

const FooterButton = styled.button`
    font-size: 30px;
    color: ${theme.colors.accent};
    margin-right: 40px;
`
const BoxButton = styled.div`
    
`
