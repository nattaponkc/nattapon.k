'use client';

import Link from 'next/link';
import styles from '../styles/Portfolio.module.css';

export const Portfolio = () => {
  const projects = [
    {
      id: 'web-coffee',
      image: '/images/imgPortfolio/Add More Cafe\' & Sbay Home Stay.png',
      title: 'Café & Homestay Management System',
      description: 'เว็บไซต์แอปพลิเคชันระบบบริหารจัดการร้านคาเฟ่และจองห้องพัก',
      tags: ['Php', 'MySQL', 'Bootstrap', 'CSS'],
    },
    {
      id: 'research-management',
      image: '/images/imgPortfolio/Research publication.png',
      title: 'Research Publication Management System',
      description: 'ระบบบริหารจัดการข้อมูลผลงานวิจัยสำหรับอาจารย์ในมหาวิทยาลัย',
      tags: ['Php', 'MySQL', 'Bootstrap', 'CSS'],
    },
    {
      id: 'web-board',
      image: '/images/imgPortfolio/webboard.png',
      title: 'Web-board',
      description: 'เว็บบอร์ดสำหรับการแลกเปลี่ยนความคิดเห็นและการสนทนา',
      tags: ['Php', 'MySQL', 'Bootstrap', 'CSS'],
    },
    {
      id: 'mobile-app',
      icon: '04',
      title: 'Application Mobile Responsive',
      description: 'แอปพลิเคชันที่ทำงานได้ดีบนอุปกรณ์ต่าง ๆ',
      tags: ['React Native', 'TypeScript', 'CSS3'],
    },
    {
      id: 'auth-system',
      icon: '05',
      title: 'ระบบจัดการสมาชิก',
      description: 'ระบบเข้าสู่ระบบและจัดการสิทธิ์การเข้าถึง',
      tags: ['TypeScript', 'Node.js', 'JWT', 'MongoDB'],
    },
    {
      id: 'optimization',
      icon: '06',
      title: 'Optimization และ Performance',
      description: 'เพิ่มประสิทธิภาพของเว็บไซต์และความเร็วการโหลด',
      tags: ['Performance', 'SEO', 'Caching'],
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <p className={styles.sectionLabel}>Projects</p>
      <h2 className={styles.title}>ผลงานของฉัน</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`} className={styles.itemLink}>
            <div className={styles.item}>
              <div className={styles.imageWrap}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <span className={styles.iconBig}>{project.icon}</span>
                )}
              </div>
              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.viewLink}>View Details →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
