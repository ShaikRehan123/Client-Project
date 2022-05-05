import HomeSlider from '../components/Home'
import React, {useState} from "react";


export default function Home() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='h-full'>
            <HomeSlider/>
        </div>
    )
}
