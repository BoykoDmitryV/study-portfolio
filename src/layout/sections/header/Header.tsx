import React from "react";
import styled from "styled-components";
import {Menu} from "./Menu";
import {MobileMenu} from "./MobileMenu";
import {Container} from "../../../components/Container";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Menu/>
                <MobileMenu/>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    max-width: 1200px;
    width: 100%;
`

