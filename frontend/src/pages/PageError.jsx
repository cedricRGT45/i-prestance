import { useRouteError } from "react-router-dom"

export default function PageError() {
    const erreur = useRouteError();
    return(
        <>
        <h1>Oups ....</h1>
        <p>{ erreur.textMessage || erreur.message }</p>
        </>
    )
}