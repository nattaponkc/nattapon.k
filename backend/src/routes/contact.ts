import { Router } from 'express';
import { sendContactEmail } from '../controllers/contactController';

export const contactRouter = Router();

contactRouter.post('/contact', sendContactEmail);
