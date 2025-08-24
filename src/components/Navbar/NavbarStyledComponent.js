import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

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

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const Nav = styled.div`
    background: ${({theme}) => theme.glass};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid ${({theme}) => theme.glassHover};
    box-shadow: ${({theme}) => theme.shadow};
    animation: ${fadeIn} 0.5s ease-out;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
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
    font-weight: 800;
    font-size: 1.25rem;
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
    letter-spacing: -0.02em;
    
    &:hover {
        transform: scale(1.05);
        animation: ${pulse} 1s ease-in-out;
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
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    position: relative;
    padding: 8px 16px;
    border-radius: 12px;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.primaryGradient};
        border-radius: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primaryGradient};
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    
    &:hover {
        color: ${({ theme }) => theme.white};
        transform: translateY(-2px);
        
        &::before {
            opacity: 1;
        }
        
        &::after {
            width: 80%;
        }
    }

    &.active {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 80%;
        }
    }
`;

export const GitHubButton = styled.a`
    background: ${({ theme }) => theme.primaryGradient};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 16px;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    padding: 0 24px;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: none;
    gap: 8px;
    box-shadow: ${({ theme }) => theme.shadow};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: 0.5s;
    }

    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadowHover};

        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(-1px) scale(0.98);
    }

    @media screen and (max-width: 768px) {
        font-size: 0.9rem;
        padding: 12px 20px;
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
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        padding: 8px;
        border-radius: 8px;
        
        &:hover {
            color: ${({ theme }) => theme.primary};
            background: ${({ theme }) => theme.glassHover};
            transform: translate(-100%, 60%) scale(1.1);
        }
    }
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1001;
  transition: opacity 0.3s;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0; right: 0;
  height: 100vh;
  width: 85vw;
  max-width: 340px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({ theme }) => theme.shadowHover};
  z-index: 1002;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem 2rem 2rem;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
  animation: fadeIn 0.3s;
  border-left: 1px solid ${({ theme }) => theme.glassHover};
`;

export const DrawerCloseIcon = styled.div`
  align-self: flex-end;
  margin-bottom: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 8px;
  
  &:hover {
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.glassHover};
    transform: scale(1.1);
  }
`;

export const MobileNavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.3rem;
  font-weight: 700;
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
        background: ${({ theme }) => theme.primaryGradient};
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
    background: ${({ theme }) => theme.primaryGradient};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 16px;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    border: none;
    box-shadow: ${({ theme }) => theme.shadow};
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: 0.5s;
    }
    
    &:hover {
        transform: translateY(-2px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadowHover};
        
        &::before {
            left: 100%;
        }
    }
`;

export const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    padding: 12px 16px;
    position: relative;
    border-radius: 12px;
    width: 100%;
    text-align: center;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.primaryGradient};
        border-radius: 12px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: ${({ theme }) => theme.primaryGradient};
        transition: all 0.3s ease;
        transform: translateX(-50%);
    }
    
    &:hover {
        color: ${({ theme }) => theme.white};
        transform: translateY(-2px);
        
        &::before {
            opacity: 1;
        }
        
        &::after {
            width: 80%;
        }
    }

    &.active {
        color: ${({ theme }) => theme.primary};
        
        &::after {
            width: 80%;
        }
    }
`;