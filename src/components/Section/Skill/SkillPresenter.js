import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SwiperCore, { Navigation, EffectCards, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import FadeInSection from '../../Util/FadeIn';

// import 'swiper/swiper.scss';

import 'swiper/swiper.min.css';

// import 'swiper/modules/effect-cards/effect-cards.min.css'
import './swiper.css';

SwiperCore.use([Navigation, Pagination, EffectCards, Scrollbar, A11y]);

const Container = styled.article`
    background-color: #38897d;
`;

const ContentWrap = styled.div`
    width: 1200px;
    padding: 80px 0;
    margin: 0 auto;
    @media (max-width: 1219px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: #fff;
    @media (max-width: 994px) {
        text-align: center;
    }
`;

const Content = styled.div`
    margin: 80px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 590px) {
        display: block;
        text-align: center;
    }
`;
const Listwrap = styled.div``;
const WINDOW = styled.div`
    a {
        text-decoration: none;
    }

    span {
        line-height: 7px;
        vertical-align: 50%;
    }

    .window {
        background: #fff;
        width: 50vw;
        height: 75vh;
        margin: auto;
        margin-top: 12.5vh;
        border: 1px solid #acacac;
        border-radius: 6px;
        box-shadow: 0px 0px 20px #acacac;
    }

    .titlebar {
        background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #ebebeb, color-stop(1, #d5d5d5)));
        background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -ms-linear-gradient(top, #ebebeb, #d5d5d5);
        background: -o-linear-gradient(top, #ebebeb, #d5d5d5);
        background: linear-gradient(top, #ebebeb, #d5d5d5);
        color: #4d494d;
        font-size: 9pt;
        line-height: 20px;
        text-align: center;
        width: 100%;
        height: 20px;
        border-top: 1px solid #f3f1f3;
        border-bottom: 1px solid #b1aeb1;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        cursor: default;
    }

    .buttons {
        padding-left: 8px;
        padding-top: 3px;
        float: left;
        line-height: 0px;
    }

    .buttons:hover a {
        visibility: visible;
    }

    .close {
        background: #ff5c5c;
        font-size: 9pt;
        width: 11px;
        height: 11px;
        border: 1px solid #e33e41;
        border-radius: 50%;
        display: inline-block;
    }

    .close:active {
        background: #c14645;
        border: 1px solid #b03537;
    }

    .close:active .closebutton {
        color: #4e0002;
    }

    .closebutton {
        color: #820005;
        visibility: hidden;
        cursor: default;
    }

    .minimize {
        background: #ffbd4c;
        font-size: 9pt;
        line-height: 11px;
        margin-left: 4px;
        width: 11px;
        height: 11px;
        border: 1px solid #e09e3e;
        border-radius: 50%;
        display: inline-block;
    }

    .minimize:active {
        background: #c08e38;
        border: 1px solid #af7c33;
    }

    .minimize:active .minimizebutton {
        color: #5a2607;
    }

    .minimizebutton {
        color: #9a5518;
        visibility: hidden;
        cursor: default;
    }

    .zoom {
        background: #00ca56;
        font-size: 9pt;
        line-height: 11px;
        margin-left: 6px;
        width: 11px;
        height: 11px;
        border: 1px solid #14ae46;
        border-radius: 50%;
        display: inline-block;
    }

    .zoom:active {
        background: #029740;
        border: 1px solid #128435;
    }

    .zoom:active .zoombutton {
        color: #003107;
    }

    .zoombutton {
        color: #006519;
        visibility: hidden;
        cursor: default;
    }

    @media (max-width: 590px) {
        .content {
            padding: 10px;
            background-color: #fff;

            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            border-radius: 0 0 6px 6px;
        }
    }
    @media (min-width: 590px) {
        .content {
            padding: 10px;
            background-color: #fff;

            // box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            border-radius: 0 0 6px 6px;
        }
    }
    h3 {
        margin-top: 0px;
    }
`;

const SkillList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 250px);
    grid-gap: 20px;
    @media (max-width: 1360px) {
        grid-template-columns: repeat(4, 250px);
    }
    @media (max-width: 1100px) {
        grid-template-columns: repeat(3, 250px);
    }
    @media (max-width: 860px) {
        grid-template-columns: repeat(2, 250px);
    }
    @media (max-width: 590px) {
        display: block;
    }
`;

const SkillCard = styled.li`
    position: relative;
    width: 250px;
    height:fit-content;
    // padding: 20px;
    background-color: #fff;
    // border-radius: 15px;
    transition: box-shadow 0.2s linear;
    text-align: center;
    overflow: hidden;
    transition: 400ms;
    border-radius: 6px;
    &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
    // &:before {
    //     position: absolute;
    //     top: 0;
    //     left: -105%;
    //     width: 100%;
    //     border: 5px solid #f9a11d;
    //     border-radius: 0px 15px 15px 0px;
    //     background-color: #f9a11d;
    //     content: "";
    //     transition: left 0.4s ease-in;
    // }
    // &:after {
    //     position: absolute;
    //     bottom: 0;
    //     right: -105%;
    //     width: 100%;
    //     border: 5px solid #f9a11d;
    //     border-radius: 15px 0px 15px 15px;
    //     background-color: #f9a11d;
    //     content: "";
    //     transition: right 0.4s ease-in;
    // }

    // &:hover:before {
    //     left: 0%;
    // }
    // &:hover:after {
    //     right: 0%;
    // }
    @media (max-width: 590px) {
        display: none;
        margin: 0 auto;
    }
`;

const SkillCardSwiper = styled.li`
    position: relative;
    background-color: #fff;
    border-radius: 6px;
    transition: box-shadow 0.2s linear;
    text-align: center;
    overflow: hidden;
    // transition: 400ms;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    // border:1px solid #999;
    // box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    // margin-bottom: 30px;
    // &:hover {
    //     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    //     transform: scale(1.05);
    // }
    // &:before {
    //     position: absolute;
    //     top: 0;
    //     left: -105%;
    //     width: 100%;
    //     border: 5px solid #f9a11d;
    //     border-radius: 0px 15px 15px 0px;
    //     background-color: #f9a11d;
    //     content: "";
    //     transition: left 0.4s ease-in;
    // }
    // &:after {
    //     position: absolute;
    //     bottom: 0;
    //     right: -105%;
    //     width: 100%;
    //     border: 5px solid #f9a11d;
    //     border-radius: 15px 0px 0px 15px;
    //     background-color: #f9a11d;
    //     content: "";
    //     transition: right 0.4s ease-in;
    // }

    // &:hover:before {
    //     left: 0%;
    // }
    // &:hover:after {
    //     right: 0%;
    // }
    @media (min-width: 590px) {
        display: none;
        margin: 0 auto;
    }
`;

// display: ${(props) => (props.current ? "block" : "none")};
const CardImg = styled.img`
    max-width: 100%;
    max-height: 120px;
`;

const CardTitle = styled.h4`
    margin-top: 5px;
    font-size: 1.12rem;
    font-weight: 600;
`;
const CardStar = styled.span`
    display: block;
    margin-top: 15px;
`;

const Cardtxt = styled.p`
    margin-top: 10px;
    font-size: 0.9rem;
    line-height: 1.5;
`;

export default ({ data }) => (
    <Container id="Skill">
        <ContentWrap>
            <FadeInSection>
                <Title>SKILL 🚀</Title>
            </FadeInSection>
            <FadeInSection>
                <Content>
                    <Listwrap>
                        <SkillList>
                            {data.map((e, idx) => (
                                <SkillCard key={e.skill}>
                                    <WINDOW className="window">
                                        <div className="titlebar">
                                            <div className="buttons">
                                                <div className="close">
                                                    <a className="closebutton">
                                                        <span>
                                                            <strong>x</strong>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="minimize">
                                                    <a className="minimizebutton">
                                                        <span>
                                                            <strong>&ndash;</strong>
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="zoom">
                                                    <a className="zoombutton">
                                                        <span>
                                                            <strong>+</strong>
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            yongjun's skill
                                        </div>
                                        <div className="content">
                                            <CardImg src={e.img} alt={e.skill} />
                                            <CardTitle>{e.skill}</CardTitle>
                                            <CardStar>
                                                {Array(e.lv)
                                                    .fill(1)
                                                    .map((e, idx) => (
                                                        <FontAwesomeIcon icon="star" color="#f1c40f" key={idx} />
                                                    ))}
                                            </CardStar>
                                            <Cardtxt>{e.txt}</Cardtxt>
                                        </div>
                                    </WINDOW>
                                </SkillCard>
                            ))}
                            <Swiper
                                className="skillSwipper"
                                grabCursor={true}
                                loop={true}
                                effect={'cards'}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    padding: '30px',
                                }}
                            >
                                {data.map((e, idx) => (
                                    <SwiperSlide key={e.skill} className="swipCard">
                                        <WINDOW className="window">
                                            <div className="titlebar">
                                                <div className="buttons">
                                                    <div className="close">
                                                        <a className="closebutton">
                                                            <span>
                                                                <strong>x</strong>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="minimize">
                                                        <a className="minimizebutton">
                                                            <span>
                                                                <strong>&ndash;</strong>
                                                            </span>
                                                        </a>
                                                    </div>
                                                    <div className="zoom">
                                                        <a className="zoombutton">
                                                            <span>
                                                                <strong>+</strong>
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                yongjun's skill
                                            </div>
                                            <div className="content">
                                                <SkillCardSwiper key={e.skill}>
                                                    <CardImg src={e.img} alt={e.skill} />
                                                    <CardTitle>{e.skill}</CardTitle>
                                                    <CardStar>
                                                        {Array(e.lv)
                                                            .fill(1)
                                                            .map((e, idx) => (
                                                                <FontAwesomeIcon icon="star" color="#f1c40f" key={idx} />
                                                            ))}
                                                    </CardStar>
                                                    <Cardtxt>{e.txt}</Cardtxt>
                                                </SkillCardSwiper>
                                            </div>
                                        </WINDOW>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </SkillList>
                    </Listwrap>
                </Content>
            </FadeInSection>
        </ContentWrap>
    </Container>
);
