import emailjs from '@emailjs/browser';

// EmailJS configuration
const PUBLIC_KEY = 'z8FCClWdOHvPREbCo';
const SERVICE_ID = 'service_ytluc74';
const TEMPLATE_ID = 'template_w2a85bh';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface EmailData extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  message: string;
}

export const sendEmail = async (emailData: EmailData): Promise<void> => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailData
    );
    
    if (response.status !== 200) {
      throw new Error(`Failed to send email: ${response.text}`);
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
};