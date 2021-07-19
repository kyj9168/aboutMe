import React, { Component } from "react";
import ProjectPresenter from "./ProjectPresenter";
import CIMG from "assets/project/mobileqi.png";
import PIMG from "assets/project/myproject.png";
import CIMG2 from "assets/project/mobileqi2.png";

class ProjectContainer extends Component {
    state = {
        data: [
            {
                id: "모바일큐아이",
                url: "https://qi.kcisa.kr/",
                txt: "nodejs로 ejs 템플릿을 활영하여 챗봇 개발",
                img: [CIMG, CIMG2],
            },
            {
                id: "개인 프로젝트",
                git: "https://github.com/kyj9168",
                txt: "React.js를 활용하여 각 메뉴마다 따로 프로세스를 구성하여 만든 개인 프로젝트",
                img: [PIMG],
            },
        ],
    };

    render() {
        const { data } = this.state;
        return <ProjectPresenter data={data} />;
    }
}

export default ProjectContainer;
