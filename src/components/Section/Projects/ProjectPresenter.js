import React from "react";
import styled from "styled-components";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./swiper.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Container = styled.article`
    background-color: #1d809f;
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
    padding: 80px 0;
`;

const CardImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;

    @media (min-width: 1100px) {
        max-height: 700px;
    }
    @media (max-width: 1100px) {
        max-height: 600px;
    }
    @media (max-width: 860px) {
        max-height: 500px;
    }
    @media (max-width: 590px) {
        max-height: 400px;
    }
`;

const Card = styled.div`
    display: block;
    width: 90%;
    height: 100%;
    border: none;
    border-bottom: 4px solid #00000080;
    border-top: 4px solid #00000080;
    margin-left: auto;
    margin-right: auto;
    &:hover ${CardImg} {
        transform: none;
    }
    &:not(:last-child) {
        margin-bottom: 30px;
    }
    &:hover {
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
`;

const CardContent = styled.div`
    flex: 1;
    background-color: #fff;
    z-index: 2;
    line-height: 2;
    width: 100%;
    padding: 5px 20px 5px 20px;
    border-top: 2px solid #1d809f;
`;

const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 2px solid #1d809f;
    @media (max-width: 540px) {
        font-size: 1.3rem;
    }
`;

const ContentTxt = styled.p`
    font-size: 1.12rem;
    font-weight: 600;
    color: #777;
    @media (max-width: 540px) {
        font-size: 1rem;
    }
`;
const ContentURL = styled.a`
    font-size: 1rem;
    font-weight: 700;
    transition: color 0.2s linear;
    color: #a9a9a9;
    &:hover {
        color: #333;
    }
    &:before {
        content: ${(props) => props.name};
        color: #333;
    }
    &:after {
        display: block;
        content: "";
    }
`;
const ContentUrl = styled.a`
    font-size: 1.2rem;
    font-weight: 700;
    transition: color 0.2s linear;
    color: #333;
    &:hover {
        color: #a9a9a9;
    }
    @media (max-width: 540px) {
        color: #333;
    }
`;

const CardDescription = styled.h5`
    font-size: 1rem;
    font-weight: 700;
    display: flex;
`;
const CardSubTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
`;
export default ({ data }) => (
    <Container id="Project">
        <ContentWrap>
            <Title>Project</Title>
            <Content>
                {data.map((e) => (
                    <Card key={e.id}>
                        {e.img && (
                            <Swiper
                                className="projectSwiper"
                                navigation
                                spaceBetween={0}
                                autoHeight={true}
                                style={{ backgroundColor: "rgb(13 151 169)" }}
                            >
                                {e.img.map((item) => {
                                    return (
                                        <SwiperSlide key={item}>
                                            <CardImg
                                                src={item}
                                                alt={e.id}
                                                key={item}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        )}
                        <CardContent>
                            {e.id && <CardTitle>{e.id}</CardTitle>}
                            {e.txt && (
                                <>
                                    <CardSubTitle>주요역할</CardSubTitle>
                                    {e.txt.map((item, idx) => {
                                        return (
                                            <ContentTxt key={item}>
                                                {item}
                                            </ContentTxt>
                                        );
                                    })}
                                    <hr />
                                </>
                            )}
                            {e.per && (
                                <>
                                    <CardSubTitle>업무성과</CardSubTitle>
                                    <ContentTxt>{e.per}</ContentTxt>
                                    <hr />
                                </>
                            )}

                            {e.period && (
                                <>
                                    <CardDescription>
                                        수행기간 : {e.period}{" "}
                                    </CardDescription>
                                    <hr />
                                </>
                            )}
                            {e.skill && (
                                <>
                                    <CardDescription>
                                        SKILL : &nbsp;
                                        {e.skill.map((item, idx) => {
                                            console.log(idx);
                                            if (idx !== e.skill.length - 1) {
                                                return item + ", ";
                                            } else {
                                                return item;
                                            }
                                        })}
                                    </CardDescription>
                                    <hr />
                                </>
                            )}
                            {e.url && (
                                <>
                                    <ContentURL
                                        target="_blank"
                                        href={e.url}
                                        name="'URL : '"
                                    >
                                        {e.url}
                                    </ContentURL>
                                    <hr />
                                </>
                            )}

                            {e.git && (
                                <>
                                    <ContentUrl target="_blank" href={e.git}>
                                        깃허브
                                    </ContentUrl>
                                    <hr />
                                </>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Content>
        </ContentWrap>
    </Container>
);
