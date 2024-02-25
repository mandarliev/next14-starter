import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1802268/pexels-photo-1802268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about"
          fill
        />
      </div>
    </div>
  );
}

export default AboutPage;
