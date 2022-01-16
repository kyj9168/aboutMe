import React, { Component } from 'react';
import ProjectPresenter from './ProjectPresenter';
import CIMG from 'assets/project/mobileqi.png';
import PIMG from 'assets/project/myproject.png';
import CIMG2 from 'assets/project/mobileqi2.png';
import ISSUEIMG1 from 'assets/project/issueChat1.png';
import ISSUEIMG2 from 'assets/project/issueChat2.png';
import RCMSIMG1 from 'assets/project/rcms1.png';
import RCMSIMG2 from 'assets/project/rcms2.png';
import HEALIMG from 'assets/project/healing.png';
import ABOUTPET1 from 'assets/project/aboutpet1.png';
import ABOUTPET2 from 'assets/project/aboutpet2.png';
import YONGIN1 from 'assets/project/yongin1.png';
import YONGIN2 from 'assets/project/yongin2.png';
import YONGIN3 from 'assets/project/yongin3.png';
import QIT from 'assets/project/qit.png';

class ProjectContainer extends Component {
    state = {
        data: [
            {
                id: 'Y/Project (개인 프로젝트)',
                git: 'https://github.com/kyj9168',
                url: 'http://kyj9168.ddns.net:6100/',
                txt: ['React.js를 활용하여 각 메뉴마다 따로 프로세스를 구성하여 만든 개인 프로젝트'],
                img: [PIMG],
                skill: ['Node.js', 'React.js'],
            },
            {
                id: '[개발중]Issue Chat (개인 프로젝트)',
                git: 'https://github.com/kyj9168',
                url: 'http://kyj9168.ddns.net:6100/chat',
                txt: [
                    'socket.io를 활용하여 채팅의 대화를 kafka를 통해 elasticsearch에 색인한다.',
                    'nifi를 통해 batch프로세스를 개발하여 elasticsearch nori 형태소 분석기를 이용하여 키워드만 뽑아 실시간 대화의 주요 키워드를 랭킹으로 표현해준다.',
                ],
                img: [ISSUEIMG1, ISSUEIMG2],
                skill: ['Node.js', 'socket.io', 'Kafka', 'Nifi'],
            },
            {
                id: ' 산업기술평가원 RCMS 챗봇 개발',
                url: 'https://chatbot.rcms.go.kr/',
                txt: ['비목추천 API를 활용한 챗봇 API 개발과 react.js를 사용한 챗봇 화면 개발'],
                period: '2019.12 ~ 2020.6',
                per: 'ejs로만 개발하면 챗봇 화면의 프론트단을 react.js를 도입하자 제안하여 이 프로젝트 이후로 모든 챗봇 프로젝트의 master 챗봇 템플릿을 개발하였습니다.',
                img: [RCMSIMG1, RCMSIMG2],
                skill: ['Node.js', 'ElasticSearch', 'react.js'],
            },
            {
                id: '문화정보원 큐아이 챗봇API, 모바일큐아이 개발',
                url: 'https://qi.kcisa.kr/',
                txt: ['문화정보원 기관의 국립중앙도서관 등 기관의 챗봇 API 구축과 모바일 큐아이 챗봇 화면 개발'],
                period: '2019.11 ~ 2022.01',
                per: '챗봇 프론트 단의 모든 오류와 챗봇 기존에 없던 자동완성 API, 금지어 API, 미응답 질의 자동추천 API를 직접 개발하여 회사 내 서비스로 배포하였습니다',
                img: [CIMG, CIMG2],
                skill: ['Node.js', 'ElasticSearch', 'ejs', '공공데이터포털'],
            },
            {
                id: '산업기술평가원 전신건강 플랫폼 챗봇 개발',
                txt: ['react.js를 활용한 웹앱 챗봇 화면 개발 및 스트레스 지수 파악 API 개발'],
                period: '2020.06 ~ 2020.12',
                per: '회사내에 첫 웹앱 프로젝트로써 앱 개발을 하는 회사와 소통하며 react.js로 챗봇의 프론트 단을 개발하여 웹앱을 출시하였습니다.',
                img: [HEALIMG],
                skill: ['Node.js', 'ElasticSearch', 'ejs'],
            },
            {
                id: 'GSretail aboutPet 검색 및 추천 API 개발',
                url: 'https://www.aboutpet.co.kr/shop/home/',
                txt: ['태그방식을 활용하여 자카드 유사도를 이용한 추천API 개발'],
                period: '2020.06 ~ 2020.12',
                per: '회사의 검색솔루션을 하나의 API로 통합하기 위한 standard API를 개발하였고 태그 방식의 추천 로직을 직접 구성하여 추천 API 개발을 하였습니다.',
                img: [ABOUTPET1, ABOUTPET2],
                skill: ['Node.js', 'ElasticSearch', 'Kafka', 'Nifi'],
            },
            {
                id: '용인시청 민원상담 챗봇 개발',
                url: 'https://www.yongin.go.kr/chat',
                txt: ['react.js를 활용한 프론트개발 및 무인민원발급기 및 직원검색 등 API 개발'],
                period: '2021.09 ~ 2021.11',
                per: '기존엔 hook방식으로만 개발하여 prop로 만 전달했던 데이터를 redux를 활용하여 state를 관리할수있게 템플릿을 개발하였습니다. middleware는 redux-saga를 사용하였습니다.',
                img: [YONGIN1, YONGIN2, YONGIN3],
                skill: ['Node.js', 'ElasticSearch', 'react.js', 'Nifi'],
            },
            {
                id: '사내 개인프로젝트: QIT (Quality Improvement Test)',
                txt: ['챗봇 지식구축 작가들을 위한 테스트 툴 개발'],
                period: '2020.06 ~ 2021.09',
                per: '사내 작가들을 위해 챗봇 지식을 구성하고 QIT를 돌려 각각 지식이 제대로 구성이 되어있는지 테스트 할 수있는 툴을 개발하였습니다. 이로인해 챗봇의 응답률을 더욱 높일 수 있게 되어 챗봇 솔루션에 보탬이 되었습니다.',
                img: [QIT],
                skill: ['Node.js'],
            },
        ],
    };

    render() {
        const { data } = this.state;
        return <ProjectPresenter data={data} />;
    }
}

export default ProjectContainer;
