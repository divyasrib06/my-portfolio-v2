import React from 'react';
import '../assets/css/skills.css';

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaNodeJs, FaPython, FaJava, FaAws, FaGitAlt, FaLinux,
  FaDocker, FaJenkins, FaGithub, FaTerminal
} from 'react-icons/fa';

import {
  SiMongodb, SiFastapi, SiDjango, SiTypescript,
  SiPostgresql, SiRedis, SiGithubactions,
  SiScikitlearn, SiPandas, SiJupyter, SiMysql
} from 'react-icons/si';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, className: 'html' },
      { name: 'CSS3', icon: <FaCss3Alt />, className: 'css' },
      { name: 'JavaScript', icon: <FaJs />, className: 'js' },
      { name: 'React.js', icon: <FaReact />, className: 'react' },
      { name: 'Bootstrap', icon: <FaBootstrap />, className: 'bootstrap' }
    ]
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, className: 'node' },
      { name: 'Express.js', icon: <FaNodeJs />, className: 'node' },
      { name: 'FastAPI', icon: <SiFastapi />, className: 'fastapi' },
      { name: 'Django', icon: <SiDjango />, className: 'django' }
    ]
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, className: 'python' },
      { name: 'JavaScript', icon: <FaJs />, className: 'js' },
      { name: 'TypeScript', icon: <SiTypescript />, className: 'typescript' },
      { name: 'Bash', icon: <FaTerminal />, className: 'bash' },
      { name: 'Java', icon: <FaJava />, className: 'java' }
    ]
  },
  {
    category: 'Database Technologies',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, className: 'mysql' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, className: 'postgresql' },
      { name: 'MongoDB', icon: <SiMongodb />, className: 'mongo' },
      { name: 'Redis', icon: <SiRedis />, className: 'redis' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Docker', icon: <FaDocker />, className: 'docker' },
      { name: 'Jenkins', icon: <FaJenkins />, className: 'jenkins' },
      { name: 'AWS', icon: <FaAws />, className: 'aws' },
      { name: 'GitHub Actions', icon: <SiGithubactions />, className: 'githubactions' }
    ]
  },
  {
    category: 'AI / ML Tools',
    skills: [
      { name: 'Scikit-learn', icon: <SiScikitlearn />, className: 'scikit' },
      { name: 'Pandas', icon: <SiPandas />, className: 'pandas' },
      { name: 'Jupyter', icon: <SiJupyter />, className: 'jupyter' }
    ]
  },
  {
    category: 'Version Control & OS',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, className: 'git' },
      { name: 'GitHub', icon: <FaGithub />, className: 'github' },
      { name: 'Linux', icon: <FaLinux />, className: 'linux' }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-wrapper">
          {skillsData.map((group, index) => (
            <div className="skill-category-card" key={index}>
              <h3 className="category-title">{group.category}</h3>
              <div className="skill-grid">
                {group.skills.map((skill, i) => (
                  <div key={i} className={`skill-tag ${skill.className}`}>
                    <span className="icon">{skill.icon}</span>
                    <span className="label">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;