import React from "react";
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";


export const Menu = () => {
    return (
        <StyledMenu>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo/>
                <HeaderMenu>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <ListItem>
                            <Link href="">Home</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="">About</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="">Services</Link>
                        </ListItem>
                    </FlexWrapper>
                </HeaderMenu>
                <StyledButtonMenu>Contact Me</StyledButtonMenu>
            </FlexWrapper>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    font-weight: 500;
    font-size: 20px;
    margin-top: 10px;

    @media ${theme.media.mobile} {
        display: none;
    }
`

const HeaderMenu = styled.ul`
    a {
        font-weight: 500;
        font-size: 20px;
        color: ${theme.colors.font};
    }
`

const StyledButtonMenu = styled.button`
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

