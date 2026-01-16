import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebook, FaLine } from 'react-icons/fa';

/**
 * =====================================================================
 * FOOTER COMPONENT
 * =====================================================================
 * คอมโพเนนต์สำหรับแสดงส่วนท้าย (Footer) ของเว็บไซต์
 * - แสดงข้อมูลโลโก้, ลิงก์ที่สำคัญ, และช่องทางการติดต่อ
 * - คำนวณปี พ.ศ. ปัจจุบันสำหรับแสดงลิขสิทธิ์
 */
const Footer = () => {
  // คำนวณปีปัจจุบัน
  const currentYear = new Date().getFullYear();
  // แปลงเป็นปีพุทธศักราช
  const buddhistYear = currentYear + 543;

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* === Column 1: Logo & Brand Info === */}
          <div className={styles.footerColumn}>
            <Link href="/" className={styles.footerLogoContainer}>
              <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
              <div className={styles.footerLogoTextContainer}>
                <span className={styles.footerLogoMainText}>งานส่งเสริมสุขภาพแม่และเด็ก</span>
                <span className={styles.footerLogoSubText}>รพช.ทม.เมืองกำแพงเพชร</span>
              </div>
            </Link>
            <p className={styles.footerDescription}>
              มุ่งมั่นให้บริการทางการแพทย์ที่มีคุณภาพ เพื่อสุขภาพที่ดีของคุณแม่และพัฒนาการที่สมบูรณ์ของลูกน้อย
            </p>
            <div className={styles.socialLinks} style={{ marginTop: '1.5rem' }}>
              <a href="https://www.facebook.com/KPPMCH" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook"><FaFacebook size={24} /></a>
              <a href="https://lin.ee/fFCsgz5" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Line"><FaLine size={24} /></a>
            </div>
          </div>

          {/* === Column 2: Contact Info === */}
          <div className={styles.footerColumn}>
            <h3 className={styles.legalLinksTitle}>ติดต่อเรา</h3>
            <ul className={styles.legalLinksList}>
              <li className={styles.contactItem}>35 ซ.2 ถ.ราชดำเนิน 1 ต.ในเมือง <br/>อ.เมือง จ.กำแพงเพชร 62000</li>
              <li className={styles.contactItem}>โทร: 055-716-715</li>
              <li className={styles.contactItem}>(เวลาราชการ 08:30 - 16:30 น.)</li>
            </ul>
          </div>

          {/* === Column 3: Quick Links === */}
          <div className={styles.footerColumn}>
            <h3 className={styles.legalLinksTitle}>ข้อมูลและผลงาน</h3>
            <ul className={styles.legalLinksList}>
              <li><Link href="/TermsOfService" className={styles.footerLink}>ข้อกำหนดการให้บริการ</Link></li>
              <li><Link href="/PrivacyPolicy" className={styles.footerLink}>นโยบายความเป็นส่วนตัว</Link></li>
              {/* <li><a href="https://www.facebook.com/kppmu/posts/pfbid0CRZhheAtjZi6Nkrb5weAtoNXaq2P2f5TCjthqbsZPUtc2zXfMQV2hSmULX2ha9tal?rdid=rz6ieXH8lifpHhUA#" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>ติดตามหญิงตั้งครรภ์ในเขตเทศบาลเมืองกำแพงเพชร</a></li>
              <li><a href="https://www.facebook.com/61571374970083/posts/122121652814712499/?mibextid=wwXIfr&rdid=drmU2UkLIQvQ9WUs#" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>คัดกรองพัฒนาการเด็กปฐมวัย</a></li> */}
            </ul>
          </div>

          {/* === Column 4: Map === */}
          <div className={styles.footerColumn}>
            <h3 className={styles.legalLinksTitle}>แผนที่</h3>
            <div className={styles.footerMapWrapper} style={{ marginTop: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.9445557770673!2d99.52565277496404!3d16.478344884261983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de186b88443659%3A0x8a986d2f46f070b1!2z4LmC4Lij4LiH4Lie4Lii4Liy4Lia4Liy4Lil4LiK4Li44Lih4LiK4LiZIOC5gOC4l-C4qOC4muC4suC4peC5gOC4oeC4t-C4reC4h-C4geC4s-C5geC4nuC4h-C5gOC4nuC4iuC4ow!5e0!3m2!1sth!2sth!4v1757754410797!5m2!1sth!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="แผนที่โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร"
              ></iframe>
            </div>
          </div>
        </div>

        {/* === Copyright Section === */}
        <div className={styles.copyright}>
          © {buddhistYear} งานส่งเสริมสุขภาพแม่และเด็ก โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร สงวนลิขสิทธิ์.
        </div>
      </div>
    </footer>
  );
};

export default Footer;