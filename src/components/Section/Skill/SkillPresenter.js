import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./swiper.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
    padding: 20px;
    background-color: #fff;
    border-radius: 15px;
    transition: box-shadow 0.2s linear;
    text-align: center;
    overflow: hidden;
    transition: 400ms;
    &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        transform: scale(1.1);
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
    border-radius: 15px;
    transition: box-shadow 0.2s linear;
    text-align: center;
    overflow: hidden;
    // transition: 400ms;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    margin-bottom: 30px;
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
    height: 80px;
    max-width: 100%;
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
            <Title>Skill</Title>
            <Content>
                <Listwrap>
                    <SkillList>
                        {data.map((e, idx) => (
                            <SkillCard key={e.skill}>
                                <CardImg src={e.img} alt={e.skill} />
                                <CardTitle>{e.skill}</CardTitle>
                                <CardStar>
                                    {Array(e.lv)
                                        .fill(1)
                                        .map((e, idx) => (
                                            <FontAwesomeIcon
                                                icon="star"
                                                color="#f1c40f"
                                                key={idx}
                                            />
                                        ))}
                                </CardStar>
                                <Cardtxt>{e.txt}</Cardtxt>
                            </SkillCard>
                        ))}
                        <Swiper
                            className="skillSwipper"
                            loop={true}
                            pagination={{ clickable: true }}
                            grabCursor={true}
                            spaceBetween={50}
                            style={{
                                height: "100%",
                                width: "100%",
                                padding: "30px",
                            }}
                        >
                            {data.map((e, idx) => (
                                <SwiperSlide key={e.skill} className="swipCard">
                                    <SkillCardSwiper key={e.skill}>
                                        <CardImg src={e.img} alt={e.skill} />
                                        <CardTitle>{e.skill}</CardTitle>
                                        <CardStar>
                                            {Array(e.lv)
                                                .fill(1)
                                                .map((e, idx) => (
                                                    <FontAwesomeIcon
                                                        icon="star"
                                                        color="#f1c40f"
                                                        key={idx}
                                                    />
                                                ))}
                                        </CardStar>
                                        <Cardtxt>{e.txt}</Cardtxt>
                                    </SkillCardSwiper>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </SkillList>
                </Listwrap>
            </Content>
        </ContentWrap>
    </Container>
);
