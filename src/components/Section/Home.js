import React from "react";
import styled, { keyframes } from "styled-components";
import img from "../../assets/home.png";
import Typing from "react-typing-animation";

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    height: calc(100vh - 5rem);
    @media (max-width: 994px) {
        height: 70vh;
    }
`;
const Background = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${img});
    background-position: center center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
`;
const TitleContainer = styled.div`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent -webkit-linear-gradient(
            left,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.075),
            rgba(0, 0, 0, 0)
        ) repeat scroll 0 0;
    line-height: 1.5;
`;
const Title = styled.h2`
    font-size: 5rem;
    font-weight: 600;
    white-space: nowrap;
    @media (min-width: 540px) and (max-width: 994px) {
        font-size: 3rem;
    }
    @media (max-width: 540px) {
        font-size: 2.2rem;
    }
`;
const SubTitle = styled.h3`
    font-size: 4rem;
    font-weight: 600;
    color: rgba(20, 20, 20, 0.6);
    white-space: nowrap;
    @media (min-width: 540px) and (max-width: 994px) {
        font-size: 2rem;
    }
    @media (max-width: 540px) {
        font-size: 1.3rem;
    }
`;
const CursorSpan = styled.span`
    font-weight: 100;
    color: black;
    font-size: 1em;
    animation: ${blink} 1s step-end infinite;
`;

export default () => (
    <Container id="Home">
        <Background />
        <TitleContainer>
            <Typing>
                <Title>안녕하세요!</Title>
                <SubTitle>능동적인 태도로 항상 발전을 이루는</SubTitle>
                <SubTitle>
                    <span style={{ color: "rgb(191, 208, 152)" }}>
                        Web Developer{" "}
                    </span>
                    <span> 김영준입니다.</span>
                </SubTitle>
            </Typing>
        </TitleContainer>
    </Container>
);
