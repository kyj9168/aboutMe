import React, { Component } from 'react';
import HeaderPresenter from './HeaderPresenter';

class HeaderContainer extends Component {
    state = {
        pos: 0,
        home: {
            top: 0,
            bottom: 0,
        },
        about: {
            top: 0,
            bottom: 0,
        },
        career: {
            top: 0,
            bottom: 0,
        },
        skill: {
            top: 0,
            bottom: 0,
        },
        project: {
            top: 0,
            bottom: 0,
        },
        isClickList: false,
    };
    toggleBtn = () => {
        const { isClickList } = this.state;
        this.setState({
            isClickList: !isClickList,
        });
    };
    CloseBtn = (posi) => {
        window.scrollTo({ top: posi, left: 0, behavior: 'smooth' });

        this.setState({
            isClickList: false,
        });
    };

    checkPos = () => {
        this.calcElement();
        let bodyPos = window.scrollY;
        this.setState({
            pos: bodyPos,
        });
    };

    calcElement() {
        const Home = document.getElementById('Home');
        const About = document.getElementById('About');
        const Skill = document.getElementById('Skill');
        const Career = document.getElementById('Career');
        const Project = document.getElementById('Project');
        this.setState({
            home: {
                top: Home.offsetTop,
                bottom: Home.offsetTop + Home.offsetHeight - 80,
            },
            about: {
                top: About.offsetTop - 80,
                bottom: About.offsetTop + About.offsetHeight - 80,
            },
            career: {
                top: Career.offsetTop - 80,
                bottom: Career.offsetTop + Career.offsetHeight - 80,
            },
            skill: {
                top: Skill.offsetTop - 80,
                bottom: Skill.offsetTop + Skill.offsetHeight - 80,
            },
            project: {
                top: Project.offsetTop - 80,
                bottom: Project.offsetTop + Project.offsetHeight - 80,
            },
        });
    }
    componentDidMount() {
        window.addEventListener('scroll', this.checkPos);
        this.calcElement();
    }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.checkPos);
    // }
    render() {
        const { pos, home, about, career, skill, project, isClickList } = this.state;
        return (
            <HeaderPresenter
                pos={pos}
                home={home}
                about={about}
                career={career}
                skill={skill}
                project={project}
                isClickList={isClickList}
                toggleBtn={this.toggleBtn}
                CloseBtn={this.CloseBtn}
            />
        );
    }
}

export default HeaderContainer;
