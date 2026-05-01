import styles from '../styles/About.module.css';

export const About = () => {
  const getSkillLevel = (percentage: number) => {
    if (percentage >= 80) return 'Advanced';
    if (percentage >= 60) return 'Intermediate';
    if (percentage >= 40) return 'Familiar';
    if (percentage >= 20) return 'Basic';
    return 'Beginner';
  };

  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'HTML/CSS', percentage: 90 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'TypeScript', percentage: 70 },
        { name: 'PHP', percentage: 85 },
        { name: 'Python', percentage: 50 },
        
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', percentage: 70 },
        { name: 'Next.js', percentage: 70 },
        { name: 'Bootstrap', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 80 },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', percentage: 70 },
        { name: 'Express.js', percentage: 70 },
        { name: 'PHP (PDO)', percentage: 85 },
        { name: 'RESTful API', percentage: 85 },
      ],
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', percentage: 85 },
      ],
    },
    {
      category: 'Tools & DevOps',
      items: [
        { name: 'Git / GitHub', percentage: 85 },
        { name: 'Docker', percentage: 70 },
        { name: 'Figma', percentage: 70 },
        { name: 'Canva', percentage: 70 },
      ],
    },
    {
      category: 'Integration & APIs',
      items: [
        { name: 'OAuth2 (Azure AD)', percentage: 80 },
        { name: 'SerpAPI', percentage: 80 },
        { name: 'Google Scholar API', percentage: 80 },
        { name: 'Chart.js', percentage: 85 },
      ],
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <p className={styles.sectionLabel}>About Me</p>
      <h2 className={styles.title}>
        เกี่ยวกับฉัน
      </h2>

      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            สวัสดี ครับผมชื่อณัฐพล ฆ้องคำ สำเร็จการศึกษาระดับปริญญาตรี สาขาวิชาเทคโนโลยีสารสนเทศ จากมหาวิทยาลัยพะเยา
          </p>
          <p>
            มีประสบการณ์ในการพัฒนาเว็บไซต์และระบบ Web Application 
             รวมถึงงานด้าน IT Support โดยใช้เทคโนโลยีสมัยใหม่ เช่น TypeScript, React, Next.js, Node.js และ Express
          </p>
          <p>
            มีทักษะในการบริหารจัดการเซิร์ฟเวอร์ การติดตั้งซอฟต์แวร์
            และการดูแลระบบเครือข่ายในสถานประกอบการ
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>University</h4>
              <p>University of Phayao</p>
            </div>
            <div className={styles.infoCard}>
              <h4>GPA</h4>
              <p>2.73</p>
            </div>
            <div className={styles.infoCard}>
              <h4>Major</h4>
              <p>Information Technology</p>
            </div>
            <div className={styles.infoCard}>
              <h4>Status</h4>
              <p>Graduated</p>
            </div>
          </div>
        </div>

        <div>
          <p className={styles.skillsTitle}>Tech Stack</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginTop: '20px' }}>
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(163, 230, 53, 0.25)',
                  borderRadius: '12px',
                  padding: '14px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(163, 230, 53, 0.6)';
                  e.currentTarget.style.background = 'rgba(163, 230, 53, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(163, 230, 53, 0.25)';
                  e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
                }}
              >
                <h5 style={{ fontSize: '12px', fontWeight: '700', color: '#a3e635', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {skillGroup.category}
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {skillGroup.items.map((skill, idx) => (
                    <div
                      key={idx}
                      style={{ position: 'relative', display: 'inline-block' }}
                    >
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          background: 'rgba(163, 230, 53, 0.12)',
                          color: '#a3e635',
                          padding: '5px 10px',
                          borderRadius: '5px',
                          border: '1px solid rgba(163, 230, 53, 0.35)',
                          whiteSpace: 'nowrap',
                          transition: 'all 0.2s ease',
                          cursor: 'default',
                          display: 'inline-block',
                        }}
                        className="skill-badge"
                        onMouseEnter={(e) => {
                          const tooltip = e.currentTarget.nextElementSibling;
                          if (tooltip && tooltip instanceof HTMLElement) (tooltip as HTMLElement).style.display = 'block';
                        }}
                        onMouseLeave={(e) => {
                          const tooltip = e.currentTarget.nextElementSibling;
                          if (tooltip && tooltip instanceof HTMLElement) (tooltip as HTMLElement).style.display = 'none';
                        }}
                      >
                        {skill.name}
                      </span>
                      <div
                        style={{
                          display: 'none',
                          position: 'absolute',
                          bottom: '105%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: 'rgba(0, 0, 0, 0.9)',
                          border: '1px solid rgba(163, 230, 53, 0.4)',
                          borderRadius: '6px',
                          padding: '8px 12px',
                          whiteSpace: 'nowrap',
                          zIndex: 1000,
                          minWidth: '140px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.display = 'block';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      >
                        <div style={{ fontSize: '11px', color: '#a3e635', marginBottom: '5px', fontWeight: '600' }}>
                           {getSkillLevel(skill.percentage)}
                        </div>
                        <div style={{ width: '130px', height: '3px', background: 'rgba(163, 230, 53, 0.2)', borderRadius: '2px', overflow: 'hidden' }}>
                          <div
                            style={{
                              height: '100%',
                              width: `${skill.percentage}%`,
                              background: 'linear-gradient(90deg, #a3e635 0%, #84cc16 100%)',
                              transition: 'width 0.3s ease',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

