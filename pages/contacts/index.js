import Heading from "../../components/Heading";
import styles from "../../styles/Home.module.scss"
import Head from "next/head";
import { useEffect, useState } from "react";
const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setContacts(data)
        }
        fetchData()
    }, [])
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
                        <li key={id} ><strong>{name}</strong></li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default Contacts;