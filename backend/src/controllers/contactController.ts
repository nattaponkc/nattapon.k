import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body as ContactFormData;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // TODO: Configure your email service
    // For now, just log the message
    console.log('Contact message received:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date(),
    });

    // Optional: Send email using nodemailer
    // const transporter = nodemailer.createTransport({
    //   service: process.env.EMAIL_SERVICE,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    // const mailOptions = {
    //   from: email,
    //   to: process.env.ADMIN_EMAIL,
    //   subject: `New Portfolio Contact: ${subject}`,
    //   html: `
    //     <h2>New Contact Message</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // };

    // await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Contact message received successfully',
    });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};
