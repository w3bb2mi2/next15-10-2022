import styles from "../styles/Navbar.module.scss"
import Link from "next/link"
import {useRouter} from "next/router"
import Image from "next/image"

const navigation = [
    {id:1, title:"Home", path:"/"},
    {id:2, title:"Posts", path:"/posts"},
    {id:3, title:"Contacts", path:"/contacts"},
]

const Navbar = ()=>{
    const {pathname} = useRouter();    
    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src="/logo.png" width={60} height={60} alt="sps"/>
            </div>
            <div>
                {
                    navigation.map(({id, title, path})=>
                    <Link href={path} key={id}>
                        <a className={pathname===path?styles.active:null}>{title}</a>
                    </Link>)
                }
            </div>

        </nav>
    )
}


export default Navbar;
