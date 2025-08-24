import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import { FaArrowUp } from 'react-icons/fa';

const Body = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`

const Wrapper = styled.div`
  background: linear-gradient(135deg, 
    rgba(99, 102, 241, 0.08) 0%, 
    rgba(139, 92, 246, 0.05) 25%, 
    rgba(236, 72, 153, 0.03) 50%, 
    transparent 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(99, 102, 241, 0.02) 0%, 
      rgba(139, 92, 246, 0.01) 50%, 
      transparent 100%);
    pointer-events: none;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primaryGradient};
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ visible }) => visible ? '1' : '0'};
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${({ theme }) => theme.shadow};
  z-index: 1000;
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: ${({ theme }) => theme.shadowHover};
  }
  
  &:active {
    transform: translateY(-2px) scale(0.95);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1rem;
  }
`;

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setShowScrollTop(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <ContentWrapper>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </ContentWrapper>
        </Body>
        <ScrollToTopButton 
          visible={showScrollTop} 
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </ScrollToTopButton>
      </Router>
    </ThemeProvider>
  );
}

export default App;
