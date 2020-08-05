import Link from 'next/link';
import Head from 'next/head';
import styles from './layout.module.css'
import stylesUtils from '../styles/utils.module.css'

const name = "Felipe Antero"
export const siteTitle = "Next.js Sample Website"

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js" />
                <meta
                    name="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}/>
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header} >
                {
                    home ? (
                        <>
                            <img
                                src="/images/profile.jpeg"
                                className={`${styles.headerHomeImage} ${stylesUtils.borderCircle}`}
                                alt={name} />
                            <h1 className={stylesUtils.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <img
                                        src="/images/profile.jpeg"
                                        className={`${styles.headerImage} ${stylesUtils.borderCircle}`}
                                        alt={name} />
                                </a>
                            </Link>
                            <h2 className={stylesUtils.headingLg}>
                                <Link href="/">
                                    <a className={stylesUtils.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )
                }
            </header>
            <main>{children}</main>
            {
                !home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}