import HeaderLogo from "./HeaderLogo";
import Hamburger from "./Hamburger";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter()
    const routerPush = (path) => {
        router.push(`/${path}`);
    }
    return (
        <div>

            <div className='absolute top-[8px] z-10'>
                <HeaderLogo/>
            </div>
            <div className='absolute top-[8px] right-[16px] z-10'>
                <div className='p-6 z-100'>
                    <div className="flex space-x-2.5  md:inline-flex hidden">
                        <h1 className='text-white font-bold text-2xl cursor-pointer font-mono hover:opacity-80'
                            onClick={() => {
                                routerPush('/project')
                            }}>Work</h1>
                        <h1 className='text-white font-bold text-2xl cursor-pointer font-mono hover:opacity-80'
                            onClick={() => {
                                routerPush('/office')
                            }}>Office</h1>
                        <h1 className='text-white font-bold text-2xl cursor-pointer font-mono hover:opacity-80'
                            onClick={() => {
                                routerPush('/contact')
                            }}>Contact</h1>
                    </div>
                    <div className='inline-flex md:hidden h-full w-full'>
                        <Hamburger/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar