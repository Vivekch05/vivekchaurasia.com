import React from 'react'
import styled, { keyframes } from 'styled-components'
import { skills } from '../../data/constants'

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
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.1); 
  }
  50% { 
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.3); 
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 100px 0;
  background: linear-gradient(180deg, 
    ${({ theme }) => theme.card_light} 0%, 
    ${({ theme }) => theme.card_light}99 50%,
    ${({ theme }) => theme.card_light}95 100%);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${fadeIn} 0.8s ease-out;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: clamp(2rem, 8vw, 2.5rem);
  }
`;

export const Desc = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  text-align: center;
  max-width: 700px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 40px;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.1rem);
    margin-bottom: 30px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  justify-items: center;
  align-items: stretch;
  margin-top: 40px;
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 30px;
  }
`

const Skill = styled.div`
  width: 100%;
  max-width: 380px;
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.glassHover};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 24px;
  padding: 32px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.primaryGradient};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.primary}40;
    animation: ${glow} 2s ease-in-out infinite;
    
    &::before {
      opacity: 0.05;
    }
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 28px 24px;
  }
  
  @media (max-width: 500px) {
    max-width: 350px;
    padding: 24px 20px;
  }
`

const SkillTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 28px;
  text-align: center;
  position: relative;
  letter-spacing: -0.01em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 2px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
`

const SkillRow = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  margin-bottom: 12px;
`;

const SkillItem = styled.div`
  flex: 1 1 0;
  min-width: 0;
  max-width: 100%;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.card_light};
  border: 1px solid ${({ theme }) => theme.glassHover};
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.primaryGradient};
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    background: ${({ theme }) => theme.cardHover};
    border-color: ${({ theme }) => theme.primary}60;
    box-shadow: ${({ theme }) => theme.shadowHover};
    
    &::before {
      opacity: 0.1;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 12px 16px;
  }
  
  @media (max-width: 500px) {
    font-size: 0.8rem;
    padding: 10px 14px;
  }
`

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  
  ${SkillItem}:hover & {
    transform: scale(1.2) rotate(5deg);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  }
`

function groupSkillsByRow(skills) {
  const threshold = 14;
  const shortSkills = skills.filter(s => s.name.length <= threshold);
  const longSkills = skills.filter(s => s.name.length > threshold);
  const orderedSkills = [...shortSkills, ...longSkills];

  const rows = [];
  for (let i = 0; i < orderedSkills.length; i += 2) {
    rows.push(orderedSkills.slice(i, i + 2));
  }
  return rows;
}

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills & Technologies</Title>
        <Desc>
          Here are the technologies and tools I've been working with for the past 5+ years, 
          continuously expanding my expertise in modern web development.
        </Desc>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {["Frontend Development", "Tools & Technologies", "Testing & Quality"].includes(skill.title)
                  ? groupSkillsByRow(skill.skills).map((row, rowIdx) => (
                      <SkillRow key={rowIdx}>
                        {row.map((item, idx) => (
                          <SkillItem key={item.name}>
                            <SkillImage src={item.image} alt={item.name}/>
                            {item.name}
                          </SkillItem>
                        ))}
                        {/* If only one skill in the row, add an empty SkillItem for alignment */}
                        {row.length === 1 && <SkillItem style={{ visibility: 'hidden' }} />}
                      </SkillRow>
                    ))
                  : skill.skills.map((item, idx) => (
                      <SkillItem key={item.name}>
                        <SkillImage src={item.image} alt={item.name}/>
                        {item.name}
                      </SkillItem>
                    ))
                }
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills