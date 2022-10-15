import Heading from "../../components/Heading";
import styles from "../../styles/Home.module.scss"
import Head from "next/head";
import Link from "next/link"


export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if(!data){
        return {
            notFound:true
        }
    }
    return {
        props:{
            contacts: data
        }
    }
};


const Contacts = ({contacts}) => {
    
    return (
        <div className={styles.container}>
            <Head>
                <title>contacts</title>
            </Head>
            <Heading text="Contacts list: " />
            <ul>
                {
                    contacts && contacts.map(({ id, name, email }) =>
                    (
                        <li key={id} >
                            <Link href={`/contacts/${id}`}><strong>{name}</strong></Link>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default Contacts;