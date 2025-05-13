import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.card};
    
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    
    @media (max-width: 768px) {
        width: 300px;
    }
`;

const Top = styled.div`
    display: flex;
    gap: 12px
`;

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
`;

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin-bottom: 4px;
    background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Company = styled.div`
    font-size: 14px;
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
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary + 15};
    padding: 4px 8px;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    
    &:hover {
        background: ${({ theme }) => theme.primary + 30};
        transform: translateY(-2px);
    }
    
    @media (max-width: 768px) {
        font-size: 10px;
    }
`;

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
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
        </Card>
    )
}

export default ExperienceCard 