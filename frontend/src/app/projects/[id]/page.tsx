'use client';

import Link from 'next/link';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import styles from '../../../styles/ProjectDetail.module.css';

const projectsData: Record<string, any> = {
  'web-coffee': {
    id: 'web-coffee',
    icon: '01',
    title: 'เว็บไซต์ Café & Hotel Management',
    subtitle: 'ระบบบริหารจัดการร้านคาเฟ่และจองห้องพักแบบครบวงจร',
    tags: ['Php', 'MySQL', 'Bootstrap', 'CSS'],
    year: '2023',
    role: 'Full Stack Developer',
    status: 'Completed',
    overview: 'พัฒนาเว็บแอปพลิเคชันสำหรับบริหารจัดการร้านคาเฟ่และโฮมสเตย์ ครอบคลุมระบบจัดการสมาชิก การจองห้องพัก เมนูคาเฟ่ และการชำระเงิน ออกแบบมาให้ใช้งานง่ายทั้งฝั่งผู้ดูแลระบบและผู้ใช้ทั่วไป',
    features: [
      'ระบบสมาชิกและการเข้าสู่ระบบแยก Admin / Staff / Member',
      'จัดการห้องพักและสถานะการจองแบบเรียลไทม์',
      'สั่งอาหารและเครื่องดื่มจากเมนูคาเฟ่',
      'ระบบการชำระเงินและออกใบเสร็จ',
      'แดชบอร์ดรายงานยอดขายสำหรับ Admin',
      'ค้นหาและกรองห้องพักตามประเภทและราคา',
      'ระบบรีวิวและให้คะแนนสำหรับลูกค้า',
      'แจ้งเตือนผ่านอีเมลสำหรับการจองและการสั่งซื้อ',
    ],
    adminImages: Array.from({ length: 38 }, (_, i) => `/images/web-cafe/admin/A${i}.png`),
    staffImages: Array.from({ length: 9 }, (_, i) => `/images/web-cafe/staff/S${i}.png`),
    memberImages: Array.from({ length: 30 }, (_, i) => `/images/web-cafe/member/M${i}.png`),
  },
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];
  const [activeTab, setActiveTab] = useState<'admin' | 'staff' | 'member'>('admin');
  const [lightbox, setLightbox] = useState<string | null>(null);

  if (!project) return notFound();

  const images = activeTab === 'admin' ? project.adminImages : activeTab === 'staff' ? project.staffImages : project.memberImages;
  const heroImage = project.memberImages[1];

  return (
    <div className={styles.page}>
      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose} onClick={() => setLightbox(null)}>✕</button>
          <img src={lightbox} alt="screenshot" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <div className={styles.topBar}>
        <Link href="/" className={styles.backBtn}>← Home</Link>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <span className={styles.iconNum}>{project.icon}</span>
        <div>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.tags}>
            {project.tags.map((t: string, i: number) => <span key={i}>{t}</span>)}
          </div>
        </div>
      </div>

      {/* Hero preview */}
      <div className={styles.heroImage} onClick={() => setLightbox(heroImage)}>
        <img src={heroImage} alt="preview" />
        <div className={styles.heroOverlay}>Click to enlarge</div>
      </div>

      {/* Meta row */}
      <div className={styles.metaRow}>
        <div className={styles.metaItem}><span className={styles.metaLabel}>Role</span><span>{project.role}</span></div>
        <div className={styles.metaItem}><span className={styles.metaLabel}>Year</span><span>{project.year}</span></div>
        <div className={styles.metaItem}><span className={styles.metaLabel}>Status</span><span className={styles.statusBadge}>{project.status}</span></div>
      </div>

      {/* Overview */}
      <div className={styles.section}>
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </div>

      {/* Features */}
      <div className={styles.section}>
        <h2>Core Features</h2>
        <ul className={styles.featureList}>
          {project.features.map((f: string, i: number) => (
            <li key={i}><span className={styles.arrow}>→</span>{f}</li>
          ))}
        </ul>
      </div>

      {/* Screenshots */}
      <div className={styles.section}>
        <div className={styles.tabsHeader}>
          <h2>Screenshots</h2>
          <div className={styles.tabs}>
            <button className={`${styles.tab} ${activeTab === 'admin' ? styles.active : ''}`} onClick={() => setActiveTab('admin')}>
              Admin (เจ้าของร้าน) <span className={styles.count}>{project.adminImages.length}</span>
            </button>
            <button className={`${styles.tab} ${activeTab === 'staff' ? styles.active : ''}`} onClick={() => setActiveTab('staff')}>
              Staff (พนักงาน) <span className={styles.count}>{project.staffImages.length}</span>
            </button>
            <button className={`${styles.tab} ${activeTab === 'member' ? styles.active : ''}`} onClick={() => setActiveTab('member')}>
              Member (ลูกค้า) <span className={styles.count}>{project.memberImages.length}</span>
            </button>
          </div>
        </div>

        <div className={styles.screenshotGrid}>
          {images.map((src: string, i: number) => (
            <div key={i} className={styles.screenshotItem} onClick={() => setLightbox(src)}>
              <img src={src} alt={`screenshot ${i + 1}`} loading="lazy" onError={(e) => { (e.currentTarget.parentElement as HTMLElement).style.display = 'none'; }} />
              <div className={styles.screenshotOverlay}>
                <span>⤢</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
