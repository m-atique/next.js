import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

//---------------------------------fatching data
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostData =getSortedPostsData()
  return {
    props:{
      allPostData
    }
  }
}



export default function Home({allPostData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>اسلام و علیکم ۔ میں میٹاورس  اور ویب 3 کا طالب علم ہوں</p>

        <p>میٹاورس ایک آن لائن دنیا ہوگی جہاں لوگ ایک وی آر ہیڈ سیٹ کے ذریعے ورچوئل ماحول میں گیم کھیلنے کے علاوہ وہاں کام اور بات چیت کر سکیں گے۔

میٹاورس کے تصور کو انٹرنیٹ کے مستقبل کے طور پر دیکھا جا رہا ہے۔

فیس بک کے چیف ایگزیکٹو آفیسر مارک زگربرگ میٹاورس کے تصور کے سب سے بڑے حامی ہیں۔ </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostData.map(({id,date,title})=>(
            <li className={utilStyles.listItem} key={id}>
              
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </li>
          ))}
          </ul>
      </section>
    </Layout>
  );
}
