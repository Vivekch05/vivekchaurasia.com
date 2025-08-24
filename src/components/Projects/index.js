import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ComingSoonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ComingSoonIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 24px;
  animation: ${float} 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 20px;
  }
`;

const ComingSoonTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 12px;
  }
`;

const ComingSoonDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: clamp(0.9rem, 3vw, 1rem);
  }
`;

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  
  const filteredProjects = toggle === 'all' 
    ? projects 
    : projects.filter((item) => item.category === toggle);

  const renderContent = () => {
    if (filteredProjects.length === 0) {
      return (
        <ComingSoonContainer>
          <ComingSoonIcon>
            {toggle === 'mobile app' ? '📱' : '🚀'}
          </ComingSoonIcon>
          <ComingSoonTitle>
            Coming Soon!
          </ComingSoonTitle>
          <ComingSoonDescription>
            {toggle === 'mobile app' 
              ? "I'm currently working on some exciting mobile applications. Stay tuned for amazing projects coming your way!"
              : "More projects are in development. Check back soon for new additions to my portfolio!"
            }
          </ComingSoonDescription>
        </ComingSoonContainer>
      );
    }

    return (
      <CardContainer>
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id || index}
            project={project} 
            openModal={openModal} 
            setOpenModal={setOpenModal}
          />
        ))}
      </CardContainer>
    );
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Featured Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from web applications to mobile apps. 
          Here are some of my most recent and notable projects that showcase my skills and expertise.
        </Desc>
        <ToggleButtonGroup>
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Web Applications</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Web Applications</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile app' ?
            <ToggleButton active value="mobile app" onClick={() => setToggle('mobile app')}>Mobile Apps</ToggleButton>
            :
            <ToggleButton value="mobile app" onClick={() => setToggle('mobile app')}>Mobile Apps</ToggleButton>
          }
        </ToggleButtonGroup>
        {renderContent()}
      </Wrapper>
    </Container>
  )
}

export default Projects