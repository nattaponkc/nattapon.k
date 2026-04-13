import { useState } from 'react';
import styles from '../styles/Certification.module.css';

export const Certification = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Cybersecurity Certification',
      description: 'การอบรม Cybersecurity',
      year: '2025',
      status: 'Verified',
      image: '/images/Certification/Cybersecurity.png',
    },
    {
      title: 'Networking',
      description: 'หลักสูตรเชิ่งลึก Networking',
      year: '2024',
      status: 'Certified',
      image: '/images/Certification/Networking.png',
    },
    {
      title: 'ThaiMooc Python',
      description: 'การอบรมภาษา Python',
      year: '2024',
      status: 'Professional',
      image: '/images/Certification/python.png',
    },
    {
      title: 'Large Language Model',
      description: 'ปัญญาประดิษฐ์ (AI)',
      year: '2025',
      status: 'Certified',
      image: '/images/Certification/LLM.png',
    },
    {
      title: 'Oracle Certification',
      description: 'เรียนรู้การใช้งานฐานข้อมูล Oracle',
      year: '2025',
      status: 'Completed',
      image: '/images/Certification/Oracle.png',
    },
    {
      title: 'English Proficiency',
      description: 'การทดสอบวัดระดับความสามารถทางภาษาอังกฤษ',
      year: '2023',
      status: 'Achievement',
      image: '/images/Certification/English.png',
    },
  ];

  return (
    <section id="certification" className={styles.certification}>
      <p className={styles.sectionLabel}>Certifications</p>
      <h2 className={styles.title}>ใบเกียรติบัตร</h2>
      <div className={styles.grid}>
        {certifications.map((cert, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.imageContainer} onClick={() => setSelectedImage(cert.image)} style={{ cursor: 'pointer' }}>
              <img src={cert.image} alt={cert.title} onError={(e) => {
                e.currentTarget.style.display = 'none';
              }} />
            </div>
            <div className={styles.content}>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <div className={styles.tags}>
                <span className={styles.yearTag}>{cert.year}</span>
                <span className={styles.tag}>{cert.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className={styles.modal} 
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged certification" />
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};
