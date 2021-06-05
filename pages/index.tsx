import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  let name: string = "Сашо";

  return (
    <div className={styles.container}>
      <Head>
        <title>Страницата на Сашо</title>
        <meta
          name="description"
          content="Тук ще научите от какви софтуерни технологии се интересувам"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Добре дошли, аз съм <span className={styles.name}>{name}</span>.
        </h1>

        <p className={styles.description}>
          През деня разработвам интернет бизнес програми. <br /> В свободното си
          време пиша на Rust и C, защото имам голяма страст към
          микроконтролерите.
        </p>
        <a
          href="https://github.com/savovsa/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <span>GitHub</span>
          <Image src="/github.png" alt="Github" width={64} height={64} />
        </a>
      </main>
    </div>
  );
}
