import React from 'react';
import styled from 'styled-components';
import PROFILE from '../../assets/profile.png';
import NOTION from '../../assets/notion_logo.png';
import FadeInSection from '../Util/FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
    margin: 80px auto;
    text-align: center;
    width: fit-content;
    text-align: center;
`;

const CareerTitle = styled.div`
    color: #fff;
    margin-top: 50px;
    font-size: 2rem;
    padding: 0 100px;
    line-height: 1.75;
    text-align: left;
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

export default () => (
    <Container id="Career">
        <FadeInSection>
            <Title>CAREER 💼</Title>
        </FadeInSection>

        <Content>
            <FadeInSection>
                <CareerTitle>아이브릭스</CareerTitle>
            </FadeInSection>
            <FadeInSection>
                <CareerSubTitle>2019.11 ~ 재직중</CareerSubTitle>
            </FadeInSection>
            <FadeInSection>
                <CareerContent>검색, 추천, 챗봇 개발</CareerContent>
            </FadeInSection>
            <FadeInSection>
                <CareerTitle>창의와 탐구</CareerTitle>
            </FadeInSection>
            <FadeInSection>
                <CareerSubTitle>2016.07 ~ 2018.10 </CareerSubTitle>
            </FadeInSection>
            <FadeInSection>
                <CareerContent>영재고 입시 중등 수학강사</CareerContent>
            </FadeInSection>
        </Content>
    </Container>
);
