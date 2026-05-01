'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ProjectAnimatedBackground } from '../../../components/ProjectAnimatedBackground';
import styles from '../../../styles/ProjectDetail.module.css';

interface ProjectData {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  role: string;
  status: string;
  overview: string;
  features: string[];
  technology: {
    backend: string[];
    frontend: string[];
    apis?: string[];
  };
  adminImages: string[];
  staffImages: string[];
  memberImages: string[];
}

export default function ClientProjectDetail({ project }: { project: ProjectData }) {
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
    <div className={styles.projectDetailContainer}>
      <ProjectAnimatedBackground />
      
      <div className={styles.projectDetailContent}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <Link href="/projects" className={styles.backLink}>
            ← Back to Projects
          </Link>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.meta}>
            <span className={styles.year}>{project.year}</span>
            <span className={styles.role}>{project.role}</span>
            <span className={`${styles.status} ${styles[project.status.toLowerCase()]}`}>
              {project.status}
            </span>
          </div>
        </div>

        {/* Hero Image Section */}
        {heroImage && (
          <div className={styles.heroSection}>
            <img 
              src={heroImage} 
              alt="Hero" 
              className={styles.heroImage}
              onClick={() => setShowHeroLightbox(true)}
            />
            {showHeroLightbox && (
              <div className={styles.lightbox} onClick={closeHeroLightbox}>
                <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                  <img src={heroImage} alt="Hero" className={styles.lightboxImage} />
                  <button className={styles.closeButton} onClick={closeHeroLightbox}>×</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Overview Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Project Overview</h2>
          <p className={styles.overview}>{project.overview}</p>
        </div>

        {/* Features Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <ul className={styles.featuresList}>
            {project.features.map((feature, idx) => (
              <li key={idx} className={styles.featureItem}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Technology Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <div className={styles.techGrid}>
            <div className={styles.techCategory}>
              <h3>Backend</h3>
              <ul>
                {project.technology.backend.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className={styles.techCategory}>
              <h3>Frontend</h3>
              <ul>
                {project.technology.frontend.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>
            {project.technology.apis && (
              <div className={styles.techCategory}>
                <h3>APIs</h3>
                <ul>
                  {project.technology.apis.map((api, idx) => (
                    <li key={idx}>{api}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Tags Section */}
        <div className={styles.section}>
          <div className={styles.tags}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Image Gallery Section */}
        {images.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Gallery</h2>
            
            {/* Tab Navigation */}
            {availableTabs.length > 1 && (
              <div className={styles.tabNavigation}>
                {availableTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
                    onClick={() => {
                      setActiveTab(tab);
                      setLightboxIndex(null);
                    }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            )}

            {/* Main Lightbox */}
            {lightboxIndex !== null && (
              <div className={styles.lightbox} onClick={closeLightbox}>
                <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                  <img src={images[lightboxIndex]} alt={`Image ${lightboxIndex}`} className={styles.lightboxImage} />
                  <button className={styles.prevButton} onClick={handlePrevLightbox}>‹</button>
                  <button className={styles.nextButton} onClick={handleNextLightbox}>›</button>
                  <button className={styles.closeButton} onClick={closeLightbox}>×</button>
                </div>
              </div>
            )}

            {/* Thumbnails */}
            <div 
              className={styles.thumbnailsContainer}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              ref={thumbnailsRef}
            >
              {images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Thumbnail ${idx}`}
                  className={`${styles.thumbnail} ${lightboxIndex === idx ? styles.active : ''}`}
                  onClick={() => setLightboxIndex(idx)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
