<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - ณัฐพล ฆ้องคำ</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 2rem 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        nav a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
        }

        nav a:hover {
            opacity: 0.8;
        }

        main {
            margin-top: 80px;
        }

        section {
            padding: 4rem 2rem;
            max-width: auto;
            margin:  auto;
        }

        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 8rem 2rem;
            
            width: 100vw;
            box-sizing: border-box;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            animation: slideDown 0.6s ease-out;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            animation: slideUp 0.6s ease-out 0.2s both;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .btn {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: white;
            color: #667eea;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .btn-primary {
            background: white;
            color: #667eea;
            margin-right: 1rem;
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        section h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #333;
            position: relative;
            padding-bottom: 1rem;
        }

        section h2:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-text p {
            margin-bottom: 1rem;
            line-height: 1.8;
            color: #555;
        }

        .skills-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
        }

        .skill-item {
            background: #f5f5f5;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .skill-item h3 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }

        .skill-bar {
            background: #ddd;
            height: 8px;
            border-radius: 4px;
            overflow: hidden;
            margin-top: 0.5rem;
        }

        .skill-progress {
            background: linear-gradient(90deg, #667eea, #764ba2);
            height: 100%;
            border-radius: 4px;
            transition: width 0.5s ease;
        }

        .skill-progress.progress-100 {
            width: 100%;
        }

        .skill-progress.progress-95 {
            width: 95%;
        }

        .skill-progress.progress-90 {
            width: 90%;
        }

        .skill-progress.progress-85 {
            width: 85%;
        }

        .skill-progress.progress-80 {
            width: 80%;
        }

        .skill-progress.progress-75 {
            width: 75%;
        }

        .skill-progress.progress-70 {
            width: 70%;
        }

        .skill-progress.progress-65 {
            width: 65%;
        }

        .skill-progress.progress-60 {
            width: 60%;
        }

        .skill-progress.progress-55 {
            width: 55%;
        }

        .skill-progress.progress-50 {
            width: 50%;
        }

        .skill-progress.progress-45 {
            width: 45%;
        }

        .skill-progress.progress-40 {
            width: 40%;
        }

        .skill-progress.progress-35 {
            width: 35%;
        }

        .skill-progress.progress-30 {
            width: 30%;
        }

        

        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .portfolio-item {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .portfolio-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .portfolio-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
            position: relative;
            overflow: hidden;
        }

        .portfolio-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .portfolio-image.emoji-only {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .portfolio-content {
            padding: 1.5rem;
        }

        .portfolio-content h3 {
            color: #333;
            margin-bottom: 0.5rem;
        }

        .portfolio-content p {
            color: #666;
            font-size: 0.95rem;
            margin-bottom: 1rem;
        }

        .portfolio-tags {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }

        .tag {
            background: #f0f0f0;
            color: #667eea;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
        }

        .contact-section {
            background: #f9f9f9;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .contact-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
        }

        .contact-icon {
            font-size: 1.5rem;
            color: #667eea;
            min-width: 30px;
        }

        .contact-item h3 {
            color: #333;
            margin-bottom: 0.3rem;
        }

        .contact-item p {
            color: #666;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
        }

        footer p {
            margin-bottom: 0.5rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .social-link {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
            transition: color 0.3s;
        }

        .social-link:hover {
            color: #667eea;
        }

        @media (max-width: 768px) {
            nav ul {
                gap: 1rem;
            }

            .hero h1 {
                font-size: 2rem;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }

            .skills-container {
                grid-template-columns: 1fr;
            }

            section h2 {
                font-size: 2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Header/Navigation -->
    <header>
        <nav>
            <div class="logo">ณัฐพล ฆ้องคำ</div>
            <ul>
                <li><a href="#home">หน้าแรก</a></li>
                <li><a href="#about">เกี่ยวกับฉัน</a></li>
                <li><a href="#portfolio">ผลงาน</a></li>
                <li><a href="#certification">ใบเกียรติบัตร</a></li>
                <li><a href="#contact">ติดต่อ</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section class="hero" id="home">
            <h1>ยินดีต้อนรับสู่ Portfolio ของณัฐพล ฆ้องคำ</h1>
            <p>นักพัฒนาเว็บไซต์ - IT Support - Web Development</p>
            <div>
                <a href="#portfolio" class="btn btn-primary">ดูผลงาน</a>
                <a href="#contact" class="btn btn-secondary">ติดต่อ</a>
            </div>
        </section>

        <!-- About Section -->
        <section id="about">
            <h2>เกี่ยวกับฉัน</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>
                        สวัสดี ฉันชื่อณัฐพล ฆ้องคำ เป็นนักศึกษามหาวิทยาลัยพะเยา สาขาวิชาเทคโนโลยีสารสนเทศ ระดับชั้นปีที่ 4
                    </p>
                    <p>
                        มีประสบการณ์ในการพัฒนาเว็บไซต์, IT Support และ Web Development โดยใช้เทคโนโลยีต่างๆ เช่น PHP, MySQL, HTML, CSS, JavaScript และสามารถแก้ปัญหาด้านเทคนิคอย่างสร้างสรรค์
                    </p>
                    <p>
                        มีทักษะในการบริหารจัดการอารเวอร์ การติดตั้งซอฟต์แวร์ และการดูแลระบบเครือข่ายในสถานประกอบการ มีความสนใจในการพัฒนาตัวเองและการเรียนรู้เทคโนโลยีใหม่
                    </p>
                    <p>
                        นักศึกษาคณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาวิชาเทคโนโลยีสารสนเทศ มหาวิทยาลัยพะเยา GPA: 2.73
                    </p>
                </div>
                <div>
                    <h3>ทักษะหลัก</h3>
                    <div class="skills-container">
                        <div class="skill-item">
                            <h3>ภาษาโปรแกรม</h3>
                            <div style="margin-top: 0.8rem;">
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">PHP</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-100"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">HTML5</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-85"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">CSS</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-85"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">JavaScript</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-85"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">Java</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-50"></div>
                                    </div>
                                </div>
                                <div>
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">C</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <h3>โลบรารี และ เฟรมเวิร์ก</h3>
                            <div style="margin-top: 0.8rem;">
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">Bootstrap</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-80"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">jQuery</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-75"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">Laravel</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-70"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">Angular</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-65"></div>
                                    </div>
                                </div>
                                <div>
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">React</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-70"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="skill-item">
                            <h3>ฐานข้อมูลและเครื่องมือ</h3>
                            <div style="margin-top: 0.8rem;">
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">MySQL</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-80"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">GitHub</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-75"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">VS Code</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-85"></div>
                                    </div>
                                </div>
                                <div style="margin-bottom: 0.8rem;">
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">Figma</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-70"></div>
                                    </div>
                                </div>
                                <div>
                                    <p style="margin-bottom: 0.3rem; font-size: 0.9rem;">Power BI</p>
                                    <div class="skill-bar">
                                        <div class="skill-progress progress-60"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio">
            <h2>ผลงานของฉัน</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image">🌐</div>
                    <div class="portfolio-content">
                        <h3>เว็บไซต์บริษัท</h3>
                        <p>สร้างเว็บไซต์บริษัท พร้อมระบบจัดการเนื้อหา</p>
                        <div class="portfolio-tags">
                            <span class="tag">HTML</span>
                            <span class="tag">CSS</span>
                            <span class="tag">PHP</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image">🛒</div>
                    <div class="portfolio-content">
                        <h3>ระบบ E-Commerce</h3>
                        <p>พัฒนาระบบขายของออนไลน์พร้อมการชำระเงิน</p>
                        <div class="portfolio-tags">
                            <span class="tag">PHP</span>
                            <span class="tag">MySQL</span>
                            <span class="tag">JavaScript</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image">📊</div>
                    <div class="portfolio-content">
                        <h3>ระบบแอนะลิติกส์</h3>
                        <p>สร้างแดชบอร์ดแสดงข้อมูลและสถิติ</p>
                        <div class="portfolio-tags">
                            <span class="tag">React</span>
                            <span class="tag">Node.js</span>
                            <span class="tag">MySQL</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image">📱</div>
                    <div class="portfolio-content">
                        <h3>Application Mobile Responsive</h3>
                        <p>แอปพลิเคชันที่ทำงานได้ดีบนอุปกรณ์ต่าง ๆ</p>
                        <div class="portfolio-tags">
                            <span class="tag">HTML5</span>
                            <span class="tag">CSS3</span>
                            <span class="tag">JavaScript</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image">🔐</div>
                    <div class="portfolio-content">
                        <h3>ระบบจัดการสมาชิก</h3>
                        <p>ระบบเข้าสู่ระบบและจัดการสิทธิ์การเข้าถึง</p>
                        <div class="portfolio-tags">
                            <span class="tag">PHP</span>
                            <span class="tag">MySQL</span>
                            <span class="tag">Session</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image">⚡</div>
                    <div class="portfolio-content">
                        <h3>Optimization และ Performance</h3>
                        <p>เพิ่มประสิทธิภาพของเว็บไซต์และความเร็วการโหลด</p>
                        <div class="portfolio-tags">
                            <span class="tag">Performance</span>
                            <span class="tag">SEO</span>
                            <span class="tag">Caching</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Certification Section -->
        <section id="certification">
            <h2>ใบเกียรติบัตร</h2>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <div class="portfolio-image emoji-only">
                        <img src="Certification/Cybersecurity.png" alt="Cybersecurity Certification" onerror="this.style.display='none'">                       
                    </div>
                    <div class="portfolio-content">
                        <h3>Cybersecurity Certification</h3>
                        <p>การอบรม Cybersecurity</p>
                        <div class="portfolio-tags">
                            <span class="tag">2024</span>
                            <span class="tag">Verified</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image emoji-only">
                        <img src="Certification/Networking.png" alt="Networking" onerror="this.style.display='none'">
                    </div>
                    <div class="portfolio-content">
                        <h3>Networking</h3>
                        <p>หลักสูตรเชิ่งลึก Networking</p>
                        <div class="portfolio-tags">
                            <span class="tag">2023</span>
                            <span class="tag">Certified</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image emoji-only">
                        <img src="Certification/python.png" alt="Python" onerror="this.style.display='none'">                  
                    </div>
                    <div class="portfolio-content">
                        <h3>Python</h3>
                        <p>การอบรมภาษา Python</p>
                        <div class="portfolio-tags">
                            <span class="tag">2023</span>
                            <span class="tag">Professional</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image emoji-only">
                        <img src="Certification/LLM.png" alt="Large Language Model" onerror="this.style.display='none'">               
                    </div>
                    <div class="portfolio-content">
                        <h3>Large Language Model</h3>
                        <p>ปัญญาประดิษฐ์ (AI)</p>
                        <div class="portfolio-tags">
                            <span class="tag">2022</span>
                            <span class="tag">Certified</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image emoji-only">
                        <img src="Certification/Oracle.png" alt="Oracle" onerror="this.style.display='none'">
                    </div>
                    <div class="portfolio-content">
                        <h3>Oracle</h3>
                        <p>เรียนรู้การใช้งาน Oracle</p>
                        <div class="portfolio-tags">
                            <span class="tag">2022</span>
                            <span class="tag">Completed</span>
                        </div>
                    </div>
                </div>

                <div class="portfolio-item">
                    <div class="portfolio-image emoji-only">
                        <img src="Certification/English.png" alt="English" onerror="this.style.display='none'">
                    </div>
                    <div class="portfolio-content">
                        <h3>English</h3>
                        <p>การแก้ปัญหาด้านโปรแกรมมิ่งอย่างสร้างสรรค์</p>
                        <div class="portfolio-tags">
                            <span class="tag">2021</span>
                            <span class="tag">Achievement</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="contact-section" id="contact">
            <h2>ติดต่อฉัน</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <div class="contact-icon">📧</div>
                        <div>
                            <h3>อีเมล</h3>
                            <p>nattapon.kongcoome@gmail.com</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📞</div>
                        <div>
                            <h3>เบอร์โทรศัพท์</h3>
                            <p>082-263-8974</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">📍</div>
                        <div>
                            <h3>ที่อยู่</h3>
                            <p>97 หมู่ 4 ต.แบ่ง อ.บ้านไร่ จ.แพร่ 55120</p>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon">🔗</div>
                        <div>
                            <h3>โซเชียลมีเดีย</h3>
                            <p>GitHub: nattaponkc | Discord: owen777771</p>
                        </div>
                    </div>
                </div>

                <form>
                    <div class="form-group">
                        <label for="name">ชื่อ</label>
                        <input type="text" id="name" name="name" autocomplete="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">อีเมล</label>
                        <input type="email" id="email" name="email" autocomplete="email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">หัวข้อ</label>
                        <input type="text" id="subject" name="subject" autocomplete="off" required>
                    </div>
                    <div class="form-group">
                        <label for="message">ข้อความ</label>
                        <textarea id="message" name="message" autocomplete="off" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">ส่งข้อความ</button>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">💼</a>
            <a href="#" class="social-link">🐙</a>
            <a href="#" class="social-link">📧</a>
        </div>
        <p>&copy; 2025 ณัฐพล ข้องคำ Portfolio. All rights reserved.</p>
        <p>พัฒนาด้วย ❤️ และ Code</p>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Skill progress animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Get the computed width from CSS class
                    const computedStyle = window.getComputedStyle(entry.target);
                    const width = computedStyle.width;
                    entry.target.style.width = width;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-progress').forEach(el => {
            observer.observe(el);
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('ขอบคุณที่ติดต่อ จะติดต่อกลับในเร็ววันนี้');
            this.reset();
        });
    </script>
</body>
</html>
