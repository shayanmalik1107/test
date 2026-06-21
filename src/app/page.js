import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.badge}>Next.js Website</span>
        <h1 className={styles.title}>
          Beautifully Crafted <br />
          <span className={styles.highlight}>Digital Showcase</span>
        </h1>
        <p className={styles.description}>
          Experience the sleek integration of modern technologies. A simple yet powerful single-page layout designed to present your media in premium fidelity.
        </p>
      </header>

      <div className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/hero.png"
            alt="Showcase Media"
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            priority
          />
        </div>
      </div>

      <footer className={styles.footer}>
        <p>Built with Next.js &middot; Designed for Excellence</p>
      </footer>
    </div>
  );
}
