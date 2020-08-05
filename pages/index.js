import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import stylesUtils from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={stylesUtils.headingMd}>
        <p>Hello, I'm Felipe. I'm a software enginer.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${stylesUtils.headingMd} ${stylesUtils.padding1px}`}>
        <h2 className={stylesUtils.headingLg}>Blog</h2>
        <ul className={stylesUtils.list}>
          {
            allPostsData.map(({ id, date, title }) => (
              <li className={stylesUtils.listItem} key={id}>
                <Link href= "/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br/>
                <small className={stylesUtils.lightText}>
                  <Date dateString={date}/>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
