import Head from "next/head";
import ContactInfo from "../../components/ContactsInfo";

export const getServerSideProps = async (context) =>{
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

const Contact = ({contact}) => {
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