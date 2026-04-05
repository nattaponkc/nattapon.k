import styles from '../styles/About.module.css';

export const About = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'TypeScript', percentage: 90 },
        { name: 'JavaScript', percentage: 95 },
        { name: 'Java', percentage: 50 },
        { name: 'C', percentage: 50 },
      ],
    },
    {
      category: 'Frameworks',
      items: [
        { name: 'React / Next.js', percentage: 88 },
        { name: 'Express / Node.js', percentage: 85 },
        { name: 'Vue', percentage: 75 },
        { name: 'Bootstrap / Tailwind', percentage: 85 },
      ],
    },
    {
      category: 'Tools & Database',
      items: [
        { name: 'MySQL / MongoDB', percentage: 80 },
        { name: 'GitHub / Git', percentage: 85 },
        { name: 'Figma', percentage: 70 },
        { name: 'Docker', percentage: 60 },
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
            สวัสดี ครับผมชื่อณัฐพล ฆ้องคำ เป็นนักศึกษามหาวิทยาลัยพะเยา สาขาวิชาเทคโนโลยีสารสนเทศ ระดับชั้นปีที่ 4
          </p>
          <p>
            มีประสบการณ์ในการพัฒนาเว็บไซต์, IT Support และ Web Development
            โดยใช้เทคโนโลยีสมัยใหม่ เช่น TypeScript, React, Next.js, Node.js และ Express
          </p>
          <p>
            มีทักษะในการบริหารจัดการเซิร์ฟเวอร์ การติดตั้งซอฟต์แวร์
            และการดูแลระบบเครือข่ายในสถานประกอบการ
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h4>University</h4>
              <p>มหาวิทยาลัยพะเยา</p>
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
              <h4>Year</h4>
              <p>ปีที่ 4</p>
            </div>
          </div>
        </div>

        <div>
          <p className={styles.skillsTitle}>Skills</p>
          <div className={styles.skills}>
            {skills.map((skillGroup, index) => (
              <div key={index} className={styles.skillGroup}>
                <h4>{skillGroup.category}</h4>
                <div>
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className={styles.skillRow}>
                      <p>{skill.name}</p>
                      <div className={styles.skillBar}>
                        <div
                          className={styles.skillProgress}
                          style={{ width: `${skill.percentage}%` }}
                        />
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
