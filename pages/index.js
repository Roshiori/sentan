import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.header}>
          Uehara&apos;s Portfolio
        </p>

        <p className={styles.description}>
          Portfolio of Hiroshi Uehara
        </p>
          <h2>Introduction</h2>
          <Image src = "/myavatar.jpg" width="150px" height="150px" alt="icon"/>
            <ul>
              <li>静岡大学 情報学部 情報社会学科2年</li>
              <li>2002年6月24日生まれ</li>
              <li>岡山県津山市出身。</li>
              <li>2021年より静岡県浜松市在住。</li>
            </ul>

          <h2>Affiliation</h2>
            <ul>
              <li>静岡大学 公認サークルJazz Phenomena（部員募集中）</li>
              <li>静岡大学 ITソルーション室</li>
            </ul>
          
          <h2>Interests</h2>
            <ul>
              <li>トロンボーン</li>
              <li>ポタリング</li>
              <li>お出かけ（日帰り）</li>
              <li>デジタルガジェット・スマートフォン</li>
              <li>プログラミング（初心者です, Javaをちょこっと）</li>
            </ul>

          <h2>Links</h2>
            <ul>
              <li><a href="https://roshiori.github.io">個人サイト（かしおりのページ）</a></li>
              <li><a href="https://twitter.com/roshiori">Twitter</a></li>
              <li><a href="https://github.com/roshiori">GitHub</a></li>
            </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/Roshiori"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/Twitter.svg" alt="Twitter Logo" width={72} height={24} />
          </span>
        </a>
        <a
          href="https://github.com/Roshiori"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.logo}>
            <Image src="/Github.png" alt="Github Logo" width={24} height={24} />
          </span>
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
