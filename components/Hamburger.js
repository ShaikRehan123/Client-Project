import {Turn as Ham} from "hamburger-react";
import {useState} from "react";
import {useRouter} from "next/router";

const Hamburger = () => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter()
    const routerPush = (path) => {
        router.push(`/${path}`);
    }
    return (
        <div>
            <input type="checkbox" id="active"/>
            <label htmlFor="active" className="menu-btn">
                <Ham toggled={isOpen} toggle={setOpen} direction='top' color={isOpen ? '#000' : '#fff'} size={24}/>
            </label>
            <div className="wrapper">
                <ul>
                    <li><a onClick={() => {
                        routerPush('/project')
                    }}>Work</a></li>
                    <li><a onClick={() => {
                        routerPush('/office')
                    }}>Office</a></li>
                    <li><a onClick={() => {
                        routerPush('/contact')
                    }}>Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export  default  Hamburger