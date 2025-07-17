import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, GlassImageCard } from './HeroStyle'
import VivekImg from '../../images/VivekImage1.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] } }
};

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer as={motion.section} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={heroVariants}>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title style={{ fontFamily: "'Merriweather', serif" }}>
                            <span style={{ display: 'block', fontSize: '1.1em', marginBottom: '18px', color: '#D4AF37', fontWeight: 700 }}>👋 Hello, I'm</span>
                            {Bio.name}
                        </Title>
                        <TextLoop>
                            <span style={{ fontFamily: 'Inter, Open Sans, sans-serif', fontWeight: 500 }}>I am a</span>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                        cursor: '|',
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle style={{ fontFamily: 'Inter, Open Sans, sans-serif' }}>{Bio.description}</SubTitle>
                        <ResumeButton 
                            href={Bio.resume} 
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <GlassImageCard
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                        >
                          <Img 
                              src={VivekImg} 
                              alt="hero-image" 
                              loading="eager"
                          />
                        </GlassImageCard>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection