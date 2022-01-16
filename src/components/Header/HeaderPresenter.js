import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.header`
    position: fixed;
    width: 100%;
    padding: 0 100px;
    background-color: ${(props) => (props.current ? '#fff' : 'transparent')};
    transition: all 0.1s linear;
    box-shadow: ${(props) => (props.current ? '0px 1px 5px 2px rgba(200,200,200, 0.8)' : 'none')};
    z-index: 2;

    @media (max-width: 994px) {
        padding: 0;
        background-color: #fff;
        color: #000;
        box-shadow: 0px 1px 5px 2px rgba(200, 200, 200, 0.8);
    }
`;

const HeaderWrap = styled.nav`
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 60px;
`;
const Button = styled.button`
    border: none;
    background: none;
    color: #000;
    display: none;
    outline: none;
    margin-right: 30px;
    cursor: pointer;
    text-align: center;
    @media (max-width: 994px) {
        display: block;
        z-index: 2;
    }
`;
const Logo = styled.h1`
    padding-top: 15px;
    font-size: 24px;
    height: 100%;
    transition: 0.3s;
    @media (max-width: 994px) {
        margin-left: 30px;
        z-index: 2;
    }
    &:hover {
        transform: scale(1.1);
    }
`;

const NavList = styled.ul`
    display: flex;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    @media (max-width: 994px) {
        display: block;
        position: absolute;
        width: 100%;
        top: ${(props) => (props.current ? '100%' : '-300%')};
        left: 0;
        transition: top 0.3s ease-in;
        line-height: 3;
        z-index: 0;
    }
`;

const Item = styled.li`
    width: 90px;
    height: 100%;
    border-bottom: 3px solid ${(props) => (props.current ? '#78a6a4' : 'transparent')};
    transition: border-bottom 0.2s ease-in;
    &:hover {
        color: #aaa;
    }
    margin-right: 20px;
    @media (max-width: 994px) {
        border-top: 1px solid #efefef;
        display: block;
        width: 100%;
        border-bottom: none;
        background-color: #fff;
        text-align: center;
        &:hover {
            color: #fff;
            background-color: rgb(120, 166, 164);
        }
    }
`;

const Link = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
    justify-content: center;
`;

const MobCover = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: none;
    z-index: 1;
    @media (max-width: 994px) {
        display: block;
    }
`;

export default ({ pos, home, about, skill, project, toggleBtn, CloseBtn, isClickList }) => (
    <Header current={pos > 0}>
        <HeaderWrap>
            <Link onClick={() => CloseBtn(document.getElementById('Home').offsetTop - 60)}>
                <Logo>
                    <span style={{ color: '#78a6a4' }}>youngJun's</span>
                    <span> Portfolio</span>
                </Logo>
            </Link>
            <MobCover />
            <Button onClick={toggleBtn}>{isClickList ? <FontAwesomeIcon icon="times" size="2x" /> : <FontAwesomeIcon icon="bars" size="2x" />} </Button>
            <NavList current={isClickList}>
                <Item current={pos >= home.top && pos <= home.bottom}>
                    <Link onClick={() => CloseBtn(document.getElementById('Home').offsetTop - 60)}>Home</Link>
                </Item>
                <Item current={pos >= about.top && pos <= about.bottom}>
                    <Link onClick={() => CloseBtn(document.getElementById('About').offsetTop - 60)}>About</Link>
                </Item>
                <Item current={pos >= skill.top && pos <= skill.bottom}>
                    <Link onClick={() => CloseBtn(document.getElementById('Skill').offsetTop - 60)}>Skill</Link>
                </Item>
                <Item current={pos >= project.top && pos <= project.bottom}>
                    <Link onClick={() => CloseBtn(document.getElementById('Project').offsetTop - 60)}>Project</Link>
                </Item>
            </NavList>
        </HeaderWrap>
    </Header>
);
