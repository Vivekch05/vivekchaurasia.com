import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.1); }
  50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
`;

const Button = styled.a`
    display: none;
    width: 100%;
    padding: 12px 0;
    background: ${({ theme }) => theme.primaryGradient};
    color: ${({ theme }) => theme.white};
    font-size: 0.95rem;
    font-weight: 600;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    margin-top: 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({ theme }) => theme.shadow};
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
        );
        transition: all 0.6s ease-in-out;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadowHover};
        
        &::before {
            left: 100%;
        }
    }

    @media (max-width: 900px) {
        display: block;
    }
`;

const Card = styled.div`
    width: 100%;
    max-width: 100%;
    height: auto;
    min-height: 520px;
    background: ${({ theme }) => theme.card};
    cursor: pointer;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadow};
    overflow: hidden;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border: 1px solid ${({ theme }) => theme.glass};
    animation: ${fadeInUp} 0.6s ease-out;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
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
    
    &:hover ${Button} {
        display: block;
    }
    
    @media (max-width: 1200px) {
        min-height: 500px;
        padding: 18px;
    }
    
    @media (max-width: 900px) {
        width: 100%;
        height: auto;
        min-height: 480px;
        max-width: 400px;
        
        &:hover ${Button} {
            display: block;
        }
    }
    
    @media (max-width: 480px) {
        padding: 16px;
        min-height: 460px;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background: ${({ theme }) => theme.card_light};
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.shadow};
    object-fit: cover;
    transition: all 0.3s ease;
    
    ${Card}:hover & {
        transform: scale(1.05);
        border-radius: 12px;
    }
    
    @media (max-width: 1200px) {
        height: 160px;
    }
    
    @media (max-width: 480px) {
        height: 150px;
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 6px;
`;

const Tag = styled.span`
    font-size: 0.7rem;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary}15;
    padding: 3px 10px;
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.primary}30;
    transition: all 0.3s ease;
    
    &:hover {
        background: ${({ theme }) => theme.primary}25;
        transform: translateY(-1px);
    }
    
    @media (max-width: 480px) {
        font-size: 0.65rem;
        padding: 2px 8px;
    }
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0px 2px;
    flex: 1;
    min-height: 0;
`;

const Title = styled.div`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.3;
    letter-spacing: -0.01em;
    
    @media (max-width: 1200px) {
        font-size: 1rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.95rem;
    }
`;

const Date = styled.div`
    font-size: 0.75rem;
    margin-left: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 0.7rem;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    margin-top: 6px;
    text-align: justify;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    line-height: 1.5;
    font-size: 0.85rem;
    flex: 1;
    
    @media (max-width: 1200px) {
        -webkit-line-clamp: 3;
        font-size: 0.8rem;
    }
    
    @media (max-width: 480px) {
        font-size: 0.75rem;
        -webkit-line-clamp: 3;
    }
`;

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} alt={project.title} />
            <Tags>
                {project.tags?.slice(0, 4).map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
                {project.tags?.length > 4 && (
                    <Tag>+{project.tags.length - 4} more</Tag>
                )}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            {project.webapp && (
                <Button
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                >
                    View Project
                </Button>
            )}
        </Card>
    )
}

export default ProjectCards