import styled, { keyframes } from "styled-components";
import _default from "../../themes/default";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const HeroContainer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.card_light} 0%, ${({ theme }) => theme.card_light}99 100%);
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
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
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  padding: 20px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 380px;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: ${float} 6s ease-in-out infinite;
  transition: all 0.3s ease-in-out;
  object-fit: cover;
  object-position: center;
  filter: brightness(1.05) contrast(1.05);
  backdrop-filter: blur(5px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 30px;
    background: linear-gradient(
      45deg,
      ${({ theme }) => theme.primary}20,
      transparent
    );
    z-index: -1;
  }

  &:hover {
    transform: scale(1.02) translateY(-5px);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
    filter: brightness(1.1) contrast(1.1);
    border-color: ${({ theme }) => theme.primary}99;
  }

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
    border-radius: 25px;
  }

  @media (max-width: 640px) {
    max-width: 300px;
    max-height: 300px;
    border-radius: 20px;
  }
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 56px;
  background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  margin-bottom: 20px;
  
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  margin-bottom: 20px;
  
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  max-width: 600px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 32px;
    color: ${({ theme }) => theme.white};
    border-radius: 50px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease-in-out !important;
    background: linear-gradient(45deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.primary}99);
    border: 2px solid ${({ theme }) => theme.primary};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    
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
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        background: linear-gradient(45deg, ${({ theme }) => theme.primary}99, ${({ theme }) => theme.primary});
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(1px) scale(0.98);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 640px) {
        padding: 12px 24px;
        font-size: 18px;
    } 
`;
