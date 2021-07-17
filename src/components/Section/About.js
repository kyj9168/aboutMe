import React from "react";
import styled from "styled-components";
import PROFILE from "../../assets/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Container = styled.article`
    width: 1200px;
    margin: 0 auto;
    padding: 80px 0;
    @media (max-width: 1219px) {
        width: 100%;
    }
`;

const Title = styled.h2`
    font-size: 3rem;
    font-weight: 600;
    color: rgb(56, 173, 174);
    @media (max-width: 994px) {
        text-align: center;
    }
`;
const Content = styled.div`
    margin: 80px 0;
    text-align: center;
`;

const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 994px) {
        display: block;
    }
`;

const ProfileText = styled.div`
    margin-left: 100px;
    text-align: left;
    @media (max-width: 994px) {
        margin: 0;
        padding-top: 15px;
        text-align: center;
    }
`;

const ProfileImg = styled.img`
    width: 280px;
    border-radius: 20%;
`;

const ProfileTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
`;

const ProfileSubtitle = styled.p`
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 2;
`;

const ProfileDetail = styled.ul`
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: 700;
    @media (min-width: 540px) and (max-width: 994px) {
        text-align: left;
        padding-left: 100px;
    }
    @media (max-width: 540px) {
        text-align: left;
        padding-left: 50px;
    }
`;

const ProfileItem = styled.li`
    display: flex;
    &:not(:first-child) {
        margin-top: 10px;
    }
`;

const ItemTitle = styled.h4`
    font-size: 1.2rem;
    color: #333;
`;
const ItemIcon = styled.span`
    display: block;
    width: 60px;
    height: 60px;
    line-height: 55px;
`;
const Itemtxt = styled.div`
    color: #aaa;
    line-height: 1.4;
    font-size: 1rem;
    @media (max-width: 540px) {
        font-size: 0.9rem;
    }
`;

const ItemLink = styled.a`
    transition: color 0.2s ease-in-out;
    &:hover {
        color: #333;
    }
`;

const MyIntro = styled.div`
    margin-top: 50px;
    font-size: 1.25rem;
    padding: 0 30px;
    line-height: 1.75;
    @media (max-width: 540px) {
        font-size: 1.1rem;
    }
`;

export default () => (
    <Container id="About">
        <Title>About</Title>
        <Content>
            <Profile>
                <ProfileImg src={PROFILE} alt="프로필 사진"></ProfileImg>
                <ProfileText>
                    <ProfileTitle>김영준</ProfileTitle>
                    <ProfileSubtitle>Full Stack Developer</ProfileSubtitle>
                    <ProfileDetail>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon
                                    icon="birthday-cake"
                                    size="2x"
                                />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>Birthday : </ItemTitle>
                                1992.01.11
                            </Itemtxt>
                        </ProfileItem>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon="phone" size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>Phone : </ItemTitle>
                                <ItemLink href="tel:010-9001-6800">
                                    010-9001-6800
                                </ItemLink>
                            </Itemtxt>
                        </ProfileItem>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon="envelope" size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>E-Mail : </ItemTitle>
                                <ItemLink href="mailto:kyj9168@naver.com">
                                    kyj9168@naver.com
                                </ItemLink>
                            </Itemtxt>
                        </ProfileItem>
                        <ProfileItem>
                            <ItemIcon>
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </ItemIcon>
                            <Itemtxt>
                                <ItemTitle>Github : </ItemTitle>
                                <ItemLink href="https://github.com/kyj9168">
                                    https://github.com/kyj9168
                                </ItemLink>
                            </Itemtxt>
                        </ProfileItem>
                    </ProfileDetail>
                </ProfileText>
            </Profile>
            <MyIntro>
                <div>
                    안녕하세요. 검색, 챗봇, 추천 개발 프로젝트 경험을 가진
                    김영준입니다.
                    <br />
                    부족한 부분을 채우려는 욕심으로 매년 더욱 성장하는 개발자가
                    되고 싶습니다.
                    <br />
                    저에 대해 궁금하신 점이 있다면, 위의 주소로 연락주세요!
                </div>
            </MyIntro>
        </Content>
    </Container>
);
