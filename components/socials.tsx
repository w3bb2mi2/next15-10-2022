import Head from "next/head";
import style from "../styles/Socials.module.scss"

const Socials = ({ socials }) => {
    if (!socials) {
        return null;
    }
    return (
        <div >
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>
            <ul className={style.socials}>
                {
                    socials && socials.map(({ id, icon, path }) => (
                        <li key={id}>
                            <a  href={path} target="_blank">
                                <i className={`fab fa-${icon}`} aria-hidden="true" />
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Socials;