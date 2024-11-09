import React from 'react';
import styled from "styled-components";
import photo2 from '../../../assets/images/photo-2.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {ButtonArrow} from "../../../components/buttonArrow/ButtonArrow";

export const BoxContent = () => {
    return (
        <BoxInformation>
            <Photo src={photo2} alt=""/>
            <BoxContainer>
                <BoxTitle>“</BoxTitle>
                <BoxP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                    a,
                    mattis
                    tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                    tellus
                    elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                    sociosqu
                    ad litora torquent
                </BoxP>
                <BoxButton>
                    <FlexWrapper justify={"space-between"}>
                        <ButtonArrow arrowId={"arrow-left"}/>
                        <ButtonArrow arrowId={"arrow-right"}/>
                    </FlexWrapper>
                </BoxButton>
            </BoxContainer>
        </BoxInformation>
    );
};

const BoxInformation = styled.div`
    max-width: 890px;
    display: flex;
    height: 100%;
    
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`

const Photo = styled.img`
    max-width: 390px;
    height: 390px;
    //background: #c4c4c4, url("path_to_image");
    object-fit: cover;
    padding-right: 15px;
    @media ${theme.media.mobile} {
        width: 335px;
        height: 373px;
        padding-right: 0;
    }
`

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media ${theme.media.mobile} {
        width: 100%;
        height: 100%;
    }
`

const BoxTitle = styled.h3`
    font-size: 100px;
    color: ${theme.colors.grey};
    height: 85px;
`

const BoxP = styled.p`
    font-weight: 700;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    //overflow: auto;
    //height: 260px;
`

const BoxButton = styled.div`
    max-width: 95px;
`
