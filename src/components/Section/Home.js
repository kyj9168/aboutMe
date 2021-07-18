import React from "react";
import styled, { keyframes } from "styled-components";
import img from "../../assets/home.png";
import Typewriter from "typewriter-effect";
import "./Home.css";
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
            {/* <Typing>
                <Title>안녕하세요!</Title>
                <SubTitle>능동적인 태도로 항상 발전을 이루는</SubTitle>
                <SubTitle>
                    <span style={{ color: "rgb(191, 208, 152)" }}>
                        Web Developer{" "}
                    </span>
                    <span> 김영준입니다.</span>
                </SubTitle>
            </Typing> */}
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(
                            "<span class='Title'>안녕하세요!</span><br>"
                        )
                        .typeString(
                            "<span class='Title'>능동적인 태도로 항상 발전을 이루는</span><br>"
                        )
                        .typeString(
                            "<span class='Title'> <span class='Title Subcolor'> Web Developer</span> 김영준입니다.</span>"
                        )
                        .start();
                }}
            />
        </TitleContainer>
    </Container>
);
