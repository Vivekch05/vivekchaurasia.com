import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileNavLogo,
  MobileLink,
  DrawerOverlay,
  DrawerCloseIcon,
  MobileSocialLinks,
  SocialIcon,
  MobileDivider,
  MobileSectionTitle
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaUser, FaCode, FaBriefcase, FaFolder, FaGraduationCap, FaEnvelope } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleNavLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'skills', label: 'Skills', icon: FaCode },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaFolder },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'contact', label: 'Contact', icon: FaEnvelope },
  ];

  const socialLinks = [
    { icon: FaGithub, url: Bio.github, label: 'GitHub' },
    { icon: FaLinkedin, url: Bio.linkedin, label: 'LinkedIn' },
    { icon: FaTwitter, url: Bio.twitter, label: 'Twitter' },
    { icon: FaInstagram, url: Bio.insta, label: 'Instagram' },
    { icon: FaFacebook, url: Bio.facebook, label: 'Facebook' },
  ];

  return (
    <Nav style={{
      backgroundColor: scrolled ? `${theme.card_light}99` : theme.card_light,
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s'
    }}>
      <NavbarContainer>
        <NavLogo to='/'>
          <a href="/" style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: '20px',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(true)} />
        </MobileIcon>
        <NavItems>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavLinkClick(e, link.id)}
            >
              {link.label}
            </NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          <GitHubButton
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile"
          >
            <FaGithub size={20} />
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>

        {/* Enhanced Mobile Drawer */}
        {isOpen && (
          <>
            <DrawerOverlay onClick={() => setIsOpen(false)} />
            <MobileMenu isOpen={isOpen}>
              <DrawerCloseIcon>
                <FaTimes size={24} onClick={() => setIsOpen(false)} />
              </DrawerCloseIcon>
              
              <MobileNavLogo>
                <DiCssdeck size="2.2rem" />
                <Span>Portfolio</Span>
              </MobileNavLogo>
              
              <MobileSectionTitle>Navigation</MobileSectionTitle>
              
              {navLinks.map((link, index) => (
                <MobileLink
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon size={18} />
                  {link.label}
                </MobileLink>
              ))}
              
              <MobileDivider />
              
              <GitHubButton
                style={{
                  padding: '16px 24px',
                  background: `${theme.primaryGradient}`,
                  color: 'white',
                  width: '100%',
                  borderRadius: '16px',
                  marginTop: '1rem',
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <FaGithub size={20} />
                GitHub Profile
              </GitHubButton>
              
              <MobileSocialLinks>
                {socialLinks.map((social, index) => (
                  <SocialIcon
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${social.label}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon size={20} />
                  </SocialIcon>
                ))}
              </MobileSocialLinks>
            </MobileMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;