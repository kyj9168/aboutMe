import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NOTION from '../assets/notion_logo.png';

const Footer = styled.footer`
    text-align: center;
    width: 100%;
    background-color: #1e1e1e;
    line-height: 2;
    color: #aaa;
`;

const Copyright = styled.p`
    padding: 0 20px 20px 20px;
    font-size: 18px;
    color: #999;
`;

const NotionIcon = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20%;
    display: block;
    opacity: 0.6;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }
`;

const ItemLink = styled.a`
    transition: color 0.2s ease-in-out;
    word-break: break-all;
    margin: 25px 15px 15px 15px;
    height: 30px;
    display: inline-block;
    width: 30px;
    cursor: pointer;
    &:hover {
        color: #fff;
    }
`;

export default () => (
    <Footer>
        <ItemLink target="_blank" href="tel:010-9001-6800">
            <FontAwesomeIcon
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
                icon="phone"
                size="2x"
            />
        </ItemLink>
        <ItemLink target="_blank" href="mailto:kyj9168@naver.com">
            <FontAwesomeIcon
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
                icon="envelope"
                size="2x"
            />
        </ItemLink>
        <ItemLink target="_blank" href="https://github.com/kyj9168">
            <FontAwesomeIcon
                style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                }}
                icon={faGithub}
                size="2x"
            />
        </ItemLink>
        <ItemLink target="_blank" href="https://kyjportfolio.notion.site/kyjportfolio/2382908379ac4bc5b44087e187d6e00e">
            <NotionIcon src={NOTION} size="2x" />
        </ItemLink>
        <Copyright>
            © 2022 Copyright <span style={{ color: '#ddd' }}>YoungJun</span>
        </Copyright>
    </Footer>
);
