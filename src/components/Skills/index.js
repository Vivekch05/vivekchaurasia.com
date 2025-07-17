import React from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../data/constants'
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0;
  background: linear-gradient(120deg, ${({ theme }) => theme.bgLight} 60%, ${({ theme }) => theme.bg} 100%);
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 44px;
  text-align: center;
  font-family: 'Merriweather', serif;
  font-weight: 800;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  position: relative;
  margin-bottom: 18px;
  animation: ${fadeIn} 0.8s ease-out;
  &::after {
    content: '';
    display: block;
    margin: 18px auto 0 auto;
    width: 80px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  }
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
    &::after { width: 48px; height: 3px; }
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  align-items: stretch;
  margin-top: 30px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const GlassSkill = styled(motion.div)`
  width: 100%;
  max-width: 320px;
  background: ${({ theme }) => theme.glass};
  border: 1.5px solid ${({ theme }) => theme.primary}33;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 22px;
  padding: 28px 24px 24px 24px;
  transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: 0 15px 40px ${({ theme }) => theme.primary}22;
    border: 1.5px solid ${({ theme }) => theme.primary};
    transform: translateY(-7px) scale(1.03);
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 24px;
  text-align: center;
  font-family: 'Merriweather', serif;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    border-radius: 2px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`;

const SkillItem = styled(motion.div)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.primary}40;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-2px) scale(1.07);
    background: ${({ theme }) => theme.primary}10;
    border-color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 14px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const SkillImage = styled(motion.img)`
  width: 24px;
  height: 24px;
  transition: all 0.3s ease-in-out;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

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

const Skills = () => {
  // Helper to split skills into rows of 2, moving long names to last row
  const getSkillRows = (skillsArr) => {
    const longSkills = skillsArr.filter(s => s.name.length > 16);
    const shortSkills = skillsArr.filter(s => s.name.length <= 16);
    const rows = [];
    for (let i = 0; i < shortSkills.length; i += 2) {
      rows.push(shortSkills.slice(i, i + 2));
    }
    // Add each long skill as its own row at the end
    longSkills.forEach(ls => rows.push([ls]));
    return rows;
  };

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working on for the past couple of years.
        </Desc>
        <SkillsContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <GlassSkill key={index} variants={cardVariants} whileHover={{ scale: 1.04 }}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList style={{flexDirection: 'column', gap: '10px', width: '100%'}}>
                {getSkillRows(skill.skills).map((row, rowIdx) => (
                  <div key={rowIdx} style={{ display: 'flex', gap: '16px', width: '100%' }}>
                    {row.map((item, idx) => (
                      <SkillItem key={idx} whileHover={{ scale: 1.12, backgroundColor: '#D4AF3722' }} style={{flex: 1, minWidth: 0}}>
                        <SkillImage
                          src={item.image}
                          alt={item.name}
                          whileHover={{ rotate: 8, scale: 1.18 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        />
                        {item.name}
                      </SkillItem>
                    ))}
                  </div>
                ))}
              </SkillList>
            </GlassSkill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills