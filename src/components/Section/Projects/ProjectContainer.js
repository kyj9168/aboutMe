import React, { Component } from "react";
import ProjectPresenter from "./ProjectPresenter";
import CIMG from "assets/project/mobileqi.png";
import PIMG from "assets/project/myproject.png";
import CIMG2 from "assets/project/mobileqi2.png";
import ISSUEIMG1 from "assets/project/issueChat1.png";
import ISSUEIMG2 from "assets/project/issueChat2.png";

class ProjectContainer extends Component {
    state = {
        data: [
            {
                id: "모바일큐아이",
                url: "https://qi.kcisa.kr/",
                txt: "nodejs로 ejs 템플릿을 활용하여 챗봇 개발",
                img: [CIMG, CIMG2],
            },
            {
                id: "Y/Project (개인 프로젝트)",
                git: "https://github.com/kyj9168",
                txt: "React.js를 활용하여 각 메뉴마다 따로 프로세스를 구성하여 만든 개인 프로젝트",
                img: [PIMG],
            },
            {
                id: "[개발중]Issue Chat (개인 프로젝트)",
                git: "https://github.com/kyj9168",
                txt: "socket.io를 활용하여 채팅의 대화를 kafka를 통해 elasticsearch에 색인하고 nifi를 통해 batch프로세스를 개발하여 elasticsearch niri 형태소 분석기를 이용하여 키워드만 뽑아 실시간 대화의 주요 키워드를 랭킹으로 표현해준다.",
                img: [ISSUEIMG1, ISSUEIMG2],
            },
        ],
    };

    render() {
        const { data } = this.state;
        return <ProjectPresenter data={data} />;
    }
}

export default ProjectContainer;
