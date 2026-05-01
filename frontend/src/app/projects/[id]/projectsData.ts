// This is a server component that generates static parameters
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

export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

export function getProjectData(id: string) {
  return projectsData[id];
}
