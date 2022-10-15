import '../styles/globals.scss'
import Layout from '../components/Layout'
import Head from 'next/head'


const MyApp = ({ Component, pageProps }) => (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito+Sans:wght@300;600&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  

)

export default MyApp
