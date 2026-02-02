import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.logo}>Mơ Phố</h2>
          <p>Địa chỉ:</p>
          <p>Email:</p>
          <p>Facebook:</p>
        </div>

        {/* CENTER */}
        <div className={styles.center}>
          <h3>Giờ mở cửa</h3>
          <p>T2 - T6: 8:00 – 21:00</p>
          <p>T7 - CN: 9:00 – 21:00</p>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <Image
            src="/bacsitinhnguyen.png" 
            alt="Hội bác sỹ tình nguyện"
            width={200}
            height={200}
          />

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.copyright}>
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}