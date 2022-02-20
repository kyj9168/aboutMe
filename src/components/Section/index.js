import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Home from './Home';
import About from './About';
import Skill from './Skill';
import Project from './Projects';
import Career from './Career';

import PAGEUPIMG from '../../assets/page-up.svg';
import { useScroll } from '../Util/Scroll';
import React from 'react';

const Container = styled.section`
    width: 100%;
    @media (max-width: 994px) {
        padding-top: 60px;
    }
`;

const PageUpIcon = styled.img`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #ffffff80;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    transition: background-color 0.5s, opacity 1s;
    &:hover {
        background-color: #fff;
    }

    @media (min-width: 994px) {
        height: 50px;
        width: 50px;
        border: 5px solid #000;
    }

    @media (min-width: 540px) and (max-width: 994px) {
        height: 40px;
        width: 40px;
        border: 4px solid #000;
    }

    @media (max-width: 540px) {
        width: 30px;
        height: 30px;
        border: 3px solid #000;
    }
`;
export default () => {
    const { scrollY } = useScroll();

    // console.log(scrollY);

    return (
        <Container animate={scrollY}>
            <Home />
            <About />
            <Career />
            <Skill />
            <Project />
            <PageUpIcon
                onClick={() => {
                    if (scrollY > 0) window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}
                style={{ opacity: scrollY > 0 ? 1 : 0, cursor: scrollY > 0 ? 'pointer' : 'default' }}
                src={PAGEUPIMG}
            />
        </Container>
    );
};
