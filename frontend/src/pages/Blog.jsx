import {useParams} from "react-router-dom"

export default function Blog(){
    const { id } = useParams()

    return (
        <div>
            <h1>Article avec l'id : { id }</h1>
        </div>
    )
}