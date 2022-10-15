import Head from "next/head";
import ContactInfo from "../../components/ContactsInfo";
import {GetServerSideProps} from "next"
import { FC } from "react";
export const getServerSideProps: GetServerSideProps = async (context) =>{
    console.log(context.query.id)
    const {id} = context.query
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    if(!data){
        return {
            notFound: true
        }
    }
    return { 
        props: {contact: data}
    }
}

const Contact: FC<any> = ({contact}) => {
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <ContactInfo contact={contact}/>
        </>
    )
}

export default Contact;