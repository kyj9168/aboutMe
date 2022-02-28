import React from 'react';
import styled from 'styled-components';
import PROFILE from '../../assets/profile.png';
import NOTION from '../../assets/notion_logo.png';
import FadeInSection from '../Util/FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Career.css';

const Container = styled.article`
    background-color: #517776;
    width: 100%;
    padding: 80px 0;
    @media (max-width: 1219px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: #fff;

    @media (min-width: 994px) {
        width: 1200px;
        margin: 0 auto;
    }
    @media (max-width: 994px) {
        text-align: center;
    }
`;
const Content = styled.div`
    margin: 40px auto;
    text-align: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    text-align: center;
    background-color: #003f3c;

    border-radius: 15px;

    @media (max-width: 994px) {
        padding: 50px 0;
    }
    @media (min-width: 994px) {
        padding: 60px 0px 70px 200px;
    }
`;

const Content2 = styled.div`
    margin: 40px auto;
    text-align: center;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    text-align: center;
    background-color: #003f3c;

    border-radius: 15px;

    @media (max-width: 994px) {
        padding: 50px 0;
    }
    @media (min-width: 994px) {
        padding: 30px  100px;
    }
`;
const CareerTitle = styled.div`
    color: #fff;
    margin-top: 50px;
    font-size: 2rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
    @media (min-width: 994px) {
        margin-top: 0px;
    }
`;
const CareerSubTitle = styled.div`
    color: #fff;
    margin-top: 10px;
    font-size: 1.5rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
`;

const CareerContent = styled.div`
    color: #fff;
    margin-top: 10px;
    font-size: 1.25rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
`;

const CareerTitle2 = styled.div`
    color: #fff;
    margin-top: 50px;
    font-size: 1.7rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
`;
const CareerSubTitle2 = styled.div`
    color: #fff;
    margin-top: 10px;
    font-size: 1.3rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
`;

const CareerContent2 = styled.div`
    color: #fff;
    margin-top: 10px;
    font-size: 1rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
`;

const ImgDiv = styled.img`
    background-color: #fff;
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 50%;
    @media (min-width: 994px) {
        position: absolute;
        left: calc(50% - 250px);
        top: -15px;
    }
`;

const CareerTitle3 = styled.div`
    color: #fff;
    margin-top: 0px;
    font-size: 1.7rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
`;
const Hr = styled.hr`
    width: 80%;
    background-color: #d20e0e;
    border-color: white;
    color: red;
`;

export default () => (
    <Container id="Career">
        <FadeInSection>
            <Title>CAREER 💼</Title>
        </FadeInSection>
        <FadeInSection>
            <Content>
                <FadeInSection id="imgFadeSection">
                    <ImgDiv src="/images/logo_type_a.png" alt="logo" />
                </FadeInSection>

                <FadeInSection>
                    <CareerTitle>아이브릭스</CareerTitle>
                </FadeInSection>
                <FadeInSection>
                    <CareerSubTitle>2019.11 ~ 재직중</CareerSubTitle>
                </FadeInSection>
                <FadeInSection>
                    <CareerContent>검색, 추천, 챗봇 개발</CareerContent>
                </FadeInSection>
            </Content>
        </FadeInSection>
        <FadeInSection>
            <Hr />
        </FadeInSection>
        <FadeInSection>
            <Content2>
                <FadeInSection>
                    <CareerTitle3>etc. </CareerTitle3>
                </FadeInSection>
                <FadeInSection>
                    <CareerTitle2>창의와 탐구</CareerTitle2>
                </FadeInSection>
                <FadeInSection>
                    <CareerSubTitle2>2016.07 ~ 2018.10 </CareerSubTitle2>
                </FadeInSection>
                <FadeInSection>
                    <CareerContent2>영재고 입시 중등 수학강사</CareerContent2>
                </FadeInSection>
            </Content2>
        </FadeInSection>
    </Container>
);
