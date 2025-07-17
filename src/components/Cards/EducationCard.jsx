import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.text_secondary + 99};
    margin-bottom: 10px;
    line-height: 1.5;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const GlassCard = styled(motion.div)`
    width: 650px;
    border-radius: 22px;
    box-shadow: ${({ theme }) => theme.shadow};
    padding: 22px 28px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1.5px solid ${({ theme }) => theme.primary}33;
    background: ${({ theme }) => theme.glass};
    transition: box-shadow 0.3s, border 0.3s, transform 0.3s;
    &:hover {
        box-shadow: 0 15px 40px ${({ theme }) => theme.primary}22;
        border: 1.5px solid ${({ theme }) => theme.primary};
        transform: translateY(-7px) scale(1.03);
    }
    @media (max-width: 768px) {
        width: 98vw;
        padding: 14px 6px;
    }
    &:hover ${Document}{
        display: flex;
    }
    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    display: flex;
    gap: 18px;
`

const Image = styled.img`
    height: 54px;
    width: 54px;
    background-color: #000;
    border-radius: 14px;
    margin-top: 4px;
    transition: all 0.3s ease-in-out;
    object-fit: cover;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 768px) {
        height: 40px;
        width: 40px;
    }
`

const Body = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%;
`

const Name = styled.div`
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Merriweather', serif;
    margin-bottom: 4px;
    background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`

const Degree = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 8px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    margin-bottom: 8px;
    @media (max-width: 768px) {
        font-size: 10px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    padding: 5px 13px;
    background: linear-gradient(90deg, ${({ theme }) => theme.primary}22, ${({ theme }) => theme.accent}22);
    border-radius: 12px;
    display: inline-block;
    letter-spacing: 0.01em;
    box-shadow: 0 1px 4px ${({ theme }) => theme.primary}11;
    transition: all 0.3s ease-in-out;
    &:hover {
        background: linear-gradient(90deg, ${({ theme }) => theme.accent}22, ${({ theme }) => theme.primary}22);
        transform: translateY(-2px) scale(1.07);
    }
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const EducationCard = ({ education }) => {
    return (
        <GlassCard
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                {education.desc}
            </Description>
        </GlassCard>
    )
}

export default EducationCard