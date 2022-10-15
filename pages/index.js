import Heading from '../components/Heading'
import Head from 'next/head'
import Socials from '../components/socials';
import style from "../styles/Home.module.scss"


export const getStaticProps = async () => {
  console.log(process.env.API_HOST)
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }
  return { props: { socials: data } }
}


export default function Home({ socials }) {
  
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className={style.wrapper}>
        <Heading text="Home Page" />
        <Socials socials={socials}/>
      </div>
    </>
  )
}
