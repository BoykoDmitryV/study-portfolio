import React from "react";
import styled, {css} from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {theme} from "../../../styles/Theme";

export const MobileMenu = () => {
    return (
        <StyledMobileMenu>
            <Logo/>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={false}>
                <HeaderMenu>
                    <ListItem>
                        <Link href="">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">About</Link>
                    </ListItem>
                    <ListItem>
                        <Link href="">Services</Link>
                    </ListItem>
                </HeaderMenu>
                <ButtonMenu>Contact Me</ButtonMenu>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    padding: 15px;
    font-weight: 500;
    font-size: 20px;
    display: none;

    @media ${theme.media.mobile} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: ${theme.colors.primaryBg};
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: absolute;
    top: 45px;
    right: 20px;
    width: 60px;
    height: 60px;
    z-index: 9999999;

    span {
        display: block;
        width: 34px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        bottom: 60px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: "";
            display: block;
            width: 34px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 34px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
            `}
        }
    }
`

const HeaderMenu = styled.ul`
    a {
        font-weight: 500;
        font-size: 20px;
        color: ${theme.colors.font};
    }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 170px 0;
`

const ButtonMenu = styled.button`
    padding: 10px 20px;
    background: ${theme.colors.accent};
    font-weight: 500;
    color: ${theme.colors.font};
`

const ListItem = styled.li`
    padding: 10px;
    gap: 30px;
`

const Link = styled.a`
    font-weight: 500;
    font-size: 20px;
`

