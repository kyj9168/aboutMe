import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
    text-align: center;
    width: 100%;
    background-color: #1e1e1e;
    line-height: 2;
    color: #aaa;
`;

const Copyright = styled.p`
    padding: 20px;
    font-size: 18px;
    color: #999;
`;

export default () => (
    <Footer>
        <Copyright>
            © 2022 Copyright <span style={{ color: "#ddd" }}>YoungJun</span>
        </Copyright>
    </Footer>
);
