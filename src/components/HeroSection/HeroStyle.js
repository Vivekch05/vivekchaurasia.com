import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.card_light} 0%, 
    ${({ theme }) => theme.card_light}99 50%,
    ${({ theme }) => theme.card_light}95 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  min-height: 100vh;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 960px) {
    padding: 80px 16px;
    min-height: 90vh;
  }
  @media (max-width: 640px) {
    padding: 60px 16px;
    min-height: 80vh;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 60px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  animation: ${slideInLeft} 1s ease-out;
  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  padding: 20px;
  animation: ${slideInRight} 1s ease-out 0.3s both;
  
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
  }

  @media (max-width: 640px) {
    margin-bottom: 20px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 450px;
  border-radius: 24px;
  border: 3px solid transparent;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary}) padding-box,
              linear-gradient(135deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.secondary}) border-box;
  box-shadow: ${({ theme }) => theme.shadow};
  animation: ${float} 6s ease-in-out infinite, ${glow} 4s ease-in-out infinite;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  object-fit: cover;
  object-position: center;
  filter: brightness(1.05) contrast(1.05);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 26px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme.primary}, 
      ${({ theme }) => theme.secondary}, 
      ${({ theme }) => theme.accent});
    z-index: -1;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.05) translateY(-10px) rotate(2deg);
    box-shadow: ${({ theme }) => theme.shadowHover};
    filter: brightness(1.1) contrast(1.1);
    
    &::before {
      opacity: 0.6;
    }
  }

  @media (max-width: 768px) {
    max-width: 350px;
    max-height: 400px;
    border-radius: 20px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 320px;
    border-radius: 16px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: clamp(2rem, 8vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 16px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: clamp(1.5rem, 3vw, 2rem);
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;
  margin-bottom: 24px;
  align-items: center;
  
  @media (max-width: 960px) {
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @media (max-width: 640px) {
    font-size: clamp(1.25rem, 5vw, 1.5rem);
    line-height: 1.5;
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  font-weight: 700;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.primaryGradient};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

export const SubTitle = styled.div`
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.7;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 600px;
  animation: ${fadeInUp} 1s ease-out 0.6s both;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: clamp(1rem, 4vw, 1.1rem);
    line-height: 1.6;
    margin-bottom: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 320px;
    text-align: center;
    padding: 18px 36px;
    color: ${({ theme }) => theme.white};
    border-radius: 50px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: ${({ theme }) => theme.primaryGradient};
    border: none;
    box-shadow: ${({ theme }) => theme.shadow};
    animation: ${fadeInUp} 1s ease-out 0.9s both;
    
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
            rgba(255, 255, 255, 0.3),
            transparent
        );
        transition: all 0.6s ease-in-out;
    }
    
    &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadowHover};
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(-2px) scale(0.98);
        box-shadow: ${({ theme }) => theme.shadow};
    }
    
    @media (max-width: 640px) {
        padding: 16px 28px;
        font-size: 1rem;
        max-width: 280px;
    } 
`;
