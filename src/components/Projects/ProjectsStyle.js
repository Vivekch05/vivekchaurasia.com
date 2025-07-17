import styled, { keyframes } from 'styled-components';
import _default from '../../themes/default';

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

export const Container = styled.div`
    background: linear-gradient(120deg, ${({ theme }) => theme.bgLight} 60%, ${({ theme }) => theme.bg} 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 64px 0 48px 0;
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 44px;
    text-align: center;
    font-family: 'Merriweather', serif;
    font-weight: 800;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    position: relative;
    margin-bottom: 18px;
    animation: ${fadeIn} 0.8s ease-out;
    &::after {
      content: '';
      display: block;
      margin: 18px auto 0 auto;
      width: 80px;
      height: 4px;
      border-radius: 2px;
      background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
    }
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
        &::after { width: 48px; height: 3px; }
    }
`;

export const Desc = styled.div`
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

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    background: ${({ theme }) => theme.card};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    ${({ active, theme }) =>
        active && `
        background: ${theme.primary + 20};
        transform: scale(1.05);
    `}
    
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
        transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.5;
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: stretch;
    gap: 50px;
    padding: 20px;
    animation: ${fadeIn} 0.8s ease-out 0.6s backwards;
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 10px;
    }
`;