import React from 'react';
import styled from "styled-components";
import iconsSprite from "../../assets/images/icons-sprite.svg";
import {FlexWrapper} from "../FlexWrapper";

type ButtonArrowPropsType = {
    arrowId:string
    width?:string
    height?:string
    viewBox?:string
}

export const ButtonArrow = (props: ButtonArrowPropsType) => {
    return (
        <StyledButtonArrow>
            <FlexWrapper align={"center"}>
                <svg width={props.width || "40"} height={props.height || "40"} viewBox={props.viewBox || "0 0 40 40"}
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${iconsSprite}#${props.arrowId}`}/>
                </svg>
            </FlexWrapper>
        </StyledButtonArrow>
    );
};

const StyledButtonArrow = styled.button`

`