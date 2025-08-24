import { CloseRounded, GitHub, LinkedIn, Launch, Code } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const slideIn = keyframes`
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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 10px;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div`
  max-width: 900px;
  width: 100%;
  border-radius: 24px;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadowHover};
  border: 1px solid ${({ theme }) => theme.glassHover};
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease-out;
  margin: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.primaryGradient};
    opacity: 0.02;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    border-radius: 20px;
    margin: 20px auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid ${({ theme }) => theme.glassHover};
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 1001;
  
  &:hover {
    background: ${({ theme }) => theme.primaryGradient};
    color: ${({ theme }) => theme.white};
    transform: scale(1.1) rotate(90deg);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(99, 102, 241, 0.1) 0%,
      rgba(139, 92, 246, 0.1) 50%,
      rgba(236, 72, 153, 0.1) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
  animation: ${float} 6s ease-in-out infinite;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  padding: 40px;
  animation: ${slideIn} 0.4s ease-out 0.1s both;
  
  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const HeaderSection = styled.div`
  margin-bottom: 32px;
`;

const Title = styled.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 12px;
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const Date = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '📅';
    font-size: 1.1rem;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const Tag = styled.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  padding: 6px 12px;
  border-radius: 20px;
  background: ${({ theme }) => theme.primary}15;
  border: 1px solid ${({ theme }) => theme.primary}30;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.primary}25;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const Description = styled.div`
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.7;
  margin-bottom: 32px;
  padding: 24px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 16px;
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
    border-radius: 16px;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px;
    margin-bottom: 24px;
  }
`;

const MembersSection = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '👥';
    font-size: 1.5rem;
  }
`;

const Members = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.card_light};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.glassHover};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadowHover};
    border-color: ${({ theme }) => theme.primary}40;
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary}30;
  transition: all 0.2s ease;
  
  ${Member}:hover & {
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const MemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const MemberName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const MemberLinks = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${({ theme }) => theme.glass};
  border: 1px solid ${({ theme }) => theme.glassHover};
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.primaryGradient};
    color: ${({ theme }) => theme.white};
    transform: translateY(-2px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const Button = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  
  ${({ primary, theme }) => primary ? `
    background: ${theme.primaryGradient};
    color: ${theme.white};
    box-shadow: ${theme.shadow};
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadowHover};
    }
  ` : `
    background: ${theme.card_light};
    color: ${theme.text_primary};
    border: 1px solid ${theme.glassHover};
    
    &:hover {
      background: ${theme.cardHover};
      transform: translateY(-2px);
      box-shadow: ${theme.shadow};
    }
  `}
  
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
    transition: all 0.4s ease-in-out;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 14px 20px;
    font-size: 0.95rem;
  }
`;

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  
  useEffect(() => {
    const handleScrollLock = () => {
      if (openModal?.state) {
        // Store current scroll position
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
      } else {
        // Restore scroll position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };

    handleScrollLock();

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [openModal?.state]);

  const handleClose = () => {
    setOpenModal({ state: false, project: null });
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  if (!project) return null;

  return (
    <Modal 
      open={openModal?.state} 
      onClose={handleClose}
      closeAfterTransition
      disableScrollLock={true}
      keepMounted={false}
    >
      <Container onClick={handleBackdropClick}>
        <Wrapper>
          <CloseButton onClick={handleClose}>
            <CloseRounded />
          </CloseButton>
          
          <ImageContainer>
            <Image src={project?.image} alt={project?.title} />
          </ImageContainer>
          
          <ContentContainer>
            <HeaderSection>
              <Title>{project?.title}</Title>
              <Date>{project.date}</Date>
              <Tags>
                {project?.tags?.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
            </HeaderSection>
            
            <Description>{project?.description}</Description>
            
            {project.member && project.member.length > 0 && (
              <MembersSection>
                <Label>Team Members</Label>
                <Members>
                  {project.member.map((member, index) => (
                    <Member key={index}>
                      <MemberImage src={member.img} alt={member.name} />
                      <MemberInfo>
                        <MemberName>{member.name}</MemberName>
                        <MemberLinks>
                          {member.github && (
                            <SocialLink href={member.github} target="_blank" rel="noopener noreferrer">
                              <GitHub fontSize="small" />
                            </SocialLink>
                          )}
                          {member.linkedin && (
                            <SocialLink href={member.linkedin} target="_blank" rel="noopener noreferrer">
                              <LinkedIn fontSize="small" />
                            </SocialLink>
                          )}
                        </MemberLinks>
                      </MemberInfo>
                    </Member>
                  ))}
                </Members>
              </MembersSection>
            )}
            
            <ButtonGroup>
              {project.github && (
                <Button href={project.github} target="_blank" rel="noopener noreferrer">
                  <Code />
                  View Code
                </Button>
              )}
              {project.webapp && (
                <Button primary href={project.webapp} target="_blank" rel="noopener noreferrer">
                  <Launch />
                  View Live App
                </Button>
              )}
            </ButtonGroup>
          </ContentContainer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default ProjectDetails;