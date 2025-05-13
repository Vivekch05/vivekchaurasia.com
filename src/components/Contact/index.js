import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { Send, Email, Person, Subject, Message } from '@mui/icons-material';

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

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0;
    background: linear-gradient(180deg, rgba(132, 59, 206, 0.05) 0%, rgba(132, 59, 206, 0) 100%);
    
    @media (max-width: 960px) {
        padding: 20px 0;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 0px 0px 80px 0px;
    gap: 24px;
    
    @media (max-width: 960px) {
        flex-direction: column;
        gap: 16px;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 700;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    background: linear-gradient(120deg, ${({ theme }) => theme.text_primary}, ${({ theme }) => theme.primary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${fadeIn} 0.8s ease-out;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background: linear-gradient(90deg, ${({ theme }) => theme.primary}, transparent);
        border-radius: 2px;
    }
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
        
        &::after {
            width: 60px;
            height: 3px;
        }
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 20px;
    animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
        padding: 0 20px;
    }
`;

const ContactForm = styled.form`
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.card};
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    margin-top: 28px;
    gap: 16px;
    animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
    border: 1px solid ${({ theme }) => theme.primary + 20};
    backdrop-filter: blur(10px);
    
    @media (max-width: 768px) {
        padding: 24px;
        gap: 12px;
    }
`;

const ContactTitle = styled.div`
    font-size: 24px;
    margin-bottom: 6px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    display: flex;
    align-items: center;
    gap: 8px;
    
    svg {
        color: ${({ theme }) => theme.primary};
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
    color: ${({ theme }) => theme.text_secondary};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContactInput = styled.input`
    width: 100%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px 12px 48px;
    transition: all 0.3s ease;
    
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + 20};
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.text_secondary};
    }
`;

const ContactInputMessage = styled.textarea`
    width: 100%;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.text_secondary};
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
    border-radius: 12px;
    padding: 12px 16px 12px 48px;
    resize: vertical;
    min-height: 120px;
    transition: all 0.3s ease;
    
    &:focus {
        border: 1px solid ${({ theme }) => theme.primary};
        box-shadow: 0 0 0 2px ${({ theme }) => theme.primary + 20};
    }
    
    &::placeholder {
        color: ${({ theme }) => theme.text_secondary};
    }
`;

const ContactButton = styled.button`
    width: 100%;
    text-decoration: none;
    text-align: center;
    background: linear-gradient(225deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primary + 99} 100%);
    padding: 13px 16px;
    margin-top: 2px;
    border-radius: 12px;
    border: none;
    color: ${({ theme }) => theme.text_primary};
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
        transform: translateY(-2px);
        box-shadow: 0 6px 16px ${({ theme }) => theme.primary + 40};
        
        &::before {
            left: 100%;
        }
    }
    
    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
        transform: none;
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
                <Title>Contact</Title>
                <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
                <ContactForm ref={form} onSubmit={handleSubmit}>
                    <ContactTitle>
                        <Email /> Email Me 🚀
                    </ContactTitle>
                    <InputWrapper>
                        <InputIcon>
                            <Email />
                        </InputIcon>
                        <ContactInput 
                            placeholder="Your Email" 
                            name="from_email" 
                            type="email"
                            required 
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputIcon>
                            <Person />
                        </InputIcon>
                        <ContactInput 
                            placeholder="Your Name" 
                            name="from_name" 
                            required 
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputIcon>
                            <Subject />
                        </InputIcon>
                        <ContactInput 
                            placeholder="Subject" 
                            name="subject" 
                            required 
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <InputIcon>
                            <Message />
                        </InputIcon>
                        <ContactInputMessage 
                            placeholder="Message" 
                            rows="4" 
                            name="message" 
                            required 
                        />
                    </InputWrapper>
                    <ContactButton type="submit" disabled={loading}>
                        <Send />
                        {loading ? 'Sending...' : 'Send Message'}
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
                    >
                        Email sent successfully!
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
                        >
                            {error}
                        </Alert>
                    </Snackbar>
                )}
            </Wrapper>
        </Container>
    );
};

export default Contact;