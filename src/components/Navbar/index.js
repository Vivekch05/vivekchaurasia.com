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
  DrawerCloseIcon
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { motion } from 'framer-motion';

const navVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] } }
};

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
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Nav
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      style={{
        background: scrolled ? 'rgba(24,28,36,0.92)' : 'rgba(24,28,36,0.72)',
        backdropFilter: 'blur(16px)',
        boxShadow: scrolled ? '0 4px 24px 0 rgba(31,38,135,0.10)' : 'none',
        borderBottom: '1.5px solid ' + theme.primary + '33',
        transition: 'background 0.3s, box-shadow 0.3s, border 0.3s',
      }}
    >
      <NavbarContainer>
        <NavLogo to='/'>
          <a href="/" style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: '20px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontFamily: "'Merriweather', serif",
            fontWeight: 700,
            fontSize: '1.7rem',
            letterSpacing: '0.02em',
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

        {/* Modern Drawer for Mobile */}
        {isOpen && (
          <>
            <DrawerOverlay onClick={() => setIsOpen(false)} />
            <MobileMenu isOpen={isOpen}>
              <DrawerCloseIcon>
                <FaTimes size={28} onClick={() => setIsOpen(false)} />
              </DrawerCloseIcon>
              <MobileNavLogo>
                <DiCssdeck size="2.2rem" />
                <Span>Portfolio</Span>
              </MobileNavLogo>
              {navLinks.map((link) => (
                <MobileLink
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavLinkClick(e, link.id)}
                >
                  {link.label}
                </MobileLink>
              ))}
              <GitHubButton
                style={{
                  padding: '12px 20px',
                  background: `${theme.primary}`,
                  color: 'white',
                  width: '100%',
                  borderRadius: '12px',
                  marginTop: '2rem',
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile"
              >
                <FaGithub size={20} style={{ marginRight: 8 }} />
                GitHub Profile
              </GitHubButton>
            </MobileMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;