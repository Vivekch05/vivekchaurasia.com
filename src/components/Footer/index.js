import styled, { keyframes } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

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
    transform: translateY(-5px);
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

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, 
    rgba(99, 102, 241, 0.05) 0%, 
    rgba(139, 92, 246, 0.03) 50%,
    rgba(236, 72, 153, 0.02) 100%);
  border-top: 1px solid ${({ theme }) => theme.glassHover};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  animation: ${fadeIn} 0.8s ease-out;
  position: relative;
  z-index: 1;
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: clamp(1.5rem, 4vw, 2rem);
  background: ${({ theme }) => theme.primaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  position: relative;
  letter-spacing: -0.02em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${({ theme }) => theme.primaryGradient};
    border-radius: 2px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    text-align: center;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0.5rem 1rem;
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
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 16px;
  background: ${({ theme }) => theme.glass};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: ${({ theme }) => theme.text_primary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.glassHover};
  box-shadow: ${({ theme }) => theme.shadow};
  
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
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primaryGradient};
    transform: translateY(-4px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadowHover};
    animation: ${glow} 2s ease-in-out infinite;
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    font-size: 1.3rem;
  }
`;

const Copyright = styled.p`
  margin-top: 2.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  animation: ${float} 4s ease-in-out infinite;
  font-weight: 500;
`;

function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Vivek Chaurasia</Logo>
        <Nav>
          <NavLink href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</NavLink>
          <NavLink href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</NavLink>
          <NavLink href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</NavLink>
          <NavLink href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink>
          <NavLink href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</NavLink>
          <NavLink href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon 
            href={Bio.facebook} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Twitter Profile"
          >
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon 
            href={Bio.insta} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {new Date().getFullYear()} Vivek Chaurasia. All rights reserved. | Crafted with ❤️
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;