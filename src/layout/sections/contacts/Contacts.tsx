import React from 'react';
import styled from "styled-components";
import {Social} from "./Social";
import {BoxEmail} from "./BoxEmail";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <ContactsBox>
                    <Social/>
                    <BoxEmail/>
                </ContactsBox>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background: ${theme.colors.secondaryBg};
`

const ContactsBox = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media ${theme.media.tablet} {
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`
