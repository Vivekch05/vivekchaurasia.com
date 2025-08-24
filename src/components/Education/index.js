import React from 'react'
import styled, { keyframes } from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

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
    
    @media (max-width: 960px) {
        padding: 80px 0;
    }
    
    @media (max-width: 768px) {
        padding: 60px 0;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    gap: 20px;
    
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
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

const Desc = styled.div`
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

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`;

const StyledTimeline = styled(Timeline)`
    .MuiTimelineItem-root {
        &:before {
            display: none;
        }
    }
    
    .MuiTimelineDot-root {
        background: ${({ theme }) => theme.primaryGradient};
        border: none;
        box-shadow: ${({ theme }) => theme.shadow};
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        animation: ${float} 6s ease-in-out infinite;
        
        &:hover {
            transform: scale(1.3);
            box-shadow: ${({ theme }) => theme.shadowHover};
            animation: ${glow} 2s ease-in-out infinite;
        }
    }
    
    .MuiTimelineConnector-root {
        background: linear-gradient(180deg, 
          ${({ theme }) => theme.primary} 0%, 
          ${({ theme }) => theme.primary}60 50%,
          ${({ theme }) => theme.primary}30 100%);
        width: 3px;
        border-radius: 2px;
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}30;
    }
    
    .MuiTimelineContent-root {
        padding: 16px 24px;
        
        @media (max-width: 768px) {
            padding: 12px 16px;
        }
    }
`;

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Academic Journey</Title>
                <Desc>
                    My educational path has been a journey of continuous learning, growth, and academic excellence. 
                    Here are the milestones that have shaped my knowledge and expertise.
                </Desc>
                <TimelineSection>
                    <StyledTimeline>
                        {education.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot 
                                        variant="filled" 
                                        sx={{ 
                                            width: 16, 
                                            height: 16,
                                            animationDelay: `${index * 0.2}s`
                                        }} 
                                    />
                                    {index !== education.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <EducationCard education={education} index={index}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </StyledTimeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education