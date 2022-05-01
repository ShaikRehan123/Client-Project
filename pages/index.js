import Head from 'next/head'
import HomeSlider from '../components/Home'
import React, {useState} from "react";
import Hamburger from "../components/Hamburger";


export default function Home() {
    const [isOpen , setOpen] = useState(false);
    return (
        <div className='h-full'>
            <Head>
                <title>Cadence Architects</title>
            </Head>
            <HomeSlider />
        </div>
    )
}
