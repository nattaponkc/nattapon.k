'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { notFound } from 'next/navigation';
import { ProjectAnimatedBackground } from '../../../components/ProjectAnimatedBackground';
import styles from '../../../styles/ProjectDetail.module.css';

const projectsData: Record<string, any> = {
  'web-coffee': {
    id: 'web-coffee',
    icon: '01',
    title: 'Café & Homestay Management System',
    subtitle: 'ระบบบริหารจัดการร้านคาเฟ่และจองห้องพัก',
    tags: ['Php', 'MySQL', 'Bootstrap', 'CSS'],
    year: '2025',
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
    technology: {
      backend: ['PHP 7.4+', 'MySQL', 'PDO Database'],
      frontend: ['Bootstrap 5', 'Chart.js', 'JavaScript ES6+', 'SweetAlert2'],
      apis: ['Email Notification API', 'Payment Gateway Integration'],
    },
    adminImages: Array.from({ length: 38 }, (_, i) => `/images/web-cafe/admin/A${i}.png`),
    staffImages: Array.from({ length: 9 }, (_, i) => `/images/web-cafe/staff/S${i}.png`),
    memberImages: Array.from({ length: 30 }, (_, i) => `/images/web-cafe/member/M${i}.png`),
  },
  'research-management': {
    id: 'research-management',
    icon: '02',
    title: 'Research Publication Management System',
    subtitle: 'สำหรับมหาวิทยาลัยพะเยา - บริหารผลงานวิจัยและสิ่งพิมพ์',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'Chart.js', 'OAuth2', 'SerpAPI'],
    year: '2026',
    role: 'Full Stack Developer (Frontend & Backend)',
    status: 'Completed',
    overview: 'ระบบบริหารจัดการข้อมูลผลงานวิจัยและสิ่งพิมพ์ของมหาวิทยาลัยพะเยา รองรับการดึงข้อมูลอัตโนมัติจาก Google Scholar ผ่าน SerpAPI พร้อมแสดงสถิติการวิจัยแบบ Real-time สำหรับบุคลากรและหน่วยงานภายในมหาวิทยาลัย',
    features: [
      'Microsoft 365 OAuth2 Login (Azure AD)',
      'Google Scholar API Integration - ดึงข้อมูลผลงานวิจัยและสิ่งพิมพ์',
      'SerpAPI Citation Analysis - วิเคราะห์การอ้างอิงและ H-index',
      'Role-Based Access Control (Admin, Researcher, Department Head, Guest)',
      'Dashboard Analytics - สถิติผลงาน กราฟ H-index สัดส่วนผู้เขียน',
      'Permission Management - ตั้งค่าสิทธิ์ (read/create/update/delete/export)',
      'Export Report - ส่งออกรายงานเป็น Excel, PDF, CSV',
      'Duplicate Detection - ตรวจสอบข้อมูลซ้ำและ Data Validation',
      'API Usage Monitoring - บันทึกและติดตามการใช้ SerpAPI Quota',
      'Research Tracking - ติดตามผลงานตามปี สาขา และสถานะ',
    ],
    technology: {
      backend: ['PHP 7.4+', 'MySQL', 'Microsoft OAuth2', 'cURL for API'],
      frontend: ['Bootstrap 5', 'Chart.js', 'JavaScript ES6+'],
      apis: ['Google Scholar API', 'SerpAPI (google_scholar_author engine)', 'Microsoft Graph API'],
    },
    adminImages: Array.from({ length: 55 }, (_, i) => `/images/web-Research/P${String(i + 1).padStart(2, '0')}.png`),
    staffImages: Array.from({ length: 0 }, (_, i) => `/images/web-Research/P${String(i + 1).padStart(2, '0')}.png`),
    memberImages: Array.from({ length: 0 }, (_, i) => `/images/web-Research/P${String(i + 1).padStart(2, '0')}.png`),
  },
  'web-board': {
    id: 'web-board',
    icon: '03',
    title: 'Web-board Community Forum',
    subtitle: 'แพลตฟอร์มแลกเปลี่ยนความคิดเห็นและการสนทนา',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    year: '2019',
    role: 'Full Stack Developer',
    status: 'Completed',
    overview: 'ระบบจัดการเว็บบอร์ดสำหรับการสนทนาและแลกเปลี่ยนความคิดเห็นระหว่างสมาชิก รองรับระบบสมาชิกแยกประเภท (Admin, User) พร้อมฟีเจอร์การสร้างและการแสดงความเห็น',
    features: [
      'ระบบสมาชิก - ลงทะเบียนและเข้าสู่ระบบ',
      'Role-Based System - แยกสิทธิ์ผู้ดูแลระบบและผู้ใช้ทั่วไป',
      'สร้างกระทู้ - โพสต์ความคิดเห็นและสนทนา',
      'อ่านกระทู้และการสนทนา - ดูรายละเอียดของแต่ละกระทู้',
      'ระบบความเห็น - แสดงความเห็นและตอบกลับในแต่ละกระทู้',
      'Management Panel - จัดการสมาชิก กระทู้ และความเห็น',
      'User-Friendly Interface - อินเตอร์เฟซที่สะดวกสำหรับการใช้งาน',
    ],
    technology: {
      backend: ['PHP 5.6+', 'MySQL'],
      frontend: ['Bootstrap 4', 'JavaScript', 'CSS3'],
    },
    adminImages: ['/images/web-board/admin/B01.png', '/images/web-board/admin/B02.png', '/images/web-board/admin/B03.png', '/images/web-board/admin/B04.png', '/images/web-board/admin/B05.png', '/images/web-board/admin/B06.png', '/images/web-board/admin/B07.png', '/images/web-board/admin/B08.png'],
    staffImages: [],
    memberImages: ['/images/web-board/user/U01.png', '/images/web-board/user/U02.png', '/images/web-board/user/U03.png', '/images/web-board/user/U04.png', '/images/web-board/user/U05.png'],
  },
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id];
  
  if (!project) return notFound();

  // Determine available tabs
  const availableTabs = [
    project.adminImages?.length > 0 && 'admin',
    project.staffImages?.length > 0 && 'staff',
    project.memberImages?.length > 0 && 'member',
  ].filter(Boolean) as ('admin' | 'staff' | 'member')[];

  const [activeTab, setActiveTab] = useState<'admin' | 'staff' | 'member'>(availableTabs[0] || 'admin');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showHeroLightbox, setShowHeroLightbox] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const images: string[] = activeTab === 'admin' ? project.adminImages : activeTab === 'staff' ? project.staffImages : project.memberImages;
  
  // Handle lightbox navigation
  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const closeHeroLightbox = () => setShowHeroLightbox(false);

  // Drag to scroll thumbnail strip
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (thumbnailsRef.current?.offsetLeft || 0));
    setScrollLeft(thumbnailsRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !thumbnailsRef.current) return;
    const x = e.pageX - (thumbnailsRef.current?.offsetLeft || 0);
    const walk = x - startX;
    const newScrollLeft = scrollLeft - walk;
    // Constrain scroll value
    thumbnailsRef.current.scrollLeft = Math.max(0, Math.min(newScrollLeft, thumbnailsRef.current.scrollWidth - thumbnailsRef.current.clientWidth));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Auto-scroll thumbnail to keep active thumbnail in view
  useEffect(() => {
    if (lightboxIndex !== null && thumbnailsRef.current) {
      const thumbnails = thumbnailsRef.current.querySelectorAll(`.${styles.thumbnail}`);
      if (thumbnails[lightboxIndex]) {
        const activeThumbnail = thumbnails[lightboxIndex] as HTMLElement;
        const container = thumbnailsRef.current;
        
        const thumbnailLeft = activeThumbnail.offsetLeft;
        const thumbnailRight = thumbnailLeft + activeThumbnail.offsetWidth;
        const containerLeft = container.scrollLeft;
        const containerRight = containerLeft + container.clientWidth;
        
        // Scroll only if thumbnail is outside the visible area
        if (thumbnailLeft < containerLeft) {
          // Thumbnail is to the left, scroll left
          container.scrollTo({ left: thumbnailLeft, behavior: 'smooth' });
        } else if (thumbnailRight > containerRight) {
          // Thumbnail is to the right, scroll right
          container.scrollTo({ left: thumbnailRight - container.clientWidth, behavior: 'smooth' });
        }
      }
    }
  }, [lightboxIndex, styles.thumbnail]);
  
  // Get hero image from available images
  const heroImage = project.memberImages?.length > 1 ? project.memberImages[1] : project.adminImages?.[0] || project.staffImages?.[0];

  return (
    <div className={styles.page}>
      <ProjectAnimatedBackground />
      
      {/* Hero Lightbox (no navigation) */}
      {showHeroLightbox && (
        <div className={styles.lightbox} onClick={closeHeroLightbox}>
          <button className={styles.lightboxClose} onClick={closeHeroLightbox}>✕</button>
          <img src={heroImage} alt="hero preview" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      {/* Screenshots Lightbox (with navigation) */}
      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.lightboxClose} onClick={closeLightbox}>✕</button>
          <button className={styles.lightboxPrev} onClick={(e) => { e.stopPropagation(); handlePrevLightbox(); }}>
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 4 20 20 34"></polyline>
            </svg>
          </button>
          <img src={images[lightboxIndex]} alt={`screenshot ${lightboxIndex + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className={styles.lightboxNext} onClick={(e) => { e.stopPropagation(); handleNextLightbox(); }}>
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 6 20 20 4 34"></polyline>
            </svg>
          </button>
          
          {/* Thumbnail Strip */}
          <div
            ref={thumbnailsRef}
            className={styles.lightboxThumbnails}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail ${idx + 1}`}
                className={`${styles.thumbnail} ${idx === lightboxIndex ? styles.activeThumbnail : ''}`}
                onClick={() => setLightboxIndex(idx)}
                draggable={false}
              />
            ))}
          </div>
        </div>
      )}

      <div className={styles.topBar}>
        <Link href="/#portfolio" className={styles.backBtn}>← Portfolio</Link>
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
      <div className={styles.heroImage} onClick={() => setShowHeroLightbox(true)}>
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

      {/* Technology Stack - Show only if available */}
      {project.technology && (
        <div className={styles.section}>
          <h2>Tech Stack</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {project.technology.backend && (
              <div style={{ borderLeft: '3px solid #a3e635', paddingLeft: '15px' }}>
                <h4 style={{ color: '#a3e635', marginBottom: '10px' }}>Backend</h4>
                <ul style={{ listStyle: 'none' }}>
                  {project.technology.backend.map((tech: string, i: number) => (
                    <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>- {tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.technology.frontend && (
              <div style={{ borderLeft: '3px solid #06b6d4', paddingLeft: '15px' }}>
                <h4 style={{ color: '#06b6d4', marginBottom: '10px' }}>Frontend</h4>
                <ul style={{ listStyle: 'none' }}>
                  {project.technology.frontend.map((tech: string, i: number) => (
                    <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>- {tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.technology.apis && (
              <div style={{ borderLeft: '3px solid #f59e0b', paddingLeft: '15px' }}>
                <h4 style={{ color: '#f59e0b', marginBottom: '10px' }}>APIs & Integration</h4>
                <ul style={{ listStyle: 'none' }}>
                  {project.technology.apis.map((api: string, i: number) => (
                    <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>- {api}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.technology.database && (
              <div style={{ borderLeft: '3px solid #ec4899', paddingLeft: '15px' }}>
                <h4 style={{ color: '#ec4899', marginBottom: '10px' }}>Database</h4>
                <ul style={{ listStyle: 'none' }}>
                  {project.technology.database.map((db: string, i: number) => (
                    <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>💾 {db}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Screenshots */}
      <div className={styles.section}>
        <div className={styles.tabsHeader}>
          <h2>Screenshots</h2>
          <div className={styles.tabs}>
            {availableTabs.includes('admin') && (
              <button className={`${styles.tab} ${activeTab === 'admin' ? styles.active : ''}`} onClick={() => setActiveTab('admin')}>
                Admin {params.id === 'web-coffee' ? '(เจ้าของร้าน)' : ''} <span className={styles.count}>{project.adminImages.length}</span>
              </button>
            )}
            {availableTabs.includes('staff') && (
              <button className={`${styles.tab} ${activeTab === 'staff' ? styles.active : ''}`} onClick={() => setActiveTab('staff')}>
                Staff (พนักงาน) <span className={styles.count}>{project.staffImages.length}</span>
              </button>
            )}
            {availableTabs.includes('member') && (
              <button className={`${styles.tab} ${activeTab === 'member' ? styles.active : ''}`} onClick={() => setActiveTab('member')}>
                Member (ลูกค้า) <span className={styles.count}>{project.memberImages.length}</span>
              </button>
            )}
          </div>
        </div>

        <div className={styles.screenshotGrid}>
          {images.map((src: string, i: number) => (
            <div key={i} className={styles.screenshotItem} onClick={() => setLightboxIndex(i)}>
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

