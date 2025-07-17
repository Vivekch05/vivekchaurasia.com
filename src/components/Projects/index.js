import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const filteredProjects = toggle === 'all' ? projects : projects.filter((item) => item.category === toggle);
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          
          <Divider />
        </ToggleButtonGroup>
        <CardContainer as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div key={project.id} variants={cardVariants} exit={{ opacity: 0, y: 40 }}>
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              </motion.div>
            ))}
          </AnimatePresence>
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects