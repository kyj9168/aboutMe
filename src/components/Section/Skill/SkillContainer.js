import React, { Component } from "react";
import SkillPresenter from "./SkillPresenter";
import HTMLIMG from "assets/skill/html5.png";
import CSSIMG from "assets/skill/css3.png";
import JSIMG from "assets/skill/javascript.png";
import JQIMG from "assets/skill/jquery.png";
import REACTIMG from "assets/skill/react.png";
import NODEIMG from "assets/skill/nodejs.png";
import GITIMG from "assets/skill/git.png";
import JAVAIMG from "assets/skill/java.png";
import JPAIMG from "assets/skill/jpa.png";
import KAFKAMG from "assets/skill/kafka.jpg";
import REDISIMG from "assets/skill/redis.png";
import MYSQLIMG from "assets/skill/mysql.png";
import SPBTIMG from "assets/skill/springboot.png";
import AWSIMG from "assets/skill/aws.png";
import LINUXIMG from "assets/skill/linux.png";
import JSPIMG from "assets/skill/jsp.png";
import bitbucketIMG from "assets/skill/bitbucket.jpg";
import ELKIMG from "assets/skill/elk.png";
import NIFIIMG from "assets/skill/nifi.png";

class SkillContainer extends Component {
    state = {
        data: [
            {
                skill: "HTML5",
                img: HTMLIMG,
                lv: 4,
                txt: "프론트엔드의 기본, 웹표준과 HTML태그에 대해 학습하였습니다.",
            },
            {
                skill: "CSS3",
                img: CSSIMG,
                lv: 3,
                txt: "웹페이지의 스타일링과 반응형 레이아웃을 학습하였습니다.",
            },
            {
                skill: "JavaScript",
                img: JSIMG,
                lv: 5,
                txt: "가장 좋아하는 언어입니다. ES6문법을 사용 할 수 있습니다.",
            },
            {
                skill: "Jquery",
                img: JQIMG,
                lv: 4,
                txt: "자바스크립트로 개발한 코드를 Jquery로 전환하는걸 어려워하지 않습니다",
            },
            {
                skill: "React.js",
                img: REACTIMG,
                lv: 2,
                txt: "프론트쪽으로 가장 많이 진행한 라이브러리이며 현재도 이 라이브러리를 더 잘 사용하기 위해 공부중에 있습니다.",
            },
            {
                skill: "Node.js",
                img: NODEIMG,
                lv: 5,
                txt: "개발자로 취업후 약 1년반동안 모든 프로젝트의 백엔드를 node.js로 개발해 왔습니다.",
            },
            {
                skill: "KAFKA",
                img: KAFKAMG,
                lv: 1,
                txt: "Nifi에 kafka를 연동하여 많은 처리량을 부하없이 처리하도록 사용하였습니다.",
            },
            {
                skill: "NIFI",
                img: NIFIIMG,
                lv: 2,
                txt: "RDB의 데이터를 ElasticSearch로 수집 하여 데이터를 다룰수 있고 실시간 연동을 위해 CDC를 공부하고 있습니다.",
            },
            {
                skill: "JSP",
                img: JSPIMG,
                lv: 2,
                txt: "spring을 공부할때 가장 많이 사용한 프론트단 언어입니다.",
            },
            {
                skill: "JPA",
                img: JPAIMG,
                lv: 1,
                txt: "SpringBoot를 공부할때 CRUD를 JPA로 개발하여 Rest API를 개발해본 경험이 있습니다.",
            },
            {
                skill: "LINUX",
                img: LINUXIMG,
                lv: 2,
                txt: "프로세스를 설치 배포 모두 가능하고 bash 파일 작성, 환경변수, 계정설정 모두 가능합니다.",
            },
            {
                skill: "REDIS",
                img: REDISIMG,
                lv: 1,
                txt: "session관리를 위해 사용해보았습니다.",
            },
            {
                skill: "MY-SQL",
                img: MYSQLIMG,
                lv: 1,
                txt: "CRUD와 테이블 생성까지 구성하여 쿼리문을 작성 할 수 있습니다.",
            },
            {
                skill: "ELK STACK",
                img: ELKIMG,
                lv: 3,
                txt: "형태소 분석기를 이용한 프로젝트 경험이 많아 ELK STACK을 잘 다룰수 있습니다.",
            },
            {
                skill: "Spring Boot",
                img: SPBTIMG,
                lv: 1,
                txt: "회사 업무 외로 공부하여 Rest API를 개발하고 게시판을 만들어 본적이 있습니다.",
            },
            {
                skill: "AWS",
                img: AWSIMG,
                lv: 1,
                txt: "ec2, rds 설치가 가능합니다. 직접 서버를 만들고 운영까지 경험해 보았습니다",
            },
            {
                skill: "JAVA",
                img: JAVAIMG,
                lv: 2,
                txt: "교육원에서 배웠던 언어로 현재 서브 언어로 공부중에 있습니다.",
            },
            {
                skill: "bitbucket",
                img: bitbucketIMG,
                lv: 2,
                txt: "Git의 기본 명령어를 학습하고 현재 활용하고 있습니다.",
            },
            {
                skill: "Git",
                img: GITIMG,
                lv: 2,
                txt: "Git의 기본 명령어를 학습하고 현재 활용하고 있습니다.",
            },
        ],
    };

    render() {
        const { data } = this.state;
        return <SkillPresenter data={data} />;
    }
}

export default SkillContainer;
