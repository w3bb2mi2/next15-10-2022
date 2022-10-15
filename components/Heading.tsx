import { FC } from "react";
type HeadingInsideProps = {
    tag?: any,
    text?: string
}

const Heading: FC<HeadingInsideProps> = ({tag, text}) =>{
    const Tag = tag || "h1";
    return <Tag>{text}</Tag>
}

export default Heading;