import Head from 'next/head'
import Header from "../components/Header";
import HomeSlider from '../components/Home'

export default function Home() {
    return (
        <div className='bg-gray-800 h-full'>
            <Head>
                <title>Cadence Architects</title>
            </Head>
            {/*<h1>Cadence Architects</h1>*/}
            <HomeSlider />
        </div>
    )
}
