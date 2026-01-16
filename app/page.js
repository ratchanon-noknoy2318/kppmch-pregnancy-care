'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Script from 'next/script'
import styles from './styles/page.module.css'

/**
 * =====================================================================
 * DATA SECTION
 * =====================================================================
 * ส่วนนี้ใช้สำหรับเก็บข้อมูลแบบคงที่ (Static Data) ที่จะนำไปแสดงผลในส่วนต่างๆ ของหน้าเว็บ
 * การแยกข้อมูลออกมาจาก JSX ทำให้โค้ดสะอาดและง่ายต่อการแก้ไขในอนาคต
 */
// ข้อมูลทีมงาน
const teamMembers = [
  {
    name: 'พญ.จริดา สันธิติพงศ์',
    position: 'พ.บ.อว.(สาขาเวชศาสตร์ครอบครัว)',
    quote: '“คุณแม่ไม่ต้องกังวลนะคะ เราจะดูแลคุณแม่และลูกน้อยอย่างใส่ใจ”',
    image: '/team/team-1.png',
  },
  {
    name: 'นางสาวมณฑ์ศิริ กล่อมยัง',
    position: 'พยาบาลวิชาชีพชำนาญการ',
    quote: '“คุณแม่เก่งมากค่ะ การเปลี่ยนแปลงทุกอย่างตอนนี้เป็นเรื่องปกติ”',
    image: '/team/team-2.jpg',
  },
  {
    name: 'นางสาวกุลสินี สาพาที',
    position: 'พยาบาลวิชาชีพชำนาญการ',
    quote: '“คุณแม่ไม่ได้อยู่คนเดียวค่ะ ทีมแพทย์และครอบครัวอยู่ข้างๆ คุณแม่เสมอ”',
    image: '/team/team-3.jpg',
  },
]

// ข้อมูลสำหรับ Section "ควรฝากครรภ์เมื่อไหร่"
const whenToStartItems = [
  'ทันทีที่รู้ว่าตั้งครรภ์ หรืออย่างช้าที่สุดภายใน 12 สัปดาห์แรก',
  'การตรวจครั้งแรกมีความสำคัญอย่างยิ่งในการประเมินความเสี่ยง',
  'ช่วยให้ตรวจพบและป้องกันภาวะแทรกซ้อนที่อาจเกิดขึ้นได้',
  'เพื่อให้คุณแม่และทารกในครรภ์ได้รับการดูแลที่ดีที่สุด',
];

// ข้อมูลสำหรับตารางบริการ
const servicesSchedule = [
  {
    day: 'จันทร์',
    morning: {
      service: 'ฝากครรภ์, วางแผนครอบครัว',
      provider: 'พญ.จริดา สันธิติพงศ์, พ.บ.อว.(สาขาเวชศาสตร์ครอบครัว)',
    },
    afternoon: {
      service: 'พัฒนาการเด็ก',
      provider: 'น.ส.มณฑ์ศิริ กล่อมยัง, พยาบาลวิชาชีพชำนาญการ',
    },
  },
  {
    day: 'อังคาร',
    morning: {
      service: 'ฝากครรภ์, วางแผนครอบครัว',
      provider: 'พญ.จริดา สันธิติพงศ์, พ.บ.อว.(สาขาเวชศาสตร์ครอบครัว)',
    },
    afternoon: {
      service: 'พัฒนาการเด็ก',
      provider: 'น.ส.มณฑ์ศิริ กล่อมยัง, พยาบาลวิชาชีพชำนาญการ',
    },
  },
    {
    day: 'พุธ',
    morning: {
      service: 'ฝากครรภ์, วางแผนครอบครัว',
      provider: 'พญ.จริดา สันธิติพงศ์, พ.บ.อว.(สาขาเวชศาสตร์ครอบครัว)',
    },
    afternoon: {
      service: 'พัฒนาการเด็ก',
      provider: 'น.ส.มณฑ์ศิริ กล่อมยัง, พยาบาลวิชาชีพชำนาญการ',
    },
  },
  {
    day: 'พฤหัสบดี',
    morning: {
      service: 'ฝากครรภ์, วางแผนครอบครัว',
      provider: 'พญ.จริดา สันธิติพงศ์, พ.บ.อว.(สาขาเวชศาสตร์ครอบครัว)',
    },
    afternoon: {
      service: 'พัฒนาการเด็ก',
      provider: 'น.ส.มณฑ์ศิริ กล่อมยัง, พยาบาลวิชาชีพชำนาญการ',
    },
  },
  {
    day: 'ศุกร์',
    morning: {
      service: 'ฝากครรภ์, วางแผนครอบครัว',
      provider: 'พญ.จริดา สันธิติพงศ์, พ.บ.อว.(สาขาเวชศาสตร์ครอบครัว)',
    },
    afternoon: {
      service: 'พัฒนาการเด็ก',
      provider: 'น.ส.มณฑ์ศิริ กล่อมยัง, พยาบาลวิชาชีพชำนาญการ',
    },
  },
  {
    day: 'วันหยุดราชการและวันหยุดสุดสัปดาห์',
    morning: {
      service: 'ปิดทำการ',
      provider: null,
    },
    afternoon: {
      service: 'ปิดทำการ',
      provider: null,
    },
  }
];

// ข้อมูลสำหรับ Timeline การตั้งครรภ์
const pregnancyTimelineData = [
  {
    trimester: 'ไตรมาสที่ 1',
    weeks: 'สัปดาห์ที่ 1-12',
    title: 'ช่วงเวลาแห่งการเริ่มต้น',
    details: [
      'ทารกเริ่มสร้างอวัยวะสำคัญ',
      'คุณแม่อาจมีอาการแพ้ท้อง',
      'ควรเริ่มทานกรดโฟลิกเสริม',
      'พบแพทย์เพื่อฝากครรภ์ครั้งแรก',
    ],
  },
  {
    trimester: 'ไตรมาสที่ 2',
    weeks: 'สัปดาห์ที่ 13-28',
    title: 'ช่วงเวลาที่สบายที่สุด',
    details: [
      'อาการแพ้ท้องลดลง',
      'เริ่มรู้สึกถึงการดิ้นของลูกน้อย',
      'ท้องขยายขนาดเห็นได้ชัดเจน',
      'ตรวจอัลตราซาวด์เพื่อดูพัฒนาการ',
    ],
  },
  {
    trimester: 'ไตรมาสที่ 3',
    weeks: 'สัปดาห์ที่ 29-40',
    title: 'เตรียมพร้อมพบหน้ากัน',
    details: [
      'ทารกเติบโตอย่างรวดเร็ว',
      'คุณแม่อาจรู้สึกอึดอัดและเหนื่อยง่าย',
      'เรียนรู้สัญญาณเตือนการคลอด',
      'เตรียมของใช้สำหรับคุณแม่และลูกน้อย',
    ],
  },
];

// ข้อมูลสำหรับ Section "คำถามที่พบบ่อย" (FAQ)
const faqItems = [
  {
    question: 'ควรเริ่มฝากครรภ์เมื่อไหร่?',
    answer:
      'คุณแม่ควรมาฝากครรภ์โดยเร็วที่สุดเมื่อทราบว่าตั้งครรภ์ หรืออย่างช้าที่สุดไม่ควรเกิน 12 สัปดาห์ เพื่อให้แพทย์ได้ประเมินความเสี่ยงและให้การดูแลที่เหมาะสมตั้งแต่เนิ่นๆ ค่ะ',
  },
  {
    question: 'ต้องเตรียมเอกสารอะไรมาบ้างในการฝากครรภ์ครั้งแรก?',
    answer:
      'กรุณานำบัตรประจำตัวประชาชน, ทะเบียนบ้าน, และสมุดบันทึกสุขภาพ (ถ้ามี) มาด้วยค่ะ หากมีประวัติการรักษาหรือแพ้ยา ควรแจ้งให้เจ้าหน้าที่ทราบด้วยนะคะ',
  },
  {
    question: 'ค่าใช้จ่ายในการฝากครรภ์เท่าไหร่?',
    answer:
      'โรงพยาบาลของเรามีบริการฝากครรภ์ตามสิทธิ์การรักษาพยาบาล เช่น บัตรทอง, ประกันสังคม โดยไม่มีค่าใช้จ่ายเพิ่มเติม ยกเว้นกรณีมีการตรวจพิเศษนอกเหนือจากชุดสิทธิ์ประโยชน์ค่ะ',
  },
  {
    question: 'สามารถฝากครรภ์นอกเวลาราชการได้หรือไม่?',
    answer:
      'ปัจจุบันคลินิกฝากครรภ์ของเราเปิดให้บริการในวันและเวลาราชการเท่านั้นค่ะ หากมีข้อสงสัยเพิ่มเติมเกี่ยวกับการนัดหมาย สามารถติดต่อสอบถามได้ที่เบอร์โทรศัพท์ของโรงพยาบาลค่ะ',
  },
  {
    question: 'หากมีภาวะแทรกซ้อนหรืออาการผิดปกติ ควรทำอย่างไร?',
    answer:
      'หากคุณแม่มีอาการผิดปกติ เช่น ปวดท้องรุนแรง, มีเลือดออก, หรือลูกดิ้นน้อยลง ควรรีบมาพบแพทย์ที่โรงพยาบาลทันทีโดยไม่ต้องรอให้ถึงวันนัดนะคะ',
  },
  {
    question: 'คลินิกมีบริการอะไรบ้างนอกจากการฝากครรภ์?',
    answer:
      'นอกจากการฝากครรภ์แล้ว เรายังมีบริการวางแผนครอบครัว, ตรวจสุขภาพหลังคลอด, และคลินิกสุขภาพเด็กดีเพื่อให้การดูแลที่ต่อเนื่องสำหรับคุณแม่และลูกน้อยค่ะ',
  },
  {
    question: 'การอัลตราซาวด์จำเป็นหรือไม่ และต้องทำกี่ครั้ง?',
    answer:
      'การอัลตราซาวด์เป็นสิ่งจำเป็นเพื่อประเมินการเจริญเติบโตและพัฒนาการของทารก โดยทั่วไปจะทำอย่างน้อย 2 ครั้ง คือในช่วงไตรมาสแรกเพื่อยืนยันอายุครรภ์ และช่วงไตรมาสที่สองเพื่อประเมินความสมบูรณ์ของทารก แพทย์อาจแนะนำให้ทำเพิ่มเติมตามความจำเป็นค่ะ',
  },
  {
    question: 'อาการแบบไหนที่ควรระวังเป็นพิเศษระหว่างตั้งครรภ์?',
    answer:
      'คุณแม่ควรสังเกตอาการต่างๆ เช่น เลือดออกทางช่องคลอด, ปวดท้องรุนแรงต่อเนื่อง, มีไข้สูง, ปวดศีรษะรุนแรงพร้อมตาพร่ามัว, หรือลูกดิ้นน้อยลงผิดปกติ หากมีอาการเหล่านี้ ควรรีบมาพบแพทย์ทันทีค่ะ',
  },
  {
    question: 'หลังคลอดต้องดูแลตัวเองอย่างไรบ้าง?',
    answer:
      'คุณแม่หลังคลอดควรพักผ่อนให้เพียงพอ, รับประทานอาหารที่มีประโยชน์, ดื่มน้ำมากๆ, และดูแลความสะอาดของแผลฝีเย็บหรือแผลผ่าตัดคลอดตามคำแนะนำของแพทย์ และควรมาตรวจหลังคลอดตามนัดเพื่อประเมินสุขภาพของคุณแม่ค่ะ',
  },
];

// ข้อมูลสำหรับ Section "บทความจาก LINE VOOM"
const lineVoomArticles = [
  {
    title: 'ยาคุมฉุกเฉิน: ใช้เมื่อไหร่ อย่างไรให้ปลอดภัย',
    description: 'ทำความเข้าใจวิธีการใช้ยาคุมฉุกเฉินที่ถูกต้อง และผลข้างเคียงที่อาจเกิดขึ้น เพื่อความปลอดภัยของคุณผู้หญิง',
    image: '/content/about-image.jpg',
    link: 'https://linevoom.line.me/post/1175426327926666176',
    category: 'ยาคุมฉุกเฉิน',
    author: 'นางสาวมณฑ์ศิริ กล่อมยัง'
  },
  {
    title: 'ยาคุมแบบฉีด: ทางเลือกของการคุมกำเนิด',
    description: 'ข้อดี-ข้อเสีย ของยาคุมแบบฉีด เหมาะกับใครบ้าง และต้องฉีดบ่อยแค่ไหน',
    image: '/content/about-image.jpg',
    link: 'https://linevoom.line.me/post/1175426497626703042',
    category: 'ยาคุมแบบฉีด',
    author: 'นางสาวมณฑ์ศิริ กล่อมยัง'
  },
  {
    title: 'ยาคุมแบบเม็ด: กินถูกวิธี มีประสิทธิภาพสูง',
    description: 'เคล็ดลับการกินยาคุมกำเนิดแบบเม็ดให้ได้ผลดีที่สุด ลดอาการข้างเคียง และสิ่งที่ควรทำเมื่อลืมกินยา',
    image: '/content/about-image.jpg',
    link: 'https://linevoom.line.me/post/1175426540426713248',
    category: 'ยาคุมแบบเม็ด',
    author: 'นางสาวมณฑ์ศิริ กล่อมยัง'
  },
  
];



/**
 * =====================================================================
 * ANIMATION VARIANTS (สำหรับ Framer Motion)
 * =====================================================================
 * `containerVariants` ใช้สำหรับสร้าง animation แบบ stagger (หน่วงเวลา) ให้กับ element ลูก
 * ทำให้ item ที่อยู่ข้างในปรากฏขึ้นทีละชิ้นอย่างสวยงาม
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

/**
 * `itemVariants` ใช้สำหรับ animation ของแต่ละ item ที่อยู่ใน container
 * โดยจะเลื่อนขึ้นเล็กน้อย (y: 20 -> 0) และค่อยๆ ปรากฏขึ้น (opacity: 0 -> 1)
 */
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
}

export default function Home() {
  /**
   * =====================================================================
   * COMPONENT STATE
   * =====================================================================
   * State สำหรับจัดการการเปิด/ปิดของรายการ FAQ
   * `openFaqIndex` จะเก็บ index ของคำถามที่กำลังเปิดอยู่
   * ถ้าไม่มีคำถามไหนเปิดอยู่ ค่าจะเป็น `null`
   */
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  /**
   * Function สำหรับสลับการแสดงผล (toggle) ของคำตอบใน FAQ
   * - ถ้าคลิกคำถามที่ปิดอยู่: จะตั้งค่า index ของคำถามนั้นเป็น `openFaqIndex`
   * - ถ้าคลิกคำถามที่เปิดอยู่แล้ว: จะตั้งค่า `openFaqIndex` เป็น `null` เพื่อปิดคำตอบ
   */
  const handleFaqToggle = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // สร้าง JSON-LD Schema สำหรับ FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => {
      return {
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }
    })
  };

  return (
    <main className={styles.pageMain}>
      {/* 
        =====================================================================
        JSON-LD Structured Data (Schema Markup) for FAQ
        =====================================================================
        - เพิ่ม Schema.org/FAQPage เพื่อช่วยให้ Search Engine เข้าใจเนื้อหา
          ส่วนคำถามที่พบบ่อย และอาจแสดงผลเป็น Rich Snippet ในหน้าผลการค้นหา
      */}
      <Script
        id="faq-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* === Section: Hero (ส่วนบนสุดของหน้า) === */}
      <section className={styles.heroSection}>
        <div className={`${styles.container} ${styles.heroContainer}`}>
          <motion.div
            className={styles.heroTextWrapper}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              ฝากครรภ์กำแพงเพชร เพื่อสุขภาพคุณแม่และลูกน้อย
            </h1>
            <p className={styles.heroDescription}>
             คลินิกฝากครรภ์กำแพงเพชร ที่พร้อมดูแลทุกก้าวอย่างใกล้ชิด เพื่อความอุ่นใจและปลอดภัยของคุณแม่และลูกน้อยตลอดการเดินทางครั้งนี้
            </p>
            <div className={styles.heroButtonContainer}>
              <Link href="/PregnancyAppointmentSchedule" passHref>
                <motion.button
                  className={`${styles.button} ${styles.buttonPrimary}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  นัดหมายฝากครรภ์
                </motion.button>
              </Link>
             
            </div>
          </motion.div>
          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="https://www.facebook.com/61571374970083/posts/122121652814712499/?mibextid=wwXIfr&rdid=drmU2UkLIQvQ9WUs#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/content/hero-image.jpg"
                alt="ฝากครรภ์กำแพงเพชร"
                width={500}
                height={500}
                className={styles.heroImage}
                priority
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 
        === Section: ตารางบริการ (Services Table) ===
        - แสดงข้อมูลบริการในรูปแบบตารางที่อ่านง่าย
      */}
      <section id="services-table" className={styles.servicesTableSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>ตารางการให้บริการ</h2>
          <p className={styles.sectionDescription}>
            เวลาทำการของคลินิกต่างๆ เพื่อให้คุณแม่สามารถวางแผนการเดินทางได้อย่างสะดวก
          </p>
          <motion.div
            className={styles.servicesTableContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.scheduleTable}>
              <div className={`${styles.scheduleRow} ${styles.scheduleHeader}`}>
                <div className={`${styles.scheduleCell} ${styles.dayCell}`}>วัน</div>
                <div className={`${styles.scheduleCell} ${styles.timeSlotCell}`}>09.00 - 11.30 น.</div>
                <div className={`${styles.scheduleCell} ${styles.timeSlotCell}`}>13.00 - 15.30 น.</div>
              </div>
              <div className={styles.scheduleBody}>
                {servicesSchedule.map((item, index) => (
                  <div key={index} className={styles.scheduleRow}>
                    <div className={`${styles.scheduleCell} ${styles.dayCell}`}>
                      {item.day}
                    </div>
                    <div className={`${styles.scheduleCell} ${styles.timeSlotCell}`} data-label="09.00 - 11.30 น.">
                      <div className={styles.serviceName}>{item.morning.service}</div>
                      {item.morning.provider && (
                        <div className={styles.serviceProvider}>{item.morning.provider}</div>
                      )}
                    </div>
                    <div className={`${styles.scheduleCell} ${styles.timeSlotCell}`} data-label="13.00 - 15.30 น.">
                      <div className={styles.serviceName}>{item.afternoon.service}</div>
                      {item.afternoon.provider && (
                        <div className={styles.serviceProvider}>{item.afternoon.provider}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <p className={styles.servicesTableNote}>
            <strong>หมายเหตุ:</strong> บริการฝากครรภ์และบริการพื้นฐานสามารถใช้สิทธิ์การรักษาพยาบาล (เช่น บัตรทอง, ประกันสังคม) ได้โดยไม่มีค่าใช้จ่ายเพิ่มเติม
          </p>
        </div>
      </section>

      {/* 
        === Section: ควรฝากครรภ์เมื่อไหร่ (When to Start) ===
        - Section นี้ใช้ layout แบบ `splitSection` ซึ่งจะแสดงรูปภาพและข้อความคู่กันบนจอใหญ่
        - และจะซ่อนรูปภาพ แสดงเฉพาะข้อความบนจอมือถือ
      */}
      <section id="when-to-start" className={`${styles.section} ${styles.formalSection}`}>
        <div className={`${styles.container} ${styles.splitSectionContainer}`}>
          <motion.div
            className={styles.splitSectionImageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formalImageWrapper}>
              <Link href="/PregnancyAppointmentSchedule" style={{ display: 'block', width: '100%', height: '100%' }}>
                <Image
                  src="/content/when-to-care-2.png"
                  alt="พญ.จริดา สันธิติพงศ์"
                  width={500}
                  height={500}
                  className={styles.sectionImage}
                  style={{ display: 'block' }}
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className={styles.splitSectionTextWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>ระยะเวลาที่เหมาะสมในการฝากครรภ์</h2>
            <p className={styles.sectionDescription} style={{ textAlign: 'left', marginBottom: '2rem' }}>
              การเข้ารับบริการฝากครรภ์ตั้งแต่ระยะเริ่มแรก เป็นปัจจัยสำคัญที่จะช่วยให้แพทย์สามารถประเมินสุขภาพและวางแผนการดูแลรักษาได้อย่างมีประสิทธิภาพสูงสุด
            </p>
            
            <div className={styles.formalHighlightBox}>
                <h3 className={styles.formalHighlightTitle}>คำแนะนำจากแพทย์</h3>
                <p className={styles.formalHighlightText}>ควรมาฝากครรภ์ทันทีที่ทราบว่าตั้งครรภ์ หรืออย่างช้าที่สุดภายใน 12 สัปดาห์แรก</p>
            </div>

            <ul className={styles.formalList}>
              {whenToStartItems.slice(1).map((item, index) => (
                <motion.li key={index} className={styles.formalListItem} variants={itemVariants}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.formalListItemIcon}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
          </motion.div>
        </div>
      </section>

      {/* 
        === Section: เส้นทางการตั้งครรภ์ (Timeline) ===
        - แสดงข้อมูลการตั้งครรภ์ในแต่ละไตรมาสในรูปแบบ Timeline ที่สวยงาม
      */}
      <section id="timeline" className={styles.timelineSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>เส้นทางการตั้งครรภ์ 9 เดือน</h2>
          <p className={styles.sectionDescription}>
            ภาพรวมพัฒนาการของลูกน้อยและสิ่งที่ควรทำในแต่ละไตรมาส
          </p>
          <div className={styles.timelineContainer}>
            {pregnancyTimelineData.map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.timelineIcon}></div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineTrimester}>{item.trimester} ({item.weeks})</span>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <ul className={styles.timelineDetails}>
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        === Section: ทีมงาน (Team) ===
        - แสดงข้อมูลทีมแพทย์และพยาบาลเพื่อสร้างความน่าเชื่อถือ
      */}
      <section id="team" className={styles.teamSection}>
        <div className={styles.container}>
          <h2 className={styles.teamSectionTitle}>ทีมงานของเรา</h2>
          <motion.div
            className={styles.teamGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className={styles.teamMemberCard} variants={itemVariants}>
                <Image
                  src={member.image}
                  width={128}
                  height={128}
                  alt={`รูปภาพ ${member.name}`}
                  className={styles.teamMemberImage}
                />
                <p className={styles.teamMemberName}>{member.name}</p>
                <p className={styles.teamMemberPosition}>{member.position}</p>
                <p className={styles.teamMemberQuote}>{member.quote}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 
        === Section: เกี่ยวกับเรา (About Us) ===
        - แสดงข้อมูลเกี่ยวกับพันธกิจและวิสัยทัศน์ของโครงการ
      */}
      <section id="about-us" className={`${styles.section} ${styles.formalSection}`}>
        <div className={`${styles.container} ${styles.splitSectionContainer} ${styles.aboutUsContainer}`}>
          <motion.div
            className={styles.splitSectionTextWrapper}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>เกี่ยวกับโครงการ</h2>
            <p className={styles.aboutUsText}>
              โครงการส่งเสริมสุขภาพแม่และเด็ก โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร มุ่งมั่นยกระดับคุณภาพชีวิตของมารดาและทารก ด้วยการให้บริการทางการแพทย์ที่ได้มาตรฐาน ควบคู่ไปกับการนำเทคโนโลยีดิจิทัลมาประยุกต์ใช้เพื่อการเข้าถึงข้อมูลที่สะดวกรวดเร็ว
            </p>
           <p className={styles.aboutUsText}>
              เราพร้อมเป็นที่ปรึกษาและดูแลคุณแม่ตลอดการตั้งครรภ์ จนถึงหลังคลอด เพื่อให้มั่นใจว่าลูกน้อยจะมีพัฒนาการที่สมบูรณ์และเติบโตอย่างมีคุณภาพ
            </p>

            <p className={styles.aboutUsText}>
              เราพร้อมเป็นที่ปรึกษาและดูแลคุณแม่ตลอดการตั้งครรภ์ จนถึงหลังคลอด เพื่อให้มั่นใจว่าลูกน้อยจะมีพัฒนาการที่สมบูรณ์และเติบโตอย่างมีคุณภาพ
            </p>
          
          </motion.div>
          <motion.div
            className={styles.splitSectionImageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.formalImageWrapper}>
              <Link href="https://www.facebook.com/kppmu/posts/pfbid0CRZhheAtjZi6Nkrb5weAtoNXaq2P2f5TCjthqbsZPUtc2zXfMQV2hSmULX2ha9tal?rdid=rz6ieXH8lifpHhUA#" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                <Image
                  src="/content/about-image.png"
                  alt="บรรยากาศภายในคลินิกฝากครรภ์กำแพงเพชร"
                  width={500}
                  height={500}
                  className={styles.sectionImage}
                  style={{ display: 'block' }}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        === Section: บทความจาก LINE VOOM ===
        - แสดงบทความน่ารู้เกี่ยวกับการคุมกำเนิด
      */}
      <section id="line-voom" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>บทความน่ารู้จาก งานส่งเสริมฯ รพช.ทม.กำแพงเพชร</h2>
          <p className={styles.sectionDescription}>
            สาระความรู้เรื่องการคุมกำเนิดและการดูแลสุขภาพที่คุณไม่ควรพลาด
          </p>
          <motion.div 
            className={styles.voomGrid}
            initial="visible"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {lineVoomArticles.map((article, index) => (
              <motion.div 
                key={index} 
                className={styles.voomCard}
                variants={itemVariants}
              >
                <Link href={article.link} target="_blank" rel="noopener noreferrer" className={styles.voomCardLink}>
                  <div className={styles.voomContent}>
                  <div className={styles.voomAuthor}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.voomAuthorIcon} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                    <span>โดย {article.author}</span>
                  </div>
                  <h3 className={styles.voomTitle}>{article.title}</h3>
                  <p className={styles.voomDescription}>{article.description}</p>
                  <span 
                    className={`${styles.button} ${styles.buttonSecondary} ${styles.voomButton}`}
                  >
                    อ่านต่อบน LINE VOOM
                  </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 
        === Section: คำถามที่พบบ่อย (FAQ) ===
        - ใช้ State (`openFaqIndex`) และ Function (`handleFaqToggle`) เพื่อควบคุมการแสดงผลแบบ Accordion
        - เมื่อคลิกที่ `<button>`, `handleFaqToggle` จะถูกเรียกเพื่ออัปเดต State
      */}
      <section id="faq" className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>คำถามที่พบบ่อย</h2>
          <p className={styles.sectionDescription}>
            เรารวบรวมคำถามที่พบบ่อยเกี่ยวกับการฝากครรภ์และบริการต่างๆ เพื่อคลายข้อสงสัยให้คุณแม่
          </p>
          <div className={styles.faqContainer}>
            {faqItems.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button className={styles.faqQuestion} onClick={() => handleFaqToggle(index)}>
                  <span className={styles.faqQuestionText}>{faq.question}</span>
                  <div className={styles.faqIcon}>
                    {openFaqIndex === index ? '−' : '+'}
                  </div>
                </button>
                <div
                  // การแสดง/ซ่อนคำตอบจะถูกควบคุมโดยการเพิ่ม/ลบคลาส `styles.open`
                  className={`${styles.faqAnswerWrapper} ${openFaqIndex === index ? styles.open : ''}`}
                >
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        </div>
      </section>

      {/* 
        === Section: ติดต่อเรา (Contact) ===
        - แสดงข้อมูลการติดต่อพื้นฐาน เช่น ที่อยู่และเบอร์โทรศัพท์
      */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>ติดต่อเรา</h2>
          <p className={styles.sectionDescription}>
            เราพร้อมให้คำปรึกษาและดูแลคุณในทุกขั้นตอนของการตั้งครรภ์
            ติดต่อเราได้ตามช่องทางด้านล่างนี้
          </p>
          <motion.div 
            className={styles.contactDetails}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div className={styles.contactDetailItem} variants={itemVariants}>
              <div className={styles.contactIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className={styles.contactTextWrapper}>
                <h3 className={styles.contactTitle}>ที่อยู่</h3>
                <p className={styles.contactInfo}>35 ซ.2 ถ.ราชดำเนิน 1 ต.ในเมือง อ.เมือง จ.กำแพงเพชร 62000 (ซอยหลังวัดคูยาง)</p>
              </div>
            </motion.div>

            <motion.div className={styles.contactDetailItem} variants={itemVariants}>
              <div className={styles.contactIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.contactIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className={styles.contactTextWrapper}>
                <h3 className={styles.contactTitle}>โทรศัพท์</h3>
                <p className={styles.contactInfo}>055-716-715</p>
                <p className={styles.contactInfo} style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>(เวลาราชการ 08:30 - 16:30 น.)</p>
              </div>
            </motion.div>

          </motion.div>

          <motion.div 
            className={styles.contactMapWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.9445557770673!2d99.52565277496404!3d16.478344884261983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30de186b88443659%3A0x8a986d2f46f070b1!2z4LmC4Lij4LiH4Lie4Lii4Liy4Lia4Liy4Lil4LiK4Li44Lih4LiK4LiZIOC5gOC4l-C4qOC4muC4suC4peC5gOC4oeC4t-C4reC4h-C4geC4s-C5geC4nuC4h-C5gOC4nuC4iuC4ow!5e0!3m2!1sth!2sth!4v1757754410797!5m2!1sth!2sth"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="แผนที่โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร"
              className={styles.contactMapFrame}
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* 
        === Section: Call to Action (ปิดท้าย) ===
        - ส่วนกระตุ้นให้ผู้ใช้งานทำการนัดหมาย ซึ่งเป็นเป้าหมายหลักของหน้าเว็บ
      */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>บริการฝากครรภ์และดูแลสุขภาพแม่และเด็กครบวงจร</h2>
            <p className={styles.ctaDescription}>
              โรงพยาบาลชุมชนเทศบาลเมืองกำแพงเพชร มุ่งมั่นให้บริการทางการแพทย์ที่มีคุณภาพ 
              เพื่อสุขภาพที่ดีของคุณแม่และพัฒนาการที่สมบูรณ์ของลูกน้อย 
              ท่านสามารถลงทะเบียนนัดหมายล่วงหน้าเพื่อความสะดวกรวดเร็วในการรับบริการ
            </p>
            <Link href="/PregnancyAppointmentSchedule" passHref>
              <motion.button
                className={`${styles.button} ${styles.buttonPrimary} ${styles.ctaButton}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                ลงทะเบียนนัดหมาย
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
