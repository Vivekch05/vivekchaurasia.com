import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const GlassCard = styled(motion.div)`
    width: 650px;
    border-radius: 22px;
    box-shadow: ${({ theme }) => theme.shadow};
    padding: 22px 28px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1.5px solid ${({ theme }) => theme.primary}33;
    background: ${({ theme }) => theme.glass};
    transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
    &:hover {
        box-shadow: 0 15px 40px ${({ theme }) => theme.primary}22;
        border: 1.5px solid ${({ theme }) => theme.primary};
        transform: translateY(-7px) scale(1.03);
    }
    @media (max-width: 768px) {
        width: 98vw;
        padding: 14px 6px;
    }
`;

const Top = styled.div`
    display: flex;
    gap: 18px;
`;

const Image = styled.img`
    height: 54px;
    width: 54px;
    background-color: #000;
    border-radius: 14px;
    margin-top: 4px;
    transition: all 0.3s ease-in-out;
    object-fit: cover;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
`;

const Role = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Merriweather', serif;
    margin-bottom: 4px;
    background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Company = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 8px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-bottom: 8px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    text-align:justify;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-bottom: 10px;
    line-height: 1.5;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
`;

const Skill = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}22, ${({ theme }) => theme.accent}22);
    padding: 5px 13px;
    border-radius: 12px;
    letter-spacing: 0.01em;
    box-shadow: 0 1px 4px ${({ theme }) => theme.primary}11;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: linear-gradient(90deg, ${({ theme }) => theme.accent}22, ${({ theme }) => theme.primary}22);
        transform: translateY(-2px) scale(1.07);
    }
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <GlassCard
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            <Top>
                <Image src={experience.img} />
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
                    {experience.skills.map((skill, index) => (
                        <Skill key={index}>{skill}</Skill>
                    ))}
                </Skills>
            )}
        </GlassCard>
    )
}

export default ExperienceCard 