'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import styles from '../styles/Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('/api/contact', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      alert('เกิดข้อผิดพลาดในการส่งข้อความ');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <p className={styles.sectionLabel}>Contact</p>
      <h2 className={styles.title}>ติดต่อฉัน</h2>
      <p className={styles.subtitle}>สนใจในการเปิดโอกาสทำงานร่วมกันใช่ไหม? ติดต่อมาได้เลยครับ</p>

      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoCard}>
            <h3>Email</h3>
            <p>nattapon.kongcoome@gmail.com</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Phone</h3>
            <p>081-008-3996</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Location</h3>
            <p> Pua,Nan,Thailand 55120</p>
          </div>
          <div className={styles.infoCard}>
            <h3>Social</h3>
            <p>GitHub: nattaponkc &nbsp;|&nbsp; Line: owen77777l</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {submitted && (
            <div className={styles.successMessage}>
              ขอบคุณที่ติดต่อ จะติดต่อกลับในเร็วๆ นี้ครับ!
            </div>
          )}

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text" id="name" name="name"
                placeholder="ชื่อของคุณ"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email" id="email" name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject</label>
            <input
              type="text" id="subject" name="subject"
              placeholder="หัวข้อของเรื่อง"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message" name="message"
              placeholder="เปิดโอกาสนำเสนอตัวเอง..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Sending...' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
};
