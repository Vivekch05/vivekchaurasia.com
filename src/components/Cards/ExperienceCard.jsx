import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
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

const Card = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow};
    padding: 24px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid ${({ theme }) => theme.glassHover};
    background: ${({ theme }) => theme.card};
    animation: ${fadeInUp} 0.6s ease-out ${({ index }) => index * 0.1}s both;
    
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
        border-radius: 20px;
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
        max-width: 350px;
        padding: 20px;
        gap: 12px;
    }
    
    @media (max-width: 480px) {
        max-width: 320px;
        padding: 16px;
    }
`;

const Top = styled.div`
    display: flex;
    gap: 16px;
    align-items: flex-start;
`;

const Image = styled.img`
    height: 60px;
    width: 60px;
    background-color: ${({ theme }) => theme.card_light};
    border-radius: 16px;
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.primary}30;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${float} 6s ease-in-out infinite;
    
    ${Card}:hover & {
        transform: scale(1.1) rotate(5deg);
        border-color: ${({ theme }) => theme.primary};
        box-shadow: ${({ theme }) => theme.shadow};
    }
    
    @media (max-width: 768px) {
        height: 50px;
        width: 50px;
        border-radius: 12px;
    }
    
    @media (max-width: 480px) {
        height: 45px;
        width: 45px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
    gap: 6px;
`;

const Role = styled.div`
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.01em;
    
    @media (max-width: 768px) {
        font-size: clamp(1rem, 3vw, 1.1rem);
    }
`;

const Company = styled.div`
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
        content: '🏢';
        font-size: 1rem;
    }
    
    @media (max-width: 768px) {
        font-size: clamp(0.85rem, 3vw, 0.9rem);
    }
`;

const Date = styled.div`
    font-size: clamp(0.8rem, 2vw, 0.9rem);
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::before {
        content: '📅';
        font-size: 0.9rem;
    }
    
    @media (max-width: 768px) {
        font-size: clamp(0.75rem, 3vw, 0.8rem);
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: clamp(0.9rem, 2vw, 1rem);
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.text_secondary};
    line-height: 1.7;
    padding: 16px;
    background: ${({ theme }) => theme.card_light};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.glassHover};
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.primaryGradient};
        opacity: 0.02;
        border-radius: 12px;
        pointer-events: none;
    }
    
    @media (max-width: 768px) {
        font-size: clamp(0.85rem, 3vw, 0.9rem);
        padding: 12px;
        line-height: 1.6;
    }
    
    @media (max-width: 480px) {
        padding: 10px;
    }
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;

const Skill = styled.span`
    font-size: clamp(0.75rem, 2vw, 0.8rem);
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    padding: 6px 12px;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => theme.primary}30;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        background: ${({ theme }) => theme.primary}25;
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadow};
    }
    
    @media (max-width: 768px) {
        font-size: clamp(0.7rem, 3vw, 0.75rem);
        padding: 4px 10px;
    }
`;

const ExperienceCard = ({ experience, index = 0 }) => {
    return (
        <Card index={index}>
            <Top>
                <Image src={experience.img} alt={experience.company} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience.desc}
                {experience.desc2 && (
                    <>
                        <br /><br />
                        {experience.desc2}
                    </>
                )}
            </Description>
            {experience.skills && (
                <Skills>
                    {experience.skills.map((skill, skillIndex) => (
                        <Skill key={skillIndex}>{skill}</Skill>
                    ))}
                </Skills>
            )}
        </Card>
    )
}

export default ExperienceCard 