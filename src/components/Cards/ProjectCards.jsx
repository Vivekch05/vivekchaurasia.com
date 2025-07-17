import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const GlassCard = styled(motion.div)`
  background: ${({ theme }) => theme.glass};
  box-shadow: ${({ theme }) => theme.shadow};
  backdrop-filter: blur(10px);
  border-radius: 22px;
  border: 1.5px solid ${({ theme }) => theme.primary}33;
  padding: 2rem 1.3rem 1.7rem 1.3rem;
  transition: box-shadow 0.3s, border 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 440px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 16px 40px 0 ${({ theme }) => theme.primary}22;
    border: 1.5px solid ${({ theme }) => theme.primary};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 10px;
  box-shadow: 0 0 16px 2px rgba(0,0,0,0.13);
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.white};
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}22, ${({ theme }) => theme.accent}22);
  padding: 4px 12px;
  border-radius: 12px;
  letter-spacing: 0.01em;
  box-shadow: 0 1px 4px ${({ theme }) => theme.primary}11;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_secondary};
  font-family: 'Merriweather', serif;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 12px;
  margin-left: 2px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 80};
  @media only screen and (max-width: 768px){
      font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 99};
  overflow: hidden;
  margin-top: 8px;
  text-align: justify;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Button = styled(motion.a)`
  display: block;
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(90deg, ${({ theme }) => theme.primary}, ${({ theme }) => theme.accent});
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-top: 18px;
  box-shadow: 0 2px 8px ${({ theme }) => theme.primary + 30};
  transition: background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.2s;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 18px;
  margin-left: auto;
  margin-right: auto;
  z-index: 2;
  &:hover {
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, ${({ theme }) => theme.primary});
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 16px ${({ theme }) => theme.primary + 30};
    transform: scale(1.04);
  }
`;

export default function ProjectCard({ project, setOpenModal }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <GlassCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      onClick={() => setOpenModal({ state: true, project })}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ minHeight: 440, position: 'relative' }}
    >
      <ImageWrapper>
        <Image
          src={project.image}
          alt={project.title}
          initial={false}
          animate={hovered ? { scale: 1.07 } : { scale: 1 }}
          transition={{ duration: 0.35 }}
        />
      </ImageWrapper>
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      {project.webapp && (
        <Button
          href={project.webapp}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 30, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1, pointerEvents: 'auto' } : { y: 30, opacity: 0, pointerEvents: 'none' }}
          transition={{ duration: 0.35 }}
          onClick={e => e.stopPropagation()}
        >
          View Project
        </Button>
      )}
    </GlassCard>
  );
}