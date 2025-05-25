import styled, { keyframes } from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

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

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(180deg, rgba(132, 59, 206, 0.05) 0%, rgba(132, 59, 206, 0) 100%);
  border-top: 1px solid ${({ theme }) => theme.primary + 20};
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
  animation: ${fadeIn} 0.8s ease-out;
`;

const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}, transparent);
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
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;
  
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
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1.5rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.card_light};
  color: ${({ theme }) => theme.text_primary};
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
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    box-shadow: 0 4px 12px ${({ theme }) => theme.primary + 40};
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const Copyright = styled.p`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  animation: ${float} 3s ease-in-out infinite;
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
          &copy; {new Date().getFullYear()} Vivek Chaurasia. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;