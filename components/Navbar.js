import HeaderLogo from "./HeaderLogo";
import Hamburger from "./Hamburger";
import {useRouter} from "next/router";

const Navbar = ({darkMode}) => {
    const router = useRouter()
    const routerPush = (path) => {
        router.push(`/${path}`);
    }
    return (
        <div className='navbar-container'>
            <div className='absolute top-[8px] z-10'>
                <HeaderLogo darkMode={darkMode}/>
            </div>
            <div className='absolute top-[8px] right-[16px] z-10'>
                <div className='p-6'>
                    <div className="flex space-x-2.5  md:inline-flex hidden">
                        <h1 className={`${darkMode ? 'text-black' : 'text-white'} font-bold text-2xl cursor-pointer font-mono hover:opacity-80`}
                            onClick={() => {
                                routerPush('/project')
                            }}>Work</h1>
                        <h1 className={`text-${darkMode ? 'black' : 'white'} font-bold text-2xl cursor-pointer font-mono hover:opacity-80`}
                            onClick={() => {
                                routerPush('/office')
                            }}>Office</h1>
                        <h1 className={`text-${darkMode ? 'black' : 'white'} font-bold text-2xl cursor-pointer font-mono hover:opacity-80`}
                            onClick={() => {
                                routerPush('/contact')
                            }}>Contact</h1>
                    </div>
                    <div className='inline-flex md:hidden h-full w-full '>
                        <Hamburger/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar