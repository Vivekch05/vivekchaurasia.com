import styled, { keyframes } from 'styled-components';

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

export const Container = styled.div`
    background: linear-gradient(135deg, 
      rgba(99, 102, 241, 0.05) 0%, 
      rgba(139, 92, 246, 0.03) 25%, 
      rgba(236, 72, 153, 0.02) 50%, 
      transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
    padding: 80px 0;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
      pointer-events: none;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    padding: 20px 0px 100px 0;
    gap: 20px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

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
    margin-bottom: 30px;
    animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: clamp(1rem, 4vw, 1.1rem);
        margin-bottom: 20px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 2px solid ${({ theme }) => theme.glassHover};
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    border-radius: 16px;
    font-weight: 600;
    margin: 30px 0px;
    background: ${({ theme }) => theme.glass};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: ${({ theme }) => theme.shadow};
    animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
    overflow: hidden;
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        margin: 20px 0px;
    }
`;

export const ToggleButton = styled.div`
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
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
    }
    
    ${({ active, theme }) =>
        active && `
        background: ${theme.primaryGradient};
        color: ${theme.white};
        transform: scale(1.05);
        box-shadow: ${theme.shadowHover};
    `}
    
    &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadowHover};
        
        &::before {
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        padding: 10px 16px;
        border-radius: 10px;
    }
`;

export const Divider = styled.div`
    width: 2px;
    background: ${({ theme }) => theme.glassHover};
    opacity: 0.6;
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: stretch;
    gap: 32px;
    padding: 30px;
    animation: ${fadeIn} 0.8s ease-out 0.6s backwards;
    width: 100%;
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 28px;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 20px;
    }
    
    @media (max-width: 480px) {
        padding: 15px;
        gap: 20px;
    }
`;
