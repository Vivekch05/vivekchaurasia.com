import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { Send, Email, Person, Subject, Message } from '@mui/icons-material';

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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 100px 0;
    background: linear-gradient(180deg, 
      ${({ theme }) => theme.card_light} 0%, 
      ${({ theme }) => theme.card_light}99 50%,
      ${({ theme }) => theme.card_light}95 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);
        pointer-events: none;
    }
    
    @media (max-width: 960px) {
        padding: 80px 0;
    }
    
    @media (max-width: 768px) {
        padding: 60px 0;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 0 20px;
    gap: 40px;
    
    @media (max-width: 960px) {
        flex-direction: column;
        gap: 32px;
    }
    
    @media (max-width: 768px) {
        gap: 24px;
        padding: 0 16px;
    }
`;

const Title = styled.div`
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    text-align: center;
    font-weight: 800;
    color: #1e293b;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${fadeIn} 0.8s ease-out;
    position: relative;
    letter-spacing: -0.02em;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    &::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 120px;
        height: 4px;
        background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
        border-radius: 2px;
        animation: ${glow} 3s ease-in-out infinite;
    }
    
    @media (max-width: 768px) {
        &::after {
            width: 80px;
            height: 3px;
        }
    }
`;

const Desc = styled.div`
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    text-align: center;
    max-width: 700px;
    color: #475569;
    animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
    line-height: 1.7;
    font-weight: 500;
    
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

const ContactForm = styled.form`
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.card};
    padding: 40px;
    border-radius: 24px;
    box-shadow: ${({ theme }) => theme.shadow};
    gap: 24px;
    animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
    border: 1px solid ${({ theme }) => theme.glassHover};
    backdrop-filter: blur(20px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
        box-shadow: ${({ theme }) => theme.shadowHover};
        transform: translateY(-5px);
    }
    
    @media (max-width: 768px) {
        padding: 32px 24px;
        gap: 20px;
    }
    
    @media (max-width: 480px) {
        padding: 24px 20px;
        gap: 16px;
    }
`;

const ContactTitle = styled.div`
    font-size: clamp(1.5rem, 3vw, 1.75rem);
    margin-bottom: 8px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    align-items: center;
    gap: 12px;
    background: ${({ theme }) => theme.primaryGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    svg {
        color: ${({ theme }) => theme.primary};
        animation: ${float} 6s ease-in-out infinite;
    }
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const InputIcon = styled.div`
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: #6366f1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: all 0.3s ease;
`;

const ContactInput = styled.input`
    width: 100%;
    background: ${({ theme }) => theme.card_light};
    border: 2px solid ${({ theme }) => theme.glassHover};
    outline: none;
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: ${({ theme }) => theme.text_primary};
    border-radius: 16px;
    padding: 16px 16px 16px 56px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    
    &:focus {
        border: 2px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}20;
        background: ${({ theme }) => theme.card};
        
        & + ${InputIcon} {
            color: ${({ theme }) => theme.accent};
            transform: translateY(-50%) scale(1.1);
        }
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.text_secondary};
        font-weight: 400;
    }
    
    @media (max-width: 768px) {
        padding: 14px 14px 14px 48px;
    }
`;

const ContactInputMessage = styled.textarea`
    width: 100%;
    background: ${({ theme }) => theme.card_light};
    border: 2px solid ${({ theme }) => theme.glassHover};
    outline: none;
    font-size: clamp(0.9rem, 2vw, 1rem);
    color: ${({ theme }) => theme.text_primary};
    border-radius: 16px;
    padding: 16px 16px 16px 56px;
    resize: vertical;
    min-height: 140px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    
    &:focus {
        border: 2px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}20;
        background: ${({ theme }) => theme.card};
        
        & + ${InputIcon} {
            color: ${({ theme }) => theme.accent};
            transform: translateY(-50%) scale(1.1);
        }
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.text_secondary};
        font-weight: 400;
    }
    
    @media (max-width: 768px) {
        padding: 14px 14px 14px 48px;
        min-height: 120px;
    }
`;

const ContactButton = styled.button`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: ${({ theme }) => theme.primaryGradient};
    padding: 16px 24px;
    margin-top: 8px;
    border-radius: 16px;
    border: none;
    color: white;
    font-size: clamp(1rem, 2vw, 1.1rem);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    position: relative;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadow};
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: 0.6s;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: ${({ theme }) => theme.shadowHover};
        animation: ${glow} 2s ease-in-out infinite;
        
        &::before {
            left: 100%;
        }
        
        svg {
            transform: translateX(4px);
        }
    }
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
        animation: none;
    }
    
    svg {
        transition: transform 0.3s ease;
    }
    
    @media (max-width: 768px) {
        padding: 14px 20px;
        gap: 8px;
    }
`;

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            await emailjs.sendForm(
                'service_o18bfaf',
                'template_a141avo',
                form.current,
                'sZ6V2W8pcEL1eLz4b'
            );
            setOpen(true);
            form.current.reset();
        } catch (error) {
            setError('Failed to send email. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Get In Touch</Title>
                <Desc>Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life. I'm always excited to hear about new opportunities and challenges!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>
                        <Email /> Send Me a Message 🚀
                    </ContactTitle>
                    <InputWrapper>
                        <ContactInput 
                            placeholder="Your Email Address" 
                            name="from_email" 
                            type="email"
                            required 
                        />
                        <InputIcon>
                            <Email />
                        </InputIcon>
                    </InputWrapper>
                    <InputWrapper>
                        <ContactInput 
                            placeholder="Your Full Name" 
                            name="from_name" 
                            required 
                        />
                        <InputIcon>
                            <Person />
                        </InputIcon>
                    </InputWrapper>
                    <InputWrapper>
                        <ContactInput 
                            placeholder="Subject / Project Type" 
                            name="subject" 
                            required 
                        />
                        <InputIcon>
                            <Subject />
                        </InputIcon>
                    </InputWrapper>
                    <InputWrapper>
                        <ContactInputMessage 
                            placeholder="Tell me about your project, requirements, or just say hello! I'd love to hear from you." 
                            rows="5" 
                            name="message" 
                            required 
                        />
                        <InputIcon>
                            <Message />
                        </InputIcon>
                    </InputWrapper>
                    <ContactButton type="submit" disabled={loading}>
                        <Send />
                        {loading ? 'Sending Message...' : 'Send Message'}
                    </ContactButton>
                </ContactForm>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert 
                        onClose={() => setOpen(false)} 
                        severity="success" 
                        variant="filled"
                        sx={{
                            background: 'linear-gradient(135deg, #10b981, #059669)',
                            borderRadius: '12px',
                            fontWeight: 600
                        }}
                    >
                        🎉 Message sent successfully! I'll get back to you soon.
                    </Alert>
                </Snackbar>
                {error && (
                    <Snackbar
                        open={!!error}
                        autoHideDuration={6000}
                        onClose={() => setError('')}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert 
                            onClose={() => setError('')} 
                            severity="error" 
                            variant="filled"
                            sx={{
                                background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                borderRadius: '12px',
                                fontWeight: 600
                            }}
                        >
                            ❌ {error}
                        </Alert>
                    </Snackbar>
                )}
            </Wrapper>
        </Container>
    );
};

export default Contact;