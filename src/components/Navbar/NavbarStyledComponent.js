import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import _default from '../../themes/default';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid ${({theme}) => theme.primary + 20};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    animation: ${fadeIn} 0.5s ease-out;
    
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    animation: ${slideIn} 0.5s ease-out;
    
    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
    background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;
    animation: ${fadeIn} 0.5s ease-out 0.2s backwards;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    position: relative;
    padding: 8px 0;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primary};
        transition: width 0.3s ease;
    }
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 100%;
        }
    }

    &.active {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 100%;
        }
    }
`;

export const GitHubButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 600;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: transparent;
    gap: 8px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
    }

    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({ theme }) => theme.primary + 40};

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px ${({ theme }) => theme.primary + 40};
    }

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
        border-radius: 12px;
        width: 100%;
        justify-content: center;
        margin-top: 1.5rem;
    }
`;

export const ButtonContainer = styled.div`
    width: 80%;  
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    animation: ${fadeIn} 0.5s ease-out 0.4s backwards;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
        transition: all 0.3s ease;
        
        &:hover {
            color: ${({ theme }) => theme.primary};
            transform: translate(-100%, 60%) scale(1.1);
        }
    }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(30, 30, 30, 0.45);
  backdrop-filter: blur(4px);
  z-index: 1001;
  transition: opacity 0.3s;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0; right: 0;
  height: 100vh;
  width: 85vw;
  max-width: 340px;
  background: ${({ theme }) => theme.card_light};
  box-shadow: -2px 0 16px rgba(0,0,0,0.12);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem 2rem 2rem;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  animation: fadeIn 0.3s;
`;

export const DrawerCloseIcon = styled.div`
  align-self: flex-end;
  margin-bottom: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`;

export const MobileNavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 2.5rem;
`;

export const MobileMenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    width: 100%;
    height: 100%;
`;

export const MobileMenuLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 8px 0;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primary};
        transition: width 0.3s ease;
    }
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 100%;
        }
    }

    &.active {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 100%;
        }
    }
`;

export const MobileMenuButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: 0.5s;
    }
    
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${({ theme }) => theme.primary + 40};
        
        &::before {
            left: 100%;
        }
    }
`;

export const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    padding: 8px 0;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primary};
        transition: width 0.3s ease;
    }
    
    &:hover {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 100%;
        }
    }

    &.active {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 100%;
        }
    }
`;