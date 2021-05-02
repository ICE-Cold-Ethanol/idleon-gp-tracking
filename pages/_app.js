import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <>
            <Head>
                <title>Idelon GP Tracking</title>
            </Head>
            {getLayout(<Component {...pageProps} />)}
        </>
    )
}

export default MyApp
