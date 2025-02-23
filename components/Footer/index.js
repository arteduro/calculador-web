import Image from "next/image";
import styles from "./styles.module.scss";
import Typewriter from "typewriter-effect";
export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_contenido}>
        <div style={{ overflow: "hidden" }} translate="no">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Developed by:>Edgar Arteaga")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              delay: 75,
              loop: true,
            }}
          />
        </div>

        <div className={styles.logo}>
          <a
            href="https://arteduro.github.io/Edgar-Arteaga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              priority={true}
              src="/images/logo_waldo.png"
              alt="logo waldo hidalgo"
              layout="responsive"
              width={820}
              height={218}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
