import React from 'react'
import styled, { keyframes } from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';

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
    padding: 40px 0px 80px 0px;
    background: linear-gradient(180deg, ${({ theme }) => theme.card_light} 0%, ${({ theme }) => theme.card_light}99 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 700;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${fadeIn} 0.8s ease-out;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`;

const StyledTimeline = styled(Timeline)`
    .MuiTimelineItem-root {
        &:before {
            display: none;
        }
    }
    
    .MuiTimelineDot-root {
        background: ${({ theme }) => theme.primary};
        border: none;
        box-shadow: 0 0 10px ${({ theme }) => theme.primary}40;
        transition: all 0.3s ease-in-out;
        
        &:hover {
            transform: scale(1.2);
            box-shadow: 0 0 20px ${({ theme }) => theme.primary}60;
        }
    }
    
    .MuiTimelineConnector-root {
        background: linear-gradient(180deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primary}40 100%);
    }
`;

const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <StyledTimeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </StyledTimeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index