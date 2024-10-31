import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

type WorkPropsType = {
    iconId: string
    description: string
    bgColor?:string
    textColor?:string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork bgColor={props.bgColor} textColor={props.textColor}>
                <Icon iconId={props.iconId} height={"30px"} width={"30px"} viewBox={"0 0 30 31"}/>
                <WorkText>{props.description}</WorkText>
        </StyledWork>
    );
};

type StyledWorkPropsType = {
    bgColor?:string
    textColor?:string
}

const StyledWork = styled.li<StyledWorkPropsType>`
    width: 288px;
    height: 295px;
    background: ${props => props.bgColor || "#676cdb"};
    color: ${props => props.textColor || "#FFFFFF"};
    padding: 35px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    
    @media ${theme.media.mobile} {
        width: 335px;
        height: 176px;
    }
`

const WorkText = styled.span`
    font-weight: 700;
    font-size: 20px;
    max-width: 106px;
`

